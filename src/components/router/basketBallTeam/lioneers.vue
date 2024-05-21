<script setup>
import { ref , watch  } from 'vue'
import { useBasketballItem } from '../../../store/team.js'
import Modals from '../../modal.vue';
import emitter from '../../../mitt/mitt.js';

const navItem = useBasketballItem().navItem;

const type = ref(0);
const selectItem =(idx)=>{
    type.value = idx;
}

//開啟modal 
const sendData = (imgUrl) => {
  const data = { imgUrls:imgUrl , isOpen: true , title:'攻城獅資訊',isTeam:true};
  emitter.emit('openModal', data);
}
</script>

<template>
    <section>
        <h3 class="title-style tracking-widest">TEAM</h3>
        <div class="h-[200px] bg-[#51318f] relative z-10"></div>
        <div class="text-center bg-white -mt-[120px] text-black">
            <img src="../../../assets/img/lion.png" width="250" class="-mt-[120px] mx-auto relative z-20">
            <h1 class="team-text">
                <b>新竹攻城獅</b>
            </h1>
            <ul class="center font-bold py-5">
                <li class="cursor-pointer p-3" v-for="(item , index) in navItem" :key="item.type" @click="selectItem(index)" 
                :class="{'select_text':type===index}">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </section>
    <TransitionGroup name="list">
        <section :key="1" v-show="type===0" class="bg-white py-10">
            <div class="max-w-1280 mx-auto">
                <div class="bg_stripe p-5 mx-3 | md:mx-0">
                    <h2 class="text-center text-black font-black text-xl my-3"><i>用運動建立文化，用科技揚名國際</i></h2>
                </div>
                <table class="mt-4 mb-5 text-black font-normal table-auto text-sm border-collapse mx-3 | md:mx-0">
                    <tbody>
                        <tr>
                            <th>核心理念</th>
                            <td>
                                sinchu Toplus Lioneers 新竹御頂攻城獅籃球隊希望藉由在地球隊的成軍，成為連結新竹的正向力量，樹立起「用運動建立文化，用科技揚名國際」的球隊精神。
                            </td>
                        </tr>
                        <tr>
                            <th>品牌故事</th>
                            <td>
                                新竹御頂攻城獅<br>
                                Hsinchu Toplus Lioneers<br><br>
                                沒有什麼科技發展，是這座城市沒有貢獻過的<br>
                                沒有什麼事情，是這座城市沒有經歷過的。<br>
                                沒有什麼風景，是這座城市沒有的。<br>
                                <br>
                                2020 年「 Hsinchu Lioneers 新竹攻城獅職業籃球隊」由一群擁有竹科背景的企業家聯合成立，因彼此心中都有著對運動的熱愛齊聚一堂，希望藉由在地職業籃球隊的成軍，成為連結新竹的正向力量，投身職籃聯盟「P. LEAGUE+」。<br>
                                計分板的比數固然重要，但更重要的是比賽的每分每秒在場上的態度，不論比賽勝負為何，可貴的是一同努力的過程。<br>                               
                                <br>
                                「新竹攻城獅」中文隊名靈感正是來自《宅男打籃球》的「竹北攻城獅」，我們血液裡不僅繼承竹科強韌的 DNA，也希望用「竹北攻城獅」隊長－老莫的精神提醒自己：「不論輸贏，全力打好每一球。」期望繼承新竹人、竹科的強韌意志，成為連結新竹的正向力量。
                            </td>
                        </tr>
                        <tr>
                            <th>正式名稱</th>
                            <td>新竹御頂攻城獅籃球隊</td>
                        </tr>
                        <tr>
                            <th>成立時間</th>
                            <td><strong>2020年 6月</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section :key="2" v-show="type===1" class="bg-white py-10 text-black">
            <div  class="max-w-1280 mx-auto center flex-col">
                <h2 class="font-bold my-3 text-lg | md:text-xl">新竹縣體育館</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14485.013287227332!2d121.018519!3d24.8210091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2bb410e6587a4abe!2z5paw56u557ij56uL6auU6IKy5aC0!5e0!3m2!1szh-TW!2stw!4v1602825572115!5m2!1szh-TW!2stw" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="border border-[#e3e9ef] w-full my-5"></div>
            </div>
            <div class="max-w-1280 mx-auto font-medium px-2 | md:px-0">
                    <ul class="flex gap-3 | md:gap-10">
                        <li>場館資訊</li>
                        <li>場館地址</li>
                        <li>新竹縣竹北市福興東路一段1號</li>
                    </ul>
                    <ul class="flex mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>聯絡電話</li>
                        <li>03-6580970</li>
                    </ul>
                    <ul class="flex  mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>交通資訊</li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
        </section>
        <section :key="3" v-show="type===2" class="bg-white py-10 text-black">
            <div class="max-w-1280 mx-auto px-3 flex justify-between flex-wrap">
                <div class="w-full | md:w-4/5">
                    <h2 class="font-bold my-3 text-lg | md:text-xl">購票說明</h2>
                    <p class="mt-5 font-bold my-3 text-base | md:text-lg">更多資訊 (點擊圖片放大)</p>
                    <div class="flex flex-col gap-10 mt-10 | md:flex-row">
                        <a href="javascript:;" @click="sendData('/src/assets/img/攻城獅資訊.jpg')">
                            <img src="../../../assets/img/攻城獅資訊.jpg" class="w-full | md:w-[400px]">
                        </a>
                        <a href="javascript:;" @click="sendData('/src/assets/img/攻城獅資訊1.jpg')">
                            <img src="../../../assets/img/攻城獅資訊1.jpg" class="w-full | md:w-[400px]">
                        </a>
                    </div>
                </div>
                <div class="w-full mt-5 | md:w-1/5">
                    <a href="https://tixcraft.com/activity/detail/23_lioneers_p" target="_blank" class="block btn-class mb-3">前往售票連結</a>
                    <a href="https://calendar.google.com/calendar/u/0/r?cid=c_9168f1add6c6b1ac536a10c9e760ad829dd3d4296e8087ca835d4acca2d72573@group.calendar.google.com" target="_blank" class="block btn-class"> 加入Google 行事曆</a>
                </div>
            </div>
        </section>
    </TransitionGroup>
    <!-- 放大 -->
        <section>
          <Modals/>
        </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.select_text{
    transition: all .3s;
    background-color: #51318f;
    color: #fff;
    border-radius: 5px;
}
.bg_stripe{
    color: white;
    background: repeating-linear-gradient(-55deg, #eee, #eee 2px, #ddd 2px, #ddd 4px); 
}
tr th{
    width: 90px;
    padding: 15px 0;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
}
tr td{
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    padding: 15px 10px 15px 25px;
}
.btn-class{
    text-align: center;
    background: #51318f;
    color: #fff;
    font-weight: 700;
    padding: 0.625rem 1.375rem;
    border-radius: 0.3em;
}
</style>
