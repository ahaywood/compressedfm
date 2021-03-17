import S from "@sanity/desk-tool/structure-builder";
import { BsFillGearFill as settingsIcon } from "react-icons/ri";

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(settingsIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title("Site Settings")
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
    ])
