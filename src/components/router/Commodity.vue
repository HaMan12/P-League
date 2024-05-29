<script setup>
import { ref , onMounted , reactive , watch , watchEffect } from 'vue';
import { useProductStore } from '../../store/product.js';
import Pagination from '../../mixin/pagination.vue';
import { paginations } from '../../mixin/mixinsPage.js'; 

// 商品資料引入
const productStore = useProductStore(); 
const shopData = reactive(productStore.shopData);

// 分頁系統
const paras = reactive({
    currentPage: 1,
    pageSize: 12,
});
const pagination = reactive({
    currentPage: 1, //當前頁碼
    pageSize: 12, //每頁顯示幾筆
    total: 0, //總共多少筆
    pageNo: 0, // 頁碼數量
    startIndex: 0, //起始索引
    endIndex: 0, // 結束索引
    totalPages: 0 // 總頁數
});
const query = () => {
    paras.currentPage = pagination.currentPage;
    paras.pageSize = pagination.pageSize;
    computePagination(pagination.total);
}
onMounted(() => {
    query();
});
const { changedPage, computePagination,  } = paginations(pagination, paras, query);

watchEffect(()=> {
    pagination.total = shopData.length;
});

function sliceDataPage(data, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
}

let currentPageData = ref([]);

watchEffect(() => {
    currentPageData.value = sliceDataPage(shopData, pagination.currentPage, pagination.pageSize);
});

// 收藏
const like = ref(null);
const selectlike = (idx) =>{
    like.value = idx;
    shopData[idx].isLiked = !shopData[idx].isLiked;
}
// 修改Url
const sanitizeProductName = (name)=>{
    return name
      .replace(/[^\w\s\u4e00-\u9fa5-]/g, '')  
      .replace(/\s+/g, '-')                 
      .toLowerCase();
}
</script>

<template>
    <section>
        <h3 class="title-style">P.LEAGUE+ SHOP</h3>
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
            <div class="flex flex-wrap">
                <div class="w-1/2 | md:w-1/4" v-for="(product , index) in currentPageData" :key="product.id">
                 <div class="card-product text-black font-bold">
                    <router-link :to="{ name: 'ProductDetail', params: { productId: product.id , productName: sanitizeProductName(product.name)}}">
                        <img :src="product.imgUrl" alt="">
                    </router-link>
                    <div class="flex justify-between px-2 py-3 | md:px-5">
                        <div>
                            <h3 class="text-xs">{{ product.name }}</h3>
                            <h5 class="tet-lg">NTD {{ product.NTD }}</h5>
                        </div>
                        <div class="relative">
                            <button class="w-8 h-8 rounded-full bg-[#f3f5f9] hover:text-red" @click="selectlike(index)">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                            <div v-if="product.isLiked" class="absolute top-10 -left-5 w-[60px] z-20 text-sm text-red | md:-left-3">收藏成功</div>
                        </div>
                    </div>
                    <div class="text-center text-white bg-black mx-3 my-5 opacity-0">
                        <router-link :to="{ name: 'ProductDetail', params: { productId: product.id , productName:sanitizeProductName(product.name)}}" class="inline-block w-full py-2">
                            前往購買
                         </router-link>
                    </div>
                 </div>
                </div>
            </div>
            <div class="pagination">
                <Pagination v-bind:pagination="pagination" v-bind:offset="5" v-on:changedpage="changedPage"></Pagination>
                <p class="text-center text-black my-5">目前在第{{pagination.currentPage}}頁,共{{pagination.pageNo}}頁</p>
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
