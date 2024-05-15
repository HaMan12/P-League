<script setup>
import { ref , watch  } from 'vue'

</script>

<template>
    <section>
        <h3 class="title-style"></h3>
    </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
</style>
