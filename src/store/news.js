import { defineStore } from 'pinia';

export const useNewStore = defineStore({
  id: 'new',
  state: () => ({
    newsData: [
      {
        title: '新聞總攬',
        Url: '/news'
      },
      {
        title: '照片圖輯',
        Url: '/album'
      },
      {
        title: '精彩影音',
        Url: '/video'
      },
    ],
  }),
});
