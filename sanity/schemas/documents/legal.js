import { RiScales3Fill as icon } from "react-icons/ri"
export default {
  name: 'legal',
  title: 'Legal',
  type: 'document',
  icon,
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
      name: 'published',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta'
    },
  ],
}
