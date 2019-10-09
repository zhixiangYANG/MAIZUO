<template>
  <div class="page-home">
    <!-- 一级路由页面，首页 -->

    <!-- 二级路由页面坑 -->
    <router-view></router-view>

    <ul class="navbar">
      <router-link tag="li" to="/films">
        <i class="iconfont icon1"></i>
        <span>电影</span>
      </router-link>

      <router-link tag="li" to="/cinemas">
        <i class="iconfont icon4"></i>
        <span>影院</span>
      </router-link>

      <router-link tag="li" to="/center">
        <i class="iconfont icon7"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../../assets/styles/common/mixins.scss';
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > div:first-child {
    flex: 1;
    overflow: auto;
  }

  .navbar {
    @include border-top;
    height: 50px;
    display: flex;

    li {
      flex: 1;
      height: 50px;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #797d82;

      i {
        font-size: 24px;
        margin-bottom: 2px;
      }

      span {
        font-size: 12px;
      }

      &.router-link-active {
        color: #ff5f16;
      }
    }
  }
}
</style>
