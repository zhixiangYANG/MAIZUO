import axios from 'axios'

export default {
  namespaced: true,

  state: {
    filmList: [] //影片列表集合
  },

  getters: {},

  mutations: {
    setFilmList(state, payload) {
      state.filmList = payload
    }
  },

  actions: {
    getFilmList({ commit }, payload) {
      axios
        .get('https://m.maizuo.com/gateway', {
          params: {
            cityId: 440300, //城市id
            pageNum: 1, //页码
            pageSize: 10, //每页显示条数
            type: 1, //影片类型，正在热映是1，即将上映是2
            k: 3561421
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156975901817665200492650"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        })
        .then(reponse => {
          // console.log(reponse)
          let result = reponse.data
          console.log(result)
          if (result.status === 0) {
            commit('setFilmList', result.data.films)
          }
        })
    }
  }
}
