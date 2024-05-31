<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useNewStore } from '../../store/news.js'

const indexs = ref(0);

const news = useNewStore().newsData;

const setActive = (index) => {
    indexs.value = index;
};
const nums = ref(null)
const openNews =(num) =>{
    nums.value = (nums.value === num) ? null : num;
}

</script>

<template>
    <div class="bg-[#111] min-h-screen">
        <section>
            <h3 class="title-style">NEWS</h3>
        </section>
        <section class="py-0 max-w-1280 mx-auto | md:py-12">
           <ul class="flex">
               <li class="center px-6 text-center flex-1 bg-black cursor-pointer" :class="{'!bg-active': indexs==index}" 
               v-for="(item,index) in news" :key="index" v-on:click="setActive(index)">
                   <router-link  :to="item.Url" class="py-3 inline-block font-bold text-sm w-full | md:text-base">{{ item.title }}</router-link>
               </li>
            </ul>
            <h2 class="text-white font-extrabold text-2xl mt-12">ANNOUNCEMENT</h2>
        </section>
        <section>
            <div class="max-w-[1230px] mx-auto">
                <div class="bg-[#333] cursor-pointer" v-on:click="openNews('1')">
                    <div class="px-5 py-4">
                        <span class="mr-3 text-sm">2024-03-30</span>
                        <span class="bg-white text-black mr-3 text-center font-bold inline-block w-[100px]">公告</span>
                        <span class="text-sm">新北國王宣佈牧倫斯本季不再出賽，進行後續聯盟註冊名單註銷</span>
                    </div>
                </div>
                <transition name="slide">
                    <div class="bg-white" v-show="nums==='1'">
                        <div class="px-5 py-4 text-black text-sm font-bold">
                            <p>新北國王籃球隊球員牧倫斯（Byron Mullens），3月30日比賽自行中途離場，極度不尊重團隊與比賽，新北國王即刻宣佈牧倫斯本季不再出賽，進行後續聯盟註冊名單註銷。</p>
                        </div>
                    </div>
                </transition>
                <div class="bg-black cursor-pointer" v-on:click="openNews('2')">
                    <div class="px-5 py-4">
                        <span class="mr-3 text-sm">2024-03-15</span>
                        <span class="bg-white text-black mr-3 text-center font-bold inline-block w-[100px]">公告</span>
                        <span class="text-sm">臺北富邦勇士新增外籍球員伊貝(Prince Ibeh)</span>
                    </div>
                </div>
                <transition name="slide">
                    <div class="bg-white" v-show="nums==='2'">
                        <div class="px-5 py-4 text-black text-sm font-bold">
                            <p>臺北富邦勇士今天宣布洋將異動—新簽洋將伊貝(Prince Ibeh)，釋出沛登(Justin Patton)與梅克(Matur Maker)。</p>
                        </div>
                    </div>
                </transition>
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
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter {
    transform: translateY(-69px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateY(-69px);
    opacity: 0;
}

</style>
