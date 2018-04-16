<template>
  <div>
    <b-navbar type="light" variant="light" sticky>
        <b-navbar-nav >
            <b-nav-item to="../" size="lg" variant="primary" right>
                Retour aux activités
            </b-nav-item>
        </b-navbar-nav>
        
    </b-navbar>
    <nuxt/>
  </div>
</template>

<script>
//import TopNavbar from '~/components/TopNavbar.vue'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);

export default {
  components: {
    
  }
}
</script>

<style>

</style>
