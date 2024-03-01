<script setup>
import {ref,onMounted} from 'vue'
import Presentation from '@/components/Presentation.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Technologies from '@/components/Technologies.vue'
import Contact from '@/components/Contact.vue'
</script>
<template>
  <div class="navigationbarcontainer">
    <div class="navigationbar d-flex justify-end">
      <ul>
        <li>
          <a href="#presentation">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#featuredproject">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
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
  }
</style>
