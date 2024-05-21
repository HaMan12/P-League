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
  const data = { imgUrls:imgUrl , isOpen: true , title:'新北國王資訊',isTeam:true};
  emitter.emit('openModal', data);
}
</script>

<template>
    <section>
        <h3 class="title-style tracking-widest">TEAM</h3>
        <div class="h-[200px] bg-[#ffe600] relative z-10"></div>
        <div class="text-center bg-white -mt-[120px] text-black">
            <img src="../../../assets/img/kings.png" width="250" class="-mt-[120px] mx-auto relative z-20">
            <h1 class="team-text">
                <b>新北國王</b>
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
                    <h2 class="text-center text-black font-black text-xl my-3"><i>#CrowntheCity</i></h2>
                </div>
                <table class="mt-4 mb-5 text-black font-normal table-auto text-sm border-collapse mx-3 | md:mx-0">
                    <tbody>
                        <tr>
                            <th>核心理念</th>
                            <td>
                                新北國王籃球隊由王文祥董事長率領家族成員成立，承襲王永慶家族支持運動的精神，以結合體育、生活技能、永續發展、回饋社會公益為核心經營理念，盼協助培養身心靈健全的體育人才，結合社區發展，讓關懷充滿台灣每個角落。
                                <br>
                                <br>
                                新北市擁有多樣的地形，超過400萬人口是最大的移居城市，豐富的人文特色集結在一座城市，是全台灣最有潛力的城市之一，新北國王希望透過籃球的力量，喚醒每位新北人內心的王者，一起榮耀城市，榮耀新北市！
                            </td>
                        </tr>
                        <tr>
                            <th>品牌故事</th>
                            <td>
                                籃球，對我們來說不只是場上血脈噴張的灌籃與三分球，而是如何透過籃球，凝聚城市的力量，我們用籃球讓城市充滿激情，你們的歡呼聲，讓運動員變得更強，激發內心潛在的力量，讓每個人心靈都提升到另一個境界。 <br> <br>

                                新北國王希望透過籃球，啟發這座擁有豐富人文色彩的城市，喚醒每個人心中的王者，這些，不只是球場上，而是城市每個角落，新北市，你們所散發的光彩，遠超越皇冠的光輝。這道光，穿梭在每個街區，是你們賦予這座城市無上光榮，照亮整個國度。在這時刻，讓新北國王跟著你們一起榮耀新北市，<br>
                                <br>

                                #CrowntheCity
                            </td>
                        </tr>
                        <tr>
                            <th>正式名稱</th>
                            <td>新北國王籃球隊</td>
                        </tr>
                        <tr>
                            <th>成立時間</th>
                            <td>2021年 4月</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section :key="2" v-show="type===1" class="bg-white py-10 text-black">
            <div  class="max-w-1280 mx-auto flex-col | md:min-h-[400px]">
                <h2 class="font-bold my-3 text-lg | md:text-xl">新北市立新莊體育館</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8093118630427!2d121.44961731500642!3d25.040544583969364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a870cf4ce0e3%3A0x214507b0aedfaf23!2zMjQy5paw5YyX5biC5paw6I6K5Y2A5Lit6I-v6Lev5LiA5q61NzXomZ8!5e0!3m2!1szh-TW!2stw!4v1632360296813!5m2!1szh-TW!2stw" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </section>
        <section :key="3" v-show="type===2" class="bg-white py-10 text-black">
            <div class="max-w-1280 mx-auto px-3 flex justify-between flex-wrap">
                <div class="w-full | md:w-4/5">
                    <h2 class="font-bold my-3 text-lg | md:text-xl">購票說明</h2>
                    <p class="font-bold my-3 text-base | md:text-lg"> 售票平台｜KKTix<br>
                        開賣時間｜請上國王官方社群帳號查詢
                    </p>
                    <p class="mt-5 font-bold my-3 text-base | md:text-lg">更多資訊 (點擊圖片放大)</p>
                    <div class="flex flex-col gap-10 | md:flex-row">
                        <a href="javascript:;" @click="sendData('/src/assets/img/新北國王資訊.jpg')">
                            <img src="../../../assets/img/新北國王資訊.jpg" class="w-full | md:w-[400px]">
                        </a>
                        <a href="javascript:;" @click="sendData('/src/assets/img/新北國王資訊1.jpg')">
                            <img src="../../../assets/img/新北國王資訊1.jpg" class="w-full | md:w-[400px]">
                        </a>
                    </div>
                </div>
                <div class="w-full mt-5 | md:w-1/5">
                    <a href="https://newtaipeikings.kktix.cc/events/jry6t35jtui?fbclid=IwAR3t44PJmnIJusVYXJcIK3hpGmicwYwF8qT6v0f-gywAGgDy-zZkth7JNLk" target="_blank" class="block btn-class mb-3">前往售票連結</a>
                    <a href="https://workspace.google.com/products/calendar/?hl=zh-TW" target="_blank" class="block btn-class"> 加入Google 行事曆</a>
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
    background-color: #ffe600;
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
    background: #ffe600;
    color: #fff;
    font-weight: 700;
    padding: 0.625rem 1.375rem;
    border-radius: 0.3em;
}
</style>
