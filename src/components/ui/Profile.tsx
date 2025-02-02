'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
	const [imageSrc, setImageSrc] = useState("/images/profile.webp");

	const handleMouseLeave = () => setImageSrc("/images/profile.webp");
	const handleMouseEnter = () => setImageSrc("/images/profile2.webp");

  return (
		<div className="profile_wrap">
			<Link href="/">
				<div className="profile" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<Image src={imageSrc} alt="profile" sizes="150px" priority fill style={{ objectFit: "cover" }}/>
				</div>
			</Link>
		</div>
  );
}