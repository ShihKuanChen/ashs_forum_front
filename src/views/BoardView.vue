<script setup>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';

  const route = useRoute();

  const boardTitle = computed(() => {
    const titles = {
      'chat': '閒聊板',
      'love': '感情板',
      'homework': '作業板'
    }

    return titles[route.params.board];
  });

  console.log(boardTitle);
</script>

<template>
  <h1>{{ boardTitle }}</h1>
  <div id="articles">
    <article>
      <p class="article-title">教我這題怎麼寫</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">我失戀了</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">欸好酷喔這是啥</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">教我這題怎麼寫</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">我失戀了</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">欸好酷喔這是啥</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">教我這題怎麼寫</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">我失戀了</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">欸好酷喔這是啥</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">教我這題怎麼寫</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">我失戀了</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
    </article>
    <article>
      <p class="article-title">欸好酷喔這是啥</p>
      <p class="article-time">2026/1/10 下午11:38:25</p>
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