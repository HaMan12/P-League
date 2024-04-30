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
    min-height: calc(100vh - 35px);
    padding-bottom:35px;
}
</style>
