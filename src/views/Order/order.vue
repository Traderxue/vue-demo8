<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("购买")

const navData = ref([
    {
        title:"购买",
        path:"/buy"
    },
    {
        title:"出售",
        path:"/sell"
    }
])

const goBack = ()=>{
    router.push("/home")
}

const changeTabs = (item)=>{
    active.value = item.title
    router.push(item.path)
}
</script>

<template>
  <div class="order">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
      <span>委托单(USDT/CNY)</span>
      <span>￥0.00</span>
    </div>
    <div class="nav">
        <span v-for="(item,index) in navData" :key="index" @click="changeTabs(item)" :class="active==item.title?'active':''">{{item.title}}</span>
    </div>
    <div class="main">
        <RouterView/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order{
    width: auto;
    height: 100%;
    background: #F0F0F4;
    padding: 15px;
    .header{
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav{
        display: flex;
        justify-content: space-around;        
        align-items: center;
        margin: 20px 0px;
        .active{
            color: #3580FD;
            font-weight: 600;
        }
    }
}
</style>
