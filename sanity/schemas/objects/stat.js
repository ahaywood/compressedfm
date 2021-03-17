export default {
  type: 'object',
  name: 'stat',
  fields: [
    {
      name: 'dateReported',
      title: 'Date Reported',
      type: 'date',
    },
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
      const { dateReported, downloads, listens } = selection
      const date = dateReported.split('-');
      return {
        title: `${date[1]}-${date[2]}-${date[0]}`,
        subtitle: `Downloads: ${downloads} :: Listens: ${listens}`
      }
    }
  }
}