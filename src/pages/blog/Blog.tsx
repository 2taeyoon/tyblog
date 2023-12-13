import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "../../styles/markdown.css";
import "../../styles/markdown_atom.css";

export default function Blog() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("./01.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <div style={{ maxWidth: "768px", width: "100%" }}>
				블로그페이지로 이동
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
