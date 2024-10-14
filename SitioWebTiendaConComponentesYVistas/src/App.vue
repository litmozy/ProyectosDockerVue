<template>
  <div id="app">
    <SiteHeader />
    <NavMenu />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import NavMenu from './components/NavMenu.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    NavMenu,
    SiteFooter
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
