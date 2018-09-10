module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sip2990-bv',
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

  plugins: [
    { src: '@/plugins/element-ui', ssr: false},
    { src: '~/plugins/collection'},
    { src: '@/plugins/fas-collection', ssr: false}
    //{ src: '~plugins/vimeo-player', ssr: false },
    //{ src: '~plugins/nuxt-video-player-plugin.js', ssr: false },
    //{ src: '~/plugins/vue-plyr.js', ssr: false }
  ],

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bootstrap-vue',
    // CSS file in the project
    '@/assets/custom-scss.scss'//,
    //'video.js/dist/video-js.css'
  ],

  //routerBase,
  //srcDir: 'parcours/',
  build: {

   // activer pour generate
    //publicPath: '_nuxt/',
    vendor: ['my-vue-lib-fel'],
    //vendor: [],
    //vendor: ['vue-vimeo-player'],
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

