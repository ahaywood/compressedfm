import { FaRegNewspaper as icon } from "react-icons/fa";
import newsletterPagination from "../objects/newsletterPagination";

export default {
  name: 'newsletter',
  title: 'Newsletters',
  type: 'document',
  icon,
  orderings: [
    {
      title: 'Date Sent, Old',
      name: 'dateSentOldest',
      by: [
        { field: 'dateSent', direction: 'desc' }
      ]
    },
    {
      title: 'Date Sent, New',
      name: 'dateSentNew',
      by: [
        { field: 'dateSent', direction: 'asc' }
      ]
    }
  ],
  fields: [
    {
      name: 'dateSent',
      title: 'Date Sent',
      type: 'date',
      options: {
        dateFormat: "YYYY-MM-DD"
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'dateSent',
        maxLength: 96,
      },
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string'
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean'
    },
    {
      name: 'pagination',
      title: 'Pagination',
      type: 'newsletterPagination',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  preview: {
    select: {
      title: 'subject',
      dateSent: 'dateSent',
      published: 'published',
    },
    prepare(selection) {
      const { dateSent, published, title } = selection
      return Object.assign({}, selection, {
        title: `${title} ${published ? "✅" : '❌'}`,
        subtitle: `Sent: ${dateSent}`,
      })
    },
  },
}