<template>
    <div id="create-post">
        <h2>Post Content</h2>
        <textarea id="post-text" v-model="postContent"></textarea>
        <button @click="uploadPost">Submit</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        data() {
            return {
                postContent: ""
            }
        },
        methods: {
            uploadPost: function() {
                axios.request({
                    url: "http://127.0.0.1:5000/post",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        content: this.postContent,
                        token: cookies.get("loginToken"),
                        username: cookies.get("username")
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
#create-post {
    min-height: 20vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    h2 { 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        color:  #1DA1F2;
    }
    
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
        background-color: #1DA1F2;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: none;
        border-radius: 1.5em;
        font-weight: bold;
    }
}
</style>