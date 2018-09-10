<template>
  <videoPlayer  
    class="video-player-box"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
    customEventName="customstatechangedeventname"

    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ended="onPlayerEnded($event)"
    @waiting="onPlayerWaiting($event)"
    @playing="onPlayerPlaying($event)"
    @loadeddata="onPlayerLoadeddata($event)"
    @timeupdate="onPlayerTimeupdate($event)"
    @canplay="onPlayerCanplay($event)"
    @canplaythrough="onPlayerCanplaythrough($event)"

    @statechanged="playerStateChanged($event)"
    @ready="playerReadied">
  </videoPlayer>
</template>

<!--<script>
  // require styles
import 'video.js/dist/video-js.css'

import VueVideoPlayer from 'vue-video-player'


export default {
  components: {
    videoPlayer
  }
}
</script>-->
<script>
  // custom skin css
  //import '../src/custom-theme.css'
  
// export
  export default {
    name: 'videoPlayer',
    props: {
      start: {
        type: Number,
        default: 0
      },
      crossOrigin: {
        type: String,
        default: ''
      },
      playsinline: {
        type: Boolean,
        default: false
      },
      customEventName: {
        type: String,
        default: 'statechanged'
      },
      options: {
        type: Object,
        required: true
      },
      events: {
        type: Array,
        default: () => []
      },
      globalOptions: {
        type: Object,
        default: () => ({
          // autoplay: false,
          controls: true,
          // preload: 'auto',
          // fluid: false,
          // muted: false,
          controlBar: {
            remainingTimeDisplay: false,
            playToggle: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeMenuButton: {
              inline: false,
              vertical: true
            }
          },
          techOrder: ['html5'],
          plugins: {}
        })
      },
      globalEvents: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        player: null,
        reseted: true
      }
    },
    mounted() {
      if (!this.player) { 
        this.initialize()
      }
    },
    beforeDestroy() {
      if (this.player) { 
        this.dispose()
      }
    },
    methods: {
      initialize() {
        // videojs options
        const videoOptions = Object.assign({}, this.globalOptions, this.options)
        // ios fullscreen
        if (this.playsinline) {
          this.$refs.video.setAttribute('playsinline', this.playsinline)
          this.$refs.video.setAttribute('webkit-playsinline', this.playsinline)
          this.$refs.video.setAttribute('x5-playsinline', this.playsinline)
          this.$refs.video.setAttribute('x5-video-player-type', 'h5')
          this.$refs.video.setAttribute('x5-video-player-fullscreen', false)
        }
        // cross origin
        if (this.crossOrigin !== '') {
          this.$refs.video.crossOrigin = this.crossOrigin
          this.$refs.video.setAttribute('crossOrigin', this.crossOrigin)
        }
        // emit event
        const emitPlayerState = (event, value) => {
          if (event) {
            this.$emit(event, this.player)
          }
          if (value) {
            this.$emit(this.customEventName, { [event]: value })
          }
        }
        // avoid error "VIDEOJS: ERROR: Unable to find plugin: __ob__"
        if (videoOptions.plugins) {
          delete videoOptions.plugins.__ob__
        }
        // videoOptions
        // console.log('videoOptions', videoOptions)
        
        // player
        const self = this
        this.player = videojs(this.$refs.video, videoOptions, function() {
          // events
          const events = DEFAULT_EVENTS.concat(self.events).concat(self.globalEvents)
          // watch events
          const onEdEvents = {}
          for (let i = 0; i < events.length; i++) {
            if (typeof events[i] === 'string' && onEdEvents[events[i]] === undefined) {
              (event => {
                onEdEvents[event] = null
                this.on(event, () => {
                  emitPlayerState(event, true)
                })
              })(events[i])
            }
          }
          // watch timeupdate
          this.on('timeupdate', function() {
            emitPlayerState('timeupdate', this.currentTime())
          })
          // player readied
          self.$emit('ready', this)
        })
      },
      dispose(callback) {
        if (this.player && this.player.dispose) {
          if (this.player.techName_ !== 'Flash') {
            this.player.pause && this.player.pause()
          }
          this.player.dispose()
          this.player = null
          this.$nextTick(() => {
            this.reseted = false
            this.$nextTick(() => {
              this.reseted = true
              this.$nextTick(() => {
                callback && callback()
              })
            })
          })
          /*
          if (!this.$el.children.length) {
            const video = document.createElement('video')
            video.className = 'video-js'
            this.$el.appendChild(video)
          }
          */
        }
      }
    },
    watch: {
      options: {
        deep: true,
        handler(options, oldOptions) {
          this.dispose(() => {
            if (options && options.sources && options.sources.length) {
              this.initialize()
            }
          })
        }
      }
    }
  }
</script>