/* 
管理user功能模块相关状态数据的vuex模块
*/
import {
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_TOKEN,
  RESET_TOKEN,
} from '../mutation-types'

import {
  reqAutoLogin
} from '../../api'

const state = {
  user: {}, // 当前登陆用户
  token: localStorage.getItem('token_key'), // 当前登陆用户对应的token
}
const mutations = {
  [RECEIVE_USER](state, { user }) {
    state.user = user
  },
  [RECEIVE_TOKEN](state, { token }) {
    state.token = token
  },
  [RESET_USER](state) {
    state.user = {}
  },
  [RESET_TOKEN](state) {
    state.token = ''
  },
}
const actions = {
  /* 
  保存user的同步action
  */
  saveUser ({commit}, user) {
    const token = user.token
    // 将token保存到local
    localStorage.setItem('token_key', token)

    // 将token保存到state
    commit(RECEIVE_TOKEN, { token })

    // 删除user中的token
    delete user.token
    commit(RECEIVE_USER, { user })
  },

  /* 
  退出登陆
  */
  logout ({commit}) {
    commit(RESET_USER)
    commit(RESET_TOKEN)
    localStorage.removeItem('token_key')
  },

  /* 
  自动登陆的异步action
  */
  async autoLogin ({commit, state}) {
    if (state.token) {
      const result = await reqAutoLogin()
      if (result.code===0) {
        const user = result.data
        commit(RECEIVE_USER, {user})
      }
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