<template>
    <div class="footer">
        <ul class="list-inline">
            <li class="list-inline-item">Lorem ipsum</li>
            <li class="list-inline-item">Phasellus iaculis</li>
            <li class="list-inline-item">Nulla volutpat</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: 'Accueil',
        href: '#'
      }, {
        text: 'Parcours pédagogique',
        href: '#'
      }, {
        text: 'Semaine 2',
        active: true
      }]
    }
  }
}
</script>

<!-- breadcrumb.vue -->