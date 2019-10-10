<template>
  <div class="page-login">
    <!-- 一级路由页面，登录页 -->
    <h1>登录页</h1>

    <input type="text" placeholder="用户名" />
    <br />
    <input type="passwoed" placeholder="密码" />
    <br />
    <button @click="handleLogin">点我登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    /*** 登录操作 ***/
    handleLogin() {
      /*** 点了就登录成功 ****/
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({
          username: '张三'
        })
      )

      //登录成功，跳转到首页
      let redirect = this.$route.query.redirect || '/films'
      this.$router.replace(redirect)
    }
  }
}
</script>
