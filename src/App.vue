<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-blog
            v-bind:posts="posts"
            v-on:deletePost="deletePost"
    />
  </div>
</template>

<script>
    // Imports
    import Header from './components/Header.vue';
    import BlogList from './components/BlogList.vue';

    export default {
        components: {
            'app-header': Header,
            'app-blog': BlogList
        },

        data () {
            return {
                title: 'Posts',
                posts: [],
            }
        },

        methods: {
            fetchPosts() {
                fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
                    .then(response => response.json())
                    .then(posts => {
                        this.posts = posts;
                    });
            },

            deletePost(post) {
                let ind = this.posts.indexOf(post);

                if (ind !== -1) {
                    this.posts.splice(ind, 1);
                }
            },
        },

        created() {
            this.fetchPosts();
        }
    }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
