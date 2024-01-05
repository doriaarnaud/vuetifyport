<script setup>
  import {ref} from 'vue'
  let tocimages=ref([
    {images:'/projects/tictactoe_features/img1.png'},
    {images:'/projects/tictactoe_features/img2.png'},
    {images:'/projects/tictactoe_features/img3.png'},
    {images:'/projects/tictactoe_features/img4.png'},
    {images:'/projects/tictactoe_features/img5.png'}
  ])
</script>
<template>
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item bg-color="#00ff00"
        v-for="techimg in tocimages"
      >
      <v-img :src="techimg.images" class="tslider" >

      </v-img>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
</script>

<style>
  .tslider
  {
    border:2px solid #004200;
    border-top:none;
    border-bottom:none;
    border-radius: 10px;
    width:700px;
    margin-right:auto;
    margin-left:auto;
  }
</style>
