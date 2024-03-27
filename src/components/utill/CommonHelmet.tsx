import React from "react";
import { Helmet } from "react-helmet-async";
import { MetaProps } from "../../types/props";

const CommonHelmet = ({
  title,
  keywords,
  description,
  ogTitle,
  ogDescription
}: MetaProps) => (
  <Helmet>
    <title>{title}</title>
    <meta
      name="keywords"
      content={keywords}
    />
    <meta
      name="description"
      content={description}
    />
    <meta
      property="og:title"
      content={ogTitle}
    />
    <meta
      property="og:description"
      content={ogDescription}
    />
    <meta
      name="robots"
      content="index, nofollow"
    />
		<meta
			name="google-site-verification"
			content="SNFW33Xzy-Ax7158wmUiIFbnjjDZwz_2iRq3ROShcIA"
		/>
  </Helmet>
);

export default CommonHelmet;
