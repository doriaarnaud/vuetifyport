<script setup>
  
</script>
<template>
  <div class="aboutcontainer">
    <v-card>
      <h4 class="text-h4 ms-5 mt-5">About</h4>
        <p class="ms-8 mr-4 mt-8 mb-4 text-h6">
          Discover the tools and technologies that I used in the development of user interfaces.
          After having studied programming while being self-taught many years ago, I decided to focus on the front-end of the web.<br/>
          Below you find the tools that I use on a daily basis:
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
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
    .aboutcontainer
    {
      margin-top:50px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
    .aboutcontainer
    {
      margin-top:50px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
    .aboutcontainer
    {
      margin-top:100px;
    }
  }
  @media (max-width: 575px)
  {
    .aboutcontainer
    {
      margin-top:50px;
    }
  }
</style>