<script setup>
import { ref,computed } from "vue";

const input1 = ref("")

const num = computed(()=>{
    return (input1.value/6).toFixed(2)
})

const input2 = ref("")

</script>

<template>
    <div class="buy">
        <div class="per">
            <div><p>单笔额度</p><span><input type="text" v-model="input1" placeholder="0.000"><span>CNY</span></span></div>
            <div><p>支付方式</p><span>
                <select name="pay" id="pay">
                    <option value="yhk">银行卡</option>
                    <option value="zfb">支付宝</option>
                    <option value="wx">微信</option>
                </select>
            </span></div>
            <div><p>购买数量</p><span><input type="text" v-model="num" placeholder="0.000" disabled><span>USDT</span></span></div>
            <div><p>备注</p><input type="text" v-model="input2" placeholder="无"></div>
        </div>
        <div class="btn">
            <button>购买</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.buy{
    width: auto;    
    height: auto;
    padding: 20px 0px;
    font-size: 15px;
    .per{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div{
            padding: 10px;
            display: flex;
            justify-content: space-between;
            input{
                border: 0;
                background: #F0F0F4;
                box-sizing: border-box;
                padding-right: 10px;
                width: 80px;
                color: #888;
                text-align: right;
            }
            select{
                outline: none;
                width: 140px;
                text-align: center;
                border: 0;
                background: #F0F0F4;
            }
            p{
                font-weight: 600;
                font-size: 14px;
            }
        }
    }
    .btn{
        width: auto;
        height: auto;
        text-align: center;
        padding: 20px 0px;
        button{
            background: #505D85;
            width: 80%;
            height: 35px;
            border: 0;
            color: #FFF;
            font-size: 14px;
            border-radius: 3px;
        }
    }
}
</style>