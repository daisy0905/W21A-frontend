<template>
    <div id="log-out">
        <button @click="logOut">Log Out</button>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'

    export default {
        name: "delete-profile",
        data() {
            return {
                token: cookies.get("loginToken"),
                status: ""
            }
        },
        methods: {
            logOut: function() {
                this.Status = "Loading"
                axios.request({
                   url: "http://daisyblog.ml/api/login",
                   method: "DELETE",
                   headers: {
                    "Content-Type": "application/json",
                   },
                   data: {
                       token: this.token
                   }
                }).then((response) => {
                    console.log(response);
                    this.status = response;
                    cookies.remove("username");
                    cookies.remove("loginToken")
                    this.$router.push("/login");
                }).catch((error) => {
                    console.log(error);
                    this.status = error;
                }) 
            }
        }
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#log-out {
    height: 15vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
    border-radius: 1em;

    button {
        width: 40%;
        height: 5vh;
        background-color: #1DA1F2;
        border-radius: 1.5em; 
        border: none;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }
}
</style>