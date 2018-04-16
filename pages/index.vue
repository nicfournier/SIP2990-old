<template>
<div>
  <TopNavbar/>
  <home/>
</div>
</template>

<style lang="scss">
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

</style>

<script>
import TopNavbar from '~/components/TopNavbar.vue'
import home from '~/pages/home.vue'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue);

export default {
  components: {
    TopNavbar,
    home
  }
}
</script>

<!--<style lang="scss">
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

