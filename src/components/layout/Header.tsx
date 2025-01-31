import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AsideContextProps } from "../../types/props";

import DesignPortfolioData from "../../data/designPortfolioData.json";
import PublishingPortfolioData from "../../data/publishingPortfolioData.json";
import DesignStudyData from "../../data/designStudyData.json";
import PublishingStudyData from "../../data/publishingStudyData.json";
import EtcStudyData from "../../data/etcStudyData.json";
import ListLink from "../list/ListLink";

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
							<Link to="/" className="category">HOME</Link>
							<Link to="/ds" className="category">DESIGN</Link>
							<Link to="/ps" className="category">PUBLISHING</Link>
							<Link to="/es" className="category">ETC</Link>
						</div>
					</div>
					<div className="nav_publisher">
						<Link to="/" className="category">심오한 퍼블리셔</Link>
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
