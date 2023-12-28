import React from "react";
import ListLink from "../list/ListLink";
import { CategoryLinksProps } from "../../types/props";


export default function CategoryLinks({ category, categoryClass, links }: CategoryLinksProps) {
  return (
    <div className="nav_wrap">
			<div className={categoryClass}>{category}</div>
      <ul>
        {links.map((link, index) => (
          <ListLink
            key={index}
            baseClass="item"
            linkTo={link.linkTo}
            title={link.title}
						svgWH="20px"
          />
        ))}
      </ul>
    </div>
  );
}
