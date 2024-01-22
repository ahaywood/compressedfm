import { VscSettingsGear as icon } from "react-icons/vsc"
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'currentlyRecording',
      title: 'Currently Recording?',
      type: 'boolean',
      description: 'If checked, the a banner will appear on the site saying that we\'re currently recording. Join us.',
    },
    {
      name: 'recordingOnYouTube',
      title: 'Recording on YouTube Link',
      type: 'url',
    },
    {
      name: 'recordingOnTwitch',
      title: 'Recording on Twitch Link',
      type: 'url',
    },
    {
      name: 'streamYardRecordingLink',
      title: 'Recording link for StreamYard',
      type: 'url',
    },
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
      title: 'Amy\'s Info',
      type: 'socialMediaWithMetrics',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'JamesSocialMedia',
      title: 'James\'s Info',
      type: 'socialMediaWithMetrics',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'BekahSocialMedia',
      title: 'Bekah\'s Info',
      type: 'socialMediaWithMetrics',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'BradSocialMedia',
      title: 'Brad\'s Info',
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
