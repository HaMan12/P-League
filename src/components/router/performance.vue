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
   <div class="bg-[#111] min-h-screen font-bold">
       <section>
           <h3 class="title-style">STATISTIC</h3>
       </section>
       <section class="py-0 max-w-1280 mx-auto | md:py-12">
           <ul class="flex">
               <li class="center px-6 text-center flex-1 bg-black cursor-pointer" :class="{'!bg-active': indexs==index}" 
               v-for="(item,index) in rakindData" :key="index" v-on:click="setActive(index)">
                   <router-link  :to="item.Url" class="py-3 inline-block text-sm w-full | md:text-base">{{ item.title }}</router-link>
               </li>
           </ul>
           <div class="py-3 | md:py-12">
              <p class="text-center text-lg">2023-24</p>
           </div>
           <div>
                <ul class="flex text-center | md:px-20">
                    <li class="nav-link" :class="{'!bg-active': item==='player'}" @click="setItem('player')"><h4 class="hidden | md:block">PLAYER'S</h4><span class="md:pt-2">個人紀錄</span></li>
                    <li class="nav-link" :class="{'!bg-active': item==='team'}" @click="setItem('team')"><h4 class="hidden | md:block">TEAM'S</h4><span class="md:pt-2">團隊紀錄</span></li>
                </ul>
           </div>
       </section>
       <section v-if="item==='player'">
            <div class="max-w-1280 mx-auto">
                <h6 class="py-5 text-center tracking-wider | md:text-left md:py-2">個人單場大三元</h6>
                <div class="container">
                    <table class="bg-black font-bold w-full min-w-[660px]">
                        <thead class="border-y-2 border-[#4b4b4b]">
                            <tr class="text-sm">
					        	<th>日期</th>
					        	<th>場次</th>
					        	<th>隊伍</th>
					        	<th>背號</th>
					        	<th>球員</th>
					        	<th>對手</th>
					        	<th>得分</th>
					        	<th>籃板</th>
					        	<th>助攻</th>
					        	<th>抄截</th>
					        	<th>阻攻</th>
					        </tr>
                        </thead> 
                        <tbody>
                            <tr class="text-sm text-center py-3 border-b border-[#4b4b4b]">
					        	<td>11/26/23</td>
					        	<td>G009</td>
					        	<td>新北國王</td>
					        	<td>7</td>
					        	<td>林書豪</td>
					        	<td>高雄17直播鋼鐵人</td>
					        	<td>15</td>
					        	<td>10</td>
					        	<td>11</td>
					        	<td>1</td>
					        	<td>0</td>
					        </tr>
                            <tr class="text-sm text-center py-3 border-b border-[#4b4b4b]">
					        	<td>11/26/23</td>
					        	<td>G009</td>
					        	<td>新北國王</td>
					        	<td>7</td>
					        	<td>林書豪</td>
					        	<td>高雄17直播鋼鐵人</td>
					        	<td>15</td>
					        	<td>10</td>
					        	<td>11</td>
					        	<td>1</td>
					        	<td>0</td>
					        </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
       </section>
       <section v-if="item==='team'">
            <div class="max-w-1280 mx-auto">
                <h6 class="py-5 text-center tracking-wider | md:text-left md:py-2">團隊單場籃板紀錄</h6>
                <div class="container">
                    <table class="bg-black font-bold w-full min-w-[660px]">
                        <thead class="border-y-2 border-[#4b4b4b] text-sm">
                            <tr>
						        <th>日期</th>
						        <th>場次</th>
						        <th>隊伍</th>
						        <th>對手</th>
						        <th>籃板</th>
					        </tr>
                        </thead> 
                        <tbody>
                            <tr class="text-sm text-center py-3 border-b border-[#4b4b4b]">
                                <td>12/2/23</td>
						        <td>G011</td>
						        <td>福爾摩沙台新夢想家</td>
						        <td>臺北富邦勇士</td>
						        <td>71</td>
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
        padding: 5px 0;
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
</style>
