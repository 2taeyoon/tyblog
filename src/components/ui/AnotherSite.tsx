import React from 'react'
import ListLink from "../list/ListLink";
import { asideLinks } from "../../data/asideList";

export default function AnotherSite() {
	return (
		<ul className="another_site">
			{asideLinks.map((link, index) => (
				<li key={index}>
					<ListLink
						key={index}
						linkTo={link.linkTo}
						baseClass={link.baseClass}
						target="_blank"
						rel="noreferrer noopener"
						ariaLabel={link.ariaLabel}
						image={link.image}
					/>
				</li>
			))}
	</ul>
	)
}
