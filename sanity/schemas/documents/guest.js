export default {
  name: 'guest',
  title: 'Guests',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Guest Email',
      name: 'guestEmail',
      description: 'Used for Guest Login',
      type: 'string'
    },
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string'
    },
    {
      title: 'Avatar',
      name: 'avatar',
      type: 'image'
    },
    {
      title: 'Social Media',
      name: 'socialMedia',
      type: 'socialMedia',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      }
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};