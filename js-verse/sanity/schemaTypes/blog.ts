export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Blog Slug',
      // options are used to dynamically generate slug on the fly
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description for the blog',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      // of prop tells sanity the type of array, in this case this is block
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
