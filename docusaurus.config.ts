import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import whiteLabelPlugin from './plugins/white-label';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FieldLog',
  tagline: 'Built for the people who count things in the rain.',
  titleDelimiter: '·',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.thefieldco.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // Custom domain, so the site is served from the root path.
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'The-Field-Company', // Usually your GitHub org/user name.
  projectName: 'field-log-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/The-Field-Company/field-log-docs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [whiteLabelPlugin],

  themeConfig: {
    image: 'img/social-card.jpg',
    metadata: [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'FieldLog' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'FieldLog documentation' },
      { name: 'theme-color', content: '#06311b' },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'FieldLog',
        src: 'img/logo-wide.png',
        srcDark: 'img/logo-wide-light.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://fieldlog.thefieldco.com/',
          label: 'Go to Application',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'FieldLog',
          items: [
            {
              label: 'Field Log Application',
              href: 'https://fieldlog.thefieldco.com/',
            }, {
              label: 'Request Access',
              href: 'https://fieldlog.thefieldco.com/request-access',
            },
            {
              label: 'The Field Company',
              href: 'https://thefieldco.com',
            },
            {
              label: 'Github',
              href: 'https://github.com/The-Field-Company'
            }
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
