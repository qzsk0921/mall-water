<template>
  <div>
    <mt-search v-model="keyword">
      <mt-cell
        v-for="item in result"
        :key="item.id"
        :title="item.title"
        :value="item.value">
      </mt-cell>
    </mt-search>
    <!-- <router-view></router-view> -->
    <!-- <tabbar :selected="selected"></tabbar> -->
    <tabbar :selectCurrent="selected"></tabbar>
  </div>
</template>
<script>
// import Vue from 'vue'
import { Search } from 'mint-ui'
// Vue.component(Search.name, Search)
export default {
  components: {
    'mt-search': Search
    // 'mt-cell': Cell
  },
  data () {
    return {
      keyword: '',
      selected: 'search',
      result: [{ title: 'a', value: 'a值' }, { title: 'f', value: 'f值' }, { title: 'af', value: 'af值' }, { title: 'ass', value: 'ass值' }, { title: '标题文字', value: '说明文字' }, { title: 'k', value: 'k值' }]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .mint-search >>> .mint-searchbar-cancel {
    font-size: 0.67rem;
  }
</style>
