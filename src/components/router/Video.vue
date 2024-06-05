<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useNewStore } from '../../store/news.js'

const indexs = ref(2);

const news = useNewStore().newsData;

const setActive = (index) => {
    indexs.value = index;
};

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
        </section>
        <section>
            <div class="px-3 py-2 max-w-1280 mx-auto | md:py-12 md:px-0">
                <h2 class="text-white font-extrabold text-2xl mt-12">VIDEO</h2>
                <div class="flex flex-wrap my-10">
                    <div class="w-[49%] mb-10 mr-[1%] | md:w-[32%]" v-for="i in 10">
                        <a href="https://youtu.be/3eWPEv0OMs8?si=9VG_S2OVEmF868Uc" class="center video-hover">
                            <img src="https://img.youtube.com/vi/3eWPEv0OMs8/hqdefault.jpg">
                        </a>
                        <div class="mt-2">
                            <div class="flex justify-between text-sm font-bold">
                                <p>2024-05-27</p>
                                <p class="bg-[#333] px-2 py-1"># Full Game Highlights 23-24</p>
                            </div>
                            <h5 class="mt-2">Full Game Highlights｜桃園璞園領航猿 VS 新竹御頂攻城獅｜240527｜190</h5>
                        </div>
                    </div>
                </div>
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
.video-hover{
    transition: all .3s;
    position: relative;
}
.video-hover::after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(43, 52, 69, 0.5);
}
</style>
