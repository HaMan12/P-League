<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

onMounted(()=>{
    // 當使用者第一次進入需要刷新，因為我要套用自訂css
    const isSearchPage = window.location.href.includes('search#gsc.tab');
    const hasReloaded = localStorage.getItem('searchReloaded');
  
  if (isSearchPage && !hasReloaded) {
    localStorage.setItem('searchReloaded', 'true');
    window.location.reload();
  }

    const cx = '527b98696cd9e40b9';
    const gcseScript = document.createElement('script');
    gcseScript.type = 'text/javascript';
    gcseScript.async = true;
    gcseScript.src = `https://cse.google.com/cse.js?cx=${cx}`;
    const scriptTag = document.getElementsByTagName('script')[0];
    scriptTag.parentNode.insertBefore(gcseScript, scriptTag);
})
// 離開之前刪除localStorage
onBeforeUnmount(() => {
  localStorage.removeItem('searchReloaded');
});
</script>

<template>
    <section>
        <h3 class="title-style !text-red">SEARCH</h3>
    </section>
    <section class="px-10 py-5 bg-[#1b1b1b] min-h-[600px] | md:px-20 lg:py-10">
        <div class="gcse-searchbox"></div>
        <div class="gcse-searchresults"></div>
    </section>
</template>

<style scoped lang="scss">
</style>
