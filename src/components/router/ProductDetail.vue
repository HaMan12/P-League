<script setup>
import { ref , watchEffect ,toRaw } from 'vue';
import { useProductStore } from '../../store/product.js';
import Modals from '../modal.vue';
import emitter from '../../mitt/mitt.js';

const { shopData } = useProductStore();
const props = defineProps(['productId']);

let rawshopDetail = null;

//  從pinia過來的資料，會變成Proxy物件，所以在訪問資料時候需要使用toRaw解封
watchEffect(() => {
  if (shopData) {
    let shopDetail = shopData.find(item => item.id == props.productId);
    rawshopDetail = toRaw(shopDetail);
  }
});
// + -
const count = ref(1);
const add =()=>{ count.value += 1;}
const minus =()=>{
  if (count.value > 1) {
    count.value -= 1;
  }
}
//回上頁
const goBack = ()=>{
  window.history.back();
}
//開啟modal 
const sendData = () => {
  if(size.value == 0 && rawshopDetail.isTshirt){
    alert('尚未選擇尺寸')
    return
  }
  const data = { message: rawshopDetail, isOpen: true , title:'確認加入購物車', count:count , size:size ,isProduct:true};
  emitter.emit('openModal', data);
}
// size
const size = ref(0);
</script>

<template>
    <h3 class="title-style">商品細節</h3>
  <section class="bg-white">
    <div class="max-w-1280 mx-auto flex flex-wrap py-5 | md:py-10">
      <div class="w-full | md:w-1/2">
        <img v-if="rawshopDetail" :src="rawshopDetail.imgUrl" width="600">
      </div>
      <div class="text-black w-full p-5 | md:w-1/2 md:p-16">
        <div class="text-center font-bold | md:text-left">
          <h2 class="text-lg" v-if="rawshopDetail">{{ rawshopDetail.name }}</h2>
          <h3 class="text-3xl py-2 | md:py-5" v-if="rawshopDetail">NTD {{ rawshopDetail.NTD }}</h3>
        </div>
        <p class="font-medium" v-if="rawshopDetail" v-html="rawshopDetail.content"></p>
        <!-- 尺寸 -->
        <select name="size" class="count-input w-full mt-2 h-[46px]" v-if="rawshopDetail && rawshopDetail.isTshirt" v-model="size">
          <option value="0">選擇尺寸</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <!-- 數量 -->
        <div class="mt-2 mb-3 w-full flex">
          <input type="number" v-model="count" min="1" max="999" class="flex-1 count-input">
          <div class="flex">      
            <button type="button" class="count-btn" @click="add()">+</button>
            <button type="button" class="count-btn" @click="minus()">-</button>
          </div>
        </div>
        <!-- 送出 -->
        <div class="mt-12">
          <button @click="sendData()" class="addCar">加入購物車</button>
          <button @click="goBack" class="addCar mt-2">回上頁</button>
        </div>
      </div>
    </div>
  </section>
  <Modals></Modals>
  </template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.count-input {
  border: 1px solid black;
  padding: 0 10px;
  font-weight: 600;
}
.count-btn{
  display: inline-block;
  padding: 0.625rem 0.875rem;
  border: 1px solid;
  border-color: rgba(55, 63, 80, 0.35);
  background-color: #fff;
  color: #000;
  transition: all .3s ease-in-out;
    &:hover{
      background-color: #373f50;
      color: #fff;
    }
}
.addCar{
  display: block;
  background-color: #BB986C;
  color: #fff;
  width: 100%;
  padding: 10px 0;
  transition: all .3s ease-in-out;
    &:hover{
      background-color: #8E6F4D;
    }
}
</style>
