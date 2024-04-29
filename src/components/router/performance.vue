<script setup>
import { onMounted, reactive, ref} from 'vue';
import { useRakindStore } from '../../store/rakindData.js'

const indexs = ref(1);
const rakindData = useRakindStore().rakindData;
const setActive = (index) => {
    indexs.value = index;
};
const item = ref('player');
const setItem = (text) => {
    item.value = text;
}

</script>

<template>
   <div class="bg-[#111] min-h-screen">
       <section>
           <h3 class="title-style">STATISTIC</h3>
       </section>
       <section class="py-0 max-w-1280 mx-auto | md:py-12">
           <ul class="flex">
               <li class="center px-6 text-center flex-1 bg-black cursor-pointer" :class="{'!bg-active': indexs==index}" 
               v-for="(item,index) in rakindData" :key="index" v-on:click="setActive(index)">
                   <router-link  :to="item.Url" class="py-3 inline-block font-bold text-sm w-full | md:text-base">{{ item.title }}</router-link>
               </li>
           </ul>
           <div class="py-3 | md:py-12">
              <p class="text-center font-bold text-lg">2023-24</p>
           </div>
           <div>
                <ul class="flex text-center | md:px-20">
                    <li class="nav-link" :class="{'!bg-active': item==='player'}" @click="setItem('player')"><h4>PLAYER'S</h4><span class="pt-2">個人紀錄</span></li>
                    <li class="nav-link" :class="{'!bg-active': item==='team'}" @click="setItem('team')"><h4>TEAM'S</h4><span class="pt-2">團隊紀錄</span></li>
                </ul>
           </div>
       </section>
   </div>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.nav-link {
    background-color: black;
    flex:1 1 auto;
    padding: 10px 0;
    transform: skew(-20deg);
    font-size: 14px;
    font-weight: 700;
    transition: background-color .3s;
    -webkit-transition: background-color .3s;
    -moz-transition: background-color .3s;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    cursor: pointer;
    @include rwd-768 {
        transform: skew(0deg);
	  }
}
.nav-link >h4{
    transform: skew(20deg);
    @include rwd-768 {
        transform: skew(0deg);
	  }
}
.nav-link >span{
    display: block;
    transform: skew(20deg);
    @include rwd-768 {
        transform: skew(0deg);
	  }
}
</style>
