import { AiOutlineTags as icon } from 'react-icons/ai'
export default {
  name: 'category',
  title: 'Category',
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
        slugify: input => input.toString()
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
