import React from "react"

const contentPreview = ({ value }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}>{/* icon */}</div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", fontWeight: "normal" }}>Thumbnail with Content</h2>
      </div>
      <div>
        <p>
          {value?.heading && value.heading}
        </p>
      </div>
    </div>
  );
}

export default {
  name: 'podcatchers',
  title: 'Podcatchers',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
  ]
}