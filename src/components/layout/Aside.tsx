import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/asideList";
import CategoryLinks from "../ui/CategoryLinks";
import Profile from "../ui/Profile";
import AnotherSite from "../ui/AnotherSite";

export default function Aside() {
  return (
		<div className="aside_wrap">
			<div className="aside">
				<Profile/>
				<AnotherSite/>
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
							icons={true}
						/>
					))}
				</nav>
			</div>
		</div>
  );
}
