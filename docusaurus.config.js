// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apuntes Python',
  tagline: 'Sistemas Empotrados',
  favicon: 'img/logo_upv.png',

  // Set the production url of your site here
  url: 'https://Jorge-Zafrilla.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/apuntes-python/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jorge-Zafrilla', // Usually your GitHub org/user name.
  projectName: 'apuntes-python', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        // Blog para más adelante
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_upv.png',
      navbar: {
        title: 'Sistemas Empotrados',
        logo: {
          alt: 'Logo Batoi',
          src: 'img/logo_upv.png',
          srcDark: 'img/logo_upv.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Apuntes',
          },
          //Blog en el navegador
          //{to: '/blog', label: 'Anuncios', position: 'left'},
          {
            type: 'localeDropdown', 
            position:'right',
          },
          {
            href: 'https://github.com/Jorge-Zafrilla',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Apuntes',
            items: [
              {
                label: 'Apuntes Python',
                to: '/docs/category/python-notes',
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                html: '<span>Email: <strong>jorzafmu@upv.edu.es</strong></span>',
              },
            ],
          },
          {
            title: 'PoliformaT',
            items: [
              {
                label: 'Acceso a PoliformaT',
                href: 'https://poliformat.upv.es/portal/site/GRA_14592_2024',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apuntes Python - Jorge Zafrilla Muñoz.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
