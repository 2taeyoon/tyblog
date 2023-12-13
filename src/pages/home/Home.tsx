import React from "react";
import "../../styles/markdown.css";
import "../../styles/markdown_atom.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
			<Link to='blog'>블로그 페이지로 이동</Link>
    </div>
  );
}
