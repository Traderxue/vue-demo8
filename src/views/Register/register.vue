<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const register = () => {};

const login = () => {
  router.push("/login");
};

const goBack =()=>{
    router.push("/home")
}
</script>

<template>
  <div class="register">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
    </div>
    <div class="box">
      <h3>注册</h3>
      <input type="text" placeholder="请输入用户名" />
      <input type="password" placeholder="请输入密码" />
      <input type="password" placeholder="请再次输入密码" />
    </div>
    <div class="btn">
      <button @click="register">注册</button>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  width: auto;
  height: 100%;
  background: #131f30;
  .header{
    padding: 15px;
    color: #fff;
  }
  .box {
    width: 60%;
    margin: 0 auto;
    h3 {
      color: #fff;
      font-size: 20px;
    }
    padding-top: 160px;
    text-align: center;
    input {
      margin-top: 20px;
      padding: 5px;
      width: 100%;
      height: 20px;
      font-size: 13px;
    }
  }
  .btn {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    button {
      width: 75px;
      height: 30px;
      background: #2b77ff;
      color: #fff;
      border: 0;
      border-radius: 2px;
      font-size: 14px;
    }
  }
}
</style>