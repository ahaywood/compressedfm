import React from "react";
import { CgFormatText } from "react-icons/cg"

const preformattedTextPreview = ({ value }) => {
  const { text } = value;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}><CgFormatText /></div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Preformatted Text</h2>
      </div>
      <div style={{ margin: "0 15px" }}>
        <pre>{text}</pre>
      </div>
    </div>
  );
}

export default {
  name: "preformatted",
  title: "Preformatted",
  type: "object",
  icon: CgFormatText,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
    }
  ],
  preview: {
    select: {
      text: "text",
    },
    component: preformattedTextPreview,
  },
}