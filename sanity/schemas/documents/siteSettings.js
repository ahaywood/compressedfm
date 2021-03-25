import { VscSettingsGear as icon } from "react-icons/vsc"
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'socialMediaLinks',
      title: 'Social Media',
      type: 'socialMedia',
    },
  ],
}
