import { FaMoneyBillAlt as icon } from "react-icons/fa"
export default {
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'published',
      title: 'Published?',
      type: 'boolean'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'date'
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
      name: 'aboutText',
      title: 'About the Sponsor',
      type: 'blockContent',
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
      description: 'Comma delaminated list'
    },
    {
      name: 'contractsInvoices',
      title: 'Contracts and Invoices',
      type: 'array',
      of: [{ type: 'contractInvoice' }]
    }
  ]
};