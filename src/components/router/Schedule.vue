<script setup>
import { ref, reactive, onMounted} from 'vue'

const chose = ref('willStart');
const handleClick = (option) => {
  chose.value = option 
}
</script>

<template>
    <section>
        <h3 class="title-style">PLG SCHEDULE</h3>
    </section>
    <section>
        <div class="max-w-1280 mx-auto mt-5 lg:mt-20">
            <h4 class="text-center font-bold text-lg pb-5">2023-24</h4>
            <div class="flex mx-2 | md:mx-0">
                <a class="gameBtn mr-2" :class="{'afocus':chose==='willStart'}" v-on:click="handleClick('willStart')">即將開賽 (27)</a>
                <div class="w-[1px] bg-white mt-2 | md:mt-1"></div>
                <a class="gameBtn mx-2" :class="{'afocus':chose==='completed'}" v-on:click="handleClick('completed')">完賽 (93)</a>
                <div class="w-[1px] bg-white mt-2 | md:mt-1"></div>
                <a class="gameBtn mx-2" :class="{'afocus':chose==='playoffs'}" v-on:click="handleClick('playoffs')">季後賽</a>
                <div class="w-[1px] bg-white mt-2 | md:mt-1"></div>
                <a class="gameBtn ml-2" :class="{'afocus':chose==='championship'}" v-on:click="handleClick('championship')">總冠軍賽</a>
            </div>
            <!-- 即將開賽 -->
            <transition-group name="list">
                <div class="mt-2 bg-white" v-if="chose==='willStart'">
                <div class="flex items-center flex-wrap px-4 py-3 text-mainTitle font-bold border border-bottomBorder" v-for="i in 5">
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class="lg:text-base">04/27</h5>
                        <h5 class="mb-1">(六)</h5>
                        <h6>14:30</h6>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex items-center w-3/5 md:w-1/3">
                        <div class="w-1/4 text-right text-lg font-smoothing pr-3 | md:w-1/3 md:text-3xl">0</div>
                        <div class="w-1/2 text-center | md:w-1/3">
                            <h5 class="mb-1 hidden md:block">G99</h5>
                            <h5 class="text-sm mb-1">台中洲際迷蛋<br><a href="" class="underline">追蹤賽事</a></h5>
                            <h6 class="text-sm hidden justify-center pt-2 gap-1 md:flex">
                                <img src="../../assets/icon/seat.svg" alt="進場人數" width="30">
                                0 / 0
                            </h6>
                        </div>
                        <div class="w-1/4 text-left text-lg font-smoothing pl-3 | md:w-1/3 md:text-3xl">0</div>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class=""><a href="">售票 ＞</a></h5>
                    </div>
                </div>
                </div>
            </transition-group>
            <!-- 完賽 -->            
            <transition-group name="list" >
                <div class="mt-2 bg-white" v-if="chose==='completed'">
                <div class="flex items-center flex-wrap px-4 py-3 text-mainTitle font-bold border border-bottomBorder"
                 v-for="i in 2">
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class="lg:text-base">04/27</h5>
                        <h5 class="mb-1">(六)</h5>
                        <h6>14:30</h6>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/17.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex items-center w-3/5 md:w-1/3">
                        <div class="w-1/4 text-right text-lg font-smoothing pr-3 | md:w-1/3 md:text-3xl">0</div>
                        <div class="w-1/2 text-center | md:w-1/3">
                            <h5 class="mb-1 hidden md:block">G99</h5>
                            <h5 class="text-sm mb-1">台中洲際迷蛋<br><a href="" class="underline">追蹤賽事</a></h5>
                            <h6 class="text-sm hidden justify-center pt-2 gap-1 md:flex">
                                <img src="../../assets/icon/seat.svg" alt="進場人數" width="30">
                                0 / 0
                            </h6>
                        </div>
                        <div class="w-1/4 text-left text-lg font-smoothing pl-3 | md:w-1/3 md:text-3xl">0</div>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class=""><a href="">售票 ＞</a></h5>
                    </div>
                </div>
                </div>
            </transition-group>
            <!-- 季後賽 --> 
            <transition-group name="list">
                <div class="mt-2 bg-white" v-if="chose==='playoffs'">
                <div class="flex items-center flex-wrap px-4 py-3 text-mainTitle font-bold border border-bottomBorder" v-for="i in 5">
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class="lg:text-base">04/27</h5>
                        <h5 class="mb-1">(六)</h5>
                        <h6>14:30</h6>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex items-center w-3/5 md:w-1/3">
                        <div class="w-1/4 text-right text-lg font-smoothing pr-3 | md:w-1/3 md:text-3xl">0</div>
                        <div class="w-1/2 text-center | md:w-1/3">
                            <h5 class="mb-1 hidden md:block">G99</h5>
                            <h5 class="text-sm mb-1">台中洲際迷蛋<br><a href="" class="underline">追蹤賽事</a></h5>
                            <h6 class="text-sm hidden justify-center pt-2 gap-1 md:flex">
                                <img src="../../assets/icon/seat.svg" alt="進場人數" width="30">
                                0 / 0
                            </h6>
                        </div>
                        <div class="w-1/4 text-left text-lg font-smoothing pl-3 | md:w-1/3 md:text-3xl">0</div>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class=""><a href="">售票 ＞</a></h5>
                    </div>
                </div>
                </div>
            </transition-group>
            <!-- 總冠軍賽 --> 
            <transition-group name="list">
                <div class="mt-2 bg-white" v-if="chose==='championship'">
                <div class="flex items-center flex-wrap px-4 py-3 text-mainTitle font-bold border border-bottomBorder" v-for="i in 5">
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class="lg:text-base">04/27</h5>
                        <h5 class="mb-1">(六)</h5>
                        <h6>14:30</h6>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex items-center w-3/5 md:w-1/3">
                        <div class="w-1/4 text-right text-lg font-smoothing pr-3 | md:w-1/3 md:text-3xl">0</div>
                        <div class="w-1/2 text-center | md:w-1/3">
                            <h5 class="mb-1 hidden md:block">G99</h5>
                            <h5 class="text-sm mb-1">台中洲際迷蛋<br><a href="" class="underline">追蹤賽事</a></h5>
                            <h6 class="text-sm hidden justify-center pt-2 gap-1 md:flex">
                                <img src="../../assets/icon/seat.svg" alt="進場人數" width="30">
                                0 / 0
                            </h6>
                        </div>
                        <div class="w-1/4 text-left text-lg font-smoothing pl-3 | md:w-1/3 md:text-3xl">0</div>
                    </div>
                    <div class="flex flex-col text-center w-1/5 | md:w-1/4">
                        <div class="mx-auto">
                            <img src="../../assets/img/lion.png" alt="" class="w-[85%] | md:w-[105px]">
                        </div>
                        <div class="md:mt-2">
                            <h5 class="mb-1 hidden md:block">客隊</h5>
                            <h5 class="text-sm mb-1">攻城獅</h5>
                            <h6 class="text-xs hidden md:block">Hsinchu Toplus Lioneers</h6>
                        </div>
                    </div>
                    <div class="flex justify-center text-center w-full gap-1 text-sm | md:w-1/12 md:flex-col md:gap-0">
                        <h5 class=""><a href="">售票 ＞</a></h5>
                    </div>
                </div>
                </div>
            </transition-group>
        </div>
    </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
@mixin rwd-420 {
	@media (max-width: 420px) {
		@content;
	}
}
 .gameBtn{
    display: inline-block;
    padding: .425em 1em;
    font-weight: 800;
    cursor: pointer;
    color: #aaa;
    @include rwd-768 {
        padding: .425em .5em;
        display:flex;
        justify-content:center;
        align-items:center;
	  }
      @include rwd-420 {
        padding: .2em .1em;
	  }
 }
 .afocus{
    background-color: #BB986C;
    color: white;
    transition: all .3s;
 }
 .font-smoothing{
    font-family: 'Press Start 2P';
    font-weight: 700;
    letter-spacing: 1px; 
    text-shadow: 1px 1px black; 
 }
</style>
