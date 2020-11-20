<template>
   <div id="update-post">
        <textarea id="post-text" v-model="postContent"></textarea>
        <button @click="updatePost()">Update</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
export default {
    name: "UpdatePost",
    data() {
        return {
            postContent: "",
        }
    },
    props: {
        postId: {
            type: Number,
            required: true
        }
    },
     methods: {
        updatePost: function() {
            axios.request({
                url: "http://daisyblog.ml/api/post",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    content: this.postContent,
                    token: cookies.get("loginToken"),
                    postId: this.postId
                }
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
#update-post {
    min-height: 20vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 1em;

    #post-text {
        width: 80%;
        height: 20vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
        text-align: center;
    }

    button {
        width: 25vw;
        height: 5vh;
        background-color: white;
        color: #1DA1F2;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: none;
        border: 1.5px solid #1DA1F2; 
        border-radius: 1.5em;
        font-weight: bold;
    }
}
</style>