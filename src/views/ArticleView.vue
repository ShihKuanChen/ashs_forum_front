<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    // get title, content here

    const route = useRoute();
    const router = useRouter();
    const article_id = route.params.id;

    var article_title;
    var article_content;
    var article_upload_time;

    const article = axios.get(
        '/api/article',
        {params: {
            'id': article_id
        }}
    ).then(response => {
        article_title = response.data.article_title;
        article_content = response.data.article_content;
        article_upload_time = response.data.article_upload_time;
    }).catch(error => {
        router.replace('/');
    });

</script>

<template>
    <h1>{{ article_title }}</h1>
    <p>{{ article_upload_time }}</p>
    <p>{{ article_content }}</p>
    
</template>