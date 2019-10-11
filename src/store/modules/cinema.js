//拆分出来的，影院仓库模块

export default {
  state: {
    cinemaList: [] //当前列表数据
  },

  getters: {
    //当前影院数量
    cinemaCount(state) {
      return state.cinemaList.length
    },

    msg(state) {
      return state.filmList.length
    }
  },

  mutations: {
    setCinemaList(state, payload) {
      state.cinemaList = payload
    }
  },

  actions: {
    a() {
      console.log('cinema - a')
    },

    getCinemaList(context, payload) {
      setTimeout(() => {
        let result = [
          { cinemaId: 1, cinemaName: '凤凰影院' },
          { cineamId: 2, cinemaName: '大地影院' }
        ]

        context.commit('setCinemaList', result)
      }, 3000)
    }
  }
}
