<script setup>
import { onMounted, reactive, ref} from 'vue';
import { useRakindStore } from '../../store/rakindData.js'

const indexs = ref(2);
const rakindData = useRakindStore().rakindData;
const setActive = (index) => {
    indexs.value = index;
};

</script>

<template>
   <div class="bg-[#111] min-h-screen font-bold">
       <section>
           <h3 class="title-style">STATISTIC</h3>
       </section>
       <section class="py-0 max-w-1280 mx-auto | md:pt-12">
           <ul class="flex">
               <li class="center px-6 text-center flex-1 bg-black cursor-pointer" :class="{'!bg-active': indexs==index}" 
               v-for="(item,index) in rakindData" :key="index" v-on:click="setActive(index)">
                   <router-link  :to="item.Url" class="py-3 inline-block text-sm w-full | md:text-base">{{ item.title }}</router-link>
               </li>
           </ul>
           <div class="py-3 | md:py-12">
              <p class="text-center text-lg">2023-24 / 例行賽</p>
           </div>
       </section>
       <section>
        <div class="px-0 mx-auto  max-w-1600 | md:px-5">
                <h6 class="py-5 text-center tracking-wider | md:text-left md:py-2">球隊數據╱進攻</h6>
                <div class="container">
                    <table class="bg-black font-bold w-full min-w-[1060px] table-bg">
                        <thead class="border-y-2 border-[#4b4b4b]">
                            <tr class="text-sm">
                                <th class="min-w-[145px] bg-[#222] sticky left-0">球隊</th>
					        	<th>出賽次數</th>
					        	<th>時間(分)</th>
					        	<th>兩分%</th>
					        	<th>三分%</th>
					        	<th>罰球%</th>
                                <th>得分</th>
                                <th>攻板</th>
                                <th>防板</th>
                                <th>籃板</th>
                                <th>助攻</th>
                                <th>抄截</th>
                                <th>阻攻</th>
                                <th>失誤</th>
                                <th>犯規</th>
                                <th>禁區得分</th>
					        </tr>
                        </thead> 
                        <tbody>
                            <tr class="text-sm text-center py-3 border-b border-[#4b4b4b]">
					        	<td class="!text-active bg-[#222] sticky left-0">新北國王</td>
					        	<td>34</td>
					        	<td>240:00</td>
					        	<td>49.09%</td>
					        	<td>31.07%</td>
					        	<td>70.6%</td>
					        	<td>98.12</td>
					        	<td>15.53</td>
					        	<td>36.68</td>
					        	<td>52.21</td>
					        	<td>22.68</td>
                                <td>10.12</td>
                                <td>3.71</td>
                                <td>16.47</td>
                                <td>20.97</td>
                                <td>42.29</td>
					        </tr>
                            <tr class="text-sm text-center py-3 border-b border-[#4b4b4b]">
					        	<td class="!text-active bg-[#222] sticky left-0">新北國王</td>
					        	<td>34</td>
					        	<td>240:00</td>
					        	<td>49.09%</td>
					        	<td>31.07%</td>
					        	<td>70.6%</td>
					        	<td>98.12</td>
					        	<td>15.53</td>
					        	<td>36.68</td>
					        	<td>52.21</td>
					        	<td>22.68</td>
                                <td>10.12</td>
                                <td>3.71</td>
                                <td>16.47</td>
                                <td>20.97</td>
                                <td>42.29</td>
					        </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
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
.container{
    width: 100%;
    @include rwd-768 {
        display: block;
        overflow-x: auto;
	  }
}
thead th ,tbody td{
  padding: 8px 12px;
  @include rwd-768 {
        padding: .6em .4em;
    }
}
tbody td{
    color:rgb(75, 75, 75);
}
tbody tr:nth-child(odd) {
    background-color: #f6f9fc; 
}
tbody tr:nth-child(even) {
    background-color: #ffe1e1;
}
</style>
