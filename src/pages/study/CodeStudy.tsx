import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import CardList from "../../data/codeStudyData.json";
import Card from "../../components/list/Card";

export default function CodeStudy() {
  return (
    <>
      <CommonHelmet
        title="코드 스터디"
        description="TYCODESIGN의 코드 스터디 페이지입니다."
        ogTitle="코드 스터디"
        ogDescription="TYCODESIGN의 코드 스터디 페이지입니다."
        keywords="TYCODESIGN, 코드 스터디"
      />
      <div className="common_pd">
        <Card cards={CardList.cards} />
      </div>
    </>
  );
}
