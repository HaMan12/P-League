<script setup>
import { onMounted, watch, ref } from 'vue';

const isOpen = ref (false)
const closeModal = () =>{
    isOpen.value = false
}
// 驗證
const username = ref(null)
const isUsername = ref(false)
const password = ref(null)
const isPassword = ref(false)

const mixinSubmit = (value, bool) => {
      if (value === null || value === '' || isNaN(value)) {
        bool.value = true;
      } else {
        bool.value = false;
      }
};
const submit = ()=>{
	mixinSubmit(username.value, isUsername);
	mixinSubmit(password.value, isPassword);
    if (!isUsername.value && !isPassword.value) {
    isOpen.value = true;
  }
}
watch(username, (newValue, oldValue) =>{
    mixinSubmit(newValue, isUsername);
})
watch(password, (newValue, oldValue) =>{
	mixinSubmit(newValue, isPassword);
})
</script>

<template>
    <section class="px-10 pb-10 pt-32 bg-white min-h-[500px] | md:px-20">
        <div class="max-w-[1000px] mx-auto px-3 text-black">
            <h2 class="mb-2">
                <img src="../../assets/img/sign-up.png" alt="P. LEAGUE+ 會員註冊">
            </h2>
            <p class="text-muted text-sm mb-4">會員註冊</p>
            <p class="mb-1 font-bold">
                <span class="rounded-full w-3 h-3 bg-slate-600 inline-block"></span>
                <b>&nbsp;&nbsp;使用手機建立帳號</b>
            </p>  
            <hr class="my-3"> 
            <div class="flex">
                <label for="phone" class="font-normal center mr-5">請輸入帳號(手機號)</label>
                <input id="phone" type="tel" placeholder="請輸入手機號"
                       class="form-control"
                       v-model="username" 
                       :class="{'!border-red':isUsername}">
            </div>   
            <p v-show="isUsername" class="text-red pt-1 pl-40">請輸入手機號</p>  
            <div class="flex mt-5">
                <label for="password" class="font-normal center min-w-[138px] !justify-start	mr-5">請輸入密碼</label>
                <input id="password" type="password" placeholder="請輸入密碼" class="form-control"
                       v-model="password" 
                       autocomplete="current-password" 
                       :class="{'!border-red':isPassword}">
            </div>   
            <p v-show="isPassword" class="text-red pt-1 pl-40">請輸入密碼</p>
            <div class="my-10 flex justify-end">
                <button type="button" 
                class="bg-active px-5 py-2 text-white rounded-sm hover:opacity-90"
                v-on:click="submit()">
                註冊</button>
            </div>
        </div>
    </section>
    <!-- 彈跳視窗 -->
    <section>
        <Transition>
        <div class="modal-outer" v-show="isOpen">
            <div class="modal">
                <div class="modal-header">
                  <h3 class="text-center text-2xl font-bold">註冊狀態</h3>
                    <button class="absolute right-5 top-1/2 translate-y-[-50%]" v-on:click="closeModal">
                        <img src="../../assets/icon/iconClose.svg" alt="">
                    </button>
                </div>
                <div class="modal-body">
                   <div class="flex-col p-2 text-black font-bold center text-3xl">
                        <p class="text-success">註冊成功</p>
                        <p class="text-error">註冊失敗</p>
                        <p class="text-error">此帳號已經註冊過了</p>
                   </div>
                </div>
            </div>
        </div>
    </Transition>
    </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.form-control{
    flex:1 1 0;
    display: block;
    width: 100%;
    height: 44px;
    padding: 0.625rem 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #4b566b;
    border:1px solid #dae1e7;
    border-radius: 5px;
    transition:border-color .2s ease-in-out;

    &:focus{
        border-color: rgba(254,105,106,.3);
        outline: 0;
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
  width: calc(100% - 70%);
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
</style>
