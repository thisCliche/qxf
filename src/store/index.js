import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    erea:{name: '',code: ''},
    ereaTemp:{name: '',code: ''},
  },

  actions: {
    changeCity(ctx,city) {
      ctx.commit('changeCity',city)
    },
    changeCityTemp(ctx,city) {
      ctx.commit('changeCityTemp',city)
    },
  },

  mutations: {
    changeCity(state, city) {
      state.erea.name = city.name
      state.erea.code = city.code
      state.ereaTemp.name = city.name
      state.ereaTemp.code = city.code
    },
    changeCityTemp(state, city) {
      state.ereaTemp.name = city.name
      state.ereaTemp.code = city.code
    },
  },

  modules: {

  }
})
