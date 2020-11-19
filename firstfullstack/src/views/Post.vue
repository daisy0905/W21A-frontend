<template>
    <div id="post">
        <div v-if="login">
            <h3>Hi, {{ username }}, welcome to blog website!</h3>
            <upload-post></upload-post>
            <view-post></view-post>
            <log-out></log-out>
            <delete-user></delete-user>
        </div>
        <div v-else>
            <h3>You have not logined in!</h3>
            <router-link to="Login">Login Page</router-link>
        </div>
  </div>
</template>

<script>
import UploadPost from "../components/UploadPost.vue"
import ViewPost from "../components/ViewPost.vue"
import LogOut from "../components/LogOut.vue"
import DeleteUser from "../components/DeleteUser.vue"
import cookies from 'vue-cookies'

export default {
    name: 'App',
    components: {
    UploadPost,
    ViewPost,
    LogOut,
    DeleteUser
    },
    data() {
        return {
            username: cookies.get("username"),
            token: cookies.get("loginToken"),
            login: true,
            display: false
        }
    },
    methods: {
        loginCheck: function() {
            if (this.token != undefined) {
                this.login = true;
            }
        },
        mounted: function() {
            this.loginCheck();
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

#post {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 2vh;
    min-height: 60vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}


</style>