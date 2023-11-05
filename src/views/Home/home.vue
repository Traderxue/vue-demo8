<script setup>
import { ref } from "vue";

const listData = ref([
  {
    type: "BTC",
    volume: "6845.15",
    price: "62421",
    parcent: "-1.34%",
    up: 1,
  },
  {
    type: "ETH",
    volume: "6845.15",
    price: "62421",
    parcent: "-1.34%",
    up: 0,
  },
  {
    type: "APE",
    volume: "6845.15",
    price: "62421",
    parcent: "-1.34%",
    up: 1,
  },
  {
    type: "DOGE",
    volume: "6845.15",
    price: "62421",
    parcent: "-1.34%",
    up: 0,
  },
]);
</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined"> menu </span>
      <span>SCBFF</span>
      <span class="material-symbols-outlined"> language </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#131F30"
        color="#FFF"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <div class="tab">
      <div>
        <span class="span1"
          >XPR
          <p>/USDT</p></span
        >
        <span class="span2">0.5464</span>
        <span class="span3">0.16%</span>
      </div>
      <div>
        <span class="span1"
          >XPR
          <p>/USDT</p></span
        >
        <span class="span2">0.5464</span>
        <span class="span3">0.16%</span>
      </div>
      <div>
        <span class="span1"
          >XPR
          <p>/USDT</p></span
        >
        <span class="span2">0.5464</span>
        <span class="span3">0.16%</span>
      </div>
    </div>
    <div class="quickly">
      <div class="left">
        <h3>快捷买币</h3>
        <span>支持USDT、BTC等</span>
      </div>
      <div class="right">
        <div class="top">
          <img src="@/assets/img/img_2.png" alt="" />
          <span>合约交易</span>
        </div>
        <div class="bottom">
          <img src="@/assets/img/img_1.png" alt="" />
          <span>帮助中心</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span style="text-align: left">名称</span>
        <span>最新价</span>
        <span style="text-align: right">涨跌幅</span>
      </div>
      <div class="per" v-for="(item, index) in listData" :key="index">
        <div class="left">
          <span
            >{{ item.type }}
            <p>/USDT</p></span
          >
          <span class="volume">24H量 {{ item.volume }}</span>
        </div>
        <div style="text-align: center">
          <span :class="item.up == 1 ? 'up' : 'down'">{{ item.price }}</span>
        </div>
        <div style="text-align: right">
          <button :class="item.up == 1 ? 'up_btn' : 'down_btn'">
            {{ item.parcent }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: 100%;
  .header {
    width: auto;
    height: 25px;
    line-height: 25px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
  }
  .banner {
    width: auto;
    height: 160px;
    margin: 20px 0px;
    img {
      width: 100%;
      height: 160px;
      border-radius: 5px;
    }
  }
  .tab {
    width: auto;
    height: 120px;
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    div {
      text-align: center;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      box-sizing: border-box;
      padding: 15px;
      font-weight: 600;
      background: #364f6b;
      border-radius: 5px;
      width: 30%;
      .span1 {
        color: #f5f5f5;
        font-size: 14px;
      }
      p {
        display: inline-block;
        color: #ccc;
      }
      .span2 {
        color: #02c289;
        font-size: 18px;
      }
      .span3 {
        font-size: 14px;
        font-weight: 500;
        color: #02c289;
      }
    }
  }
  .quickly {
    display: flex;
    justify-content: space-between;
    height: 160px;
    margin: 25px 0px;
    .left {
      width: 60%;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 40px 20px;
      background-color: #364f6b;
      color: #fff;
      background-image: url("@/assets/bg_2.png");
      background-repeat: no-repeat;
      background-size: cover;
      span {
        font-size: 14px;
        font-weight: 600;
      }
      h3 {
        font-size: 24px;
        padding: 10px 0px;
      }
    }
    .right {
      width: 35%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      div {
        border-radius: 5px;
        height: 45%;
        background: #364f6b;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0px 5px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .title {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 10px 0px;
      span {
        width: 33%;
        text-align: center;
      }
    }
    .per {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0px;
      font-weight: 600;
      .left {
        display: flex;
        flex-direction: column;
        .volume {
          color: #888;
          font-size: 12px;
          padding-top: 3px;
        }
      }
      div {
        width: 33%;
        font-size: 14px;
        p {
          display: inline-block;
        }
        button {
          width: 70px;
          height: 35px;
          color: #fff;
          border: 0;
          border-radius: 2px;
          background: #02c289;
        }
        .up {
          color: #02c289;
        }
        .down {
          color: #df3236;
        }
        .up_btn {
          background: #02c289;
        }
        .down_btn {
          background: #df3236;
        }
      }
    }
  }
}
</style>
