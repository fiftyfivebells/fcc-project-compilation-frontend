import { Stack } from "@mui/material";
import React, { useState } from "react";
import TextScreen from "./TextScreen";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function MarkdownPreviewer(): JSX.Element {

  const [markdown, setMarkdown] = useState("# Markdown Previewer");

  marked.setOptions({
    breaks: true
  });
  
  const html = marked.parse(markdown);
  const purifiedHtml = DOMPurify.sanitize(html);
  
  function handleTextAreaChange(e: React.ChangeEvent): void {
    const element = e.target as HTMLInputElement;
    const val = element.value;

    setMarkdown(val);
  }

  const editorProps = {
    title: "Editor",
    text: markdown,
    handleChange: handleTextAreaChange,
    html: false
  }

  const previewProps = {
    title: "Preview",
    text: purifiedHtml,
    handleChange: handleTextAreaChange,
    html: true
  }

  return (
    <Stack
      sx={{ height: "90vh" }}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      alignContent="center"
    >
      <TextScreen props={editorProps} />
      <TextScreen props={previewProps} />
    </Stack>
  )
}