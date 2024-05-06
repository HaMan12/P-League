<script setup>
import { ref , onMounted ,reactive } from 'vue';
import Pagination from '../../mixin/pagination.vue';
import { paginations } from '../../mixin/mixinsPage.js'; 
const paras = reactive({
    currentPage: 1,
    pageSize: 10,
});
const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 50,
    pageNo: 5,
    startIndex: 0,
    endIndex: 0,
    totalPages: 0
});
const query = () => {
    paras.currentPage = pagination.currentPage;
    paras.pageSize = pagination.pageSize;
    const total = 50;
    pagination.total = total;
    computePagination(total);
    setTimeout(() => {
    
    }, 0);
}
onMounted(() => {
    query();
});
const { pageSizeChanged, changedPage, computePagination, tabChanged, computeIndex } = paginations(pagination, paras, query);
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
                <div class="card-product text-black font-bold">
                    <a href="">
                        <img src="https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_131_1684139901.png" alt="">
                    </a>
                    <div class="flex justify-between px-2 py-3 | md:px-5">
                        <a href="" class="block">
                            <h3 class="text-xs">XAP x P.-LEAGUE+-吊卡收藏玩具</h3>
                            <h5 class="tet-lg">NTD 4,800</h5>
                        </a>
                        <div class="">
                            <button class="w-8 h-8 rounded-full bg-[#f3f5f9] hover:text-red">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center text-white bg-black mx-3 my-5 opacity-0">
                        <a href="" class="inline-block w-full py-2">前往購買</a>
                    </div>
                </div>
            </div>
            <div class="pagination">
                 <p class="text-center text-black">目前在第{{pagination.currentPage}}頁,共{{pagination.pageNo}}頁</p>
                <Pagination v-bind:pagination="pagination" v-bind:offset="5" v-on:changedpage="changedPage"></Pagination>
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
   transition: all .3s ease-in-out;
   &:hover{
        box-shadow: 0 .3rem 1.525rem -.375rem rgba(0, 0, 0, .1);
        .opacity-0{
            transition: all .3s ease-in-out;
            opacity: 1;
        }
   }
    @include rwd-768 {

	  }
}
.pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
  }
</style>
