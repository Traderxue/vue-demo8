<script setup>
import { ref } from "vue";

const listData = ref([
   
    {
        type:"APE",
        volume:"6452.12",
        price:"4610",
        parcent:"+1.6%",
        up:0
    },
    {
        type:"SOL",
        volume:"6452.12",
        price:"9484",
        parcent:"+1.6%",
        up:0
    },
    {
        type:"DOGE",
        volume:"6452.12",
        price:"5649",
        parcent:"+1.6%",
        up:1
    },
])
</script>

<template>
    <div class="optional">
        <div class="title">
            <span style="text-align: left;">名称</span>
            <span>最新价</span>
            <span style="text-align: right;">涨跌幅</span>
        </div>
        <div class="box" v-for="(item,index) in listData"  :key="index">
            <div style="text-align: left;" class="left">
                <span>{{item.type}}<p>/USDT</p></span>
                <span class="volume">24H量 {{item.volume}}</span>
            </div>
            <div>
                <span :class="item.up==1?'up':'down'">{{item.price}}</span>
            </div>
            <div style="text-align: right;">
                <button :class="item.up==0?'up_btn':'down_btn'">{{item.parcent}}</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.optional{
    width: auto;
    height: 800px;
    padding-bottom: 20px;
    .title{
        width: auto;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 20px 0px;
        span{
            width: 33%;
            text-align: center;
        }
    }
    .box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding: 10px 0px;
        margin: 10px 0px;
        .left{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
        }
        div{
            width: 33%;
            text-align: center;
            p{
                display: inline-block;
                color: #888;
            }
            button{
                width: 70px;
                height: 30px;
                border: 0;
                border-radius: 2px;
                background: #02c289;
                color: #f5f5f5;
                font-size: 13px;
            }
            .volume{
                color: #888;
                font-size: 12px;
                padding-top: 5px;
            }
            .up{
                color: #02c289;
            }
            .down{
                color: #df3236;
            }
            .up_btn{
                background: #df3236;
            }
            .down_btn{
                background: #02c289;
            }
        }
    }
}
</style>
