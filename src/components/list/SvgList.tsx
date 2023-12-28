import React from 'react'
import { SvgProps } from "../../types/props"

export default function SvgList({ svgColor, path, svgWH }: SvgProps) {
	return (
		<svg fill={svgColor} viewBox="0 0 24 24" width={svgWH} height={svgWH} xmlns="http://www.w3.org/2000/svg">
			<path d={path}></path>
		</svg>
	)
}
