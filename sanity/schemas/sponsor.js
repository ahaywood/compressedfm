export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'offer',
      title: 'Offer',
      type: 'text',
      description: 'Examples: "Promo Code: Compressed" or "20% off"'
    },
    {
      name: 'offerLink',
      title: 'Offer Link',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https'],
        allowRelative: false,
      })
    },
    {
      name: 'about',
      title: 'About the Sponsor',
      type: 'text',
    },
    {
      name: 'founding',
      title: 'Founding Sponsor?',
      type: 'boolean',
    },
    {
      name: 'sponsoredEpisodes',
      title: 'Sponsored Episodes',
      type: 'reference',
      to: [{ type: 'episode' }]
    }

  ]
};