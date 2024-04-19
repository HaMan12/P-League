<script setup>


</script>

<template v-cloak class="relative">
   <div class="main-content">
       <Header />
       <router-view />
   </div>
   <Footer />
</template>

<style scoped>
.main-content {
    min-height: calc(100vh - 140px);
    padding-bottom:140px;
}
</style>
