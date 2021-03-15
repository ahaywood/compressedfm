// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import blockContent from './blockContent'
import category from './category'
import episode from './episode'
import sponsor from './sponsor'
import guest from './guest'

// object scheams
import contractInvoice from './contractInvoice'
import episodeStats from './episodeStats'
import linkList from './linkList'
import socialMedia from './socialMedia'
import stat from './stat'
import timeJump from './timeJump'

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
    sponsor,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    contractInvoice,
    episodeStats,
    linkList,
    stat,
    socialMedia,
    timeJump
  ]),
})
