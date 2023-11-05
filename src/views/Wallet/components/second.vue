<script setup>
import { ref } from "vue";

const listData =ref([
    {
        type:"BTC",
        canuse:"0.641",
        lock:"0.0000",
        fold:"3.154"
    },
    {
        type:"ETH",
        canuse:"0.641",
        lock:"0.0000",
        fold:"3.154"
    },
])
</script>

<template>
  <div class="coins">
    <div class="per" v-for="(item,index) in listData" :key="index">
      <div class="title">
        <span class="type">{{item.type}}</span>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
      <div>
        <span>可用额度</span>
        <span style="text-align: center;">锁定</span>
        <span>折合($)</span>
      </div>
      <div>
        <span>{{item.canuse}}</span>
        <span style="text-align: center;">{{item.lock}}</span>
        <span>{{item.fold}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coins{
    width: auto;
    height: 480px;
    .per{
        width: auto;
        height: auto;
        padding: 10px 5px;
        background: #364f6b;
        font-size: 15px;
        border-radius: 5px;
        margin: 20px 0px;
        .title{
            display: flex;            
            justify-content: space-between;
            padding: 10px 0px;
            .type{
                font-weight: 600;
                font-size: 17px;
                color: #3881FD;
            }
            .arrow{
                font-size: 20px;
            }
        }
        div{
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;
        }
    }
}
</style>