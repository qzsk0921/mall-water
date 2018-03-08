<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <svg-icon/>
  </div>
</template>

<script>
import svgIcon from './components/svg'
export default {
  components: {
    svgIcon
  },
  name: 'App'
}
</script>

<style>
</style>
