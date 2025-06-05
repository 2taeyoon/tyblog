'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface AsideProps {
	falseActive: () => void;
}

export default function Profile({falseActive}: AsideProps) {
	const [imageSrc, setImageSrc] = useState("/images/profile.webp");

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth > 640) {
      setImageSrc("/images/profile2.webp");
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth > 640) {
      setImageSrc("/images/profile.webp");
    }
  };

  return (
		<div className="profile_wrap">
			<Link href="/" onClick={falseActive}>
				<div className="profile" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<Image src={imageSrc} alt="profile" sizes="150px" fill style={{ objectFit: "cover" }}/>
				</div>
			</Link>
		</div>
  );
}