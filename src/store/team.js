import { defineStore } from 'pinia';

export const useBasketballItem = defineStore({
  id: 'basketballTeam',
  state: () => ({
    navItem:[
        {
            title:'球隊簡介',
        },
        {
            title:'主場館',
        },
        {
            title:'售票資訊',
        },
    ]
  }),
});
