import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 0,
    tabs: ['远东', '经历', '项目', '关于'],
    tabsPath: ['/', 'experience', 'project', 'about']
  },
  mutations: {
    setTab(state, value) {
      state.tab = value
    }
  },
  actions: {

  }
})
