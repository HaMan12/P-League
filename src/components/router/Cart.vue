<script setup>
import { ref , watch  } from 'vue'

// 運費
const deliver = ref('0');
const deliverPay = ref(0)
watch(deliver, (newValue) => {
      switch (newValue) {
        case '1':
          deliverPay.value = 150;
          break;
        case '2':
          deliverPay.value = 80;
          break;
        default:
          deliverPay.value = 0;
          break;
      }
    });
// 狀態
const type = ref('1')
const goBuy = () =>{
    type.value = '2'
}
const goBack =()=>{
    type.value = '1'
}
// 送出訂單
const send = ()=>{

}
// + -
const count = ref(1);
const add = (index)=>{ count.value += 1;}
const minus = (index)=>{
  if (count.value > 1) {
    count.value -= 1;
  }
}
const removeItem = (index) =>{

}
// 三位一撇 web api  Intl.NumberFormat
const test = ref(5600)
const formatCurrency = (value) => {
      if (typeof value === 'number') {
        return new Intl.NumberFormat('zh-TW', {
          style: 'currency',
          currency: 'TWD',
          minimumFractionDigits: 0
        }).format(value);
      }
      return value;
    };
</script>

<template>
    <section>
        <h3 class="title-style">MY CART</h3>
    </section>
    <section class="py-0 bg-[#f6f9fc] | md:py-10">
        <div class="max-w-1280 mx-auto shadow-lg bg-white | md:py-5">
            <div class="flex flex-col | md:flex-row">
                <div class="w-full border-r border-[#e3e9ef] pt-2 pb-4 | md:w-2/3 md:pt-3 md:pr-5">
                    <div class="pt-2 px-4 | lg:pr-0 xl:pl-5" v-show="type==='1'">
                        <h2 class="pb-4 mt-3 text-black text-center font-bold border-b border-[#e3e9ef] | md:text-left">我的購物車</h2>
                        <div class="flex py-2 border-b border-[#e3e9ef] | md:py-4" v-for="i in 2">
                            <a href="" class="block">
                                <img src="/src/assets/img/lion.png" width="100" class="md:mr-5">
                            </a>
                            <div class="flex-1 px-2 ml-2 text-black | md:px-3">
                                <div class="flex-col center !justify-between | md:flex-row">
                                    <div>
                                        <h3 class="mb-1 font-medium text-sm">XAP x P.-LEAGUE+-吊卡收藏玩具</h3>
                                        <h4 class="mb-1 font-medium text-xs">單一規格 | 單一尺寸</h4>
                                        <h5 class="font-black mt-1">NTD {{ formatCurrency(test) }}</h5>
                                    </div>
                                    <div class="w-full text-right mt-3 | md:mt-2">
                                        <button class="text-[#bb986c] text-2xl mr-10" @click="add(index)">+</button>
                                        <input type="number" value="1" min="1" max="999" v-model="count" class="text-center max-w-[28px] font-bold">
                                        <button class="text-[#bb986c] text-2xl mx-6" @click="minus(index)">-</button>
                                        <button type="button" class="text-[#4b566b] text-3xl" @click="removeItem(index)">×</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-2 px-4 | lg:pr-0 xl:pl-5" v-show="type==='2'">
                        <h2 class="pb-4 mt-3 text-black text-center font-bold border-b border-[#e3e9ef] | md:text-left">結帳</h2>
                        <div class="flex border-b border-[#e3e9ef] py-4">
                            <div class="flex-1 px-2 text-black | md:px-0">
                                <div>
                                    <h3 class="font-bold">訂購人</h3>
                                    <div class="w-full mt-4 | md:w-1/2">
                                        <label class="my-2 block">訂購人姓名 <span class="text-red">*</span></label>
                                        <input type="text" class="checkout">
                                    </div>
                                    <div class="w-full mt-4">
                                        <label class="my-2 block">E-mail <span class="text-red">*</span></label>
                                        <input type="text" class="checkout">
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <h3 class="font-bold">收件人</h3>
                                    <div class="flex gap-6">
                                        <div class="w-full mt-4 | md:w-1/2">
                                            <label class="my-2 block">收件人姓名 <span class="text-red">*</span></label>
                                            <input type="text" class="checkout">
                                        </div>
                                        <div class="w-full mt-4 | md:w-1/2">
                                            <label class="my-2 block">聯絡手機電話 <span class="text-red">*</span></label>
                                            <input type="text" class="checkout">
                                        </div>
                                    </div>
                                    <div class="w-full mt-4">
                                        <label class="my-2 block">收件地址 (台灣)<span class="text-red">*</span></label>
                                        <input type="text" class="checkout">
                                    </div>
                                    <div class="w-full mt-4">
                                        <label class="my-2 block">收件地址郵遞區號<span class="text-red">*</span></label>
                                        <input type="text" class="checkout">
                                    </div>
                                    <div class="w-full mt-4 | md:w-1/2">
                                            <label class="my-2 block">發票 <span class="text-red">*</span></label>
                                            <select  class="w-full border border-black p-3">
                                                <option value="捐贈">捐贈社福單位</option>
                                                <option value="個人">個人雲端發票</option>
                                                <option value="公司">公司用線上列印</option>
                                            </select>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full p-7 text-black | md:w-1/3">
                    <h2 class="pb-8 center border-b border-[#e3e9ef] | md:justify-start">
                        <img src="../../assets/img/total.jpg" alt="total">
                    </h2>
                    <div class="flex justify-between pt-4 font-bold">
                        <h5>商品 <small class="text-xs">(<span>2</span>件)</small></h5>
                        <p class="tracking-wider">NTD <span>5780</span></p>
                    </div>
                    <div class="flex justify-between pt-4 font-bold mb-4">
                        <h5>運費</h5>
                        <p class="tracking-wider">NTD <span>{{ deliverPay }}</span></p>
                    </div>
                    <hr>
                    <div class="flex justify-between font-bold my-4">
                        <h5>共計</h5>
                        <p class="tracking-wider">NTD <span>0</span></p>
                    </div>
                    <div v-show="type==='1'">
                        <select v-model="deliver" class="w-full border border-black p-3">
                            <option value="0">請先選擇送貨方式</option>
                            <option value="1">黑貓宅配 運費 150</option>
                            <option value="2">7-11 超商取貨 運費 80</option>
                        </select>
                    </div>
                    <div v-show="type==='1'"> 
                        <div class="bg-black text-center my-5">
                            <button class="w-full py-3 text-white" @click="goBuy">前往結帳</button>
                        </div>
                        <div class="text-center">
                            <a href="./commodity" class="text-sm">繼續購物</a>
                        </div>
                    </div>
                    <div v-show="type==='2'"> 
                        <div class="bg-black text-center my-5">
                            <button class="w-full py-3 text-white" @click="send">送出訂單</button>
                        </div>
                        <div class="text-center">
                            <a href="javascript:;" class="text-sm" @click="goBack">回上一頁</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.checkout {
    width: 100%;
    background-color: #eee;
    padding: 8px 20px;

    @include rwd-768 {

	  }
}
</style>
