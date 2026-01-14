<script setup>
  import { useRoute } from 'vue-router';
  import { computed, ref } from 'vue';
  import { useInfiniteScroll } from '@vueuse/core';
  import axios from 'axios';

  const route = useRoute();
  const articles = ref([]);
  const scrollContainer = ref(null);

  // get board 
  const board = route.params.board;

  // get chinese title
  const boardTitle = computed(() => {
    const titles = {
      'chat': '閒聊板',
      'love': '感情板',
      'homework': '作業板'
    }

    return titles[board];
  });

  // set InfiniteScroll
  const { pause, resume, isActive } = useInfiniteScroll(scrollContainer, async () => {
    console.log(`loading`);
    pause();
    axios.get(`/api`, {
      params: {
        limit: 30, 
        board: board, 
        start: -1 // must change
      }}).then(response => {
        if (response.data.length === 0) {
          console.log('no more articles');
          
        } else {
          articles.value.push(...response.data);
          console.log(articles.value);
          resume();
        }
      }).catch(error => {
        console.log(error);
      });

    // articles.value.push(...newArticles);
  }, {direction: 20});


</script>

<template>
  <h1>{{ boardTitle }}</h1>
  <div ref="scrollContainer" id="articles" v-for="article in articles">
    <article :id=article.article_id>
      <h1 class="article-title"> {{ article.article_title }} </h1>
      <p class="article-title"> {{ article.article_upload_time }} </p>
    </article>
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