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
  const data = { imgUrls:imgUrl , isOpen: true , title:'鋼鐵人資訊',isTeam:true};
  emitter.emit('openModal', data);
}
</script>

<template>
    <section>
        <h3 class="title-style tracking-widest">TEAM</h3>
        <div class="h-[200px] bg-[#de0028] relative z-10"></div>
        <div class="text-center bg-white -mt-[120px] text-black">
            <img src="../../../assets/img/17.png" width="250" class="-mt-[120px] mx-auto relative z-20">
            <h1 class="team-text">
                <b>高雄鋼鐵人</b>
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
                    <h2 class="text-center text-black font-black text-xl my-3"><i>鋼鐵意志重啟，南霸天籃球旋風再起 #ONESOUTH</i></h2>
                </div>
                <table class="mt-4 mb-5 text-black font-normal table-auto text-sm border-collapse mx-3 | md:mx-0">
                    <tbody>
                        <tr>
                            <th>核心理念</th>
                            <td>
                                我們有著鋼鐵人般的意志和決心，<br>
                                就算對手再強，從不懼戰、不怕失敗，<br>
                                就算戰得傷痕累累，一樣拚盡全力、追尋勝利！<br><br>
                                作為代表高雄的隊伍，鋼鐵人會奮戰到底，<br>
                                讓高雄成為一個值得所有球迷驕傲的城市！<br>
                            </td>
                        </tr>
                        <tr>
                            <th>品牌故事</th>
                            <td>
                                高雄鋼鐵人「Kaohsiung Steelers」是成立於2021年的臺灣職業籃球隊，以高雄市作為球隊所在地、鳳山體育館作為球隊主場館，正式參與P. LEAGUE+ 聯盟賽事。<br>
                                <br>
                                高雄鋼鐵人的命名取自高雄市以鋼鐵業等重化工業為發展重點。球團秉持鋼鐵般的堅持之心，打造鋼鐵意志的籃球風格，於港都向下紮根、服務廣大高雄及南臺灣的籃球迷，帶來最精彩的職業籃球盛事。<br>
                            </td>
                        </tr>
                        <tr>
                            <th>正式名稱</th>
                            <td>高雄17直播鋼鐵人職業籃球隊</td>
                        </tr>
                        <tr>
                            <th>成立時間</th>
                            <td><strong>2021年 5月</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section :key="2" v-show="type===1" class="bg-white py-10 text-black">
            <div  class="max-w-1280 mx-auto center flex-col">
                <h2 class="font-bold my-3 text-lg | md:text-xl">高雄市鳳山體育館</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14731.505694390533!2d120.3544999!3d22.6210894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33230e159cb1b0c5!2z6bOz5bGx6auU6IKy6aSo!5e0!3m2!1szh-TW!2stw!4v1632361920799!5m2!1szh-TW!2stw" frameborder="0" style="border:0; width: 100%; height: 350px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="border border-[#e3e9ef] w-full my-5"></div>
            </div>
            <div class="max-w-1280 mx-auto font-medium px-2 | md:px-0">
                    <ul class="flex gap-3 | md:gap-10">
                        <li>場館資訊</li>
                        <li>場館地址</li>
                        <li>高雄市鳳山區體育路65號</li>
                    </ul>
                    <ul class="flex mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>聯絡電話</li>
                        <li>07-719-8998</li>
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
                    <h2 class="font-bold my-3 text-lg | md:text-xl">購票說明</h2><br>
                    <p class="font-bold my-3 text-base | md:text-lg"> 
                        售票平台：ibon售票系統網站及7-ELEVEN ibon機台
                    </p>
                    <p class="font-bold my-3 text-base | md:text-lg"> 
                        開賣時間：請上鋼鐵人官方社群帳號查詢
                    </p>
                    <p class="mt-5 font-bold my-3 text-base | md:text-lg">更多資訊 (點擊圖片放大)</p>
                    <div class="flex flex-col gap-10 mt-10 | md:flex-row">
                        <a href="javascript:;" @click="sendData('/src/assets/img/鋼鐵人資訊.jpg')">
                            <img src="../../../assets/img/鋼鐵人資訊.jpg" class="w-full | md:w-[350px]">
                        </a>
                        <a href="javascript:;" @click="sendData('/src/assets/img/鋼鐵人資訊1.jpg')">
                            <img src="../../../assets/img/鋼鐵人資訊1.jpg" class="w-full | md:w-[350px]">
                        </a>
                        <a href="javascript:;" @click="sendData('/src/assets/img/鋼鐵人資訊2.jpg')">
                            <img src="../../../assets/img/鋼鐵人資訊2.jpg" class="w-full | md:w-[350px]">
                        </a>
                    </div>
                </div>
                <div class="w-full mt-5 | md:w-1/5">
                    <a href="https://ticket.ibon.com.tw/ActivityInfo/Details/38003" target="_blank" class="block btn-class mb-3">前往售票連結</a>
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
    background-color: #de0028;
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
    background: #de0028;
    color: #fff;
    font-weight: 700;
    padding: 0.625rem 1.375rem;
    border-radius: 0.3em;
}
</style>
