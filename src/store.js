import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 0,
    tabs: ['远东', '项目', '技术', '关于'],
    tabsPath: ['/', 'project', 'technology', 'about']
  },
  mutations: {
    setTab(state, value) {
      state.tab = value
    }
  },
  actions: {

  }
})
