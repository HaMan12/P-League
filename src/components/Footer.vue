<script setup>
import { ref,onMounted } from 'vue';

  const goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goTopLeft = ref('-100px'); 
  const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 200) {
        goTopLeft.value = '50px'; 
      } else {
        goTopLeft.value = '-100px'; 
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
</script>

<template>
    <footer class="relative">
        <div class="max-w-1280 mx-auto text-center py-10">
          <span>如有侵權疑慮，請寄信給我</span>
            <a href="mailto:bdbh902@gmail.com" class="underline tracking-wider pl-2">
                 <i class="fa-solid fa-envelope"></i>
                 bdbh902@gmail.com</a>
            <p class="pt-3 tracking-widest">版型參考P+網站，此頁僅做練習作品使用</p>
        </div>
        <div class="fixed bottom-20 z-50 ease-in-out duration-300" :style="{ right: goTopLeft }">
            <div class="goTop center" @click="goTop">
                <i class="fa-solid fa-caret-up text-2xl"></i>
            </div>
         </div>
    </footer>
</template>

<style scoped lang="scss">
.goTop{
    background-color: #bb986c;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
      &:hover {
        opacity: .8;
      }
}
</style>
