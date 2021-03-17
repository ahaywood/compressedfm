export default {
  type: 'object',
  name: 'linkList',
  fields: [
    {
      title: 'Label',
      name: 'linkLabel',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'linkUrl',
      description: 'Don\'t forget the http://',
      type: 'string'
    }
  ]
}