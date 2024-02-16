import {FaInfoCircle as icon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoItem',
  title: 'Info Item',
  type: 'object',
  fields: [
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
      name: 'startDate',
      title: 'Start date',
      type: 'datetime',
    }),
    defineField({
      name: 'finishDate',
      title: 'Finish date',
      type: 'datetime',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'jobDesc',
      title: 'Job Desc',
      type: 'blockContent',
    }),
  ],
  icon,
  preview: {
    select: {
      title: 'company',
      subtitle: 'jobTitle',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'No title item',
        subtitle: subtitle || 'No subtitle item',
      }
    },
  },
})
