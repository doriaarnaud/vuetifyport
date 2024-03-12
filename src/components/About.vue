<script setup>

</script>
<template>
  <div class="aboutcontainer">
    <v-card color="#09090d">
      <h4 class="text-h4 ms-5 mt-5">About</h4>
        <p class="ms-8 mr-4 mt-8 mb-4 text-h6">
          Discover the tools and technologies that I used in the development of user interfaces.
          After having studied programming while being self-taught many years ago, I decided to focus on the front-end of the web.<br/>
          Below you find the tools that I use on a daily basis:<br/>
        </p>
        <div class="toolscontainer mt-10 ms-16">
          <v-card class="w-75 ms-1 mr-1 pt-8" id="tile1" color="#373b4f">
            Npm
          </v-card>
          <v-card class="w-25 ms-1 mt-1 pt-8" id="tile2" color="#373b4f">
            Axios
          </v-card>
          <v-card class="w-50 ms-1 mr-1 mt-1 pt-8" id="tile3" color="#373b4f">
            Pinia
          </v-card>
          <v-card class="w-75 ms-1 mr-1 mt-1 pt-8" id="tile4" color="#373b4f">
            Vite
          </v-card>
        </div>
    </v-card>
  </div>
</template>

<script>
</script>

<style>
  @media (min-width: 1200px)
  {
    .aboutcontainer
    {
      margin-top:50px;
      margin-left:auto;
      margin-right:auto;
    }
    .toolscontainer
    {
      display:flex;
      flex-wrap: wrap;
      align-content: center;
    }
    #tile1,#tile2,#tile3,#tile4
    {
      height:120px;
      text-align:center;
      font-size:1.5em;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .aboutcontainer
    {
      margin-top:50px;
    }
    .toolscontainer
    {
      display:flex;
      flex-wrap: wrap;
      align-content: center;
    }
    #tile1,#tile2,#tile3,#tile4
    {
      height:100px;
      text-align:center;
      font-size:1.5em;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .aboutcontainer
    {
      margin-top:50px;
    }
    .toolscontainer
    {
      display:flex;
      flex-wrap: wrap;
      align-content: center;
    }
    #tile1,#tile2,#tile3,#tile4
    {
      height:100px;
      text-align:center;
      font-size:1.5em;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .aboutcontainer
    {
      margin-top:100px;
    }
    .toolscontainer
    {
      display:flex;
      flex-wrap: wrap;
      align-content: center;
    }
    #tile1,#tile2,#tile3,#tile4
    {
      height:100px;
      text-align:center;
      font-size:1.5em;
    }
  }
  @media (max-width: 575px)
  {
    .aboutcontainer
    {
      margin-top:50px;
    }
    .toolscontainer
    {
      display:flex;
      flex-wrap: wrap;
      align-content: center;
    }
    #tile1,#tile2,#tile3,#tile4
    {
      height:100px;
      text-align:center;
      font-size:1.5em;
    }
  }
</style>
