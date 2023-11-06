<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const recordData = ref([
  {
    time: "2023/11/6 9:33:48",
    num: "641.15",
  },
  {
    time: "2023/10/1 6:33:15",
    num: "356.00",
  },
  {
    time: "2023/06/1 3:33:26",
    num: "134.00",
  },
  {
    time: "2023/11/6 9:33:31",
    num: "654.13",
  },
]);

const goBack = () =>{
    router.push("/mine")
}

</script>

<template>
  <div class="record">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack"> arrow_back_ios </span>
      <span>充值记录</span>
      <span></span>
    </div>
    <div class="per" v-for="(item, index) in recordData" :key="index">
      <div>
        <span>时间</span>
        <span>{{ item.time }}</span>
      </div>
      <div>
        <span>数量</span>
        <span>{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.record {
  width: auto;
  height: 100%;
  background: #f0f0f4;
  padding: 15px;
  box-sizing: border-box;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .per{
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    div{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 5px;
        span{
            padding: 2px 0px;
        }
    }
  }
}
</style>