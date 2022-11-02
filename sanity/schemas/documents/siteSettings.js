import { VscSettingsGear as icon } from "react-icons/vsc"
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'reasonsBehind',
      title: 'Reasons Behind Podcast',
      type: 'array',
      of: [{ type: 'reasonsBehindPodcast' }]
    },
    {
      name: 'socialMediaLinks',
      title: 'Social Media',
      type: 'socialMedia',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'AmySocialMedia',
      title: 'Amy\'s Social Media',
      type: 'socialMediaWithMetrics',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'JamesSocialMedia',
      title: 'James\'s Social Media',
      type: 'socialMediaWithMetrics',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'SponsorshipOptions',
      title: 'Sponsorship Options',
      type: 'sponsorshipOptions',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
}
