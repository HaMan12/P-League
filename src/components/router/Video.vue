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
    </div> 
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
</style>
