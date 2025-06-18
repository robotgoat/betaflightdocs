import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Betaflight',
  tagline: 'Pushing the Limits of UAV Performance',
  favicon: 'img/betaflight/icon_light.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://robotgoat.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/betaflightdocs/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'betaflight', // Usually your GitHub org/user name.
  projectName: 'betaflightdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-image-zoom")
  ],

  // enable mermaid diagrams
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions : {
            current : {
              label: "4.5.2",
              banner: 'none'
            }
          },
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/robotgoat/betaflightdocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/robotgoat/betaflightdocs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    colorMode: {
      respectPrefersColorScheme: true,
    },
    // docusaurus image zoom plugin
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
    },
    // Replace with your project's social card
    image: 'img/betaflight/betaflight_socialcard.jpg',
    navbar: {
      title: 'Betaflight',
      logo: {
        alt: 'Betaflight Logo',
        src: 'img/betaflight/icon_light.svg',
        srcDark: 'img/betaflight/icon_dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'devdocsSidebar',
          position: 'left',
          label: 'Development',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true
        },
        {
          href: 'https://github.com/betaflight/betaflight',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      versionPersistence: 'localStorage',
      sidebar : {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      // style: 'dark',
      logo: {
        src: 'img/betaflight/icon_light.svg',
        srcDark: 'img/betaflight/icon_dark.svg',
        height: 144,
      },
      links: [
        {
          title: 'Youtube',
          items: [
            {
              label: 'Joshua Bardwell',
              href: 'https://www.youtube.com/channel/UCX3eufnI7A2I7IkKHZn8KSQ',
            },
            {
              label: 'Ivan Efimov',
              href: 'https://www.youtube.com/channel/UCQtdpSBYlsWH6_m1Us_d8dg',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Oscar Liang',
              href: 'https://oscarliang.com/',
            },
            {
              label: 'VitroidFPV',
              href: 'https://www.vitroidfpv.com/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.betaflight.com/invite',
            },
            {
              label: 'IntoFPV',
              href: 'https://intofpv.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/betaflight/betaflight',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} All rights reserved Team Betaflight`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
