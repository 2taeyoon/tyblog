import React from "react";
import ListLink from "../list/ListLink";
import { asideLinks } from "../../data/asideList";

export default function Profile() {
  return (
    <>
      <div className="profile_wrap">
        <div className="profile">
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
    </>
  );
}
