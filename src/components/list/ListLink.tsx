import React from "react";
import Link from "next/link";
import { ListLinkProps } from "../../types/props";
import SvgList from "@/components/list/SvgList";

export default function ListLink({ linkTo, title, baseClass, target, rel, ariaLabel, image, count, onClick, svgColor, svgWH, path }: ListLinkProps) {
	const linkStyle = image ? { background: `url(${image}) center center / cover` } : {};

  return (
		<Link
			href={linkTo}
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