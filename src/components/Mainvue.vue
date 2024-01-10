<script setup>
import { ref} from 'vue'
import OngletA from '@/components/OngletA.vue'
import OngletB from '@/components/OngletB.vue'
import OngletC from '@/components/OngletC.vue'
let tabs=ref(null)
let about=ref();
let technologies=ref();
let projects=ref();
</script>
<template>
  <header>
    <div class="headercontent">
         <div class="logo">
           <h1 class="mt-8 text-h4">Hello, I'm</h1>
           <h1 class="mt-2 text-h4">Doria Arnaud</h1>
           <h4 class="mt-2 text-subtitle-1">Front-end Web Developer</h4>
         </div>
         <div class="avatar">
           <img src="/profile/Me.png" alt="Avatar" width="200" height="200"/>
         </div>
       </div>
  </header>
<v-card class="mt-n1">
  <v-tabs v-model="tabs" align-tabs="center" class="h-25" bg-color="#000000">
    <v-tab :value="about" class="text-h5">About</v-tab>
    <v-tab :value="technologies" class="text-h5">Technologies</v-tab>
    <v-tab :value="projects" class="text-h5">Projects</v-tab>
  </v-tabs>
    <v-window v-model="tabs">
      <v-window-item value="about">
        <OngletA>
          
        </OngletA>
      </v-window-item>
      <v-window-item value="technologies" class="mt-16 mb-16">
       <OngletB>

       </OngletB>
      </v-window-item>
      <v-window-item value="projects">
        <OngletC>

        </OngletC>
      </v-window-item>
    </v-window>
  </v-card>
   <v-footer color="#000000" class="h-0 mt-4">

   </v-footer>
</template>



<script>
  export default
  {
  data: () => ({
        tab: null,
        length: 3,
        window: 0
      })
  }
</script>
<style>
  @media (min-width: 1200px)
  {
    header
    {
      background-color:#000000;
      height:250px;
      font-family:'Calibri', 'Trebuchet MS', sans-serif;
    }
    .headercontent
    {
      width:80%;
      height:150px;
      margin-left:auto;
      margin-right:auto;
      color:#ffffff;
    }
    .logo
    {
      float:left;
      margin-top:20px;
    }
    .avatar
    {
      float:right;
    }
    .avatar img
    {
      margin-top:20px;
      border-radius:150px;
      border:5px solid #ffffff;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    header
    {
      background-color:#000000;
      height:250px;
      font-family:'Calibri', 'Trebuchet MS', sans-serif;
    }
    .headercontent
    {
      width:80%;
      height:150px;
      margin-left:auto;
      margin-right:auto;
      color:#ffffff;
    }
    .logo
    {
      float:left;
      margin-top:20px;
    }
    .avatar
    {
      float:right;
    }
    .avatar img
    {
      margin-top:20px;
      border-radius:150px;
      border:5px solid #ffffff;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    header
    {
      background-color:#000000;
      height:250px;
      font-family:'Calibri', 'Trebuchet MS', sans-serif;
    }
    .headercontent
    {
      width:80%;
      height:150px;
      margin-left:auto;
      margin-right:auto;
      color:#ffffff;
    }
    .logo
    {
      float:left;
      margin-top:20px;
    }
    .avatar
    {
      float:right;
    }
    .avatar img
    {
      margin-top:20px;
      border-radius:150px;
      border:5px solid #ffffff;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    header
    {
      background-color:#000000;
      height:250px;
      font-family:'Calibri', 'Trebuchet MS', sans-serif;
    }
    .headercontent
    {
      width:80%;
      height:150px;
      margin-left:auto;
      margin-right:auto;
      color:#ffffff;
    }
    .logo
    {
      float:left;
      margin-top:20px;
    }
    .avatar
    {
      float:right;
    }
    .avatar img
    {
      margin-top:20px;
      border-radius:150px;
      border:5px solid #ffffff;
    }
  }
  @media (max-width: 575px)
  {
    header
    {
      background-color:#000000;
      height:450px;
      font-family:'Calibri', 'Trebuchet MS', sans-serif;
    }
    .headercontent
    {
      width:80%;
      height:150px;
      margin-left:auto;
      margin-right:auto;
      color:#ffffff;
    }
    .logo
    {
      float:right;
      position:absolute;
      top:250px;
      left:10%;
      width:100%;
    }
    .avatar
    {
      float:left;
      margin-left:auto;
      margin-right:auto;
    }
    .avatar img
    {
      margin-top:20px;
      border-radius:150px;
      border:5px solid #ffffff;
    }
  }
</style>
