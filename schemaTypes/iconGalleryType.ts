import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'iconGallery',
  title: 'Icon Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'reference',
      to: [{type: 'icons'}],
    }),
  ],
  preview: {
    select: {
      name: 'icons.name',
    },
    prepare(selection) {
      const {name} = selection
      return {
        title: name,
      }
    },
  },
})
