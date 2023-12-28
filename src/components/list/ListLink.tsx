import React from "react";
import { Link } from "react-router-dom";
import { ListLinkProps } from "../../types/props";

export default function ListLink({ linkTo, title, baseClass, target, rel, ariaLabel, image }: ListLinkProps) {
  return (
    <li>
      <Link
        to={linkTo}
        className={baseClass}
				target={target}
				rel={rel}
				aria-label={ariaLabel}
				style={{ background: `url(${image}) center center / cover` }}
      >
        {title}
      </Link>
    </li>
  );
}
