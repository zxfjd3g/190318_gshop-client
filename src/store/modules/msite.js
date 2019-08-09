/* 
管理msite功能模块相关状态数据的vuex模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '../../api'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [], //商家数组
}
const mutations = {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  },
}
const actions = {
  /* 
  获取当前地址信息的异步action
  */
  async getAddress ({commit, state}) {
    // 1. 调用接口请求函数发请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 2. 有了结果, 提交mutation
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  /* 
  获取商品分类列表的异步action
  */
  async getCategorys ({commit}, callback) {
    // 1. 调用接口请求函数发请求
    const result = await reqCategorys()
    // 2. 有了结果, 提交mutation
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)

      // 在commit之后执行callback
      typeof callback==='function' && callback()
    }
  },

  /* 
  获取商家列表的异步action
  */
  async getShops ({commit, state}) {
    // 1. 调用接口请求函数发请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 2. 有了结果, 提交mutation
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },

}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}