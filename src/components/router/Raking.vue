<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRakindStore } from '../../store/rakindData.js'

const indexs = ref(0);

const rakindData = useRakindStore().rakindData;

const setActive = (index) => {
    indexs.value = index;
};
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
                <h6 class="text-sm text-center | md:text-left">例行賽球員排行</h6>
             <div class="flex gap-2 flex-wrap | md:gap-5">
                 <div class="w-full my-5 | md:w-[45%]">
                     <table class="w-full bg-black font-bold">
                        <thead class="border-y-2 border-[#4b4b4b]">
                            <tr>
                                <th class="text-center px-5 | md:text-left">得分</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="py-2 text-sm">
                                    <p class="text-active">鐵米</p>
                                    <p class="text-[#f3f5f9] opacity-60">高雄17直播鋼鐵人</p>
                                </td>
                                <td>22.83</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                     </table>
                 </div>
                 <div class="w-full my-5 | md:w-[45%]">
                    <table class="w-full bg-black font-bold">
                        <thead class="border-y-2 border-[#4b4b4b]">
                            <tr>
                                <th class="text-center px-5 | md:text-left">得分</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="py-2 text-sm">
                                    <p class="text-active">鐵米</p>
                                    <p class="text-[#f3f5f9] opacity-60">高雄17直播鋼鐵人</p>
                                </td>
                                <td>22.83</td>
                            </tr>
                        </tbody>
                    </table>
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
.main-content {

    @include rwd-768 {

	  }
}
</style>
