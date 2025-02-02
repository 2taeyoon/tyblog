import React from 'react'
import PublishingStudy from "@/app/ps/PublishingStudy";

export const metadata = {
	title: "Publishing Study",
	description: "퍼블리싱과 관련된 내용을 공부하고 기록한 페이지입니다.",
	openGraph: {
		title: "Publishing Study",
		description: "퍼블리싱과 관련된 내용을 공부하고 기록한 페이지입니다.",
		url: "https://www.2taeyoon.com/ps",
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
	return <PublishingStudy/>
}