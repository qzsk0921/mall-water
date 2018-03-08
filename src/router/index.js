import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
// import goodsdetail from '@/page/goodsDetail'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const search = r => require.ensure([], () => r(require('../page/search')), 'search')
const personal = r => require.ensure([], () => r(require('../page/personal/index')), 'personal')
const shopping = r => require.ensure([], () => r(require('../page/shopping')), 'shopping')
const goodsdetail = r => require.ensure([], () => r(require('../page/goodsDetail')), 'goodsdetail')
const category = r => require.ensure([], () => r(require('../page/category/category')))
const water = r => require.ensure([], () => r(require('../page/category/water-source')), 'water')
const partner = r => require.ensure([], () => r(require('../page/category/healthy-partner')), 'partner')
// const tabbar = r => require.ensure([], () => r(require('../page/tabbar')), 'tabbar')
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: {name: 'home'}
        },
        {
          path: 'home',
          component: home,
          name: 'home'
          // children: [{
          //   path: 'goodsdetail',
          //   component: goodsdetail,
          //   name: 'goodsdetail'
          // }]
          // children: [
          //   {
          //     path: 'index',
          //     component: tabbar,
          //     name: 'tabar'
          //   }
          // ]
        },
        // 分类页
        {
          path: '/category',
          component: category,
          children: [
            {
              path: 'water',
              component: water,
              name: 'water'
            },
            {
              path: 'partner',
              component: partner,
              name: 'partner'
            }
          ]
        },
        // 商品详情页
        {
          path: '/goodsdetail',
          component: goodsdetail,
          name: 'goodsdetail'
        },
        // 搜索页
        {
          path: '/search',
          component: search,
          name: 'search'
          // children: [
          //   {
          //     path: 'index',
          //     component: tabbar,
          //     name: 'tabbar'
          //   }
          // ]
        },
        // 购物车页
        {
          path: '/shopping',
          component: shopping,
          name: 'shopping'
        },
        // 个人信息页
        {
          path: '/personal',
          component: personal,
          name: 'personal'
        }
      ]
    }
    // {
    //   path: '/category',
    //   component: category,
    //   children: [
    //     {
    //       path: 'water',
    //       component: water,
    //       name: 'water'
    //     },
    //     {
    //       path: 'partner',
    //       component: partner,
    //       name: 'partner'
    //     }
    //   ]
    // },
    // {
    //   path: '/goodsdetail',
    //   component: goodsdetail,
    //   name: 'goodsdetail'
    // },
    // {
    //   path: '/search',
    //   component: search,
    //   name: 'search'
    //   // children: [
    //   //   {
    //   //     path: 'index',
    //   //     component: tabbar,
    //   //     name: 'tabbar'
    //   //   }
    //   // ]
    // },
    // {
    //   path: '/shopping',
    //   component: shopping,
    //   name: 'shopping'
    // },
    // {
    //   path: '/personal',
    //   component: personal,
    //   name: 'personal'
    // }
  ]
})
