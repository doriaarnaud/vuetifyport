<script setup>
import {ref,onMounted,watchEffect} from 'vue'
let tabproject=ref(
[
    {id:0,thumb:'/projects/gamingshop_features/a.png',title:'Gaming Shop',link:"https://gamingshop-eta.vercel.app/"},
    {id:1,thumb:'/projects/tictactoe_features/3.png',title:'Tic-Tac-Toe Game',link:"https://tictactoe-five-neon.vercel.app/"}
]);
const drawer = ref(null);
let gamingimages=ref([
    {images:'/projects/gamingshop_features/a.png'},
    {images:'/projects/gamingshop_features/b.png'},
    {images:'/projects/gamingshop_features/c.png'},
    {images:'/projects/gamingshop_features/d.png'}
  ])
  let tocimages=ref([
    {images:'/projects/tictactoe_features/img1.png'},
    {images:'/projects/tictactoe_features/img2.png'},
    {images:'/projects/tictactoe_features/img3.png'},
    {images:'/projects/tictactoe_features/img4.png'},
    {images:'/projects/tictactoe_features/img5.png'}
  ])
  let mainslider=ref([]);
  let iscircleloading=ref(false);
  let iscrloading=ref(true);
  let interval=ref();
  let valeur=ref(0);
  function launchloader()
  {
    iscircleloading.value=true;
    iscrloading.value=false;
    interval = setInterval(() => {
      if (valeur.value === 100) {
        iscircleloading.value=false;
        iscrloading.value=true;
        return (valeur.value = 0)
      }
      valeur.value += 20
    }, 300)
  }
onMounted
{
  mainslider=gamingimages.value;
  iscircleloading.value=true;
  iscrloading.value=false;
  interval = setInterval(() => {
    if (valeur.value === 100) {
      iscircleloading.value=false;
      iscrloading.value=true;
      return (valeur.value = 0)
    }
    valeur.value += 20
  }, 300)
}
function changeslidersource(id)
{
  switch(id)
  {
    case 1:
      mainslider=gamingimages.value;
      drawer.value=false;
      launchloader();
      break;
    case 2:
      mainslider=tocimages.value;
      drawer.value=false;
      launchloader();
      break;
  }
}
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
                   <v-img src="/projects/gamingshop_features/a.png"
                          title="See project features"
                          alt="gaming shop thumb"
                          @click="changeslidersource(1)">
                   </v-img>

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
                   <v-img src="/projects/tictactoe_features/img1.png"
                          title="See project features"
                          alt="tic-tac-toe thumb"
                          @click="changeslidersource(2)">

                   </v-img>

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
           <div class="circleloadercontainer">
             <v-progress-circular v-if="iscircleloading" class="circleloader"
                   :rotate="360"
                   :size="100"
                   :width="15"
                   :model-value="valeur"
                   color="#002600"
                 >
                  {{ valeur }}%
                 </v-progress-circular>
           </div>

          <v-carousel v-if="iscrloading" class="carousselcontent"
              cycle
              height="400"
              hide-delimiter-background
              show-arrows="hover"
            >
              <v-carousel-item
                v-for="techimg in mainslider"
              >
              <v-img :src="techimg.images" class="techslider">

              </v-img>
              </v-carousel-item>
            </v-carousel>
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
    .circleloadercontainer
    {
      width:120px;
      height:120px;
      margin-left:auto;
      margin-right:auto;
    }
    .circleloader
    {
      margin-left:auto;
      margin-right:auto;
    }
    .carousselcontent
    {
      margin-top:-100px;
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
    .circleloadercontainer
    {
      width:120px;
      height:120px;
      margin-left:auto;
      margin-right:auto;
    }
    .circleloader
    {
      margin-left:auto;
      margin-right:auto;
    }
    .carousselcontent
    {
      margin-top:-100px;
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
    .circleloadercontainer
    {
      width:120px;
      height:120px;
      margin-left:auto;
      margin-right:auto;
    }
    .circleloader
    {
      margin-left:auto;
      margin-right:auto;
    }
    .carousselcontent
    {
      margin-top:-100px;
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
    .circleloadercontainer
    {
      width:120px;
      height:120px;
      margin-left:auto;
      margin-right:auto;
    }
    .circleloader
    {
      margin-left:auto;
      margin-right:auto;
    }
    .carousselcontent
    {
      margin-top:-100px;
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
    .circleloadercontainer
    {
      width:120px;
      height:120px;
      margin-left:auto;
      margin-right:auto;
    }
    .circleloader
    {
      margin-left:auto;
      margin-right:auto;
    }
    .carousselcontent
    {
      margin-top:-100px;
    }
  }

</style>
