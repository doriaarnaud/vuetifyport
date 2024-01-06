<script setup>
import {ref} from 'vue'
let tabproject=ref(
[
    {id:0,thumb:'/projects/gamingshop_features/1.jpg',title:'Gaming Shop',link:"https://gamingshop-eta.vercel.app/"},
    {id:1,thumb:'/projects/tictactoe_features/3.png',title:'Tic-Tac-Toe Game',link:"https://tictactoe-five-neon.vercel.app/"}
]);
const drawer = ref(null);
</script>
<template>
  <div class="vapp">
    <v-app>
         <v-navigation-drawer v-model="drawer">
              <v-sheet
                class="mt-16 pt-16"
               >
                 <v-sheet
                   class="mx-auto mb-16"
                   height="200"
                   width="200"
                 >
                 <router-link to="/">
                   <v-img src="/projects/gamingshop_features/1.png" title="See project features">

                   </v-img>
                 </router-link>

                <p class="text-h6 mt-4 mb-4" id="ptitle">Gaming shop</p>
                <v-btn class="mb-16 ms-7" color="#004200" href="https://gamingshop-eta.vercel.app" target="blank">
                  Visit project
                </v-btn>
                </v-sheet>
              </v-sheet>
              <v-divider>

              </v-divider>
              <v-sheet
                class="mt-8 pt-8"
               >
                 <v-sheet
                   class="mx-auto mb-16"
                   height="200"
                   width="200"
                 >
                 <router-link to="/tictactoe">
                   <v-img src="/projects/tictactoe_features/img1.png" title="See project features">

                   </v-img>
                 </router-link>

                <p class="text-h6 mt-4 mb-4" id="ptitle">Tic-Tac-Toe game</p>
                <v-btn class="mb-16 ms-7" color="#004200" href="https://tictactoe-five-neon.vercel.app/" target="blank">
                  Visit project
                </v-btn>
                </v-sheet>
              </v-sheet>
         </v-navigation-drawer>

        <v-app-bar class="appbar">
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

          <v-app-bar-title class="text-h6">Project features</v-app-bar-title>
        </v-app-bar>
         <v-main class="mt-16">
           <router-view></router-view>
         </v-main>
    </v-app>
  </div>
</template>

<script>
</script>

<style>
  @media (min-width: 1200px)
  {
    .vapp
    {
      height:750px;
    }
    .appbar
    {
      height:70px;
    }
    #ptitle
    {
      text-align:center;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .vapp
    {
      height:750px;
    }
    .appbar
    {
      height:70px;
    }
    #ptitle
    {
      text-align:center;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .vapp
    {
      height:750px;
    }
    .appbar
    {
      height:70px;
    }
    #ptitle
    {
      text-align:center;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .vapp
    {
      height:750px;
    }
    .appbar
    {
      height:70px;
    }
    #ptitle
    {
      text-align:center;
    }
  }
  @media (max-width: 575px)
  {
    .vapp
    {
      height:750px;
    }
    .appbar
    {
      height:70px;
    }
    #ptitle
    {
      text-align:center;
    }
  }

</style>
