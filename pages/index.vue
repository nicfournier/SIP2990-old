<template>
  <div>
    <!--<home/>-->
    <b-jumbotron fluid text-variant="primary" header="" lead="Le Moyen Âge européen 5e - 10e siècle" class="pb-5" style="background-image: url(https://farm4.staticflickr.com/3941/15724845132_e3e48480d6_b.jpg); background-size: cover;">
      <template slot="header">
        SIP2990 - Éthique appliquée en sécurité intérieure
      </template>
      <p></p>
      <Tiles/>
      <!--<SayHola/>-->
      <b-row>
        <b-col>
          <b-btn variant="primary" to="S01/">Semaine 01</b-btn>
        </b-col>
        <b-col>
          <b-btn variant="primary" to="S02/">Semaine 02</b-btn>
        </b-col>
    </b-row>
    </b-jumbotron>
    <!--<vimeo-player ref="player" :video-id="179089952" @ready="onReady" :player-height="height" :options="options"/>
    <vimeo-player ref="player" :video-id="114603532" @ready="onReady" :player-height="height" :options="options"/>-->


  </div>
</template>


<script>
//import home from '~/pages/parcours/parcours.vue'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Animate from 'animate.css'
//import vueVimeoPlayer from 'vue-vimeo-player'

//import VueVideoPlayer from 'vue-video-player'
 
// require videojs style
//import 'video.js/dist/video-js.css'


/*import BadgeIcon from '@/components/signage-collection/BadgeIcon.vue'
import Steps from '@/components/navigation-collection/Steps.vue'
import Step from '@/components/navigation-collection/Step.vue'
import NavigationCard from '@/components/navigation-collection/NavigationCard.vue'
import edObjective from '@/components/instructional-collection/edObjective.vue'
import edEssential from '@/components/instructional-collection/edEssential.vue'
import edIntroduction from '@/components/instructional-collection/edIntroduction.vue'
import edActivity from '@/components/instructional-collection/edActivity.vue'*/


Vue.use(BootstrapVue); //, vueVimeoPlayer, VueVideoPlayer


export default {
  layout: 'splash',
  components: {
    //home
    //vueVimeoPlayer//,
    //videoPlayer
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/custom-scss.scss';

.jumbotron-fluid {
  min-height: 100vh;
}
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

