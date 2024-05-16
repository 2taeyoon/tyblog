import React from "react";
import { Helmet } from "react-helmet-async";
import { MetaProps } from "../../types/props";

/*
<meta name="robots" content="index,nofollow"> // 색인 대상O, 페이지 내 링크 수집X
<meta name="robots" content="noindex,follow"> // 색인 대상X, 페이지 내 링크 수집O
<meta name="robots" content="noindex,nofollow"> // 색인 대상X, 페이지 내 링크 수집X
<meta name="googlebot" content="noindex, nofollow"> // 구글에서만 사이트 노출X
*/

const CommonHelmet = ({ title, keywords, description, ogTitle, ogDescription,	ogImage, ogURL }: MetaProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="keywords" content={keywords}/>
    <meta name="description" content={description}/>
    <meta property="og:title" content={ogTitle}/>
    <meta property="og:description" content={ogDescription}/>
		<meta property="og:url" content={ogURL}/>
		<meta property="og:image" content={ogImage}/>
		<meta property="og:image:width" content="1200"/>
		<meta property="og:image:height" content="630"/>
		<meta property="og:type" content="website"/>
		<meta property="og:site_name" content="이태윤의 블로그형 포트폴리오 사이트입니다."/>
  </Helmet>
);

export default CommonHelmet;
