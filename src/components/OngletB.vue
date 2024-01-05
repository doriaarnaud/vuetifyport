<script setup>
import {ref} from 'vue'
let techtab=ref(
[
    {id:0,logo:'/logos/vuejs.JPG',title:'Vue.js',textalt:'vue3 logo'},
    {id:1,logo:'/logos/vite.JPG',title:'Vite',textalt:'vite logo'},
    {id:2,logo:'/logos/js.JPG',title:'JavaScript',textalt:'javascript logo'},
    {id:3,logo:'/logos/css3.JPG',title:'css3',textalt:'css3 logo'},
    {id:4,logo:'/logos/html5.JPG',title:'html5',textalt:'html5 logo'}
]);
</script>
<template>
 <div class="onglet2">
            <div class="onglet2content">
                <div class="techimages">
                    <div class="techcontent ma-4" v-for="images in techtab" :key="images.id">
                        <img :src="images.logo" :alt="images.textalt" width="100" height="100"/>
                        <div class="imagetitle">
                            <h3>{{ images.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
</script>

<style>
  @media (min-width: 1200px)
  {
    .onglet2
    {
        margin-top:0px;
    }
    .onglet2content
    {
        position:relative;
        width:100%;
        height:500px;
        margin-left:0;
        margin-right:auto;
        padding-top:10px;
        background-color: #ffffff;
    }
    .onglet2content h2
    {
        margin-left:10px;
    }
    .techimages
    {
        display:flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
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
    .imagetitle
    {
        text-align:center;
        margin-top:10px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .onglet2
    {
        margin-top:0px;
    }
    .onglet2content
    {
        position:relative;
        width:100%;
        height:500px;
        margin-left:0;
        margin-right:auto;
        padding-top:10px;
        background-color: #ffffff;
    }
    .onglet2content h2
    {
        margin-left:10px;
    }
    .techimages
    {
        display:flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
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
    .imagetitle
    {
        text-align:center;
        margin-top:10px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .onglet2
    {
        margin-top:0px;
    }
    .onglet2content
    {
        position:relative;
        width:100%;
        height:500px;
        margin-left:0;
        margin-right:auto;
        padding-top:10px;
        background-color: #ffffff;
    }
    .onglet2content h2
    {
        margin-left:10px;
    }
    .techimages
    {
        display:flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
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
    .imagetitle
    {
        text-align:center;
        margin-top:10px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .onglet2
    {
        margin-top:0px;
    }
    .onglet2content
    {
        position:relative;
        width:100%;
        height:500px;
        margin-left:0;
        margin-right:auto;
        padding-top:10px;
        background-color: #ffffff;
    }
    .onglet2content h2
    {
        margin-left:10px;
    }
    .techimages
    {
        display:flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
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
    .imagetitle
    {
        text-align:center;
        margin-top:10px;
    }
  }
  @media (max-width: 575px)
  {
    .onglet2
    {
        margin-top:0px;
    }
    .onglet2content
    {
        position:relative;
        width:100%;
        height:550px;
        margin-left:0;
        margin-right:auto;
        padding-top:10px;
        background-color: #ffffff;
    }
    .onglet2content h2
    {
        margin-left:10px;
    }
    .techimages
    {
        display:flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
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
    .imagetitle
    {
        text-align:center;
        margin-top:10px;
    }
  }

</style>
