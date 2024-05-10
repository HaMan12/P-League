<script setup>
import { onMounted, ref ,toRaw} from 'vue';
import  emitter from '../mitt/mitt.js';
import router from '../router.js';

const options =ref({});
onMounted(() => {
    emitter.on('openModal', (data) => {
    options.value = data;
  });
})
const closeModal =()=>{
  options.value.isOpen =  !options.value.isOpen
}
//傳到購物車 
const sendCarData = () => {
  const data = options.value;
  emitter.emit('sendCarDatas', data);
  router.push({ name: 'cart' });
}
</script>

<template v-cloak >
    <Transition>
        <div class="modal-outer" v-if="options.isOpen">
            <div class="modal">
                <div class="modal-header">
                  <h3 class="text-center text-2xl font-bold">{{ options.title }}</h3>
                    <button class="absolute right-5 top-1/2 translate-y-[-50%]" v-on:click="closeModal()">
                        <img src="../assets/icon/iconClose.svg" alt="">
                    </button>
                </div>
                <div class="modal-body">
                   <div class="flex-col p-5 text-black text-lg font-medium center !justify-between gap-5 | md:flex-row" v-if="options.isProduct">
                      <div>
                        <p>商品: {{ options.message.name }}</p>
                        <p v-show="options.message.isTshirt">尺寸: {{ options.size }}</p>
                        <p class="mt-1">數量: {{ options.count }}</p>
                      </div>
                      <div>
                         <button class="addCar" @click="sendCarData()">
                            加入購物車
                         </button>
                      </div>
                   </div>
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
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(80, 80, 80, 0.75);
}

.modal-body{
  --tw-bg-opacity: 1;
  background-color: rgb(242 242 242 / var(--tw-bg-opacity));
  padding: 1.25rem;
}
.addCar{
  display: block;
  background-color: #BB986C;
  color: #fff;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all .3s ease-in-out;
    &:hover{
      background-color: #8E6F4D;
    }
  }
</style>
