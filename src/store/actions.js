/* 
包含n个间接更新状态数据的方法的对象
*/
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  
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