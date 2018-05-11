<template>
  <div>
    <!--<home/>-->
    <b-jumbotron fluid text-variant="primary" header="" lead="Nuxt.js + Bootstrap-vue" class="pb-5" style="background-image: url(https://farm4.staticflickr.com/3941/15724845132_e3e48480d6_b.jpg); background-size: cover;">
      <template slot="header">
        HST2125
      </template>
      <p></p>
      <b-row>
        <b-col>
          <b-btn variant="primary" to="S01/S01-index">Semaine 01</b-btn>
        </b-col>
        <b-col>
          <b-btn variant="primary" to="S02/S02-index">Semaine 02</b-btn>
        </b-col>
    </b-row>
    </b-jumbotron>
  </div>
</template>


<script>
//import home from '~/pages/parcours/parcours.vue'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);

export default {
  layout: 'splash',
  components: {
    //home
  }
}
</script>

<style lang="scss">

@import '@/assets/custom-scss.scss';

</style>

<!--<style lang="scss">

@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

.material-icons {
  vertical-align: text-top;
}
.nav-tabs .nav-link {
  border-width: 0;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  border-bottom: 1px solid $primary;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>-->

