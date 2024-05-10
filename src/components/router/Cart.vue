<script setup>
import { onMounted, ref , toRaw , nextTick} from 'vue';
import emitter from '../../mitt/mitt.js';


</script>

<template>
    
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.main-content {

    @include rwd-768 {

	  }
}
</style>
