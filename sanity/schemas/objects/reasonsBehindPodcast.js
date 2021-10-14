export default {
  type: 'object',
  name: 'reasonsBehindPodcast',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'reason',
      title: 'Reason',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title
      }
    }
  }
}