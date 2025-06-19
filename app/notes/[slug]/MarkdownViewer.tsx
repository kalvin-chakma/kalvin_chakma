"use client";
import MDEditor from "@uiw/react-md-editor";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div>
      <MDEditor.Markdown
        source={content}
        style={{
          backgroundColor: "transparent",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          padding: "1em",
        }}
      />
    </div>
  );
}
