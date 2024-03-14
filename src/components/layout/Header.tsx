import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/asideList";
import CategoryLinks from "../ui/CategoryLinks";

export default function Header() {
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
					<div className="side_menu_wrap">
						<div className="side_menu"></div>
					</div>
				</nav>
			</div>
    </header>
  );
}
