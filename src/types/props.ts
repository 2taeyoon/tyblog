import { ReactNode } from "react";

// 메타 태그 START!
export interface MetaProps {
  title: string;
  keywords: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}
// 메타 태그 END!

// 호버시 클래스 추가 START!
export interface IsHoverProps {
  children: ReactNode;
  baseClass: string;
  hoverClass: string;
}
// 호버시 클래스 추가 END!

// 링크 컴포넌트 START!
export interface ListLinkProps {
  linkTo: string;
  title?: string;
  baseClass?: string;
	target?: string;
	rel?: string;
	ariaLabel?: string;
	image?: string;
	svgWH?: string;
	svgColor?: string;
	path?: string;
}
// 링크 컴포넌트 END!

// 카테고리 링크 컴포넌트 START!
export interface CategoryLinksProps {
  category: string;
	categoryClass: string;
  links: {
    linkTo: string;
    title?: string;
		svgWH?: string;
		svgColor?: string;
		path?: string;
  }[];
}
// 카테고리 링크 컴포넌트 END!

// SVG 컴포넌트 START!
export interface SvgProps {
	svgColor?: string;
	path?: string;
	svgWH?: string;
}
// 카테고리 링크 컴포넌트 END!

// 카드 컴포넌트 START!
export interface CardProps {
	id: string;
  image: string;
	badge?: string;
	skills?: Array<{name: string; color: string; icon: string;}>;
	hashs?: Array<{name: string;}>;
  profileImage?: string;
  nickname?: string;
  date?: string;
  title?: string;
  subTitle?: string;
}

export interface Mapping {
  cards: CardProps[];
}
// 카드 컴포넌트 END!