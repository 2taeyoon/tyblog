import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/asideList";
import CategoryLinks from "../ui/CategoryLinks";
import { HeaderProps } from "../../types/props";

export default function Header({showAside}: HeaderProps) {
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
			<div className={`header_wrap ${showAside ? 'aside_on' : ''} ${isScrolled ? 'scroll' : ''}`}>
				<nav className="nav">
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
				</nav>
			</div>
    </header>
  );
}
