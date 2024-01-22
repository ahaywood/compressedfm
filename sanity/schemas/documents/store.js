import { MdStoreMallDirectory as icon } from "react-icons/md";
export default {
  name: 'store',
  title: 'Store',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toString(),
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Hoodies', value: 'hoodies' },
          { title: 'TShirts', value: 'tshirts' },
        ], // <-- predefined values
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: "Men's Small",
      name: 'mensSmall',
      type: 'string',
    },
    {
      title: "Men's Medium",
      name: 'mensMedium',
      type: 'url',
    },
    {
      title: "Men's Large",
      name: 'mensLarge',
      type: 'string',
    },
    {
      title: "Men's XL",
      name: 'mensXL',
      type: 'url',
    },
    {
      title: "Men's XXL",
      name: 'mens2XL',
      type: 'url',
    },
    {
      title: "Women's Small",
      name: 'womensSmall',
      type: 'url',
    },
    {
      title: "Women's Medium",
      name: 'womensMedium',
      type: 'url',
    },
    {
      title: "Women's Large",
      name: 'womensLarge',
      type: 'url',
    },
    {
      title: "Women's X-Large",
      name: 'womensXL',
      type: 'url',
    },
  ]
}