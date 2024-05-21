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
  const data = { imgUrls:imgUrl , isOpen: true , title:'領航員資訊',isTeam:true};
  emitter.emit('openModal', data);
}

</script>

<template>
    <section>
        <h3 class="title-style tracking-widest">TEAM</h3>
        <div class="h-[200px] bg-[#ea5504] relative z-10"></div>
        <div class="text-center bg-white -mt-[120px] text-black">
            <img src="../../../assets/img/monkey.png" width="250" class="-mt-[120px] mx-auto relative z-20">
            <h1 class="team-text">
                <b>桃園領航員</b>
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
                    <h2 class="text-center text-black font-black text-xl my-3"><i>全力以赴，蓄勢待發</i></h2>
                </div>
                <table class="mt-4 mb-5 text-black font-normal table-auto text-sm border-collapse mx-3 | md:mx-0">
                    <tbody>
                        <tr>
                            <th>核心理念</th>
                            <td>
                                璞園建築團隊於2020年加入 P. LEAGUE+，並成立「桃園領航猿」籃球隊，發展屬地主義，與桃園在地結合。
                                <br><br>
                                創意理念
                                (1) 命名：為更進一步深化與桃園「航空城」的在地連結，桃園領航猿將以英文隊名「Taoyuan Pilots」征戰新聯盟，除了彰顯主場城市桃園作為臺灣國門的驕傲外，更希望能擔任引領臺灣籃球持續前進的領航員，邀請所有熱愛籃球的人們一起創造屬於台灣職業籃球的未來！
                                <br><br>
                                (2) 猿：「猿」群居的特性，象徵團隊至上的信念；「猿」旺盛的生命力，象徵源源不絕的鬥志；「猿」敏銳的觀察力，象徵洞燭機先的戰術。領航猿以自信的微笑、喜樂飛揚的領巾、制高點的視野看這一片美麗的福爾摩沙之島，用樂觀的心態迎接所有未知的挑戰。
                                <br><br>
                                (3) 五芒星： 雖代表璞園建築在籃球界顯赫的戰績，期許領航猿能夠延續建築的態度精神在P. LEAGUE+迎接新的挑戰。而您，就是領航猿的最佳第六人，我們將全力以赴，蓄勢待發！
                            </td>
                        </tr>
                        <tr>
                            <th>品牌故事</th>
                            <td>
                                喜歡的事，做一萬個小時就能成為專家。<br>
                                對於籃球的熱情，<br>
                                就像是我們畫著圖、砌著磚的身影。<br>
                                <br>
                                日復一日的訓練<br>
                                歡笑、淚水、汗水不間斷夾雜著…<br>
                                成功並沒有捷徑，<br>
                                唯有永不放棄的奮戰精神才能往前邁進。<br>
                                <br>
                                團隊至上，大家團結一心，<br>
                                計分板的比數固然重要，但更重要的是比賽的每分每秒在場上的態度，不論比賽勝負為何，可貴的是一同努力的過程。<br>
                                <br>
                                「領航猿」與 P. LEAGUE+ 聯盟及其他五支球隊攜手合作，藉由屬地主義，與地方結合，深耕球迷，期盼能找回睽違已久的熱潮。
                                <br><br>
                                而您，就是領航猿的「最佳第六人」<br>
                                我們將全力以赴、蓄勢待發，敬請期待！！
                            </td>
                        </tr>
                        <tr>
                            <th>正式名稱</th>
                            <td>桃園璞園領航猿籃球隊</td>
                        </tr>
                        <tr>
                            <th>成立時間</th>
                            <td><strong>2020年 10月</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section :key="2" v-show="type===1" class="bg-white py-10 text-black">
            <div  class="max-w-1280 mx-auto center flex-col">
                <h2 class="font-bold my-3 text-lg | md:text-xl">桃園市立綜合體育館（桃園巨蛋）</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.106262574411!2d121.32047891545858!3d24.99650494594634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ef659999a75%3A0x20cd26a8f910d83!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5LiJ5rCR6Lev5LiA5q61MeiZnw!5e0!3m2!1szh-TW!2stw!4v1646987570053!5m2!1szh-TW!2stw" height="300" frameborder="0" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="border border-[#e3e9ef] w-full my-5"></div>
            </div>
            <div class="max-w-1280 mx-auto font-medium px-2 | md:px-0">
                    <ul class="flex gap-3 | md:gap-10">
                        <li>場館資訊</li>
                        <li>場館地址</li>
                        <li>桃園市桃園區三民路一段1號</li>
                    </ul>
                    <ul class="flex mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>聯絡電話</li>
                        <li>03-3194510</li>
                    </ul>
                    <ul class="flex  mt-2 gap-3 | md:gap-10">
                        <li class="hidden | md:w-[64px] md:block"></li>
                        <li>交通資訊</li>
                        <li>
                            <a href="https://www.dst.tycg.gov.tw/home.jsp?id=43&amp;parentpath=0,14,40" target="_blank" class="text-blue-600/100">自行前往、大眾交通工具、停車資訊</a>
                        </li>
                    </ul>
                </div>
        </section>
        <section :key="3" v-show="type===2" class="bg-white py-10 text-black">
            <div class="max-w-1280 mx-auto px-3 flex justify-between flex-wrap">
                <div class="w-full | md:w-4/5">
                    <h2 class="font-bold my-3 text-lg | md:text-xl">購票說明</h2>
                    <p class="font-bold my-3 text-base | md:text-lg">
                        售票平台：ibon售票系統網站及7-ELEVEN ibon機台
                    </p> 
                    <p class="font-bold my-3 text-base | md:text-lg">
                        開賣時間：請上桃園璞園領航猿官方Instagram帳號 @taoyuan_pilots_official查詢
                    </p>
                    <p class="mt-5 font-bold my-3 text-base | md:text-lg">更多資訊 (點擊圖片放大)</p>
                    <div class="flex flex-col gap-10 | md:flex-row">
                        <a href="javascript:;" @click="sendData('/src/assets/img/領航員資訊.jpg')">
                            <img src="../../../assets/img/領航員資訊.jpg" class="w-full | md:w-[400px]">
                        </a>
                        <a href="javascript:;" @click="sendData('/src/assets/img/領航員資訊1.jpg')">
                            <img src="../../../assets/img/領航員資訊1.jpg" class="w-full | md:w-[400px]">
                        </a>
                    </div>
                </div>
                <div class="w-full mt-5 | md:w-1/5">
                    <a href="https://ticket.ibon.com.tw/ActivityInfo/Details/38020" target="_blank" class="block btn-class mb-3">前往售票連結</a>
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
    background-color: #ea5504;
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
    background: #ea5504;
    color: #fff;
    font-weight: 700;
    padding: 0.625rem 1.375rem;
    border-radius: 0.3em;
}
</style>
