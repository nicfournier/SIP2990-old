<template>
  <div>
    <b-navbar type="light" variant="light" toggleable sticky>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">

        <b-navbar-nav >
            <b-nav-item to="../" size="lg" variant="primary" right>
                <b-button variant="outline-success">
                  Retour aux activités
                </b-button>
            </b-nav-item>
<transition name="menu"  mode="out-in">
            <b-nav-item-dropdown text="Ressources" right>
              <b-dropdown-header>Orientation et thématiques</b-dropdown-header>
              <b-dropdown-item href="#">Politique et droit</b-dropdown-item>
              <b-dropdown-item to="">Société et économie</b-dropdown-item>
              <b-dropdown-item href="#">Église et religion</b-dropdown-item>
              <b-dropdown-item href="#">Culture et mentalités</b-dropdown-item>
              <b-dropdown-item  >Les sciences auxiliaires de l’histoire</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-header>Autre</b-dropdown-header>
            </b-nav-item-dropdown>
</transition>

        </b-navbar-nav>
        </b-collapse>
    </b-navbar>


    <nuxt/>
    <!--<Footer/>-->
  </div>
</template>

<script>
//import TopNavbar from '~/components/TopNavbar.vue'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Footer from '@/components/layout-collection/Footer.vue'

Vue.use(BootstrapVue);

export default {
  transition: {
    name: 'menu',
    mode: 'out-in'
  },
  components: {
    Footer
    //StepNavigation
  }
}
</script>

<style scoped>
.menu {
  opacity: 0;
  transform: rotateY(50deg);
}
.container {
  text-align: center;
  padding-top: 200px;
  font-size: 20px;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0
}

.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { transform: scale(0) }
  50% { transform: scale(1.5) }
  100% { transform: scale(1) }
}
@keyframes bounce-out {
  0% { transform: scale(1) }
  50% { transform: scale(1.5) }
  100% { transform: scale(0) }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
