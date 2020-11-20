<template>
    <div id="post">
        <h2 @click="getPosts()">View Posts</h2>
        <div id="post-container" v-for="post in posts" :key="post[0]">
            <div id="post-unit">
                <h3>{{ post[1] }}</h3>
                <h4>{{ post[3] }}</h4>
            </div>
            <p>{{ post[2] }}</p>
            <delete-post v-if="post[1] == logUser" :postId="post[0]"></delete-post>
            <update-post v-if="post[1] == logUser" :postId="post[0]"></update-post>
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
                   url: "http://daisyblog.ml/api/post",
                   method: "GET",
                })
                .then((response) => {
                   console.log(response)
                   this.posts = response.data
                })
                .catch((error) => {
                   console.log(error)
                })
            }
        },
        computed: {
            logUser() {
                return cookies.get("username")
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
    min-height: 50vh;
    width: 90%;
    display: grid;
    justify-items: center;
    align-items: center; 

    h2 { 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        color:  #1DA1F2;
    }

    #post-container {
        width: 100%;
        min-height: 10vh;
        display: grid;
        justify-items: center;
        align-items: center; 
        background-color: none;
        margin-top: 0.5em;
    
        #post-unit {
            width: 80%;
            height: 5vh;
            display: grid;
            grid-template-columns: 1fr 2fr;
            justify-items: center;
            align-items: center; 
            margin-top: 0.5em;
            background-color: #E1E8ED;
            border-bottom: 1px solid  #1DA1F2;
        
            h3 {
                font-weight: bold; 
                font-family: Arial, Helvetica, sans-serif;
                font-size: 1rem;
            }

            h4 {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 0.8rem; 
                color: #657786;
            }
        }

        p {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
            min-height: 5vh;
            margin: 1em 0 0.5em 0;
        }

    }
}

</style>