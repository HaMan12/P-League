<script setup>
import { ref } from 'vue'
const chose = ref('willStart');
const handleClick = (option) => {
  chose.value = option 
}
</script>

<template>
    <section>
        <h3 class="bg-[#24292D] text-2xl text-center text-white py-3 | lg:text-[40px] lg:py-10">PLG SCHEDULE</h3>
    </section>
    <section>
        <div class="max-w-1280 mx-auto mt-10 lg:mt-20">
            <h4 class="text-center font-bold text-lg pb-4">2023-24</h4>
            <div class="flex">
                <a class="gameBtn" :class="{'afocus':chose==='willStart'}" v-on:click="handleClick('willStart')">即將開賽 (27)</a>
                <a class="gameBtn" :class="{'afocus':chose==='completed'}" v-on:click="handleClick('completed')">完賽 (93)</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
 .gameBtn{
    display: inline-block;
    margin-left: 10px;
    padding: .425em 1em;
    font-weight: 800;
    cursor: pointer;
    color: #aaa;
 }
 .afocus{
    background-color: #BB986C;
    color: white;
    transition: all .3s;
 }
</style>
