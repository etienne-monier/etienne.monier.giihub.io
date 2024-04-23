import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Etienne Monier",
  description: "Ingénieur DEVOPs @ CSGroup, Toulouse",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Qui-suis-je', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Qui suis-je',
        link: '/about'
      },
      {
        text: 'DEVOPS',
        items: []
      },
      {
        text: "Docteur en traitement de l'image",
        items: [
          { text: 'Recherche', link: '/research/research' },
          // { text: 'Publications', link: '/research/publication' },
          { text: 'Enseignement', link: '/research/teaching' }
        ]
      },
      {
        text: "Menuisier amateur",
        items: []
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: 'French',
      lang: 'fr'
    },
  }
})
