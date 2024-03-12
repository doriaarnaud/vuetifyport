<script setup>
import {ref} from 'vue'
let techtab=ref(
[
    {id:0,logo:'/logos/vuejs.JPG',title:'Vue.js',textalt:'vue3 logo'},
    {id:1,logo:'/logos/vite.JPG',title:'Vite',textalt:'vite logo'},
    {id:2,logo:'/logos/vuetify.png',title:'Vuetify',textalt:'vuetify logo'},
    {id:3,logo:'/logos/js.JPG',title:'JavaScript',textalt:'javascript logo'},
    {id:4,logo:'/logos/css3.JPG',title:'css3',textalt:'css3 logo'},
    {id:5,logo:'/logos/html5.JPG',title:'html5',textalt:'html5 logo'}
]);
</script>
<template>
  <div class="tech2content">
    <v-card class="pb-8" color="#09090d">
       <h4 class="text-h4 ms-5 mt-5 h-auto">Technologies</h4>
         <div class="techimages">
             <div class="techcontent ma-4" v-for="images in techtab" :key="images.id">
                 <img :src="images.logo" :alt="images.textalt" width="100" height="100"/>
                 <div class="imagetitle">
                     <h3>{{ images.title }}</h3>
                 </div>
             </div>
         </div>
    </v-card>
  </div>
</template>

<script>
</script>

<style>
  @media (min-width: 1200px)
  {
    .tech2content
    {
      position:relative;
      width:100%;
      padding-top:0px;
      width:1200px;
      margin-left:auto;
      margin-right:auto;
    }
    .techimages
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
    .techcontent
    {
      margin-top:10px;
      padding:10px;
    }
    .techcontent img
    {
      border-radius: 15px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:0px;
    }
    .techimages
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
    .techcontent
    {
      margin-top:10px;
      padding:10px;
    }
    .techcontent img
    {
      border-radius: 15px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:0px;
    }
    .techimages
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
    .techcontent
    {
      margin-top:10px;
      padding:10px;
    }
    .techcontent img
    {
      border-radius: 15px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:0px;
    }
    .techimages
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
    .techcontent
    {
      margin-top:10px;
      padding:10px;
    }
    .techcontent img
    {
      border-radius: 15px;
    }
  }
  @media (max-width: 575px)
  {
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:0px;
    }
    .techimages
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
    .techcontent
    {
      margin-top:10px;
      padding:10px;
    }
    .techcontent img
    {
      border-radius: 15px;
    }
  }

</style>
