const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: './'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hst2125-bv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /* For Bootstrap-Vue*/ 
  /*modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],*/

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bootstrap-vue',
    // CSS file in the project
    '@/assets/custom-scss.scss'//,
    // SCSS file in the project
    //'@/assets/css/main.scss'
  ],

  routerBase,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    /*extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      return config;
    }
  },
  router: {
    //base: './',
    linkActiveClass: 'is-active'//,
    //base: process.env.DEPLOY_ENV === 'STATIC' ? '/nuxt-example/' : '/'
    //base: process.env.NODE_ENV === 'dev' ? '' : '/HST2125-Nuxt/'
  }
}
