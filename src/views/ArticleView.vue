<script setup>
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    
    // get title, content here

    const route = useRoute();
    const router = useRouter();
    const article_id = route.params.id;

    // var article_title;
    // var article_content;
    // var article_upload_time;

    const article_title = ref('');
    const article_content = ref('');
    const article_upload_time = ref('');


    axios.get(`/api/article/${article_id}`
    ).then(response => {
        article_title.value = response.data.article_title;
        article_content.value = response.data.article_content;
        article_upload_time.value = response.data.article_upload_time;
        console.log(response.data);
    }).catch(error => {
        router.replace('/');
    });

</script>

<template>
    <h1>{{ article_title }}</h1>
    <p>{{ article_upload_time }}</p>
    <p>{{ article_content }}</p>
    
</template>