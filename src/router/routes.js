/* 
所有路由配置的数组
*/
/* 
import Msite from 'pages/MSite/MSite.vue'
import Search from 'pages/Search/Search.vue'
import Order from 'pages/Order/Order.vue'
import Profile from 'pages/Profile/Profile.vue'
 */

 /* 
 import(module): 被动态引入的模块就会被单独打包    webpack做的
 路由组件配置是一个函数: 返回包含路由组件的promise对象
 */
const Msite = () => import('pages/MSite/MSite.vue')
const Search = () => import('pages/Search/Search.vue')
const Order = () => import('pages/Order/Order.vue')
const Profile = () => import('pages/Profile/Profile.vue')


import Login from 'pages/Login/Login.vue'
import Shop from 'pages/Shop/Shop.vue'
import Goods from 'pages/Shop/Goods/Goods.vue'
import Ratings from 'pages/Shop/Ratings/Ratings.vue'
import Info from 'pages/Shop/Info/Info.vue'

import Review from 'pages/Review/Review.vue'
import SlotTest from 'pages/Review/SlotTest/SlotTest.vue'
import MixinTest from 'pages/Review/MixinTest/MixinTest.vue'
import ComponentTest from 'pages/Review/ComponentTest/ComponentTest.vue'
import EventTest from 'pages/Review/EventTest/EventTest.vue'
import ModelTest from 'pages/Review/ModelTest/ModelTest.vue'
import ReactiveTest from 'pages/Review/ReactiveTest/ReactiveTest.vue'
import LifeTest from 'pages/Review/LifeTest/LifeTest.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

export default [{
    path: '/msite',
    component: Msite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: '/shop/info',
        component: Info
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  },

  {
    path: '/review',
    component: Review,
    children: [
      {
        path: '/review/slot',
        component: SlotTest
      },
      {
        path: '/review/mixin',
        component: MixinTest
      },
      {
        path: '/review/component',
        component: ComponentTest
      },
      {
        path: '/review/event',
        component: EventTest
      },
      {
        path: '/review/model',
        component: ModelTest
      },
      {
        path: '/review/reactive',
        component: ReactiveTest
      },
      {
        path: '/review/life',
        component: LifeTest
      },
    ]
  },

  {
    path: '/a',
    component: A
  }, 
  {
    path: '/b',
    component: B,
    children: [
      {
        path: '/b/b1',
        component: B1
      },
      {
        path: '/b/b2',
        component: B2
      },
    ]
  },

  {
    path: '/',
    redirect: '/msite'
  }
]