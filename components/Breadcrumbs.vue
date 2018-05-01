<template>
    <b-breadcrumb>
        <b-breadcrumb-item to="/" text="Accueil"/>
        <b-breadcrumb-item to="/parcours/S02" text="niveau 1"/>
        <b-breadcrumb-item active to="/home" text="niveau 2"/>
    </b-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      items: [{
          text: 'Accueil',
          href: '/'
        }, {
          text: 'Semaine 02',
          href: '/parcours/S02'
        }, {
          text: 'Aperçu',
        }, {
          text: 'Aperçu',
          active: true
        }]
    }
  }
}
</script>
<style lang="css" scoped>
.breadcrumb {
  margin-bottom: 0;
}
</style>
