import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
	const [imageSrc, setImageSrc] = useState("/images/profile.webp");

	const handleMouseLeave = () => setImageSrc("/images/profile.webp");
	const handleMouseEnter = () => setImageSrc("/images/profile2.webp");

  return (
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
  );
}
