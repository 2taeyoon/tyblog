import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/asideList";
import CategoryLinks from "../ui/CategoryLinks";
import Profile from "../ui/Profile";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside_wrap">
				<Profile/>
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
						/>
					))}
        </nav>
      </div>
    </aside>
  );
}
