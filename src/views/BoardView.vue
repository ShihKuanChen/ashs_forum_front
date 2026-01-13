<script setup>
  import { useRoute } from 'vue-router';
  import { computed, ref } from 'vue';
  import { useInfiniteScroll } from '@vueuse/core';
  import axios from 'axios';

  const route = useRoute();
  const articles = ref([]);
  const scrollContainer = ref(null);

  const board = route.params.board;

  const boardTitle = computed(() => {
    const titles = {
      'chat': '閒聊板',
      'love': '感情板',
      'homework': '作業板'
    }

    return titles[board];
  });

  useInfiniteScroll(scrollContainer, async () => {
    const newArticles = axios.get(`/api`, {
      params: {
        limit: 30, 
        board: board, 
        start: 0
      }});
    articles.value.push(...newArticles);
  }, {direction: 20});
</script>

<template>
  <h1>{{ boardTitle }}</h1>
  <div ref="scrollContainer" id="articles">
    
  </div>
</template>

<style scoped>
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #3b3b3b;
    cursor: pointer;
    /* align-items: center; */
  }

  .article-title {
    white-space: pre-wrap;

    margin-top: 10px;
    margin-bottom: 0;
    font-size: 1rem;
  }

  .article-time {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 0.7rem;
  }
</style>