<template>
    <div>
        <h1 @click="getPosts()">View Posts</h1>
        <div v-for="post in posts" :key="post[0]">
            <p>{{ post[1] }}</p>
            <p>{{ post[2] }}</p>
            <p>{{ post[3] }}</p>
            <update-post v-if="post[1] == logUser" :postId="post[0]"></update-post>
            <delete-post v-if="post[1] == logUser" :postId="post[0]"></delete-post>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
import UpdatePost from "./UpdatePost.vue"
import DeletePost from "./DeletePost.vue"

    export default {
        components: {
            UpdatePost,
            DeletePost
        },
        data() {
            return {
                posts: []
            }
        },
        methods: {
            getPosts: function() {
                axios.request({
                   url: "http://127.0.0.1:5000/post",
                   method: "GET",
                })
                .then((response) => {
                   console.log(response)
                   this.posts = response.data
                })
                .catch((error) => {
                   console.log(error)
                })
            },
        },
        computed: {
            logUser() {
                return cookies.get("username")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>