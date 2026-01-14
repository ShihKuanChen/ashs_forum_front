<script setup>
  import useRouter from 'vue-router';
  import axios from 'axios';

  const router = useRouter();

  axios.get('/api/is_logged_in')
  .then(response => {

  })
  .catch(error => {
  //   console.log(error);
    router.replace('/login');
  });

</script>