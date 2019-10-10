<template>
  <div class="page-home-center">
    <!-- 二级路由页面，我的页 -->
    <h1>个人中心页</h1>
    <br />
    <p v-if="userInfo.username">{{ userInfo.username }}</p>
    <router-link to="/login" v-else>去登录</router-link>
    <hr />
    <router-link to="/money">余额</router-link>
    <br />
    <br />
    <router-link to="/card">卡券页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Center',

  data() {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    }
  }
}
</script>
