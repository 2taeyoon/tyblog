import React from 'react'
import EtcStudy from "@/app/es/EtcStudy";

export const metadata = {
  title: "Etc Study",
  description: "디자인과 퍼블리싱 외의 내용을 공부하고 기록한 페이지입니다.",
  openGraph: {
    title: "Etc Study",
    description: "디자인과 퍼블리싱 외의 내용을 공부하고 기록한 페이지입니다.",
		url: "https://www.2taeyoon.com/es",
    images: [
      {
        url: "https://www.2taeyoon.com/favicon/favicon-512x512.png",
				alt: "Thumbnail",
      },
    ],
		type: "article",
  },
};

export default function page() {
	return <EtcStudy/>
}