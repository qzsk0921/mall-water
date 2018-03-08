<template>
  <div>
    <router-view></router-view>
    <tabbar :selectCurrent="selected" :ulUnview="ulUnview"></tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: 'category',
      ulUnview: false
    }
  }
}
</script>
