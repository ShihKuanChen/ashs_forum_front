<script setup>
  import {useRouter} from 'vue-router';
  import axios from 'axios';

  const router = useRouter();

  axios.get('/api/is_logged_in')
  .then(response => {
    console.log('logged in');
  })
  .catch(error => {
    router.replace('/login');
  });

</script>

<template>
  <label>標題</label>
  <div class="titleareaContainer">
    <input class="textInputArea"/>
  </div>
  <!-- <br/> -->
  <label>內容</label>
  <div class="contentareaContainer">
    <textarea class="textInputArea"></textarea>
  </div>
  <!-- <br/> -->
  <label>討論版</label>
</template>

<style scoped>
  /* .titleareaContainer {
    display: flex;
    justify-content: center;
    
  } */

  label {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
  }

  .textInputArea {
    color: rgb(236, 236, 236);
    background: rgba(37, 37, 37, 0.952);
    
    resize: none;
    font-size: 0.8rem;
    width: 100%;
    box-sizing: border-box;

    padding: 0.4rem 0.5rem;
    border-radius: 7px;
    border-color: transparent;

    margin-bottom: 1rem;

    outline: none;
  }

  textarea {
    /* left: 0;
    right: 0; */
    
    height: 20rem;
  }

  /* .contentareaContainer {
    display: flex;
    justify-content: center;
  } */
</style>