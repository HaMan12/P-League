import { defineStore } from 'pinia';

export const useRakindStore = defineStore({
  id: 'rakind',
  state: () => ({
    rakindData: [
      {
        title: '綜合排行',
        Url: '/raking'
      },
      {
        title: '特殊表現',
        Url: '/performance'
      },
      {
        title: '球員數據',
        Url: ''
      },
      {
        title: '球隊數據',
        Url: ''
      },
      {
        title: 'TEAM CHART',
        Url: ''
      },
    ],
  }),
});
