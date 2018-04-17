<template>
<!--<b-container fluid style="background-image: url(https://farm4.staticflickr.com/3941/15724845132_e3e48480d6_b.jpg); background-size: cover;">
  
    <div class="mx-auto bg-info align-middle">
      <h1 class="title">
        HST2125-bv
      </h1>
      <h2 class="subtitle">
        Nuxt.js + Bootstrap-vue
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </b-container>-->
  <b-jumbotron fluid text-variant="primary" header="" lead="Nuxt.js + Bootstrap-vue" class="pb-5" style="background-image: url(https://farm4.staticflickr.com/3941/15724845132_e3e48480d6_b.jpg); background-size: cover;">
    <template slot="header">
      HST2125
    </template>
    <p></p>
    <b-btn variant="primary" to="/parcours/S02/">Semaine 02</b-btn>
  </b-jumbotron>
</template>

<script>
export default {
  layout: 'splash'
}
</script>