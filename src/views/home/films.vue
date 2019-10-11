<template>
  <div class="page-home-films">
    <!-- 二级路由页面，影片列表页 -->

    <!-- tabs  切换-->
    <div class="tabs">
      <ul>
        <li
          :class="{'active': curFilmType === 'nowPlaying' }"
          @click="chgFilmType('nowPlaying')"
        >正在热映</li>
        <li
          :class="{'active': curFilmType === 'comingSoon' }"
          @click="chgFilmType('comingSoon')"
        >即将上映</li>
      </ul>
      <div class="active-line" :style="{'left':curFilmType === 'nowPlaying' ? '0' : '50%'}">
        <span></span>
      </div>
    </div>

    <!-- 影片列表的集合数据  使用动态组件来控制 -->
    <component :is="curFilmType" />
  </div>
</template>

<script>
import nowPlaying from '../../components/nowPlaying'
import comingSoon from '../../components/comingSoon'

export default {
  name: 'Films',

  components: {
    nowPlaying,
    comingSoon
  },

  data() {
    return {
      curFilmType: 'nowPlaying' //当前的影片类型
    }
  },

  methods: {
    //切换当前影片类型
    chgFilmType(type) {
      this.curFilmType = type
    }
  }
}
</script>

<style lang="scss">
.page-home-films {
  .tabs {
    height: 50px;
    position: relative;

    ul {
      display: flex;
      height: 50px;
      align-items: center;

      li {
        flex: 1;
        text-align: center;
        font-size: 14px;

        &.active {
          color: #ff5f16;
        }
      }
    }

    .active-line {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 50%;
      transition: left 0.3s;

      span {
        height: 2px;
        display: block;
        width: 56px;
        margin: auto;
        background: #ff5f16;
      }
    }
  }
}
</style>
