import S from '@sanity/desk-tool/structure-builder'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
import { MdAccessibility } from 'react-icons/lib/md'

// Web preview
import IframePreview from '../components/previews/iframe/IframePreview'
import SeoPreview from '../components/previews/seo/SeoPreviews'

// Web preview configuration
const remoteURL = 'https://compressedfm-icqyw7h8z-ahhacreative.vercel.app'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export default S.listItem()
  .title('Projects')
  .schemaType('sampleProject')
  .child(
    S.documentTypeList('sampleProject')
      .title('Projects')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('sampleProject')
          .views([
            S.view.form().icon(EditIcon),
            S.view.component(IframePreview)
              .options({ previewURL })
              .title('Web Preview')
              .icon(EyeIcon),
            S.view
              .component(SeoPreview)
              .options({ previewURL })
              .icon(EyeIcon)
              .title('SEO Preview'),
          ])
      )
  )
