export default {
  name: "meta",
  title: "Meta",
  type: "object",
  fields: [
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 3 },
    { name: "ogTitle", title: "og Title", type: "string" },
    { name: "ogDescription", title: "og Description", type: "text", rows: 3 },
    { name: "ogImage", title: "og Image", type: "image" },
    { name: "ogAudio", title: "og Audio", type: "string", description: "Link to audio file. If you include this, you must set the Twitter Card Type to Audio" },
    { name: "twitterCardType", title: "Twitter Card Type", type: "string", options: { list: [{ title: 'Summary Large Image', value: 'summary_large_image' }, { title: 'Audio Player', value: 'player' }, { title: 'Summary', value: 'summary' }] } },
    { name: "twitterTitle", title: "Twitter Title", type: "string" },
    { name: "twitterDescription", title: "Twitter Description", type: "text", rows: 3 },
    { name: "twitterImage", title: "Twitter Image", type: "image" },
    { name: "twitterImageAlt", title: "Twitter Image Alt", type: "string" }
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
