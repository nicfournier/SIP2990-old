<template>
    <b-navbar type="light" variant="light" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-navbar-brand><i class="material-icons">settings_backup_restore</i> HST2125</b-navbar-brand>
        <b-nav-item><nuxt-link to="/home">Accueil</nuxt-link></b-nav-item>
        <b-nav-item><nuxt-link to="/parcours/S02/S02-preview">Semaine 02</nuxt-link></b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>