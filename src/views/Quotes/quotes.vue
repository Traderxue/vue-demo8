<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("自选")

const navData = ref([
  {
    title: "自选",
    path:"/optional"
  },
  {
    title: "USDT",
    path:"/usdt"
  },
]);

const changeTab = (item) =>{
    active.value = item.title
    router.push(item.path)
}
</script>

<template>
  <div class="quote">
    <div class="header">
      <span>行情</span>
    </div>
    <div class="banner">
      <span v-for="(item, index) in navData" :key="index" @click="changeTab(item)" :class="active==item.title?'active':''">{{
        item.title
      }}</span>
    </div>
    <div class="box">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quote {
  width: auto;
  height: auto;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-weight: 600;
  }
  .banner {
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    .active{
        color: #2879FF;
    }
  }
}
</style>