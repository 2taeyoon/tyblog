import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/asideList";
import CategoryLinks from "../ui/CategoryLinks";
import { AsideContextProps } from "../../types/props";

export default function Header({trueActive}: AsideContextProps) {
	const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
			<div className={`header_wrap ${isScrolled ? 'scroll' : ''}`}>
				<nav className="nav">
					<div className="nav_header">
						<Link
							to="/"
							className="resume"
						>
							RESUME
						</Link>
						{categories.map((category, index) => (
							<CategoryLinks
								key={index}
								category={category.category}
								categoryClass="category"
								links={category.links}
								icons={false}
								categoryCapital={true}
							/>
						))}
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
    </header>
  );
}
