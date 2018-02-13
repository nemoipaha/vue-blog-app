<template lang="pug">
    header
        h1 {{ title }}
</template>

<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },

    data() {
        return {

        }
    },
}
</script>

<style scoped lang="stylus">
header
  background: darkgreen
  padding: 10px

  h1
    color: #fff
    text-align: center
</style>
