import { defineStore } from 'pinia'
import axios from 'axios';


// axios api
export const useRecordStore = defineStore('record', {
    state: () => ({
      record: [],
      loading: false,
    }),
    actions: {
      async fetchRecord() {
        try {
          this.loading = true;
          const response = await axios.get('https://api-nine-brown.vercel.app/api/record');
          this.record = response.data;
          this.loading = false;
        } catch (error) {
          console.log('錯誤訊息', error);
        }
      },
    },
  });