import { ReactNode } from 'react';

export type MetaProps = {
	title: string;
	keywords: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
}

export type IsHoverProps = {
	children: ReactNode;
  baseClass: string;
  hoverClass: string;
}