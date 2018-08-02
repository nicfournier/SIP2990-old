<template>
  <div class="apercu">
    <!--<b-img class="" style="height: 240px" src="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" fluid-grow alt="Responsive image" />-->
    
    <section class="container">
    <div class="video-player-box"
         :playsinline="playsinline"
         @play="onPlayerPlay($event)"
         @pause="onPlayerPause($event)"
         @ended="onPlayerEnded($event)"
         @loadeddata="onPlayerLoadeddata($event)"
         @waiting="onPlayerWaiting($event)"
         @playing="onPlayerPlaying($event)"
         @timeupdate="onPlayerTimeupdate($event)"
         @canplay="onPlayerCanplay($event)"
         @canplaythrough="onPlayerCanplaythrough($event)"
         @ready="playerReadied"
         @statechanged="playerStateChanged($event)"
         v-video-player:myVideoPlayer="playerOptions">
    </div>
  </section>

    <b-jumbotron 
      bg-variant="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" 
      header="Le développement moral" 
      lead="Cours 1" 
      text-variant="white">
      <p>
        Une perspective développementale
      </p>
    </b-jumbotron>
    <!--<div class="jumbotron" style="">
      <h1 class="display-4">HST2125</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>-->
    <div id="tab-intro-content" class="container mt-3">
        <Steps>
            <Step step-title="1" class="completed" stepStatus="terminée" slot="step" v-b-tooltip.hover title="c'est fait"/>
            <Step step-title="2" class="secondary" stepStatus="visonnée" slot="step"/>
            <Step step-title="3"  slot="step"/>
            <Step step-title="4"  slot="step"/>
        </Steps>
      <div class="columns">
        <div class="column">
          <h2>
            Aperçu
          </h2>
          <p class="subtitle">
            <b-badge> {{ msg }}</b-badge>
          </p>

          <section>
            <b-tabs>
                <b-tab title="Objectifs">
                  <edObjective>
                    <h4 slot="header">
                      Objectifs de la semaine 
                      <i class="material-icons">bullseye</i>
                    </h4>
                    <ul slot="content">
                      <li>À compléter</li>
                    </ul>
                  </edObjective>
                  
                </b-tab>

                <b-tab title="Contenus essentiels" icon="flag-variant">
                  <edEssential>
                    <ul slot="content">
                        <li>À compléter</li>
                      </ul>
                  </edEssential>
                </b-tab>

                <b-tab title="Introduction" icon="debug-step-into">
                  <edIntroduction>
                    <div slot="content">
                    <p>
                      À compléter
                    </p>
                    <ol>
                        <li>À compléter</li>
                    </ol>
                  </div>
                  </edIntroduction>
                </b-tab>

                <b-tab title="Activités" icon="filmstrip">
                  <edActivity>
                    <div slot="content">
                      <b-card-group deck>
                      <NavigationCard title="Thème 1.1" imgSrc="https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg" icon="record_voice_over" colorType="transparent" activityLink="S01-Activity/S01-A01/">
                        <h4 slot="actTitle">Stade de jugement de Kohlberg</h4>
                      </NavigationCard>
                      <NavigationCard icon="forum" title="Thème 1.2" activityLink="S01-Activity/S01-A02">
                        <h4 slot="actTitle">Mode de régulation des comportements</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Thème 1.3" colorType="primary" textColor="outline-success" activityLink="S01-Activity/S01-A03">
                        <h4 slot="actTitle">Impact du groupe et de l’organisation dans l'éthique</h4>
                      </NavigationCard>
                      <NavigationCard icon="remove_red_eye" title="Thème 1.4" colorType="dark" textColor="light" activityLink="S01-Activity/S01-A04">
                        <h4 slot="actTitle">Appliquer une décision éthique</h4>
                      </NavigationCard>
                    </b-card-group>
                    </div>
                  </edActivity>
                </b-tab>
            </b-tabs>
        </section>

        </div>
      </div>
    </div>
    
  </div>
</template>



<!--<script>
export default {
  name: 'apercu', 
  data () {
    return {
      msg: 'module 2',
      isActive: true
    }
  }
}
</script>-->

<script>

import BadgeIcon from '@/components/signage-collection/BadgeIcon.vue'
import Steps from '@/components/navigation-collection/Steps.vue'
import Step from '@/components/navigation-collection/Step.vue'
import NavigationCard from '@/components/navigation-collection/NavigationCard.vue'
import edObjective from '@/components/instructional-collection/edObjective.vue'
import edEssential from '@/components/instructional-collection/edEssential.vue'
import edIntroduction from '@/components/instructional-collection/edIntroduction.vue'
import edActivity from '@/components/instructional-collection/edActivity.vue'

export default {
  layout: 'default',
  components: {
    BadgeIcon,
    Steps,
    Step,
    NavigationCard,
    edObjective,
    edEssential,
    edIntroduction,
    edActivity
  },
  data () {
      return {
msg: 'semaine 1',

        // component options
        playsinline: true,
        
        // videojs options
        playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://player.vimeo.com/external/114603532.hd.mp4?s=d3249edd0fe87e9fc50231e0e994fbc1ab3d4665&profile_id=119"
          }],
          // poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.myVideoPlayer)
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.jumbotron {
  background: url(https://farm6.staticflickr.com/5564/30027314480_81db2b8384_b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
    width: 60%;
    margin: 0 auto;
    padding: 50px 0;
    .video-player-box {
      min-height: 200px;
    }
  }
</style>
