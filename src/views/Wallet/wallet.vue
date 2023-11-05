<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const active = ref("币币");
const router = useRouter();

const navList = ref([
  {
    title: "币币",
    path: "/coins",
  },
  {
    title: "合约",
    path: "/contract",
  },
  {
    title: "法币",
    path: "/fait",
  },
  {
    title: "秒合约",
    path: "/second",
  },
]);

const changeTab = (item) => {
  active.value = item.title;
  router.push(item.path);
};
</script>

<template>
  <div class="wallet">
    <div class="header">
      <div class="top">
        <p>总资产折合($)</p>
        <h3>0.0000 USD</h3>
      </div>
      <div class="bottom">
        <div class="left">
          <span>今日收益</span>
          <span>0</span>
        </div>
        <div class="right">
          <span>总收益</span>
          <span>0</span>
        </div>
      </div>
    </div>
    <div class="title">
      <span
        v-for="(item, index) in navList"
        :key="index"
        @click="changeTab(item)"
        :class="active == item.title ? 'active' : ''"
        >{{ item.title }}</span
      >
    </div>
    <div class="box">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet {
  width: auto;
  height: auto;
  .header {
    width: auto;
    height: 175px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #364f6b;
    border-radius: 5px;
    .top {
      text-align: center;
      p {
        padding: 10px;
      }
      h3 {
        font-size: 20px;
        padding-top: 10px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      .left {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        span {
          padding: 2px 0px;
        }
      }
      .right {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        span {
          padding: 2px 0px;
        }
      }
    }
  }
  .title {
    margin: 20px 0px;
    padding: 20px 0px;
    display: flex;
    justify-content: space-around;
    .active {
      color: #3881fd;
    }
  }
  .box {
    width: auto;
    height: auto;
  }
}
</style>