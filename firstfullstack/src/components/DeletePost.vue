<template>
    <div>
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
                    url: "http://127.0.0.1:5000/post",
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

</style>