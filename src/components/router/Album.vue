<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useNewStore } from '../../store/news.js'

const indexs = ref(1);

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
                <h2 class="text-white font-extrabold text-2xl mt-12">NEWS IMG</h2>
                <div class="flex flex-wrap my-10">
                    <div class="w-[49%] mb-5 mr-[1%] | md:w-[32%]" v-for="i in 10">
                        <a href="" class="center img-hover">
                            <img src="https://pleagueofficial.com/resize/Ly9kMzZmeXBrYm1tb2d6Ni5jbG91ZGZyb250Lm5ldC91cGxvYWQvYWxidW1fcGhvdG8vcGhvdG9fNjY0XzE3MTY3OTU5MTcuanBn">
                        </a>
                        <div class="mt-2">
                            <div class="flex justify-between text-sm font-bold">
                                <p>2024-05-24</p>
                                <p class="bg-[#333] px-2 py-1"># 賽事圖輯 23-24</p>
                            </div>
                            <p class="mt-2">BG2｜新北國王 vs 福爾摩沙夢想家</p>
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
.img-hover{
    transition: all .3s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
}
</style>
