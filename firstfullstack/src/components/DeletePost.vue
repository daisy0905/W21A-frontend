<template>
    <div id="delete-post">
        <button @click="deletePost">Delete</button>
    </div>
</template>

<script>
import axios from "axios"
import cookies from "vue-cookies"
    export default {
        name: "DeletePost",
        props: {
            postId: {
                type: Number,
                required: true
            }
        },
        methods: {
            deletePost: function() {
                axios.request({
                    url: "http://daisyblog.ml/api/post",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        id: this.postId,
                        token: cookies.get("loginToken")
                    }
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
#delete-post {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    button {
        width: 25vw;
        height: 100%;
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