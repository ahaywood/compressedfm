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
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'offer',
      title: 'Offer',
      type: 'string',
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
      name: 'associatedEmails',
      title: 'Associated Email(s)',
      type: 'string',
      description: 'Comma deliminated list'
    },
    {
      name: 'contractsInvoices',
      title: 'Contracts and Invoices',
      type: 'array',
      of: [{ type: 'contractInvoice' }]
    }
  ]
};