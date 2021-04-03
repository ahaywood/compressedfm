import React from "react";
import { FaRegImage } from "react-icons/fa";

const imagePreview = ({ value }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}><FaRegImage /></div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Image</h2>
      </div>
      {value?.actualImage && <img src={value.actualImage} style={{ maxWidth: "100%" }} />}
    </div>
  );
};

export default {
  name: "fullWidthImage",
  title: "Full Width Image",
  type: "object",
  icon: FaRegImage,
  fields: [
    { name: "actualImage", title: "Image", type: "image" },
    { name: "alt", title: "Alt", type: "string" },
    { name: "fullWidth", title: "Full Width?", type: "boolean" },
    { name: "retina", title: "Retina", type: "boolean" },
    { name: "alignment", title: "Alignment", type: "string", options: { list: ['left', 'center', 'right'], layout: "radio", direction: "horizontal" } },
  ],
  preview: {
    select: {
      actualImage: "actualImage.asset.url",
    },
    component: imagePreview,
  },
};
