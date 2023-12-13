import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
			<Link to='blog' style={{textAlign: "center"}}>블로그 페이지로 이동</Link>
			<Link to='codestudy' style={{textAlign: "center"}}>코드 스터디 페이지로 이동</Link>
    </div>
  );
}
