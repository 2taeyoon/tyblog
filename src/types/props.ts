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
  title: string;
  baseClass?: string;
}
// 링크 컴포넌트 END!
