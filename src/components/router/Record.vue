<script setup>
import { ref , onMounted} from 'vue'
import { useRecordStore } from '../../store/record.js';

const { loading, record, fetchRecord } = useRecordStore();
onMounted(async ()=>{
   fetchRecord();
})
</script>

<template>
    <section>
        <h3 class="bg-[#24292D] text-2xl text-center text-white py-3 | lg:text-[40px] lg:py-10">STANDINGS</h3>
    </section>
    <section>
        <div class="max-w-1280 mx-auto mt-10 lg:mt-20">
            <h4 class="text-center font-bold text-lg">2023-24</h4>
            <p class="font-bold tracking-wider">例行賽戰績排行</p>
            <div class="overflow-x-scroll mt-5 text-center | xl:overflow-x-hidden md:text-left">
            <table class="game-table w-[1280px]">
               <thead>
                 <tr class="border-b border-[#4b4b4b] text-left py-5 h-11 text-sm | md:text-base">
                   <th width="5%" class="text-center table-border">排行</th>
                   <th width="25%" class="table-border text-center">球隊</th>
                   <th width="20%" class="text-center">已賽 GP</th>
                   <th width="10%">勝 W</th>
                   <th width="10%">敗 L</th>
                   <th width="10%">勝率 PCT</th>
                   <th width="10%">勝差</th>
                   <th width="10%">連勝連敗</th>
                 </tr>
               </thead>
               <tbody>
                 <tr class="table-row" v-if="loading"><td class="table-cell text-center h-[70px]" colspan="8">資料loading中</td></tr>
                 <tr v-else v-for="(item,index) in record" :key='index' class="border-b border-[#4b4b4b] h-[70px] font-bold  text-sm | md:text-base">
                   <td class="text-center table-border">{{ index+1 }} </td>
                   <td class="text-[#BB986C] cursor-pointer flex items-center h-[70px] table-border center">
                     <img :src="item.imageUrl" width="30" class="mr-1">
                     {{ item.team }}
                   </td>
                   <td class="pl-2 text-center">{{ item.game }}</td>
                   <td class="pl-2">{{ item.win }}</td>
                   <td class="pl-2">{{ item.lose }}</td>
                   <td class="pl-3">{{ (item.win / item.game * 100).toFixed(1) }}%</td>
                   <td class="pl-3">{{ item.wintolose }}</td>
                   <td class="pl-2 | md:pl-5">{{ item.wal }}</td>
                 </tr>
               </tbody>
              </table>
            </div>
        </div>
    </section>
</template>

<style scoped>
 .game-table{
  border-top: 10px solid #4b4b4b;
  border-bottom:10px solid #4b4b4b;
  background-color: #1b1b1b;
}
.table-border{
    border-right: 1px solid #4b4b4b;
}
</style>
