<script setup>
import {ref,onMounted} from 'vue'
let techtab=ref(
[
    {id:0,logo:'/logos/vuejs.JPG',title:'Vue.js',textalt:'vue3 logo'},
    {id:1,logo:'/logos/vuetify.png',title:'Vuetify',textalt:'vuetify logo'},
    {id:2,logo:'/logos/vite.JPG',title:'Vite',textalt:'vite logo'},
    {id:3,logo:'/logos/js.JPG',title:'JavaScript',textalt:'javascript logo'},
    {id:4,logo:'/logos/css3.JPG',title:'css3',textalt:'css3 logo'},
    {id:5,logo:'/logos/html5.JPG',title:'html5',textalt:'html5 logo'}
]);
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
  <div class="navigationbarcontainer">
    <div class="navigationbar d-flex justify-end">
      <ul>
        <li>
          <a href="#presentationtarget">Home</a>
        </li>
        <li>
          <a href="#abouttarget">About</a>
        </li>
        <li>
          <a href="#featuredtarget">Projects</a>
        </li>
        <li>
          <a href="#contacttarget">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  <h1 id="presentationtarget"></h1>
    <div class="presentation h-auto">
      <div class="presentationcontent">
        <div class="avatar">
          <img src="/profile/Me.png" alt="Avatar"/>
        </div>
         <div class="presentationtext">
             <h1 class="mt-8 text-h3">Hello, I'm</h1>
             <h1 class="mt-2 text-h3">Doria Arnaud</h1>
             <h4 class="mt-2 text-subtitle-3">Front-end Web Developer</h4>
         </div>
       </div>
    </div>
  <h1 id="abouttarget"></h1>
    <div class="aboutcontainer">
      <v-card>
        <h4 class="text-h4 ms-5 mt-5">About</h4>
          <p class="ms-8 mr-4 mt-8 mb-4 text-h6">
            Discover on this site the tools and technologies that I used in the development of user interfaces.
            After having studied programming while being self-taught many years ago, I decided to focus on the front-end of the web.<br/>
            Below you find the frameworks and languages that I use on a daily basis:
              <v-list>
                <v-list-item>
                  <v-icon
                        size="x-small"
                        color="#002600"
                        icon="mdi-radiobox-marked"
                        class="mr-2"
                      ></v-icon>Npm</v-list-item>
                <v-list-item>
                  <v-icon
                        size="x-small"
                        color="#002600"
                        icon="mdi-radiobox-marked"
                        class="mr-2"
                      ></v-icon>Axios, for API interactions</v-list-item>
                <v-list-item>
                  <v-icon
                        size="x-small"
                        color="#002600"
                        icon="mdi-radiobox-marked"
                        class="mr-2"
                      ></v-icon>Pinia, for state management</v-list-item>
                <v-list-item>
                  <v-icon
                        size="x-small"
                        color="#002600"
                        icon="mdi-radiobox-marked"
                        class="mr-2"
                      ></v-icon>Vite</v-list-item>
              </v-list>
          </p>
      </v-card>
    </div>
    <h1 id="featuredtarget"></h1>
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
    <div class="tech2content">
      <v-card class="pb-8">
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
    <h1 id="contacttarget"></h1>
  <div class="contactcontainer">
    <div class="contactcontent">
        <h4 class="text-h4 mt-16 ms-8">
          Let's work together on Your next project
        </h4>
        <h6 class="text-subtitle-1 ms-8">
          If you have an idea or any project, my contact is great open.
        </h6>
        <v-btn color="#002600" class="ms-8 mb-8 mt-8" size="large" href="mailto:doriaarnaud55@gmail.com" target="blank">
            Contact
        </v-btn>
    </div>
  </div>

<v-footer color="#000000" class="pagefooter">

</v-footer>
</template>



<script>
  export default
  {
  data: () => ({

      })
  }
</script>
<style>
  @media (min-width: 1200px)
  {
    .navigationbarcontainer
    {
      background-color: #000000;
      width:100%;
      height:100px;
      position:fixed;
      z-index:9999999999999999;
    }
    .navigationbar
    {
      float:right;
      margin-right:50px;
      margin-top:30px;
    }
    .navigationbar ul li
    {
      display:inline;
    }
    .navigationbar a
    {
      text-decoration:none;
      font-size:1.4em;
      margin:10px;
      color:#ffffff;
    }
    .presentation
    {
      min-height:400px;
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: left;
      margin-top: 150px;
    }
    .presentationcontent
    {
      width:950px;
      margin-left:auto;
      margin-right:auto;
    }
    .presentationcontent .avatar
    {
      float:left;
    }
    .presentationcontent .avatar img
    {
        border-radius: 120px 120px 0px 120px;
        border:2px solid #a0a0a0;
    }
    .presentationcontent .presentationtext
    {
      margin-top: 20px;
      float:right;
    }
    .aboutcontainer
    {
      margin-top:50px;
      width:1200px;
      margin-left:auto;
      margin-right:auto;
    }
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:50px;
      background-color: #ffffff;
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
    .contactcontainer
    {
      background-color: #191919;
      min-height:200px;
      padding-top:50px;
    }
    .contactcontent
    {
      width:950px;
      margin-left:auto;
      margin-right:auto;
      border:1px solid #9f9f9f;
      min-height: 200px;
      background-color:#666666;
      border-radius:10px;
      color:#ffffff;
    }
    .carousselcontent
    {
      width:950px;
      margin-left:auto;
      margin-right:auto;
    }
    .pagefooter
    {
      height:50px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .navigationbarcontainer
    {
      background-color: #000000;
      width:100%;
      height:100px;
      position:fixed;
      z-index:9999999999999999;
    }
    .navigationbar
    {
      float:right;
      margin-right:50px;
      margin-top:30px;
    }
    .navigationbar ul li
    {
      display:inline;
    }
    .navigationbar a
    {
      text-decoration:none;
      font-size:1.4em;
      margin:10px;
      color:#ffffff;
    }
    .presentation
    {
      min-height:400px;
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: left;
      margin-top: 150px;
    }
    .presentationcontent
    {
      width:950px;
      margin-left:auto;
      margin-right:auto;
    }
    .presentationcontent .avatar
    {
      float:left;
    }
    .presentationcontent .avatar img
    {
        border-radius: 120px 120px 0px 120px;
        border:2px solid #a0a0a0;
    }
    .presentationcontent .presentationtext
    {
      margin-top: 20px;
      float:right;
    }
    .aboutcontainer
    {
      margin-top:50px;
    }
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:50px;
      background-color: #ffffff;
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
    .contactcontainer
    {
      background-color: #191919;
      min-height:200px;
      padding-top:50px;
    }
    .contactcontent
    {
      width:800px;
      margin-left:auto;
      margin-right:auto;
      border:1px solid #9f9f9f;
      min-height: 200px;
      background-color:#666666;
      border-radius:10px;
      color:#ffffff;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .navigationbarcontainer
    {
      background-color: #000000;
      width:100%;
      height:100px;
      position:fixed;
      z-index:9999999999999999;
    }
    .navigationbar
    {
      float:right;
      margin-right:50px;
      margin-top:30px;
    }
    .navigationbar ul li
    {
      display:inline;
    }
    .navigationbar a
    {
      text-decoration:none;
      font-size:1.4em;
      margin:10px;
      color:#ffffff;
    }
    .presentation
    {
      min-height:400px;
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: left;
      margin-top: 150px;
    }
    .presentationcontent
    {
      width:950px;
      margin-left:auto;
      margin-right:auto;
    }
    .presentationcontent .avatar
    {
      float:left;
      padding-left:20px;
    }
    .presentationcontent .avatar img
    {
        border-radius: 120px 120px 0px 120px;
        border:2px solid #a0a0a0;
    }
    .presentationcontent .presentationtext
    {
      margin-top: 20px;
      float:right;
      padding-right:20px;
    }
    .aboutcontainer
    {
      margin-top:50px;
    }
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:50px;
      background-color: #ffffff;
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
    .contactcontainer
    {
      background-color: #191919;
      min-height:200px;
      padding-top:50px;
    }
    .contactcontent
    {
      width:700px;
      margin-left:auto;
      margin-right:auto;
      border:1px solid #9f9f9f;
      min-height: 200px;
      background-color:#666666;
      border-radius:10px;
      color:#ffffff;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .navigationbarcontainer
    {
      background-color: #000000;
      width:100%;
      height:100px;
      position:fixed;
      z-index:9999999999999999;
    }
    .navigationbar
    {
      width:420px;
      margin-left:20%;
      margin-top:30px;
    }
    .navigationbar ul li
    {
      display:inline;
    }
    .navigationbar a
    {
      text-decoration:none;
      font-size:1.5em;
      margin:10px;
      color:#ffffff;
    }
    .presentation
    {
      min-height:400px;
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: left;
      margin-top: 150px;
    }
    .presentationcontent .avatar img
    {
        border-radius: 120px 120px 0px 120px;
        border:2px solid #a0a0a0;
    }
    .aboutcontainer
    {
      margin-top:100px;
    }
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:50px;
      background-color: #ffffff;
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
    .contactcontainer
    {
      background-color: #191919;
      min-height:200px;
      padding-top:50px;
    }
    .contactcontent
    {
      width:550px;
      margin-left:auto;
      margin-right:auto;
      border:1px solid #9f9f9f;
      min-height: 200px;
      background-color:#666666;
      border-radius:10px;
      color:#ffffff;
    }
  }
  @media (max-width: 575px)
  {
    .navigationbarcontainer
    {
      background-color: #000000;
      width:100%;
      height:100px;
      position:fixed;
      z-index:9999999999999999;
    }
    .navigationbar
    {
      margin-top:30px;
      float:left;
    }
    .navigationbar ul li
    {
      display:inline;
    }
    .navigationbar a
    {
      text-decoration:none;
      font-size:1.2em;
      margin:10px;
      color:#ffffff;
    }
    .presentation
    {
      min-height:400px;
      display:flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      text-align: left;
      margin-top: 150px;
    }
    .presentationcontent .avatar img
    {
        border-radius: 120px 120px 0px 120px;
        border:2px solid #a0a0a0;
    }
    .aboutcontainer
    {
      margin-top:50px;
    }
    .tech2content
    {
      position:relative;
      width:100%;
      min-height:350px;
      padding-top:50px;
      background-color: #ffffff;
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
    .contactcontainer
    {
      background-color: #191919;
      min-height:200px;
      padding-top:50px;
    }
    .contactcontent
    {
      width:350px;
      margin-left:auto;
      margin-right:auto;
      border:1px solid #9f9f9f;
      min-height: 200px;
      background-color:#666666;
      border-radius:10px;
      color:#ffffff;
    }
  }
</style>
