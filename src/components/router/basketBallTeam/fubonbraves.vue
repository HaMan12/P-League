<script setup>
import { ref , watch , reactive } from 'vue'
import { useBasketballItem } from '../../../store/team.js'

const navItem = useBasketballItem().navItem;

const type = ref(0);
const selectItem =(idx)=>{
    type.value = idx;
}

</script>

<template>
    <section>
        <h3 class="title-style tracking-widest">TEAM</h3>
        <div class="h-[200px] bg-[#008fc7] relative z-10"></div>
        <div class="text-center bg-white -mt-[120px] text-black">
            <img src="../../../assets/img/bunbun.png" width="250" class="-mt-[120px] mx-auto relative z-20">
            <h1 class="team-text">
                <b>台北富邦勇士</b>
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
        <section key="1" v-show="type===0" class="bg-white py-10">
            <div class="max-w-1280 mx-auto">
                <div class="bg_stripe p-5 mx-3 | md:mx-0">
                    <h2 class="text-center text-black font-black text-xl my-3"><i>勇不止息</i></h2>
                </div>
                <table class="mt-4 mb-5 text-black font-normal table-auto text-sm border-collapse mx-3 | md:mx-0">
                    <tbody>
                        <tr>
                            <th>核心理念</th>
                            <td>
                                「富邦勇士隊」的故事以驍勇善戰的勇士核心價值 – 「勇氣」為起點，貫穿每一個賽季，並賦予隊伍前所未有的能力和熱情，去創造屬於富邦勇士傳奇性的故事。這是一條創新且不斷改寫歷史的路程，而勇氣將帶領隊員們超越每次的不可能，讓追求理想的熱情「勇不止息」。
                            </td>
                        </tr>
                        <tr>
                            <th>品牌故事</th>
                            <td>
                                「2014年「富邦勇士隊」正式納入富邦金控旗下，富邦集團以強烈的企圖心和職業規格打造球隊形象，在SBL第12季重新出發，秉持「勇不止息」的核心精神，勇士隊不斷尋求突破與提升，終於在SBL第16季 (2018-2019) 奪下隊史首冠。<br><br>

                                富邦勇士的目標不僅贏得聯賽冠軍，更期盼提升台灣籃球整體環境，因此在2019年8月宣布加盟ASEAN Basketball League，簡稱 ABL，以立足台灣、放眼亞洲的經營理念投入亞洲職籃。並與臺北市政府攜手合作，冠名「臺北富邦勇士籃球隊」，同時選擇國內首屈一指的臺北和平籃球館為主場場館，致力推動主場經營。<br><br>

                                2020年富邦勇士參與 P. LEAGUE+ 的創立，以具體行動推動國內職籃發展，同步保留ABL會籍雙軌經營，持續跟隨母公司富邦金控「成為亞洲一流金融機構」的願景前進，為邁向亞洲指標性籃球隊而努力。 <br><br>
                            </td>
                        </tr>
                        <tr>
                            <th>正式名稱</th>
                            <td>臺北富邦勇士籃球隊</td>
                        </tr>
                        <tr>
                            <th>成立時間</th>
                            <td>2014年 9月</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section key="2" v-show="type===1" class="bg-white py-10 text-black">
            <div  class="max-w-1280 mx-auto center flex-col">
                <h2 class="font-bold my-3 text-lg | md:text-xl">和平籃球館</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14461.497753302403!2d121.5453266!3d25.0213639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45a5db9944b0fce9!2z5Y-w5YyX5ZKM5bmz57GD55CD6aSo!5e0!3m2!1szh-TW!2stw!4v1602816201286!5m2!1szh-TW!2stw" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </section>
        <section key="3" v-show="type===2" class="bg-white py-10 text-black">
            <div class="max-w-1280 mx-auto px-3 flex justify-between items-center">
                <div>
                    <h2 class="font-bold my-3 text-lg | md:text-xl">購票說明</h2>
                    <p class="font-bold my-3 text-base | md:text-lg"> 臺北富邦勇士售票網 / APP <br>
                        電腦版用戶，請至網頁搜尋「臺北富邦勇士官方售票網」 <br>
                        Android用戶，請至「Play商店」應用程式內搜尋「富邦勇士售票」 <br>
                        iOS用戶，請至「App store」應用程式內搜尋「富邦勇士售票」 <br>
                    </p>
                    <p class="mt-5 font-bold my-3 text-base | md:text-lg">更多資訊</p>
                </div>
                <div>
                    <a href="https://tix.fubonbraves.com/UTK0101_" target="_blank" class="block btn-class mb-3">前往售票連結</a>
                    <a href="https://workspace.google.com/products/calendar/?hl=zh-TW" target="_blank" class="block btn-class"> 加入Google 行事曆</a>
                </div>
            </div>
        </section>
    </TransitionGroup>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.select_text{
    transition: all .3s;
    background-color: #008fc7;
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
    background: #008fc7;
    color: #fff;
    font-weight: 700;
    padding: 0.625rem 1.375rem;
    border-radius: 0.3em;
}
</style>
