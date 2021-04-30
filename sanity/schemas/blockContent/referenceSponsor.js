import React from "react"

const contentPreview = ({ value }) => {
  const { sponsor } = value;
  console.log(sponsor);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #dee2e9", height: "45px", padding: "6px 6px 6px 12px" }}>
        <div style={{ fontSize: "32px", position: "relative", top: "5px", marginRight: "10px" }}>{/* icon */}</div>
        <h2 style={{ color: "#63758f", fontSize: "16px", lineHeight: "20px", fontWeight: "normal" }}>SPONSOR: {sponsor}</h2>
      </div>
    </div>
  );
}

export default {
  name: 'referenceSponsor',
  title: 'Sponsor',
  type: 'object',
  fields: [
    { name: 'sponsor', title: 'Sponsor', type: 'reference', to: [{ type: 'sponsor' }] },
  ],
  preview: {
    select: {
      sponsor: "sponsor.title",
    },
    component: contentPreview,
  },
}