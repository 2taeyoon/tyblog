import { NextResponse } from "next/server";
import DesignCard from "@/data/designStudyData.json";
import PublishingCard from "@/data/publishingStudyData.json";
import EtcCard from "@/data/etcStudyData.json";
import { CardProps } from "@/types/props";
import fs from "fs";
import path from "path";

// JSON 파일을 하나의 배열로 통합
const combinedData: CardProps[] = [
  ...DesignCard.cards,
  ...PublishingCard.cards,
  ...EtcCard.cards,
];

// Markdown 파일의 수정 날짜 가져오기
function getFileLastModified(mdFile: string): string {
  try {
    const absolutePath = path.join(process.cwd(), "public", mdFile); // 파일의 절대 경로 설정
    const stats = fs.statSync(absolutePath);
    return stats.mtime.toISOString().split("T")[0]; // 수정 날짜를 YYYY-MM-DD 형식으로 반환
  } catch (error) {
    console.error(`파일을 찾을 수 없음: ${mdFile}`, error);
    return new Date().toISOString().split("T")[0]; // 파일이 없을 경우 현재 날짜 반환
  }
}

// 동적 경로 생성
async function getDynamicPaths(): Promise<{ url: string; lastmod: string; }[]> {
	// 해당 함수에선, await가 없어서 굳이 async를 안 써도 작동하지만 다른 코드에서 await 호출되므로 사용
  return combinedData.map((item) => {
		// decodeURIComponent로 인코딩을 풀어주고 공백 대신 하이픈 추가
    const encodedTitle = encodeURIComponent(item.title.replace(/\s+/g, "-"));
		const lastModified = getFileLastModified(item.mdFile!); // Markdown 파일의 수정된 날짜 가져오기
		return {
      url: `/${item.type}/${encodedTitle}`, // url을 "/type값/제목 인코딩 풀어준 값" 으로 반환
      //lastmod: item.sortDate || new Date().toISOString().split("T")[0], // sortDate 값을 가져와서 lastmod로 사용
			lastmod: lastModified, // 수정된 날짜를 lastmod로 설정
    };
  });
};

// Sitemap XML 생성
function generateSitemap(paths: { url: string; lastmod: string }[]) {
  const domain = "https://www.2taeyoon.com";

	// path.map 부분의 마지막에 .join("")을 사용해야 배열 형태로 출력되는 요소들을 하나의 문자열로 합쳐줌
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${domain}</loc>
			<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
		<url>
      <loc>${domain}/ds</loc>
			<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
		<url>
      <loc>${domain}/ps</loc>
			<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
		<url>
      <loc>${domain}/es</loc>
			<lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    ${paths
      .map((path) => 
				`
					<url>
						<loc>${domain}${path.url}</loc>
						<lastmod>${path.lastmod}</lastmod> 
						<changefreq>weekly</changefreq>
						<priority>0.8</priority>
					</url>
				`
			).join("")}
  </urlset>
  `;
};

// ✅ NextJS 서버 API 라우트 GET()
export async function GET() {
  const paths = await getDynamicPaths(); //  `/${item.type}/${encodedTitle}` 값을 사용
  const sitemap = generateSitemap(paths); // 변환한 값을 generateSitemap의 인수로 넣음음

	// NextJS API HTTP 응답
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
