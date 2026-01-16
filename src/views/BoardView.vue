<script setup>
  import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
  import { computed, ref } from 'vue';
  import { useInfiniteScroll } from '@vueuse/core';
  import axios from 'axios';

  const route = useRoute();
  const router = useRouter();
  const articles = ref([]);
  const scrollContainer = ref(null);

  // get board 
  const board = ref(route.params.board);


  // get chinese title
  const boardTitle = computed(() => {
    const titles = {
      'chat': '閒聊板',
      'love': '感情板',
      'homework': '作業板'
    }

    return titles[board.value];
  });

  // set InfiniteScroll
  const hasMore = ref(true);
  const lastArticleId = ref(-1);

  useInfiniteScroll(
    scrollContainer, 
    async () => {
      console.log(`loading`);
      // pause();
      // get article titles and upload time
      await axios.get(`/api`, {
        params: {
          limit: 30, 
          board: board.value, 
          last_id: lastArticleId.value // must change
        }}).then(response => {
          console.log(response.data);
          if (response.data.length === 0) {
            console.log('no more articles');
            hasMore.value = false;
            
          } else {
            articles.value.push(...response.data);
            lastArticleId.value = articles.value[articles.value.length - 1].article_id;
            console.log(lastArticleId.value);
          }
        }).catch(error => {
          console.log(error);
        });

    // articles.value.push(...newArticles);
    },
    {
      distance: 20,
      canLoadMore: () => hasMore.value,
    });
  
  // set board and reset articles when route change
  onBeforeRouteUpdate((to, from) => {
    board.value = to.params.board;
    articles.value = [];
    hasMore.value = true;
    lastArticleId.value = -1;
  });

  function routeToArticle(id) {
    router.push(`/article/${id}`);
  }


</script>

<template>
  <h1 class="board-title">{{ boardTitle }}</h1>
  <div ref="scrollContainer" class="scrollContainer">
    <div v-for="article in articles" id="articles" :key="article.article_id" @click="routeToArticle(article.article_id)">
      <article :id=article.article_id>
        <p class="article-title"> {{ article.article_title }} </p>
        <p class="article-time"> {{ article.article_upload_time }} </p>
      </article>
    </div>
  </div>
</template>

<style scoped>
  .board-title {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.2rem;
    /* padding-bottom: 0.1rem; */
    /* border-bottom: 1px solid #3b3b3b; */
  }

  .article-title {
    /* white-space: pre-wrap; */

    margin-top: 0.1rem;
    margin-bottom: 0;
    font-size: 0.9rem;
    /* font-weight: 600; */
  }

  .article-time {
    margin-top: 0;
    margin-bottom: 0.15rem;
    font-size: 0.7rem;
    /* font-weight: 600; */
  }

  .scrollContainer {
    height: 100%;
    overflow-y: auto;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #3b3b3b;
    cursor: pointer;
    /* align-items: center; */
  }

  
</style>