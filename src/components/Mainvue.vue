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
  <v-container id="presentation">
    <Presentation v-if="presentationloaded">


    </Presentation>
  </v-container>

  <v-container id="about">
    <About v-if="aboutloaded">

    </About>
  </v-container>

  <v-container id="featuredproject">
    <Projects v-if="projectloaded">

    </Projects>
  </v-container>

  <Technologies v-if="techloaded">

  </Technologies>
  <v-container id="contact" v-if="contactloaded">
    <Contact >

    </Contact>
  </v-container>

  <v-footer color="#000000" class="pagefooter" v-if="footerloaded">

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
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
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
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
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
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
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
  }
  @media (max-width: 575px)
  {
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
  }
</style>
