<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push("/mine");
};
</script>

<template>
  <div class="invite">
    <div class="header">
      <span class="material-symbols-outlined" @click="goBack">
        arrow_back_ios
      </span>
      <span>邀请好友</span>
      <span></span>
    </div>
    <div class="box">
      <div class="banner">
        <img src="@/assets/img/invite.png" alt="" />
      </div>
      <div class="link">
        <div>
          <span>我的邀请连接</span>
          <span>http://xxx.com/invite/4164</span>
          <span class="material-symbols-outlined"> file_copy </span>
        </div>
        <div>
          <span>我的邀请码</span>
          <span>4164</span>
          <span class="material-symbols-outlined"> file_copy </span>
        </div>
        <div>
            <button>生成邀请海报</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invite {
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  background: #f0f0f4;
  color: #000;
  .header {
    width: auto;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    width: auto;
    height: auto;
    padding: 20px 0px;
    font-size: 14px;
    .banner {
      width: auto;
      height: 160px;
      img {
        width: 100%;
        height: 160px;
        border-radius: 5px;
      }
    }
    .link{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin-top: 50px;
        div{
            padding: 20px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            button{
                margin: 0 auto;
                height: 35px;
                width: 80%;
                border: 0;
                background: #505D85;
                color: #FFF;
                border-radius: 5px;
            }
        }
    }
  }
}
</style>
