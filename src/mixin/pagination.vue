<template>
    <ul class="pagination-item">
      <!-- <li v-if="pagination.currentPage > 1" @click.prevent="firstPage" class="page-link page-item" style="cursor:pointer;"> «« </li> -->
      <li v-if="pagination.currentPage > 1" @click.prevent="prePage" class="page-link page-item" style="cursor:pointer;"> « </li>
      <li v-for="num in array" :key="num" @click.prevent="changePage(num)" :class="className(num)" class="page-item" style="cursor:pointer;">{{num}}</li>
      <li v-if="pagination.currentPage < pagination.pageNo" @click.prevent="nextPage" class="page-link page-item" style="cursor:pointer;"> » </li>
      <!-- <li v-if="pagination.currentPage < pagination.pageNo" @click.prevent="endPage" class="page-link page-item" style="cursor:pointer;"> »» </li> -->
    </ul>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    props: {
      pagination: {
        type: Object,
        required: true
      },
      offset: {
        type: Number,
        default: 2
      },
      ulClassName: {
        type: String,
        default: ""
      }
    },
    setup(props, { emit }) {
      const firstPage = () => {
        changePage(1);
      };
  
      const prePage = () => {
        changePage(props.pagination.currentPage - 1);
      };
  
      const nextPage = () => {
        changePage(props.pagination.currentPage + 1);
      };
  
      const endPage = () => {
        changePage(props.pagination.pageNo);
      };
  
      const changePage = (page) => {
        if (page > props.pagination.pageNo) {
          page = props.pagination.pageNo;
        }
        if (page < 1) {
          page = 1;
        }
        emit("changedpage", page);
      };
  
      const className = (num) => {
        return props.pagination.currentPage === num ? "number active" : "number";
      };
  
      const array = computed(() => {
        if (!props.pagination.currentPage || !props.pagination.pageNo) {
          return [];
        }
  
        let from = props.pagination.currentPage - props.offset;
        if (from < 1) {
          from = 1;
        }
  
        let to = from + (props.offset * 2);
        if (to >= props.pagination.pageNo) {
          to = props.pagination.pageNo;
        }
  
        const arr = [];
        while (from <= to) {
          arr.push(from);
          from++;
        }
  
        return arr;
      });
  
      return { firstPage, prePage, nextPage, endPage, changePage, className, array };
    }
  };
  </script>
  <style scoped>  
  .pagination-item {
    display: flex;
    list-style: none;
  }
  
  .page-link {
    color: #284b62;
  }
  
  .page-item {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    border: 1px solid #dee2e6;
    color: #284b62;
    background-color: #fff;
  }
  
  .number.active {
    color: #fff;
    background-color: #284b62;
    border-color: #284b62;
  }
  </style>
  
  