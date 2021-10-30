export default {
  type: 'object',
  name: 'stat',
  fields: [
    {
      name: 'downloads',
      title: 'Downloads',
      type: 'number',
      validation: Rule => Rule.integer()
    },
    {
      name: 'listens',
      title: 'Listens',
      type: 'number',
      validation: Rule => Rule.integer()
    }
  ],
  preview: {
    select: {
      dateReported: 'dateReported',
      downloads: 'downloads',
      listens: 'listens',
    },
    prepare(selection) {
      const { downloads, listens } = selection
      return {
        title: `Downloads: ${downloads} :: Listens: ${listens}`
      }
    }
  }
}