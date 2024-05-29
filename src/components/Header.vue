<script setup>
import { ref,onMounted } from 'vue';
const menuItems = ref([
  { 
    label: '賽程 / 比分', 
    url: '/schedule' 
  },
  { 
    label: '戰績', 
    url: '/record' 
  },
  { 
    label: '數據', 
    url: '#',
    subMenuItems: [
      { label: '綜合排行', url: '/raking' },
      { label: '特殊表現', url: '/performance' },
      { label: '球隊數據', url: '/team' },
      { label: 'TEAM CHART', url: '/chart' }
    ]
  },
  { 
    label: '消息', 
    url: '#',
    subMenuItems: [
      { label: '新聞總攬', url: '/news' },
      { label: '照片圖輯', url: '/album' },
      { label: '精彩影音', url: '/video' }
    ]
  },
  { 
    label: '球隊',    
    url: '#',
    subMenuItems: [
      { label: '台北富邦勇士', url: '/fubonbraves' },
      { label: '新北國王', url: '/newtaipeikings' },
      { label: '桃園璞園領航猿', url: '/pilots' },
      { label: '新竹御頂攻城獅', url: '/lioneers' },
      { label: '福爾摩沙夢想家', url: '/formosadreamers' },
      { label: '高雄17直播鋼鐵人', url: '/steelers' }
    ],
    ItemsImg: ['src/assets/img/bunbun.png', 'src/assets/img/kings.png', 'src/assets/img/monkey.png', 'src/assets/img/lion.png', 'src/assets/img/dream.png', 'src/assets/img/17.png'],
    ItemsText: ['簡介、主場、售票資訊']
  },
  { 
    label: '關於', 
    url: '#',
    subMenuItems: [
      { label: '聯盟', url: '/about' },
    ]
  },
  { 
    label: '購票', 
    url: '#',
    subMenuItems: [
      { label: '台北富邦勇士', url: 'https://tix.fubonbraves.com/UTK0101_' },
      { label: '新北國王', url: 'https://newtaipeikings.kktix.cc/events/jry6t35jtui?fbclid=IwAR3t44PJmnIJusVYXJcIK3hpGmicwYwF8qT6v0f-gywAGgDy-zZkth7JNLk' },
      { label: '桃園璞園領航猿', url: 'https://ticket.ibon.com.tw/ActivityInfo/Details/38020' },
      { label: '新竹御頂攻城獅', url: 'https://tixcraft.com/activity/detail/23_lioneers_p' },
      { label: '福爾摩沙夢想家', url: 'https://ticket.ibon.com.tw/Index/Sport' },
      { label: '高雄17直播鋼鐵人', url: 'https://ticket.ibon.com.tw/ActivityInfo/Details/38003' }
    ]
  },
  { 
    label: '商品',
    url: '/commodity' 
  }
]);
//展示pc選單
const showSubMenus = ref(Array(menuItems.value.length).fill(false));
function showSubMenu(index) {
  showSubMenus.value[index] = true;
}
function hideSubMenu(index) {
  showSubMenus.value[index] = false;
}
// 漢堡選單開關
const menu = ref(false);
const toggleMeau =()=>{
  menu.value = !menu.value
}
// 漢堡選單+
const activeIndex = ref(null);
const toggleOn = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  } 
};
//header置頂
const isScrolled = ref(false);
const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isScrolled.value = scrollTop >= 300;
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
</script>

<template>
  <header class="xl:mx-7">
    <div :class="{ 'scroll-to-top': isScrolled }" class="menu-fixed">
      <div class="pt-4 pb-1 justify-end items-center mr-6 hidden | md:flex">
      <div class="center">
        <a href="https://www.facebook.com/PLEAGUE.official" class="social_icon" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/p.league.official/?fbclid=IwAR0N6N2QygJvYA53GmHf6D9aPG4gpik4bIfUot5WNij0rWmOkJe8EiqaPBk" class="social_icon" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/c/PLEAGUEofficial/featured" class="social_icon" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://twitter.com/P_LEAGUE_EN" class="social_icon" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9vcGVuLmZpcnN0b3J5Lm1lL3Jzcy91c2VyL2NrdXRmeTBycDk0YWkwOTQya3pod205a3U=" class="social_icon" target="_blank"><i class="fa-solid fa-radio"></i></a>
        <a href="https://www.linkedin.com/company/p-league/" class="social_icon" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
      </div>
      <div class="flex mt-3 ml-3 relative z-50">
          <div class="mr-10">
            <a href="/Home">
              <img src="../assets/icon/pleague_logo.png" alt="p+logo" class="relative w-[50px] | md:bottom-5 md:w-[80px]">
           </a>
          </div>
          <div class="items-center hidden | lg:flex">
            <ul class="flex h-full items-center nav-hover">
              <li v-for="(menuItem, index) in menuItems" :key="index" class="relative" @mouseover="showSubMenu(index)" @mouseleave="hideSubMenu(index)">
                <router-link v-if="menuItem.url" :to="menuItem.url" class="nav-link">{{ menuItem.label }}</router-link>
                 <transition name="fade">
                    <ul v-show="showSubMenus[index]" class="dropdown-menu" :class="{'buyTick':menuItem.label==='購票'}">
                      <li v-for="(subMenuItem, subIndex) in menuItem.subMenuItems" :key="subIndex"><a :href="subMenuItem.url">
                        <div class="flex gap-2">
                          <div class="center">
                            <img v-if="menuItem.ItemsImg && menuItem.ItemsImg[subIndex]" :src="menuItem.ItemsImg[subIndex]" alt="Image" width="36"/>
                          </div>
                          <div :class="{'buyTick-icon':menuItem.label==='購票'}"> {{ subMenuItem.label }}
                            <p v-if="menuItem.ItemsText" class="sub-menu-text">{{ menuItem.ItemsText[0]}}</p>
                            <i class="fa-solid fa-arrow-right" v-if="menuItem.label==='購票'"></i>
                          </div>
                        </div>
                      </a></li>
                    </ul>
                 </transition>
              </li>
            </ul>
          </div>
          <div class="flex items-center justify-end flex-1 nav-icon">
            <div class="text-2xl mr-4 | lg:hidden cursor-pointer" v-on:click="toggleMeau">
              <i class="fa-solid fa-bars"></i>
            </div>
            <router-link to="/search"><i class="fa-solid fa-magnifying-glass"></i></router-link>
            <router-link to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
            <router-link to="/login" class="px-4 md:px-9 h-[46px] center"><i class="fa-regular fa-user"></i></router-link>
          </div>
      </div>
    </div>
      <!-- 漢堡選單 -->
    <aside class="menu" :class="{ 'menu-open': menu }">
        <div class="flex justify-between px-4 mb-4">          
            <a href="/Home">
              <img src="../assets/icon/pleague_logo.png" alt="p+logo" width="55" class=""> 
           </a>  
          <div class="center text-3xl  cursor-pointer" v-on:click="menu=false">
            <i class="fa-solid fa-xmark"></i> 
          </div>
        </div>
        <div>
          <ul>
            <li v-for="(menuItem, index) in menuItems" :key="index" class="border-b-2">
              <a :href="menuItem.url" class="px-7 py-6 block text-base font-bold relative tracking-widest" v-on:click="toggleOn(index)">{{ menuItem.label }}
                <button type="button" class="mb-dropdown" :class="{ 'on': activeIndex === index }" v-show="menuItem.subMenuItems"></button>
              </a>
                <ul class="submenu" :class="{ 'show-mbMenu': activeIndex === index }" v-if="menuItem.subMenuItems">
                  <li v-for="(subMenuItem, subIndex) in menuItem.subMenuItems" :key="subIndex" class="pb-3"><a :href="subMenuItem.url" class="block focus:text-[#BB986C]">
                     {{ subMenuItem.label }}</a>
                  </li>
                </ul>
            </li>
          </ul>
        </div>  
    </aside>
  </header>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.menu-fixed {
    top: -100px;
}
.scroll-to-top {
    position: fixed;
    background-color: #000;
    width: 100%;
    top: 0;
    left: 50%;
    transform:translate(-50%);
    right: 0;
    z-index: 1000;
    transition: top 0.3s ease;
    @include rwd-768 {
      position: relative; 
	  }
}
.fade-enter-active, .fade-leave-active {
  transform: translateY(0px);
  transition: all .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.social_icon {
  display: inline-block;
  padding-left: 1.5rem;
}
.social_icon>i{
    padding: 0 5px;
    font-size: 16px;
}
.social_icon:hover .fa-brands,
.social_icon:hover .fa-solid {
  color: #bb986c;
}
.nav-link{
  font-size: 16px;
  font-weight: 900;
  margin: 0 25px;
  transition: color .3s;
}
.nav-hover>li{
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color:#BB986C;
  }
}
.nav-icon > a:not(:last-child) {
  padding: 0 40px;
  border-right: 1px solid #333;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;

  @include rwd-768 {
    padding: 0 12px;
    border-right:none;
	}
}
.nav-icon >a >i{
  font-size: 20px;
  @include rwd-768 {
    font-size: 22px;
	}
}
.dropdown-menu{
  position: absolute;
  top:80%;
  left: 10%;
  width: 198px;
}
.dropdown-menu>li{
  font-weight: 900;
  color: rgb(75 ,86 ,107);
  background-color: #fff;
  border-bottom:1px solid #e3e9ef;

  &:hover {
    color:#BB986C;
  }
}
.dropdown-menu>li>a{
  display: inline-block;
  padding:8px 10px;
  width: 100%;
}
.sub-menu-text{
  color: #7d879c;
  font-size: 70%;
}
.buyTick {
  border: 1px solid #bb986c;
  >li {
    background-color: #000;
    color: #bb986c;
    border-bottom: none;
    transition: all .1s;

    &:hover {
      background-color: #bb986c;
      color: #000;
    }
  }
}
.buyTick-icon{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu{
  max-width: 355px;
  opacity: .93;
  width: 85vw;
  background-color: #000;
  padding-top: 1rem !important;
  position: fixed;
  top: 0;
  left: -24rem;
  height: 100%;
  transition: left 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.25s, box-shadow 0.3s 0.25s, transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.25s;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  z-index: 50;
}
.menu-open{
  left: 0rem;
}
.mb-dropdown{
  position: absolute;
  width: 16px;
  height: 16px;
  right: 20px;
  top: 50%;
  display: block;
  transform: translateY(-50%);
}
.mb-dropdown::before{
  content: "";
    background-color: #fff;
    width: 14px;
    height: 2px;
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    transition: transform 0.4s ease;
}
.mb-dropdown::after{
  content: "";
    background-color: #fff;
    width: 14px;
    height: 2px;
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    transform: rotate(90deg);
    transition: transform 0.4s ease;
}
.mb-dropdown.on::after{
  transform: rotate(0deg);
}
.submenu{
  max-height: 0;
  overflow: hidden;
  transition: max-height .6s ease;
  padding-left:40px;
  margin-right: 25px;
  font-weight: 700;
}
.show-mbMenu {
  display: block;
  max-height: 500px; 
  overflow: hidden;
  transition: max-height 2s ease-out;
}
</style>
