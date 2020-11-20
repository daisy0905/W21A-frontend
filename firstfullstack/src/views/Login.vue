<template>
    <div id="login">
        <div id="header">
            <img src="https://mobiledevmemo.com/wp-content/uploads/2014/05/Twitter-Bird.png" alt="twitter logo">
            <h1>Log in to Blog</h1>
        </div>
        <div id="login-area">
            <h3>Username</h3>
            <input type="text" id="username-input" class="input" v-model="username">
            <h3>Password</h3>
            <input type="text" id="password-input" class="input" v-model="password">
            <button class="btn" @click="loginUser">Log in</button>
            <h3>{{ loginStatus }}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
         data() {
            return {
                username: "",
                password: "",
                loginStatus: "",
                token: cookies.get("loginToken")
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "Loading"
                axios.request({
                   url: "http://daisyblog.ml/api/login",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                   },
                   data: {
                       username: this.username,
                       password: this.password
                   }
                }).then((response) => {
                    console.log(response);
                    cookies.set("loginToken", response.data.token)
                    cookies.set("username", response.data.username)
                    this.loginStatus = "Success";
                    this.$router.push("/post")
                }).catch((error) => {
                    console.log(error);
                    this.loginStatus = error;
                }) 
            },
            signUp: function() {
                this.$router.push("SignUp");
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

#login {
    min-height: 60vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}

#header {
    min-height: 15vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 2em 0 2em 0;

    img {
        display: block;
        width: 15vw;
        margin-bottom: 2em;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
    }
}

#login-area {
    min-height: 40vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }

    .input {
        width: 80%;
        height: 8vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
        text-align: center;
    }

    .btn {
        width: 80%;
        height: 7vh;
        background-color: #1DA1F2;
        border-radius: 1.5em; 
        border: none;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-weight: bold;
    }

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        color: #1DA1F2;
    }
    
}
</style>