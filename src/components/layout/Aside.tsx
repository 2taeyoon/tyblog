import React from "react";
import { Link } from "react-router-dom";
import ListLink from "../list/ListLink";
// import { navLinks } from "../../data/List";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside_wrap">
        <div className="profile_wrap">
          <div className="profile">
            <img
              src="./images/profile.webp"
              alt="profile"
            />
          </div>
          <div className="sitename">TYCODESIGN</div>
          <div className="nickname">2taeyoon</div>
        </div>
        <ul className="another_site">
					<ListLink
						linkTo="https://notefolio.net/2taeyoon"
						baseClass="notefolio"
						target="_blank"
						rel="noreferrer noopener"
						ariaLabel="NoteFolio 프로필 보기"
						image="./images/notefolio_logo.png"
					></ListLink>
					<ListLink
						linkTo="https://loud.kr/m/2taeyoon"
						baseClass="loud"
						target="_blank"
						rel="noreferrer noopener"
						ariaLabel="Loud 프로필 보기"
						image="./images/loud_logo.png"
					></ListLink>
					<ListLink
						linkTo="https://velog.io/@2taeyoon"
						baseClass="velog"
						target="_blank"
						rel="noreferrer noopener"
						ariaLabel="velog 프로필 보기"
						image="./images/velog_logo.png"
					></ListLink>
					<ListLink
						linkTo="https://github.com/2taeyoon"
						baseClass="github"
						target="_blank"
						rel="noreferrer noopener"
						ariaLabel="Github 프로필 보기"
						image="./images/github_logo.png"
					></ListLink>
        </ul>
        <nav className="nav">
          <Link
            to="/"
            className="all_post"
          >
            ALL POST
          </Link>
          <div className="nav_wrap">
            <div className="category">Portfolio</div>
            <ul>
              <ListLink
                baseClass="item"
                linkTo="/designportfolio"
                title="Design Portfolio"
              />
              <ListLink
                baseClass="item"
                linkTo="/codeportfolio"
                title="Code Portfolio"
              />
            </ul>
            <div className="category">Study</div>
            <ul>
              <ListLink
                baseClass="item"
                linkTo="/designstudy"
                title="Design Study"
              />
              <ListLink
                baseClass="item"
                linkTo="/codestudy"
                title="Code Study"
              />
              <ListLink
                baseClass="item"
                linkTo="/etcstudy"
                title="Etc Study"
              />
            </ul>
          </div>
          {/* <div>
						{navLinks.map((section) => (
							<div key={section.category}>
								<div>{section.category}</div>
								<ul>
									{section.items.map((item) => (
										<ListLink key={item.linkTo} linkTo={item.linkTo} title={item.title} />
									))}
								</ul>
							</div>
						))}
					</div> */}
        </nav>
      </div>
    </aside>
  );
}
