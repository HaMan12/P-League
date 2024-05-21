<script setup>
import { ref , watch  } from 'vue'
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
        <div class="h-[200px] bg-[#90b540] relative z-10"></div>
        <div class="text-center bg-white -mt-[120px] text-black">
            <img src="../../../assets/img/dream.png" width="250" class="-mt-[120px] mx-auto relative z-20">
            <h1 class="team-text">
                <b>福爾摩沙夢想家</b>
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
                    <h2 class="text-center text-black font-black text-xl my-3"><i>「一個人作夢，夢想只是空想；一群人作夢，夢想就會成真。」</i></h2>
                </div>
                <table class="mt-4 mb-5 text-black font-normal table-auto text-sm border-collapse mx-3 | md:mx-0">
                    <tbody>
                        <tr>
                            <th>核心理念</th>
                            <td>
                                每個人都是夢想家，各自擁有不同的籃球夢，而在築夢的路上彼此陪伴、相互鼓勵，堅定地朝著夢想前進，期盼臺灣的籃球環境能越來越好。我們相信「一個人作夢，夢想只是空想；一群人作夢，夢想就會成真。」
                            </td>
                        </tr>
                        <tr>
                            <th>品牌故事</th>
                            <td>
                                我們每個人都有夢！籃球，帶給了我們實現夢的機會！<br><br>
                                夢想家們因心中同樣有著對籃球的熱愛與執著，即使跨足在不同領域，仍始終與籃球有所連動。2017年夏天，秉持著共同的理念組成「Formosa Dreamers 寶島夢想家籃球隊」，代表臺灣參加東南亞職業籃球聯賽(ABL)，期許在團隊各司其職的努力下，為臺灣籃壇劃出一道全新的可能。2020年夏天，寶島夢想家不忘初衷，選擇加入新職業籃球聯盟P. LEAGUE+，並更名為「福爾摩沙夢想家」，期望能與聯盟及其他隊伍並肩為臺灣籃球奮鬥，一步一腳印，共同築出屬於臺灣的籃球夢。
                            </td>
                        </tr>
                        <tr>
                            <th>正式名稱</th>
                            <td>福爾摩沙夢想家籃球隊</td>
                        </tr>
                        <tr>
                            <th>成立時間</th>
                            <td><strong>2017年 10月</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section :key="2" v-show="type===1" class="bg-white py-10 text-black">
            <div  class="max-w-1280 mx-auto center flex-col">
                <h2 class="font-bold my-3 text-lg | md:text-xl">臺中洲際迷你蛋</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14556.963425058726!2d120.6846465!3d24.1983427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917a3ca32fd2b%3A0x5884f15b44ad3193!2z6Ie65Lit5rSy6Zqb5qOS55CD5aC06ZmE5bGs5aSa5Yqf6IO96YGL5YuV5Lit5b-D77yI5rSy6Zqb6L-35L2g6JuL77yJ!5e0!3m2!1szh-TW!2stw!4v1694240308748!5m2!1szh-TW!2stw" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="border border-[#e3e9ef] w-full my-5"></div>
            </div>
            <div class="max-w-1280 mx-auto font-medium px-2 | md:px-0">
                    <ul class="flex gap-3 | md:gap-10">
                        <li>場館資訊</li>
                        <li>場館地址</li>
                        <li>台中市北屯區崇德路三段833號</li>
                    </ul>
                    <ul class="flex mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>聯絡電話</li>
                        <li>04-24228809</li>
                    </ul>
                    <ul class="flex flex-wrap  mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>交通資訊</li>
                        <li>
                            自行開車：走環中路74快速道路至崇德交流道下閘道口轉崇德路即可抵達。臺中市區公車班次：12、127、58、700、71。
                        </li>
                    </ul>
                </div>
                <div  class="max-w-1280 mx-auto center flex-col mt-5">
                <h2 class="font-bold my-3 text-lg | md:text-xl">彰化縣立體育館</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14556.963425058726!2d120.6846465!3d24.1983427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917a3ca32fd2b%3A0x5884f15b44ad3193!2z6Ie65Lit5rSy6Zqb5qOS55CD5aC06ZmE5bGs5aSa5Yqf6IO96YGL5YuV5Lit5b-D77yI5rSy6Zqb6L-35L2g6JuL77yJ!5e0!3m2!1szh-TW!2stw!4v1694240010919!5m2!1szh-TW!2stw" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="border border-[#e3e9ef] w-full my-5"></div>
            </div>
            <div class="max-w-1280 mx-auto font-medium px-2 | md:px-0">
                    <ul class="flex gap-3 | md:gap-10">
                        <li>場館資訊</li>
                        <li>場館地址</li>
                        <li>彰化縣彰化市健興路1號</li>
                    </ul>
                    <ul class="flex mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>聯絡電話</li>
                        <li>04-7112175</li>
                    </ul>
                    <ul class="flex flex-wrap  mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>交通資訊</li>
                        <li>                    
                            可搭高鐵（須轉乘至台鐵彰化站）或搭台鐵直達彰化站後，再搭乘彰化客運前往體育場，至體育場田徑場東南門外（槌球場前）下車，再步行前往體育館。                      
                        </li>
                    </ul>
                </div>
        </section>
        <section :key="3" v-show="type===2" class="bg-white py-10 text-black">
            <div class="max-w-1280 mx-auto px-3 flex justify-between flex-wrap">
                <div class="w-full | md:w-4/5">
                    <h2 class="font-bold my-3 text-lg | md:text-xl">購票說明</h2>
                    <p class="font-bold my-3 text-base | md:text-lg">
                        ●購票方式｜全台統一超商ibon售票系統或ibon網站
                    </p> 
                    <p class="font-bold my-3 text-base | md:text-lg">
                        ●比賽地點｜406台中市北屯區崇德路三段833號 (洲際迷你蛋)
                    </p> 
                    <p class="mt-5 font-bold my-3 text-base | md:text-lg">更多資訊</p>
                </div>
                <div class="w-full mt-5 | md:w-1/5">
                    <a href="https://ticket.ibon.com.tw/Index/Sport" target="_blank" class="block btn-class mb-3">前往售票連結</a>
                    <a href="https://calendar.google.com/calendar/u/0/r?cid=c_9575c5061ea5257189219ef25afd79d952ff7b6e6c6b62ae91282a91cbf66537@group.calendar.google.com" target="_blank" class="block btn-class"> 加入Google 行事曆</a>
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
    background-color: #90b540;
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
    background: #90b540;
    color: #fff;
    font-weight: 700;
    padding: 0.625rem 1.375rem;
    border-radius: 0.3em;
}
</style>
