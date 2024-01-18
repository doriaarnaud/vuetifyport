<script setup>
  import {ref} from 'vue'
  let gamingimages=ref([
    {images:'/projects/gamingshop_features/a.png'},
    {images:'/projects/gamingshop_features/b.png'},
    {images:'/projects/gamingshop_features/c.png'},
    {images:'/projects/gamingshop_features/d.png'}
  ])
</script>
<template>
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="techimg in gamingimages"
      >
      <v-img :src="techimg.images" class="techslider">

      </v-img>
      </v-carousel-item>
    </v-carousel>
</template>

<script>

</script>

<style>
  .techslider
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
