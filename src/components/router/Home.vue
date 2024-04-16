<script setup>
import { onMounted, reactive } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
onMounted(() => {
  const mySwiper = new Swiper('.mySwiper', {
    loop:true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
  var swiper = new Swiper(".gameSwiper", {
      slidesPerView: 1,
      freeMode: true,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
      768: {
        slidesPerView: 2,
    },
  },
    });
});
const gameWeek = reactive([
  {
    week: 23,
    matches: [
      {
        match: 'G90',
        date: '04/13 (六)',
        imageUrl1: '../../src/assets/img/kings.png',
        imageUrl2: '../../src/assets/img/dream.png',
        teamName1: '國王',
        teamName2: '夢想家',
        score1: 116,
        score2: 94
      },
      {
        match: 'G91',
        date: '04/13 (六)',
        imageUrl1: '../../src/assets/img/lion.png',
        imageUrl2: '../../src/assets/img/17.png',
        teamName1: '攻城獅',
        teamName2: '鋼鐵人',
        score1: 116,
        score2: 94
      },
      {
        match: 'G92',
        date: '04/14 (日)',
        imageUrl1: '../../src/assets/img/monkey.png',
        imageUrl2: '../../src/assets/img/dream.png',
        teamName1: '領航猿',
        teamName2: '夢想家',
        score1: 80,
        score2: 97
      },
      {
        match: 'G93',
        date: '04/14(日)',
        imageUrl1: '../../src/assets/img/bunbun.png',
        imageUrl2: '../../src/assets/img/17.png',
        teamName1: '勇士',
        teamName2: '鋼鐵人',
        score1: 98,
        score2: 69
      },
    ]
  },
  {
    week: 24,
    matches: [
    {
        match: 'G94',
        date: '04/19 (五)',
        imageUrl1: '../../src/assets/img/kings.png',
        imageUrl2: '../../src/assets/img/dream.png',
        teamName1: '國王',
        teamName2: '夢想家',
        score1: '16-14',
        score2: '20-12'
      },
      {
        match: 'G95',
        date: '04/20 (六)',
        imageUrl1: '../../src/assets/img/bunbun.png',
        imageUrl2: '../../src/assets/img/17.png',
        teamName1: '勇士',
        teamName2: '鋼鐵人',
        score1: '14-17',
        score2: '7-25'
      },
      {
        match: 'G96',
        date: '04/21 (日)',
        imageUrl1: '../../src/assets/img/monkey.png',
        imageUrl2: '../../src/assets/img/lion.png',
        teamName1: '領航猿',
        teamName2: '攻城獅',
        score1: '20-12',
        score2: '16-13'
      },
      {
        match: 'G97',
        date: '04/21 (日)',
        imageUrl1: '../../src/assets/img/dream.png',
        imageUrl2: '../../src/assets/img/17.png',
        teamName1: '夢想家',
        teamName2: '鋼鐵人',
        score1: '20-12',
        score2: '7-25'
      },
    ]
  },
  {
    week: 25,
    matches: [
    {
        match: 'G98',
        date: '04/27 (六)',
        imageUrl1: '../../src/assets/img/lion.png',
        imageUrl2: '../../src/assets/img/dream.png',
        teamName1: '攻城獅',
        teamName2: '夢想家',
        score1: '16-13',
        score2: '20-12',
      },
      {
        match: 'G99',
        date: '04/27 (六)',
        imageUrl1: '../../src/assets/img/bunbun.png',
        imageUrl2: '../../src/assets/img/kings.png',
        teamName1: '勇士',
        teamName2: '國王',
        score1: '14-17',
        score2: '16-14'
      },
      {
        match: 'G100',
        date: '04/28 (日)',
        imageUrl1: '../../src/assets/img/17.png',
        imageUrl2: '../../src/assets/img/dream.png',
        teamName1: '鋼鐵人',
        teamName2: '夢想家',
        score1: '7-25',
        score2: '20-12'
      },
      {
        match: 'G101',
        date: '04/28 (日)',
        imageUrl1: '../../src/assets/img/monkey.png',
        imageUrl2: '../../src/assets/img/kings.png',
        teamName1: '領航員',
        teamName2: '國王',
        score1: '20-12',
        score2: '16-14'
      },
    ]
  },
]);

</script>

<template>
    <div class="swiper gameSwiper">
    <div class="swiper-wrapper navigations">
      <div class="swiper-slide !justify-start pl-5 week"  :class="{ '-ml-8': index !== 0 }" v-for="(item,index) in gameWeek" :key="index">
        <div class="flex">
          <div class="weekDate"><h5 class="text-p">例行賽</h5><h5 class="text-p !text-sm">WEEK {{ item.week }}</h5></div>
          <div class=" " v-for="(game,gameIndex) in item.matches" :key="gameIndex">
            <div class="game" :class="'underline-' + (gameIndex % 2 === 0 ? 'even' : 'odd')">
              <h3 class="game-gpa">
                <p>{{ game.match }}</p><p>{{ game.date}}</p>
              </h3>
              <div class="game-gpa">
                <h4 class="flex gap-1">
                  <img :src="game.imageUrl1" class="!w-[20px]">
                  <p>{{ game.teamName1 }}</p>
                </h4>
                <h4>
                  <p>{{ game.score1 }}</p>
                </h4>
              </div>
              <div class="game-gpa">
                <h4 class="flex gap-1">
                  <img :src="game.imageUrl2" class="!w-[20px]">
                  <p>{{ game.teamName2 }}</p>
                </h4>
                <h4>
                  <p>{{ game.score2 }}</p>
                </h4>
              </div>
              <div class="gamebox">
                <a href="https://ticket.ibon.com.tw/Index/Sport" target="_blank">
                  <div class="mt-6 text-black bg-[#bb986c] w-full p-1 justify-between">
                    <span class="block">購票入場</span>
                    <i class="fa-solid fa-angle-right block"></i>
                 </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner-slide"><img src="../../assets/banner/banner.jpg" title="shop">
        <div class="text-sm absolute left-[20%] -bottom-8 font-black flex gap-3 | md:text-xl md:-bottom-52 md:left-[40%]">
          <p class="pt-1">#黑潮來襲！全新系列低調上市！</p>
          <router-link to="#" class="more  text-sm | md:text-xl"><span class="inline-block">了解更多</span></router-link>
        </div>
      </div>
      <div class="swiper-slide banner-slide"><img src="../../assets/banner/banner1.png" title="shop" height="824">
        <div class="absolute bottom-6 left-[20%]  font-black text-sm flex gap-3 | md:bottom-10 md:text-xl md:left-[40%]">
          <p class="pt-1">#唯有籃球，才是一切的答案</p>
          <router-link to="#" class="more text-sm | md:text-xl"><span class="inline-block">了解更多</span></router-link>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
 .swiper {
      width: 100%;
      height: 100%;
    }
  .swiper-slide.week{
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto !important; 
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .more{
    background-color: #BB986C;
    padding:3px 20px 3px 20px;
    border-radius: 20px;
    transition: background-color .3s;
    &:hover{
      background-color: #8E6F4D;
    }
  }
  .swiper-button-next, .swiper-button-prev{
    display: none;
    @include rwd-768 {
      display: flex; 
	}
  }
  .gameSwiper:hover .swiper-button-next,
  .gameSwiper:hover .swiper-button-prev {
    display: flex; 
    color: #BB986C;
    cursor: pointer;
  }
  .swiper-button-next::after,.swiper-button-prev::after{
    font-size: 18px;
    color: #BB986C;
  }
  .weekDate{
    width: 120px;
    height: 88px;
    text-align: center;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 8px;
    margin: auto 0;
    border-radius: 0;
    overflow: hidden;
    position: relative;
  }
  .game{
    position: relative;
    width: 200px;
    height: 88px;
    font-size: 12px;
    padding: 6px 10px;
    color: #bbb;
    font-weight: 900;
    cursor: pointer;
    background: linear-gradient(135deg, #000 0%, #222 55%, #111 100%);
      &:hover .gamebox{
        display: block;
      }
      &:hover .gamebox>a>div{
        display: flex;
      }
  }
  .gamebox>p{
    display: none;
  }
  .gamebox{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .text-p{
    font-size: 12px;
    line-height: 21px;
    color: #BB986C;
    font-weight: 600;
  }
  .underline-even {
    border-bottom: 2px solid  #90b540; 
  }
  .underline-odd {
    border-bottom: 2px solid red;
 }
 .game-gpa{
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
</style>
