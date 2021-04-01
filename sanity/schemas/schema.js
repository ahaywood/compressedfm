// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

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
import linkList from './objects/linkList'
import meta from './objects/meta'
import socialMedia from './objects/socialMedia'
import stat from './objects/stat'
import timeJump from './objects/timeJump'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
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
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    contractInvoice,
    episodeStats,
    linkList,
    meta,
    stat,
    socialMedia,
    timeJump
  ]),
})
