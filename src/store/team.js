import { defineStore } from 'pinia';

export const useBasketballItem = defineStore({
  id: 'basketballTeam',
  state: () => ({
    navItem:[
        {
            title:'球隊簡介',
            type:1
        },
        {
            title:'主場館',
            type:2
        },
        {
            title:'售票資訊',
            type:3
        },
    ]
  }),
});
