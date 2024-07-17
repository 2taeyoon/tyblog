import React from "react";
import { Link } from "react-router-dom";
import { ListLinkProps } from "../../types/props";
import SvgList from "./SvgList";

export default function ListLink({ linkTo, title, baseClass, target, rel, ariaLabel, image, count, onClick, svgColor, svgWH, path }: ListLinkProps) {
	const linkStyle = image ? { background: `url(${image}) center center / cover` } : {};

  return (
		<Link
			to={linkTo}
			className={baseClass}
			target={target}
			rel={rel}
			aria-label={ariaLabel}
			style={linkStyle}
			onClick={onClick}
		>
			{svgColor && path && svgWH && (
				<>
					<SvgList
						svgColor={svgColor}
						path={path}
						svgWH={svgWH}
					/>
				</>
			)}
			{title && <div className="title">{title}</div>}
			{count && <div className="count">{count}</div>}
		</Link>
  );
}