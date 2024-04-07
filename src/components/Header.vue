<script setup></script>

<template>
  <header class="xl:mx-7">
    <div class="pt-3 pb-1 flex justify-end items-center">
      <div class="center">
        <a href class="social_icon"><i class="fa-brands fa-facebook-f"></i></a>
        <a href class="social_icon"><i class="fa-brands fa-instagram"></i></a>
        <a href class="social_icon"><i class="fa-brands fa-youtube"></i></a>
        <a href class="social_icon"><i class="fa-brands fa-twitter"></i></a>
        <a href class="social_icon"><i class="fa-solid fa-radio"></i></a>
        <a href class="social_icon"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
    <nav></nav>
  </header>

  <!-- <div> 
    <router-link to="/home">home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
  </div> -->
</template>

<style scoped>
.social_icon {
  font-family: cartzilla-icons !important;
  display: inline-block;
  padding-left: 1rem;
}
.social_icon>i{
    padding: 0 5px;
}
.social_icon:hover .fa-brands,
.social_icon:hover .fa-solid {
  color: #bb986c;
}
</style>
