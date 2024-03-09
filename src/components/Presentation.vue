<script setup>

</script>
<template>
  <div class="presentation h-auto">
    <div class="presentationcontent">
      <div class="avatar">
        <img src="/profile/Me.png" alt="Avatar"/>
      </div>
       <div class="presentationtext">
           <h1 class="mt-8 text-h3">Hello, I'm</h1>
           <h1 class="mt-2 text-h3">Arnaud Doria</h1>
           <h4 class="mt-2 text-subtitle-3">Front-end Web Developer</h4>
       </div>
     </div>
  </div>
</template>

<script>
</script>

<style>
  @media (min-width: 1200px)
  {
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
  }
  @media (min-width: 992px) and (max-width: 1199px)
  {
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
  }
  @media (min-width: 768px) and (max-width: 991px)
  {
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
  }
  @media (min-width: 576px) and (max-width: 767px)
  {
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
  }
  @media (max-width: 575px)
  {
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
  }
</style>
