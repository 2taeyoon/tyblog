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
			//setScrollClass(window.scrollY >= 1000 ? "scroll1000" : "none");
			if (window.innerWidth > 640) {
				setScrollClass(window.scrollY >= 1000 ? "scroll1000" : "none");
			} else {
				setScrollClass('none'); // 640px 이하에서는 항상 'none'을 유지
			}
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBar = () => {
		if (window.innerWidth > 640) {
			if (scrollClass === "scroll1000") {
				setScrollClass("none");
			} else {
				setScrollClass("scroll1000");
			}
		}
  };

	const DesignPortfolioCount = DesignPortfolioData.cards.length;
	const PublishingPortfolioCount = PublishingPortfolioData.cards.length;
	const DesignStudyCount = DesignStudyData.cards.length;
	const PublishingStudyCount = PublishingStudyData.cards.length;
	const EtcStudyCount = EtcStudyData.cards.length;

  return (
    <header className="header">
			<div className={`header_wrap ${isScrolled ? 'scroll' : ''} ${scrollClass}`}>
				<nav className="nav">
					<div className="nav_header">
						<Link
							to="/"
							className="resume"
						>
							RESUME
						</Link>
					<div className="nav_wrap">
						<div className="category">PORTFOLIO</div>
						<ul>
							<ListLink linkTo="/dp" title="Design" baseClass="item" count={DesignPortfolioCount}/>
							<ListLink linkTo="/pp" title="Publishing" baseClass="item" count={PublishingPortfolioCount}/>
						</ul>
					</div>
					<div className="nav_wrap">
						<div className="category">STUDY</div>
						<ul>
							<ListLink linkTo="/ds" title="Design" baseClass="item" count={DesignStudyCount}/>
							<ListLink linkTo="/ps" title="Publishing" baseClass="item" count={PublishingStudyCount}/>
							<ListLink linkTo="/es" title="Etc" baseClass="item" count={EtcStudyCount}/>
						</ul>
					</div>
					</div>
					<div className="nav_designer">
						<Link to="/" className="category">심오한 디자이너</Link>
					</div>
					<div className="side_menu_wrap" onClick={trueActive}>
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
