import { notFound } from "next/navigation";
import DesignCard from "@/data/designStudyData.json";
import DesignStudyContent from "@/app/ds/[title]/DesignStudyContent"; // 클라이언트 컴포넌트 가져오기


// 서버 컴포넌트: 동적 메타데이터 설정
export async function generateMetadata({ params }: { params: Promise<{ title: string }> }) { // 동적 경로 매개변수인 params로 URL 가져옴
	const title = (await params).title

  const decodedTitle = decodeURIComponent(title) // decodeURIComponent로 인코딩을 풀어줌
	const replaceTitle = decodedTitle.replace(/-/g, " "); // 공백 대신 하이픈(-) 추가
  const DesignCardFind = DesignCard.cards.find((item) => item.title === replaceTitle); // JSON 데이터와 title을 비교하여 알맞는 데이터 찾음

	if (!DesignCardFind) return notFound(); // 데이터가 없으면 404

  return {
    title: DesignCardFind.title,
    description: DesignCardFind.subTitle,
    openGraph: {
      title: DesignCardFind.title,
      description: DesignCardFind.subTitle,
      url: `https://www.2taeyoon.com/ds/${decodedTitle}`,
			images: [
				{
					url: `https://www.2taeyoon.com${DesignCardFind.image}`,
					alt: "Thumbnail",
				},
			],
      type: "article",
    },
  };
}


// 클라이언트 컴포넌트에도 사용할 수 있도록 Props 전달
export default async function Page({ params }: { params: Promise<{ title: string }> }) {
  return <DesignStudyContent title={(await params).title} />;
}