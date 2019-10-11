//仓库主文件，在这个文件中创建仓库实例，并且通过modules选项去整合我们拆分去的仓库子模块

//1.引入vue
import Vue from 'vue'

//2.引入Vuex
import Vuex from 'vuex'

//3.调用
Vue.use(Vuex)

//4.引入拆分出去的仓库子模块
import filmModule from './modules/film'
import cinemaModule from './modules/cinema'

//5.实列化仓库的实列对象
const store = new Vuex.Store({
  //选项配置
  modules: {
    //key:value
    film: filmModule,
    cinema: cinemaModule
  }
})

//6.暴露出去
export default store
