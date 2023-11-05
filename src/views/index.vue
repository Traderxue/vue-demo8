<script setup>
import { RouterView } from "vue-router";
import { showToast } from 'vant';
import { ref } from "vue";

const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <RouterView />
    </van-pull-refresh>

    <van-tabbar v-model="active" inactive-color="#CCC" active-color="red" route>
      <van-tabbar-item to="/home">
        <span class="material-symbols-outlined"> home </span>
        <br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/quote">
        <span class="material-symbols-outlined"> monitoring </span>
        <br />
        <span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item to="/wallet">
        <span class="material-symbols-outlined"> account_balance_wallet </span
        ><br />
        <span>钱包</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span><br />
        <span>我的 </span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index {
  font-size: 15px;
  width: auto;
  padding: 15px 15px 70px 15px;
  box-sizing: border-box;
  background: #131f30;
  color: #f5f5f5;
  .van-tabbar {
    background: #131f30;
    .van-tabbar-item {
      background: #131f30;
    }
  }
}
</style>
