import React from "react"

const contentPreview = ({ value }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}>{/* icon */}</div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Thumbnail with Content</h2>
      </div>
      <div>
        {value?.thumbnail && <img src={value.thumbnail} style={{ maxWidth: "100%" }} />}
        <p>
          {value?.alt && value.alt}
        </p>
      </div>
    </div>
  );
}

export default {
  name: 'thumbnailWithContent',
  title: 'Thumbnail with Content',
  type: 'object',
  fields: [
    { name: 'thumbnail', title: 'Image', type: 'image' },
    { name: "alt", title: "Alt", type: 'string' },
    { name: 'content', title: 'Content', type: 'blockContent' },
  ],
}

