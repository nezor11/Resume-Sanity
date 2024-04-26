import {FaStickyNote as icon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Slides',
  name: 'slide',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Slide Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'infoUrl',
      title: 'More info at',
      type: 'url',
      description:
        'URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc',
    }),
    defineField({
      name: 'workDate',
      title: 'Work date',
      type: 'datetime',
    }),
    defineField({
      name: 'slideTitle',
      title: 'Slide Title',
      type: 'string',
    }),
    defineField({
      name: 'slideImage',
      title: 'Slide Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slideSummary',
      title: 'Slide Summary',
      type: 'text',
    }),
    defineField({
      name: 'slideDesc',
      title: 'Slide Desc',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
