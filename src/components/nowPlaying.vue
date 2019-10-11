<template>
  <div class="film-list">
    <!-- 正在热映 -->
    <ul>
      <router-link
        tag="li"
        :to="`/film/${film.filmId}`"
        v-for="film in filmList"
        :key="film.filmId"
      >
        <div class="left">
          <img :src="film.poster" alt />
        </div>
        <div class="center">
          <div class="name">{{ film.name }}</div>
          <div class="grade">
            观众评分
            <span>{{ film.grade }}</span>
          </div>
          <!-- 使用方法处理 -->
          <!-- <div class="actors">主演：{{ formatActors(film.actors) }}</div> -->
          <!-- 使用过滤器来处理 -->
          <div class="actors">主演：{{ film.actors | filterA | filterB }}</div>
          <div class="detail">{{ film.nation }} | {{ film.runtime }}分钟</div>
        </div>
        <div class="right">
          <button class="buy">购票</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NowPlaying',

  computed: {
    ...mapState('film', ['filmList'])
  },

  methods: {
    ...mapActions('film', ['getFilmList']),

    //格式化显示主演
    formatActors(actors) {
      //[{name:'123,xx;''},{name;'234,xx：''}]
      let tmp = actors.map(item => {
        return item.name
      })
      return tmp.join('、')
    }
  },

  filters: {
    formatActors(actors) {
      //[{name:'123,xx;''},{name;'234,xx：''}]
      let tmp = actors.map(item => {
        return item.name
      })
      return tmp.join('、')
    },

    filterA(values) {
      //[{name:'张三' ,xx:''} ,{name:'李四' ,xx:''}] => ['张三','李四']
      return values.map(item => item.name)
    },

    filterB(values) {
      //["刘德华","郭富城","张学友","黎明"] => 刘德华、张学友、郭富城
      return values.join('、')
    }
  },

  created() {
    this.getFilmList()
  }
}
</script>

<style lang="scss">
@import '../assets/styles/common/mixins.scss';

.film-list {
  ul {
    margin-left: 15px;
  }
  li {
    display: flex;
    height: 94px;
    padding: 15px 15px 15px 0;
    overflow: hidden;
    @include border-bottom;

    .left {
      width: 66px;
      flex-shrink: 0; //不被压迫

      img {
        width: 100%;
      }
    }

    .right {
      width: 50px;
      flex-shrink: 0;
      display: flex;
      align-items: center;

      .buy {
        width: 50px;
        height: 25px;
        border: none;
        background: none;
        @include border;
        color: #ff5f16;
        font-size: 13px;
      }
    }

    .center {
      flex: 1;
      padding: 0 10px;
      overflow: hidden;
      line-height: 1.5;

      > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .name {
        color: #191a1b;
        font-size: 16px;
      }

      .grade {
        span {
          color: #ffb232;
          font-size: 14px;
        }
      }
      .grade,
      .actors,
      .detail {
        font-size: 13px;
        color: #797d82;
      }
    }

    &:last-child::after {
      display: none;
    }
  }
}
</style>
