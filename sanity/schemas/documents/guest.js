import { BsPersonBoundingBox as icon } from "react-icons/bs"
export default {
  name: 'guest',
  title: 'Guests',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
    },
    {
      title: 'Last Name',
      name: 'lastName',
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
      title: 'Large Body',
      name: 'largeBody',
      type: 'text',
      description: 'Bio Callout at the top',
      rows: 3,
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Company',
      name: 'company',
      type: 'string'
    },
    {
      title: 'Company Logo',
      name: 'companyLogo',
      type: 'image'
    },
    {
      title: 'Special Projects',
      name: 'specialProjects',
      type: 'string'
    },
  ]
};