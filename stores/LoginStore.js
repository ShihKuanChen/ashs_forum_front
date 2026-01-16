import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useLoginStore = defineStore('login', () => {
    const isLogin = ref(false);

    async function checkLogin() {
        await axios.get('/api/is_logged_in')
        .then(response => {
            isLogin.value = true;
        })
        .catch(error => {
            isLogin.value = false;
        })
    
    }
    
    return {isLogin, checkLogin}; 
});