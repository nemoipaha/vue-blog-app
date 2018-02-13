<template>
    <div class="posts-wrapper">
        <ul>
            <li v-for="post in posts">
                <h2>{{ post.title | capitalize }}</h2>
                <div class="post-body">{{ post.body }}</div>
                <button type="button" class="delete-btn" v-on:click="deletePost(post)">Delete</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
      posts: {
        type: Array,
        required: true
      }
    },

    data(){
        return{

        }
    },

    methods: {
      deletePost(post) {
        this.$emit('deletePost', post);
      }
    }
}
</script>

<style scoped>
.posts-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
    min-height: 600px;
    background-color: #eee;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.post-body {
    padding: 10px 0;
}

.delete-btn {
    padding: 10px;
    cursor: pointer;
}
</style>
