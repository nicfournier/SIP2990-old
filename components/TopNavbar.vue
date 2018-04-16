<template>
<div>
    <b-navbar type="light" variant="light" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-navbar-brand><i class="material-icons">settings_backup_restore</i> HST2125</b-navbar-brand>
        <b-nav-item to="/home">Accueil</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Parcours pédagogique" right>
          <b-dropdown-item href="#">Semaine 1</b-dropdown-item>
          <b-dropdown-item to="/parcours/S02/">Semaine 02</b-dropdown-item>
          <b-dropdown-item href="#">Semaine 03</b-dropdown-item>
          <b-dropdown-item href="#">Semaine 04</b-dropdown-item>
          <b-dropdown-item  >Semaine 05</b-dropdown-item>
          <b-dropdown-item  >Semaine 06</b-dropdown-item>
          <b-dropdown-item  >Semaine 07</b-dropdown-item>
          <b-dropdown-item  >Semaine 08</b-dropdown-item>
          <b-dropdown-item  >Semaine 09</b-dropdown-item>
          <b-dropdown-item >Semaine 10</b-dropdown-item>
          <b-dropdown-item >Semaine 11</b-dropdown-item>
          <b-dropdown-item >Semaine 12</b-dropdown-item>
          <b-dropdown-item >Semaine 13</b-dropdown-item>
          <b-dropdown-item >Semaine 14</b-dropdown-item>
          <b-dropdown-item >Semaine 15</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Orientation et thématiques" right>
          <b-dropdown-item href="#">Politique et droit</b-dropdown-item>
          <b-dropdown-item to="">Société et économie</b-dropdown-item>
          <b-dropdown-item href="#">Église et religion</b-dropdown-item>
          <b-dropdown-item href="#">Culture et mentalités</b-dropdown-item>
          <b-dropdown-item  >Les sciences auxiliaires de l’histoire</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!--<b-breadcrumb :items="items"/>-->

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