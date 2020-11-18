<template>
    <div id="post">
        <h3>Hi, {{ username }}, welcome to blog website!</h3>
        <upload-post></upload-post>
        <view-post></view-post>
  </div>
</template>

<script>
import UploadPost from "../components/UploadPost.vue"
import ViewPost from "../components/ViewPost.vue"
import cookies from 'vue-cookies'

export default {
    name: 'App',
    components: {
    UploadPost,
    ViewPost
    },
    data() {
        return {
            username: cookies.get("username")
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