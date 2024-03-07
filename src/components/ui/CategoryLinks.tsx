import React from "react";
import ListLink from "../list/ListLink";
import { CategoryLinksProps } from "../../types/props";

export default function CategoryLinks({ category, categoryClass, links, icons, categoryCapital }: CategoryLinksProps) {
	const categoryText = categoryCapital ? category?.toUpperCase() : category;
  return (
    <div className="nav_wrap">
			<div className={categoryClass}>{categoryText}</div>
      <ul>
        {links.map((link, index) => (
          <ListLink
            key={index}
            baseClass="item"
            linkTo={link.linkInfo.linkTo}
            title={link.linkInfo.title}
						svgWH={icons ? link.svgInfo?.svgWH : undefined }
						svgColor={icons ? link.svgInfo?.svgColor : undefined }
						path={icons ? link.svgInfo?.path : undefined }
          />
        ))}
      </ul>
    </div>
  );
}