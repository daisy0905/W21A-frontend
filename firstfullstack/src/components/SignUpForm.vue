<template>
    <div id="signup-form">
        <h3>Username</h3>
        <input type="text" id="username-input" class="input" v-model="username">
        <h3>Password</h3>
        <input type="password" id="password-input" class="input" v-model="password">
        <button class="btn" @click="signupUser">Sign Up</button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: "signup-form",
        data() {
            return {
               username: "",
               password: "",
            }
        },
        methods: {
            signupUser: function() {
                axios.request({
                    url: "http://daisyblog.ml/api/users",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        password: this.password,
                        username: this.username,
                    }
                }).then((response) => {
                   console.log(response);
                   this.$router.push("/login");
                }).catch((error) => {
                   console.log(error)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#signup-form {
    min-height: 60vh;
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
        height: 7vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
        text-align: center;
    }

    .btn {
        width: 80%;
        height: 7vh;
        border: 1px solid #1DA1F2; 
        border-radius: 1.5em;
        background-color: white;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #1DA1F2;

        :hover {
            background-color: #1DA1F2;
            color: white;
        }
    }
}
</style>