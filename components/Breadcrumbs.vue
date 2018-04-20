<template>
    <b-breadcrumb>
        <b-breadcrumb-item to="/home" text="Accueil"/>
        <b-breadcrumb-item to="/home" text="Semaine 02"/>
        <b-breadcrumb-item active to="/home" text="Aperçu"/>
    </b-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      items: [{
          text: 'Accueil',
          href: '/home'
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
