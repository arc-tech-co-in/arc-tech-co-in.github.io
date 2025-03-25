import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Markdown({ fname }: { fname: string }) {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(`${fname}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
}

export { Markdown };
