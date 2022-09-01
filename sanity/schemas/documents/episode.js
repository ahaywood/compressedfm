import React from 'react';
import { FaMicrophoneAlt as icon } from 'react-icons/fa';

export default {
  name: 'episode',
  title: 'Episodes',
  type: 'document',
  icon,
  orderings: [
    {
      title: 'Ep No, New',
      name: 'episodeNumber',
      by: [{ field: 'episodeNumber', direction: 'desc' }],
    },
    {
      title: 'Ep No, Old',
      name: 'episodeNumber',
      by: [{ field: 'episodeNumber', direction: 'asc' }],
    },
  ],
  fields: [
    {
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
      validation: (Rule) => Rule.greaterThan(0).integer(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'episodeNumber',
        maxLength: 96,
        slugify: (input) => input.toString(),
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta',
    },
    {
      name: 'guest',
      title: 'Guest',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'guest' } }],
    },
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'sponsor' } }],
    },
    {
      name: 'sponsorWithTimecode',
      title: 'Sponsor with Timecode',
      type: 'array',
      of: [{ type: 'sponsorTimecode' }],
    },
    {
      name: 'episodeCover',
      title: 'Episode Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialCoverUrl',
      title: 'Social Cover URL',
      description: 'URL for the social cover image stored in Cloudinary',
      type: 'string',
    },
    {
      name: 'briefDescription',
      title: 'Brief Description',
      type: 'text',
    },
    {
      name: 'audioPath',
      title: 'Audio Path',
      type: 'string',
      description: 'URL for Audio File in Simplecast',
    },
    {
      name: 'simplecastId',
      title: 'Simplecast ID',
      type: 'string',
      description: 'Unique ID used for grabbing stats',
    },
    {
      name: 'waveformUrl',
      title: 'Waveform URL',
      type: 'string',
      description: 'URL of the waveform in Cloudinary',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'listLink',
      title: 'Link List',
      type: 'array',
      of: [{ type: 'linkList' }],
    },
    {
      name: 'timeJump',
      title: 'Time Jumps',
      type: 'array',
      of: [{ type: 'timeJump' }],
    },
    {
      name: 'relatedEpisodes',
      title: 'Related Episodes',
      type: 'array',
      description: 'Select 3 Episodes',
      of: [{ type: 'reference', to: { type: 'episode' } }],
      validation: (Rule) =>
        Rule.max(3)
          .unique()
          .custom((episode, context) => {
            const id = context.document._id; // current episode id
            if (episode && episode.find((item) => id.includes(item._ref))) {
              return "Can't select the current episode as a related episode.";
            }
            return true;
          }),
    },
    {
      name: 'gettingStarted',
      title: 'Getting Started Episode',
      description: 'Feature as one of the Getting Started Episodes',
      type: 'boolean',
    },
    {
      name: 'popularEpisode',
      title: 'Popular Episode',
      description: 'Feature as one of the Most Popular Episodes',
      type: 'boolean',
    },
    {
      name: 'episodeStats',
      title: 'Episode Stats',
      type: 'episodeStats',
    },
    {
      name: 'episodeTranscript',
      title: 'Episode Transcript',
      type: 'episodeTranscript',
    },
    {
      name: 'transcriptDownload',
      title: 'Download Transcript',
      description: 'PDF',
      type: 'file',
    },
    {
      name: 'leadMagnet',
      title: 'Lead Magnet',
      description: 'PDF',
      type: 'file',
    },
    {
      name: 'automationFailed',
      title: 'Automation Failed',
      description:
        'Set to true if an automation failed to prevent infinite updates. You can manually set this back to false to have automation start again',
      type: 'boolean',
      default: false,
    },
  ],

  preview: {
    select: {
      title: 'title',
      episodeNumber: 'episodeNumber',
      media: 'episodeCover',
      published: 'published',
    },
    prepare(selection) {
      const { episodeNumber, published, title } = selection;
      return Object.assign({}, selection, {
        title: `${title} ${published ? '✅' : '❌'}`,
        subtitle: `Episode ${episodeNumber}`,
      });
    },
  },
};
