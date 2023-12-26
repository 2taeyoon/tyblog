import React from "react";
import { Link } from "react-router-dom";
import { ListLinkProps } from "../../types/props";

export default function ListLink({ linkTo, title, baseClass }: ListLinkProps) {
  return (
    <li>
      <Link
        to={linkTo}
        className={baseClass}
      >
        {title}
      </Link>
    </li>
  );
}
