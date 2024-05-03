<script setup>


</script>

<template>
    <section>
        <h3 class="title-style">P.LEAGUE+ SHOP</h3>
        <img src="../../assets/banner/banner.jpg" title="shop" class="w-full">
        <div class="max-w-1280 mx-auto py-4">
            <ul class="center">
                <li class="bg-active text-white px-4 py-2 text-sm font-bold cursor-pointer | md:px-5 md:text-base">所有商品</li>
            </ul>
        </div>
    </section>
    <section class="w-full bg-white">
        <div class="max-w-1280 mx-auto py-4 | md:py-10">
            <div class="text-center font-bold">
                <h2 class="text-black text-3xl hidden | md:block">所有商品</h2>
                <h5 class="text-red py-5">黑潮來襲！全新系列低調上市！</h5>
            </div>
            <div class="w-1/2 | md:w-1/4">
                <div class="card-product">
                    <a href="">
                        <img src="https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_131_1684139901.png" alt="">
                    </a>
                    <div class="flex justify-between px-0 py-3 | md:px-4">
                        <a href="" class="text-black font-bold block">
                            <h3 class="text-xs">XAP x P.-LEAGUE+-吊卡收藏玩具</h3>
                            <h5 class="tet-lg">NTD 4,800</h5>
                        </a>
                        <div class=""></div>
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
.card-product{
   transition: all .15s ease-in-out;
   display: flex;
   flex-direction: column;
   background-color: #fff;
   border-radius: .4375rem;
   &:hover{
        box-shadow: 0 .3rem 1.525rem -.375rem rgba(0, 0, 0, .1);
   }
    @include rwd-768 {

	  }
}
</style>
