import { defineStore } from 'pinia'
import axios from 'axios';


// axios api
export const useProductStore = defineStore('product', {
    state: () => ({
      shopData:     [
        {
            id:1,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_131_1684139901.png',
            name:'XAP x P.-LEAGUE+-吊卡收藏玩具',
            NTD:'4800',
            isLiked: false
        },
        {
            id:2,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:3,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:4,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:5,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:6,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:7,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:8,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:9,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:10,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:11,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:12,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
        {
            id:13,
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            isLiked: false
        },
    ],
      loading: false,
    }),
    actions: {
    //   async fetchRecord() {
    //     try {
    //       this.loading = true;
    //       const response = await axios.get('https://api-nine-brown.vercel.app/api/record');
    //       this.record = response.data;
    //       this.loading = false;
    //       console.log('成功');
    //     } catch (error) {
    //       console.log('錯誤訊息', error);
    //     }
    //   },
    },
  });