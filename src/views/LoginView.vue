<script setup>
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
}
</script>

<template>
  <h1>登入</h1>
  <p>請使用以下方式登入</p>
  <div class="google_login_container">
    <GoogleLogin :callback="callback"/>
  </div>
</template>

<style scoped>
  h1 {
    display: flex;
    justify-content: center;
  }

  p {
    display: flex;
    justify-content: center;
  }

  .google_login_container {
    display: flex;
    justify-content: center;
  }
</style>