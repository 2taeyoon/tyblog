import React from "react";
import { Link } from "react-router-dom";
import ListLink from "../list/ListLink";
import { asideLinks, categories } from "../../data/asideList";
import CategoryLinks from "../ui/CategoryLinks";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside_wrap">
        <div className="profile_wrap">
          <div className="profile">{/*"image": "./images/code_study/02/main_image.webp",*/}
            <img
              src="/images/profile.webp"
              alt="profile"
            />
          </div>
          <div className="sitename">TYCODESIGN</div>
          <div className="nickname">2taeyoon</div>
        </div>
        <ul className="another_site">
					{asideLinks.map((link, index) => (
						<ListLink
							key={index}
							linkTo={link.linkTo}
							baseClass={link.baseClass}
							target="_blank"
							rel="noreferrer noopener"
							ariaLabel={link.ariaLabel}
							image={link.image}
						/>
					))}
        </ul>
        <nav className="nav">
          <Link
            to="/"
            className="all_post"
          >
            ALL POST
          </Link>
					{categories.map((category, index) => (
						<CategoryLinks
							key={index}
							category={category.category}
							categoryClass="category"
							links={category.links}
						/>
					))}
        </nav>
      </div>
    </aside>
  );
}
