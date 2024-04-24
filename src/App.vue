<script setup>


</script>

<template v-cloak class="relative">
   <div class="main-content">
       <Header />
       <router-view />
   </div>
   <Footer />
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.main-content {
    min-height: calc(100vh - 140px);
    padding-bottom:140px;
    @include rwd-768 {
        min-height: calc(100vh - 70px);
        padding-bottom:70px;
	  }
}
</style>
