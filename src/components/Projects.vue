<script setup>
import {ref} from 'vue'
let tabproject=ref(
[
    {id:0,thumb:'/projects/gamingshop_features/a.png',title:'Gaming Shop',link:"https://gamingshop-eta.vercel.app/",textalt:"Gaming thumb"},
    {id:1,thumb:'/projects/tictactoe_features/3.png',title:'Tic-Tac-Toe Game',link:"https://tictactoe-five-neon.vercel.app/",textalt:"Tic-tac-toe thumb"}
]);
let dialog=ref(false);

let gamingtitle=ref("Gaming Shop");
let gaminglink=ref("https://gamingshop.doriaarnaud.online/");
let tictactoelink=ref("https://tic-tac-toe.doriaarnaud.online/");
let tictactoetitle=ref("Tic-tact-toe Game");
let gamingtext=ref("A gaming shop website example using Vue.js, Pinia, with search bar and cart management features.");
let tictactoetext=ref("A tic-tac-toe game using Vue.js with menu, loading progress and automatic re-drawing features.");
let gamingimages=ref([
    {images:'/projects/gamingshop_features/a.png',textalt:"gamingshop_features"},
    {images:'/projects/gamingshop_features/b.png',textalt:"gamingshop_features"},
    {images:'/projects/gamingshop_features/c.png',textalt:"gamingshop_features"},
    {images:'/projects/gamingshop_features/d.png',textalt:"gamingshop_features"}
  ])
  let tocimages=ref([
    {images:'/projects/tictactoe_features/img1.png',textalt:"tictactoe_features"},
    {images:'/projects/tictactoe_features/img2.png',textalt:"tictactoe_features"},
    {images:'/projects/tictactoe_features/img3.png',textalt:"tictactoe_features"},
    {images:'/projects/tictactoe_features/img4.png',textalt:"tictactoe_features"},
    {images:'/projects/tictactoe_features/img5.png',textalt:"tictactoe_features"}
  ])
  let projtitle=ref();
  let projtext=ref();
  let projlink=ref();
  let mainslider=ref([]);
function changeslidersource(id)
{
  //dialog.value=true;
  switch(id)
    {
      case 1:
        dialog.value=true;
        mainslider=gamingimages.value;
        projtitle=gamingtitle.value;
        projtext=gamingtext.value;
        projlink=gaminglink.value;
        break;
      case 2:
        dialog.value=true;
        mainslider=tocimages.value;
        projtitle=tictactoetitle.value;
        projtext=tictactoetext.value;
        projlink=tictactoelink.value;
        break;
    }
}

</script>
<template>
  <div class="featuredprojects">
      <v-card>
        <h4 class="text-h4 ms-5 mt-5 h-auto">Featured Projects</h4>
        <div class="projs">
          <div class="gamingproj ma-5 pa-5">
            <v-img src="/projects/gamingshop_features/a.png"
                   title="See project features"
                   alt="gaming shop thumb">
            </v-img>
            <p class="text-h6 mt-4 mb-4" id="ptitle">Gaming shop</p>
             <v-btn color="#004200" href="https://gamingshop.doriaarnaud.online/" target="blank">
               Visit project
             </v-btn>
             <v-btn class="mt-4" color="#b1b1b1" @click="changeslidersource(1)">
               See details...
             </v-btn>
          </div>
          <div class="ticproj ma-5 pa-5">
            <v-img src="/projects/tictactoe_features/img1.png"
                      title="See project features"
                      alt="tic-tac-toe thumb">
               </v-img>

            <p class="text-h6 mt-4 mb-4" id="ptitle">Tic-Tac-Toe game</p>
            <v-btn color="#004200" href="https://tic-tac-toe.doriaarnaud.online/" target="blank">
              Visit project
            </v-btn>
            <v-btn class="mt-4" color="#b1b1b1" @click="changeslidersource(2)">
              See details...
            </v-btn>
          </div>
        </div>
      </v-card>
  </div>
  <div class="carousselcontainer text-center pa-4">
    <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          fullscreen
        >
      <v-card>
        <v-toolbar>
          <v-btn
            icon="mdi-close"
            @click="dialog = false"
          ></v-btn>

        </v-toolbar>
        <div class="carousselcontainer">
          <div class="carousselcontent">
            <v-carousel
                  height="400"
                  progress="primary"
                  hide-delimiters
                  cycle
                >
                  <v-carousel-item
                    v-for="techimg in mainslider"
                    :key="techimg.id"
                  >
                    <v-img :src="techimg.images" :alt="techimg.textalt" class="mt-10">

                    </v-img>
                  </v-carousel-item>
                </v-carousel>
                <v-card class="ms-10 mr-10 mt-10" :title="projtitle" :text="projtext">

                </v-card>
                <v-btn color="#004200" class="ms-10 mt-5"
                        :href="projlink"
                        target="blank"
                        :title="projlink">
                  Visit project
                </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
</script>

<style>
  @media (min-width: 1200px)
  {
    .carousselcontent
    {
      width:950px;
      margin-left:auto;
      margin-right:auto;
    }
    .featuredprojects
    {
      min-height: 400px;
      margin-top:50px;
      width:1200px;
      margin-left:auto;
      margin-right:auto;
    }
    .featuredprojects .gamingproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .featuredprojects .ticproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .projs
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .featuredprojects
    {
      min-height: 400px;
      margin-top:50px;
    }
    .featuredprojects .gamingproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .featuredprojects .ticproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .projs
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .featuredprojects
    {
      min-height: 400px;
      margin-top:50px;
    }
    .featuredprojects .gamingproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .featuredprojects .ticproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .projs
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .featuredprojects
    {
      min-height: 400px;
      margin-top:50px;
    }
    .featuredprojects .gamingproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .featuredprojects .ticproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .projs
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
  }
  @media (max-width: 575px)
  {
    .featuredprojects
    {
      min-height: 400px;
      margin-top:50px;
    }
    .featuredprojects .gamingproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .featuredprojects .ticproj
    {
        width:300px;
        border:2px solid #a0a0a0;
        border-radius: 10px;
    }
    .projs
    {
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 50px;
    }
  }
</style>
