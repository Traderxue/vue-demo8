<script setup>
import { ref } from "vue";

const listData = ref([
    {
        url:"http://127.0.0.1:5173/img_2.png",
        title:"回款明细"
    },
    {
        url:"http://127.0.0.1:5173/img_3.png",
        title:"充值记录"
    },
    {
        url:"http://127.0.0.1:5173/img_4.png",
        title:"提现记录"
    },
    {
        url:"http://127.0.0.1:5173/img_5.png",
        title:"密码管理"
    },
    {
        url:"http://127.0.0.1:5173/img_6.png",
        title:"卡片管理"
    },
    {
        url:"http://127.0.0.1:5173/img_7.png",
        title:"切换用户"
    },
    {
        url:"http://127.0.0.1:5173/img_8.png",
        title:"切换用户"
    },
])
</script>

<template>
  <div class="mine">
    <div class="header">
      <div class="top">
        <span>我的</span>
      </div>
      <div class="bottom">
        <img src="http://127.0.0.1:5173/img_1.png" alt="" />
        <span>ID: 6231654612</span>
        <span style="color: #ffde7d">普通会员</span>
      </div>
    </div>
    <div class="box">
      <div class="per" v-for="(item,index) in listData" :key="index">
        <div>
            <img :src="item.url" alt="">
            <span>{{item.title}}</span>
        </div>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  padding-bottom: 70px;
  .header {
    font-weight: 600;
    .top {
      text-align: center;
    }
    .bottom {
      margin: 20px 0px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      background: #364F6B;
      padding: 15px 0px;
      border-radius: 5px;
      span {
        padding-top: 15px;
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
  }
  .box{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    background: #364F6B;
    border-radius: 5px;
    padding: 15px 0px;
    .per{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        margin: 10px 0px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }
        }
        .arrow{
            font-size: 20px;
        }
    }
  }
}
</style>