<script setup>
import { defineProps } from 'vue';
const props = defineProps(['productId']);

</script>

<template>
    <div>
      <h1>Product Detail Page</h1>
      <h1>Product Detail: {{ productId }}</h1>
    </div>
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
