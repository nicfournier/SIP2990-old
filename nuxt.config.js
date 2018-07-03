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

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bootstrap-vue',
    // CSS file in the project
    '@/assets/custom-scss.scss'
  ],
  //routerBase,
  //srcDir: 'parcours/',
  build: {

   // activer pour generate
    publicPath: '_nuxt/',
  
    extend(config, ctx) {
    }
  },
  mode: 'universal',
  router: {


   // activer pour generate
    //base: '/pluginfile.php/3813557/mod_resource/content/5/hst2125-bv/',
    linkActiveClass: 'is-active'
  }

}

