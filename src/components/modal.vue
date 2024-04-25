<script setup>
import { onMounted, ref } from 'vue';
import  emitter from '../mitt/mitt.js';

const options =ref({});
onMounted(() => {
    emitter.on('openModal', (data) => {
    options.value = data;
  });
})

</script>

<template v-cloak >
    <Transition>
        <div class="modal-outer" v-if="options===''">
            <div class="modal">
                <div class="modal-header">
                    <button class="absolute right-3 top-1/2 translate-y-[-50%]" v-on:click="closeModal('')">
                        <img src="../assets/icon/iconClose.svg" alt="">
                    </button>
                </div>
                <div class="modal-body">
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.modal-outer{
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10000;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
}

.modal{
  position: absolute;
  top: 30%;
  left: 50%;
  width: calc(100% - 50%);
  --tw-translate-x: -50%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  overflow: hidden;
  border-radius: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  
  @include rwd-768 {
    width: calc(100% - 20%);
    }
}

 .openModels { 
  display: block; 
  opacity: 1;
}

.openModels > .modal {
  opacity: 1;
} 

.modal-header{
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(80 80 80 / var(--tw-text-opacity));
}

.modal-body{
  --tw-bg-opacity: 1;
  background-color: rgb(242 242 242 / var(--tw-bg-opacity));
  padding: 1.25rem;
}
</style>
