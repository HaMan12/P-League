<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

onMounted(()=>{
})
</script>

<template>
    <section>
        <div class="bg-[#24292D] p-3">
            <ul class="flex ml-0 | lg:ml-24 xl:ml-36 2xl:ml-44">
                <li class="btn-a">
                    <a href="/SuccessLogin" class="">帳號設定</a>
                </li>
                <li class="btn-a">
                    <a href="/favorite-product">商品收藏</a>
                </li>
                <li class="btn-a">
                    <a href="">我的訂單</a>
                </li>
                <li class="btn-a">
                    <a href="">登出</a>
                </li>
            </ul>
        </div>
    </section>
    <section class="px-10 py-5 bg-white min-h-[700px] | md:px-20 lg:py-10 xl:py-16">
        <div class="max-w-1280 mx-auto text-black">
            <h3 class=" text-3xl font-bold mb-2">My Account Setting</h3>
            <h5 class="text-sm font-semibold">我的帳號設定</h5>
            <hr class="mt-5 mb-3">
            <div class="flex flex-col font-medium | md:flex-row">
                <label for="pass-input" class="w-full mb-2 | md:mb-0 md:w-1/5 md:pt-2">我的帳號</label>
                <input id="pass-input" class="flex-1 border border-border p-2 rounded-5 duration-300 set-input">
            </div>
            <div class="flex flex-col font-medium mt-5 | md:flex-row">
                <label for="password" class="w-full mb-2 | md:mb-0 md:w-1/5 md:pt-2">重新設定密碼 </label>
                <input id="password" class="flex-1 border border-border p-2 rounded-5 duration-300 set-input" placeholder="如不變更請勿填寫">
            </div>
            <div class="flex justify-end items-center my-5 text-white">
                <a href="#" class="px-8 text-center bg-active py-3 ease-in duration-300 hover:bg-[#8e6f4d]" data-v-73f28710="">更新</a>
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

.btn-a{
    background-color: #000;
    color: #fff;
    margin-right: 3em;
    font-size: 12px;
    font-weight: 700;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: #333;
    }
    @include rwd-768 {
        margin-right: 1.5em;
    }
}

.btn-a>a{
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.825em 1.675em;
    @include rwd-768 {
        padding: 0.625em 1em;
    }
}

.set-input:focus{
    border-color:#FE696A;
    outline: 0;
}
</style>
