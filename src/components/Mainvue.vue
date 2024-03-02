<script setup>
import {ref,onMounted} from 'vue'
import Presentation from '@/components/Presentation.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Technologies from '@/components/Technologies.vue'
import Contact from '@/components/Contact.vue'
function scroll(refName)
{
  const element=document.getElementById(refName);
  element.scrollIntoView({ behavior: "smooth"});
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
  <h1 id="presentation"></h1>
    <Presentation>


    </Presentation>
  <h1 id="about"></h1>
    <About>

    </About>
  <h1 id="featuredproject"></h1>
    <Projects>

    </Projects>

    <Technologies>

    </Technologies>

    <h1 id="contact"></h1>
    <Contact>

    </Contact>

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
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      text-decoration:underline;
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
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .btnav
    {
      background-color: #000000;
      color:#ffffff;
      text-decoration:underline;
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
  }
</style>
