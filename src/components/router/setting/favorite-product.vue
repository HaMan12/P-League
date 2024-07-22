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
            <h3 class=" text-3xl font-bold mb-2">My Favorite</h3>
            <h5 class="text-sm font-semibold">我的商品收藏清單</h5>
            <hr class="mt-5 mb-3">
            <table class="w-full">
                <colgroup>
                    <col style="width: 20%;">
                    <col style="width: 40%;">
                    <col style="width: 15%;">
                    <col style="width: 15%;">
                    <col style="width: 10%;">
                </colgroup>
                <thead>
                    <tr class="text-left border-b-2 border-bottomBorder">
                        <th class="pb-3">照片</th>
                        <th class="pb-3">品名</th>
                        <th class="pb-3">規格</th>
                        <th class="pb-3">單價</th>
                        <th class="pb-3">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-bottomBorder">
                        <td class="p-3">
                            <a href="">
                                <img src="../../../assets/img/17.png" alt="" width="100">
                            </a>
                        </td>
                        <td>
                            <a href="" class="text-active font-bold">
                                XAP x P.-LEAGUE+-吊卡收藏玩具
                            </a>
                        </td>
                        <td>單一規格</td>
                        <td>4800.00</td>
                        <td>取消</td>
                    </tr>
                </tbody>
            </table>
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
</style>
