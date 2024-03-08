import { ReactNode } from "react";

// 메타 태그 START!
export interface MetaProps {
  title: string | undefined;
  keywords: string | undefined;
  description: string | undefined;
  ogTitle: string | undefined;
  ogDescription: string | undefined;
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
  category?: string;
	categoryClass?: string;
  links: {
    linkInfo: {
      linkTo: string;
      title?: string;
    };
    svgInfo?: {
      svgWH?: string;
      svgColor?: string;
      path?: string;
    };
  }[];
	icons?: boolean;
	categoryCapital?: boolean;
}
// 카테고리 링크 컴포넌트 END!

// SVG 컴포넌트 START!
export interface SvgProps {
	svgWH?: string;
	svgColor?: string;
	path?: string;
	path2?: string;
}
// 카테고리 링크 컴포넌트 END!

// 카드 컴포넌트 START!
export interface CardProps {
	mdFile?: string;
  badge?: string;
  image?: string;
  profileImage?: string;
  nickname?: string;
  date?: string;
  title?: string;
  subTitle?: string;
  skills?: { name: string; color: string; icon: string }[];
  hashs?: { name: string }[];
}

export interface CardUndefined {
  cards: CardProps | undefined;
}

export interface Mapping {
  cards: CardProps[];
}
// 카드 컴포넌트 END!

// 이전, 다음 페이지 URL START!
export interface PageUrlsProps {
	hyphenRemoval: string;
	cards: CardProps[];
	basePath: string;
}
// 이전, 다음 페이지 URL END!

// 슬라이드 컴포넌트 START!
export interface TypingTextProps {
	typingText: string;
	typingText2: string;
}
// 슬라이드 컴포넌트 END!

// 해시태그 필터링 START!
export interface HashsProps {
  selectedHash: string | null;
  setSelectedHash: React.Dispatch<React.SetStateAction<string | null>>;
  uniqueHashs: string[];
  sessionName: string;
}
// 해시태그 필터링 END!

// 탭버튼 컴포넌트 START!
export interface TabsProps {
  cards: CardProps[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}
// 탭버튼 컴포넌트 END!