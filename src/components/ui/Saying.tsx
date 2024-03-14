import React, { useEffect, useState } from "react";
import { SayingComponentProps, SayingProps } from "../../types/props";
import { sayings } from "../../data/sayingList";

export default function Saying({sessionName}: SayingComponentProps) {
	const sessionKey = `${sessionName}-saying`;

  const [currentSaying, setCurrentSaying] = useState<SayingProps>(() => {
    const savedData = sessionStorage.getItem(sessionKey); // 세션 스토리지에 데이터 불러오는 상수

    if (savedData) { // 세션스토리지에 데이터가 있으면 파싱하여 가져옴
      return JSON.parse(savedData);
    } else { // 세션스토리지에 데이터가 없으면 랜덤 명언 설정
      const randomIndex = Math.floor(Math.random() * sayings.length);
      return sayings[randomIndex];
    }
  });

  useEffect(() => { // currentSaying 상태(현재 멍언 데이터)를 세션 스토리지에 JSON 문자열로 저장
    sessionStorage.setItem(sessionKey, JSON.stringify(currentSaying));
  }, [currentSaying, sessionKey]); // currentSaying이 변경될 때마다 실행

  const handleRefreshClick = () => { // 명언 새로고침 시 랜덤 명언 설정
    const randomSaying = sayings[Math.floor(Math.random() * sayings.length)];
    setCurrentSaying(randomSaying);
  };

  return (
    <div className="saying_wrap">
      <div className="saying">"{currentSaying.saying}"</div>
      <div className="writer_wrap">
				<div className="writer"><span>-</span>{currentSaying.writer}</div>
				<div className="job">{currentSaying.job}</div>
			</div>
      <div className="border"></div>
      <div className="reset_btn" onClick={handleRefreshClick}>새로고침</div>
    </div>
  );
}