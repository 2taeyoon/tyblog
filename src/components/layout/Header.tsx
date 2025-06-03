'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AsideContextProps } from "@/types/props";

export default function Header({trueActive}: AsideContextProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
			if (window.innerWidth > 640) {
				setScrollClass(window.scrollY >= 500 ? "scroll500" : "none");
			} else {
				setScrollClass('none'); // 640px 이하에서는 항상 'none'을 유지
			}
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBar = () => {
		if (window.innerWidth > 640) {
			if (scrollClass === "scroll500") {
				setScrollClass("none");
			} else {
				setScrollClass("scroll500");
			}
		}
  };

	const handleSideMenuClick = () => {
		if (window.innerWidth <= 1536) {
			trueActive();
		}
	};

  return (
    <header className="header">
			<div className={`header_wrap ${isScrolled ? 'scroll' : ''} ${scrollClass}`}>
				<nav className="nav">
					<div className="nav_header">
						<div className="nav_wrap">
							<Link href="/" className="category">Home</Link>
							<Link href="/ds" className="category">Design</Link>
							<Link href="/fs" className="category">Front</Link>
							<Link href="/bs" className="category">Back</Link>
							<Link href="/es" className="category">Etc</Link>
						</div>
					</div>
					<div className="nav_front">
						<Link href="/" className="category">심오한 프론트</Link>
					</div>
					<div className="side_menu_wrap" onClick={handleSideMenuClick}>
						<div className="side_menu"></div>
						<div className="tooltip">
							<div className="text">사이드바 메뉴</div>
						</div>
					</div>
				</nav>
			</div>
			<div className={`bar ${scrollClass}`} onClick={toggleBar}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
    </header>
  );
}
