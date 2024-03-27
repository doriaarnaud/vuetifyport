<script setup>
import {ref,onMounted} from 'vue'
import Presentation from '@/components/Presentation.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Technologies from '@/components/Technologies.vue'
import Contact from '@/components/Contact.vue'
let presentationloaded=ref(false);
let aboutloaded=ref(false);
let projectloaded=ref(false);
let techloaded=ref(false);
let contactloaded=ref(false);
let footerloaded=ref(false);
let isloadedpage=ref();
function scroll(refName)
{
  const element=document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth"});
}
function stoploading()
{
  isloadedpage.value=false;
  presentationloaded.value=true;
  aboutloaded.value=true;
  projectloaded.value=true;
  techloaded.value=true;
  contactloaded.value=true;
  footerloaded.value=true;
}
onMounted
{
  isloadedpage.value=true;
  presentationloaded.value=false;
  aboutloaded.value=false;
  projectloaded.value=false;
  techloaded.value=false;
  contactloaded.value=false;
  footerloaded.value=false;
  setTimeout(()=>
  {
      stoploading();
  },1500);
}
</script>
<template>
  <v-app-bar class="navigationbar" color="#000000">
    <v-spacer></v-spacer>
    <v-btn
       class="btnav text-h6" @click="scroll('presentation')">Home</v-btn>
    <v-btn
       class="btnav text-h6" @click="scroll('about')">About</v-btn>
    <v-btn
       class="btnav text-h6" @click="scroll('featuredproject')">Projects</v-btn>
    <v-btn
       class="btnav text-h6" @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
  <div class="techloadercontainer" v-if="isloadedpage">
      <v-progress-circular class="techloader"
            indeterminate
            color="#002600"
      ></v-progress-circular>
    </div>
    <div id="presentationcontainer" v-if="presentationloaded">
      <v-container id="presentation">
        <Presentation >


        </Presentation>
      </v-container>
    </div>
    <div id="aboutcontainer" v-if="aboutloaded">
      <v-container id="about">
        <About >

        </About>
      </v-container>
    </div>
    <div id="featuredcontainer" v-if="projectloaded">
      <v-container id="featuredproject">
        <Projects >

        </Projects>
        <Technologies v-if="techloaded">

        </Technologies>
      </v-container>
    </div>
    <div id="contactcontainer" v-if="contactloaded">
      <v-container id="contact" >
        <Contact >

        </Contact>
      </v-container>
      <p id="cp" class="text-subtitle-1">
        copyright <v-icon
              size="x-small"
              color="#ffffff"
              icon="mdi-copyright"
              class="ms-1 mb-1 mr-1"
              ></v-icon> Doria Arnaud 2024
      </p>
    </div>
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
    #presentationcontainer
    {
      background-color:#101019;
      color:#ffffff;
    }
    #aboutcontainer
    {
      background-color:#09090d;
    }
    #featuredcontainer
    {
      background-color:#09090d;
    }
    #contactcontainer
    {
      background-color:#101019;
    }
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      text-decoration:underline;
    }
    .techloadercontainer
    {
      width:100px;
      margin-left:auto;
      margin-right:auto;
      height:500px;
    }
    .techloader
    {
      margin-top:20px;
      width:80px;
      height:80px;
      margin-left:auto;
      margin-right:auto;
    }
    p#cp
    {
      text-align:center;
      color:#ffffff;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    #presentationcontainer
    {
      background-color:#101019;
      color:#ffffff;
    }
    #aboutcontainer
    {
      background-color:#09090d;
    }
    #featuredcontainer
    {
      background-color:#09090d;
    }
    #contactcontainer
    {
      background-color:#101019;
    }
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      text-decoration:underline;
    }
    .techloadercontainer
    {
      width:100px;
      margin-left:auto;
      margin-right:auto;
      height:500px;
    }
    .techloader
    {
      margin-top:20px;
      width:80px;
      height:80px;
      margin-left:auto;
      margin-right:auto;
    }
    p#cp
    {
      text-align:center;
      color:#ffffff;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
   #presentationcontainer
   {
     background-color:#101019;
     color:#ffffff;
   }
   #aboutcontainer
   {
     background-color:#09090d;
   }
   #featuredcontainer
   {
     background-color:#09090d;
   }
   #contactcontainer
   {
     background-color:#101019;
   }
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      text-decoration:underline;
    }
    .techloadercontainer
    {
      width:100px;
      margin-left:auto;
      margin-right:auto;
      height:500px;
    }
    .techloader
    {
      margin-top:20px;
      width:80px;
      height:80px;
      margin-left:auto;
      margin-right:auto;
    }
    p#cp
    {
      text-align:center;
      color:#ffffff;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    #presentationcontainer
    {
      background-color:#101019;
      color:#ffffff;
    }
    #aboutcontainer
    {
      background-color:#09090d;
    }
    #featuredcontainer
    {
      background-color:#09090d;
    }
    #contactcontainer
    {
      background-color:#101019;
    }
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      text-decoration:underline;
    }
    .techloadercontainer
    {
      width:100px;
      margin-left:auto;
      margin-right:auto;
      height:500px;
    }
    .techloader
    {
      margin-top:20px;
      width:80px;
      height:80px;
      margin-left:auto;
      margin-right:auto;
    }
    p#cp
    {
      text-align:center;
      color:#ffffff;
    }
  }
  @media (max-width: 575px)
  {
    #presentationcontainer
    {
      background-color:#101019;
      color:#ffffff;
    }
    #aboutcontainer
    {
      background-color:#09090d;
    }
    #featuredcontainer
    {
      background-color:#09090d;
    }
    #contactcontainer
    {
      background-color:#101019;
    }
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      width:90px;
      text-decoration:underline;
    }
    .techloadercontainer
    {
      width:100px;
      margin-left:auto;
      margin-right:auto;
      height:500px;
    }
    .techloader
    {
      margin-top:20px;
      width:80px;
      height:80px;
      margin-left:auto;
      margin-right:auto;
    }
    p#cp
    {
      text-align:center;
      color:#ffffff;
    }
  }
</style>
