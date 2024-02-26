import React, { useState } from "react";
import ListLink from "../list/ListLink";
import { asideLinks } from "../../data/asideList";
import { Link } from "react-router-dom";

export default function Profile() {
	const [imageSrc, setImageSrc] = useState("/images/profile.webp");

	const handleMouseLeave = () => setImageSrc("/images/profile.webp");
	const handleMouseEnter = () => setImageSrc("/images/profile2.webp");

  return (
    <>
      <div className="profile_wrap">
        <Link to="/">
					<div className="profile" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<img
							src={imageSrc}
							alt="profile"
						/>
					</div>
				</Link>
        <div className="sitename">심오한 디자이너</div>
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
