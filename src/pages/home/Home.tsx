import React from "react";
import { Link } from "react-router-dom";
import CommonHelmet from "../../components/utill/CommonHelmet";

export default function Home() {
  return (
    <>
      <CommonHelmet
        title="TYCODESIGN"
        description="TYCODESIGN의 개인 공간이자 포트폴리오 사이트입니다."
        ogTitle="TYCODESIGN"
        ogDescription="TYCODESIGN의 개인 공간이자 포트폴리오 사이트입니다."
        keywords="TYCODESIGN"
      />
      <div className="common_pd">Home page</div>
    </>
  );
}
