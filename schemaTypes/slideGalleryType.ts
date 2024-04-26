import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slideGallery',
  title: 'Slide Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'reference',
      to: [{type: 'slide'}],
    }),
  ],
  preview: {
    select: {
      name: 'slides.name',
    },
    prepare(selection) {
      const {name} = selection
      return {
        title: name,
      }
    },
  },
})
