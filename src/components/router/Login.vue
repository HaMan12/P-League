<script setup>
import { ref , onMounted , watch } from 'vue'

const passwordInput = ref(null); 
const showEye = ref(false);

const toggleEye = ()=>{
	const input = passwordInput.value; 
	showEye.value = !showEye.value;
	if (input.type === 'password') {
        input.type = 'text'; 
      } else {
        input.type = 'password'; 
      }
}

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
}
watch(username, (newValue, oldValue) =>{
    mixinSubmit(newValue, isUsername);
})
watch(password, (newValue, oldValue) =>{
	mixinSubmit(newValue, isPassword);
})
</script>

<template>
	<h3 class="title-style block | lg:hidden">登入</h3>
    <section class="py-0 | md:py-5">
		<div class="bg-no-repeat bg-cover center bg-white" style="background-image: url(src/assets/banner/bg-signin.png);">
			<div class="max-w-1280 w-full mx-auto flex flex-col py-10 | md:flex-row md:py-20">
				<div class="w-full p-4 border-r border-black | md:w-1/2">
					<img src="../../assets/img/login.png" class="mb-2">
					<p class="text-mut">會員登入</p>
					<form>
						<input type="text" placeholder="請輸入手機號" class="form-control" autocomplete="username" v-model="username" :class="{'!border-red':isUsername}">
						<p v-show="isUsername" class="text-red pt-1">請輸入手機號</p>
						<div class="mt-3 relative">
							<input type="password" placeholder="密碼" class="form-control" ref="passwordInput" v-model="password" autocomplete="current-password" :class="{'!border-red':isPassword}">
							<p v-show="isPassword" class="text-red pt-1">請輸入密碼</p>
							<div class="absolute top-1/4 right-3" v-on:click="toggleEye">
								<button v-if="showEye">
									<img src="../../assets/icon/eye-open.svg">
								</button>
								<button v-else>
									<img src="../../assets/icon/eye-close.svg">
								</button>
							</div>
						</div>
						<div class="mt-16 bg-black ease-in duration-300 hover:opacity-80">
							<button type="button" class="w-full py-3 text-center block" @click="submit()">登入</button>
						</div>
					</form>
				</div>
				<div class="w-full p-4 | md:w-1/2">
					<img src="../../assets/img/new.png" class="mb-2 h-[20px]">
					<p class="text-mut">新會員</p>
					<p class="text-black text-sm font-semibold">
						歡迎所有喜歡籃球的朋友加入P. LEAGUE+大家庭！<br>除了可以獲得P. LEAGUE+第一手消息之外，也會有不定期的會員福利唷！
					</p>
					<div class="center flex-col" style="margin-top: 86px;">
						<img src="../../assets/img/title-promo.png" class="block text-center">
						<a href="#/register"  class="w-full text-center bg-active py-3 block ease-in duration-300 hover:bg-[#8e6f4d]">立即加入 ></a>
					</div>
				</div>
			</div>
		</div>
    </section>
</template>

<style scoped lang="scss">
@mixin rwd-768 {
	@media (max-width: 768px) {
		@content;
	}
}
.text-mut{
	color: #7d879c;
	font-size: 14px;
	margin-bottom: 20px;
}
.form-control{
	width: 100%;
	border: 1px solid #dae1e7;
	padding: .625rem 1rem;
	transition: all .3s;
	color: black;
	border-radius: 5px;
	@include rwd-768 {
	
	}
}
.form-control:focus {
	outline: none;
    border-color: rgba(254, 105, 106, .3) !important;
    box-shadow: 0 0 0 0 transparent, 0 .375rem .625rem -.3125rem rgba(254, 105, 106, .15) !important;
}
</style>
