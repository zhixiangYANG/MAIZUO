<template>
  <div class="page-home-films">
    <!-- 二级路由页面，影片列表页 -->
    <h1>影片列表页</h1>

    <ul>
      <li v-for="item in film.filmList" :key="item.filmId">{{ item.filmName }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Films',

  computed: {
    ...mapState(['film'])
  },

  created() {
    //派发getFilmList这个acitons去请求filmList的数据
    this.$store.dispatch('getFilmList')
  }
}
</script>
