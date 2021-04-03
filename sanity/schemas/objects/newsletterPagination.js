export default {
  type: 'object',
  name: 'newsletterPagination',
  fields: [
    {
      title: 'Previous',
      name: 'previous',
      type: 'reference',
      to: [{ type: 'newsletter' }]
    },
    {
      title: 'Next',
      name: 'next',
      type: 'reference',
      to: [{ type: 'newsletter' }]
    },
  ]
}