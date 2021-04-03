import PropTypes from "prop-types";

const Meta = ({ meta }) => {
  const {
    seoTitle,
    seoDescription,
    ogTitle,
    ogDescription,
    ogImage,
    ogAudio,
    twitterTitle,
    twitterDescription,
    twitterCardType,
    twitterImage,
    twitterImageAlt,
    url,
  } = meta;
  return (
    <>
      {seoTitle && <title>{seoTitle}</title>}
      {seoDescription && <meta name="description" content={seoDescription} />}
      <meta property="og:site_name" content="Compressed.fm" />
      {url && <meta property="og:url" content={url} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      <meta property="og:type" content="website" />
      {ogAudio && (
        <>
          <meta property="og:audio" content={ogAudio} />
          <meta property="twitter:player" content={ogAudio} />
        </>
      )}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:site" content="Compressed.fm" />
      <meta name="twitter:creator" content="@compressedfm" />
      {twitterCardType && <meta name="twitter:card" content={twitterCardType} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}

      <meta property="og:url" content={url} />
    </>
  )
}

Meta.propTypes = {
  meta: PropTypes.shape({
    seoTitle: PropTypes.string,
    seoDescription: PropTypes.string,
    ogTitle: PropTypes.string,
    ogDescription: PropTypes.string,
    ogImage: PropTypes.string,
    ogAudio: PropTypes.string,
    twitterCardType: PropTypes.string,
    twitterTitle: PropTypes.string,
    twitterDescription: PropTypes.string,
    twitterImage: PropTypes.string,
    twitterImageAlt: PropTypes.string,
    url: PropTypes.string
  })
};


Meta.defaultProps = {
  meta: {
    seoTitle: "",
    seoDescription: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    ogAudio: "",
    twitterCardType: "",
    twitterTitle: "",
    twitterDescription: "",
    twitterImage: "",
    twitterImageAlt: "",
    url: ""
  }
};

export { Meta }
