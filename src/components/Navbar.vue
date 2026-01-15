<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  const is_logged_in = ref(false);
  axios.get('/api/is_logged_in')
  .then(response => {
    is_logged_in.value = true;
  }).catch(error => {
    is_logged_in.value = false;
  });

</script>

<template>
  <nav class="navbar">
    <h2 class="web_title"><RouterLink to="/" class="web_title_text">高師大附中匿名板</RouterLink></h2>

    <ul class="nav-links">
        <li><RouterLink to="/chat" class="nav-link">閒聊</RouterLink></li>
        <li><RouterLink to="/love" class="nav-link">感情</RouterLink></li>
        <li><RouterLink to="/homework" class="nav-link">作業</RouterLink></li>
        <li><RouterLink to="/write" class="nav-link">投稿</RouterLink></li>
        <li><RouterLink to="/about" class="nav-link">關於</RouterLink></li>
        <li><RouterLink to="/login" class="nav-link" v-if="!is_logged_in">登入</RouterLink></li>
        <li><RouterLink to="/logout" class="nav-link" v-if="is_logged_in">登出</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
  h2 {
    font-size: 1rem;
  }
  
  .navbar {
    background-color: rgb(24, 24, 24);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #3b3b3b;
    position: fixed;
    /* width: 80%; */
    top: 0;
    left: 1.55rem;
    right: 1.55rem;
    /* margin-bottom: 20rem; */
  }

  .nav-links {
    font-weight: 300;
    color: rgb(236, 236, 236);
    text-decoration: none;
    list-style: none;
    display: flex;
    padding-left: 0;
  }

  .nav-links li {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  .nav-links .nav-link {
    font-weight: 300;
    color: rgb(236, 236, 236);
    text-decoration: none;
  }

  .web_title {
    display: flex;
    align-items: center;
  }

  .web_title_text {   
    color: rgb(236, 236, 236);
    text-decoration: none;
    /* margin-left: 1rem; */
  }
</style>