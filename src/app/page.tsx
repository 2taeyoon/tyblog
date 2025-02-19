import React from 'react'
import Home from "@/app/Home";

export const metadata = {
  title: "2taeyoon",
  description: "2taeyoon의 개인 블로그입니다.",
  openGraph: {
    title: "2taeyoon",
    description: "2taeyoon의 개인 블로그입니다.",
    url: "https://www.2taeyoon.com/",
    images: [
      {
        url: "https://www.2taeyoon.com/favicon/main_meta_image.png",
        alt: "Profile Thumbnail",
      },
    ],
    type: "article",
  },
};

export default function page() {
	return (
		<div>
			<Home/>
		</div>
	)
}