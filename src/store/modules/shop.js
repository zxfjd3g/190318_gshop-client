/* 
管理shop功能模块相关状态数据的vuex模块
*/
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
} from '../mutation-types'

import {
  reqGoods,
  reqRatings,
  reqInfo,
} from '../../api'

const state = {
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
}
const mutations = {
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  [ADD_FOOD_COUNT](state, {food}) {
    // food.name = "xxxx"
    if (food.count) {
      food.count++
    } else {
      // 给food添加一个新的属性, 属性名是count, 值是1  ===> 没有数据绑定
      // food.count = 1
      // 为响应式对象添加一个属性，确保新属性也是响应式的，并且能够触发视图更新
      Vue.set(food, 'count', 1)
    }
  },

  [REDUCE_FOOD_COUNT](state, {food}) {
    if (food.count>0) {
      food.count--
    }
  },


}
const actions = {
  // 异步获取商家信息
  async getInfo({commit}, cb) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})

      typeof cb === 'function' && cb()
    }
  },

  // 异步获取商家评价列表
  async getRatings({commit}, cb) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

      typeof cb === 'function' && cb()
    }
  },

  // 异步获取商家商品列表
  async getGoods({commit}, cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      
      typeof cb === 'function' && cb()
    }
  },

  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, {food})
    } else {
      commit(REDUCE_FOOD_COUNT, {food})
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}