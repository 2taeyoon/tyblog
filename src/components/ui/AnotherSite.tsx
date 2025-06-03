import React from 'react'
import ListLink from "@/components/list/ListLink";

export default function AnotherSite() {
	return (
		<ul className="another_site">
			<li>
				<ListLink
					linkTo="https://notefolio.net/2taeyoon"
					baseClass="notefolio"
					target="_blank"
					rel="noreferrer noopener"
					ariaLabel="notefolio 프로필 바로가기"
					image="/images/notefolio_logo.png"
				/>
			</li>
			<li>
				<ListLink
					linkTo="https://loud.kr/m/2taeyoon"
					baseClass="loud"
					target="_blank"
					rel="noreferrer noopener"
					ariaLabel="loud 프로필 바로가기"
					image="/images/loud_logo.png"
				/>
			</li>
			<li>
				<ListLink
					linkTo="https://github.com/2taeyoon"
					baseClass="github"
					target="_blank"
					rel="noreferrer noopener"
					ariaLabel="github 프로필 바로가기"
					image="/images/github_logo.png"
				/>
			</li>
	</ul>
	)
}
