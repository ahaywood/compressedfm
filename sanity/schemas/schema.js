// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// block content
import fullWidthImage from "./blockContent/fullWidthImage";
import divider from "./blockContent/divider";
import preformatted from "./blockContent/preformatted";
import thumbnailWithContent from "./blockContent/thumbnailWithContent";
import podcatchers from "./blockContent/podcatchers";
import referenceSponsor from "./blockContent/referenceSponsor";

// document schemas
import category from './documents/category'
import episode from './documents/episode'
import faq from './documents/faq'
import guest from './documents/guest'
import legal from './documents/legal'
import newsletter from './documents/newsletter'
import siteSettings from './documents/siteSettings'
import sponsor from './documents/sponsor'

// object schemas
import blockContent from './objects/blockContent'
import contractInvoice from './objects/contractInvoice'
import episodeStats from './objects/episodeStats'
import episodeTranscript from './objects/episodeTranscript'
import linkList from './objects/linkList'
import meta from './objects/meta'
import newsletterPagination from './objects/newsletterPagination'
import socialMedia from './objects/socialMedia'
import socialMediaWithMetrics from './objects/socialMediaWithMetrics'
import sponsorshipOptions from './objects/sponsorshipOptions'
import stat from './objects/stat'
import timeJump from './objects/timeJump'
import transcript from './objects/transcript'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    // DOOCUMENTS
    // The following are document types which will appear
    // in the studio.
    episode,
    category,
    guest,
    legal,
    newsletter,
    siteSettings,
    sponsor,
    faq,

    // OBJECTS
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    contractInvoice,
    episodeStats,
    episodeTranscript,
    linkList,
    meta,
    newsletterPagination,
    stat,
    socialMedia,
    socialMediaWithMetrics,
    sponsorshipOptions,
    timeJump,
    transcript,

    // BLOCK CONTENT
    divider,
    fullWidthImage,
    preformatted,
    thumbnailWithContent,
    podcatchers,
    referenceSponsor
  ]),
})
