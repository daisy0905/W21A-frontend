<template>
   <div>
        <textarea v-model="postContent"></textarea>
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
                url: "http://127.0.0.1:5000/post",
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

<style lang="sass" scoped>

</style>