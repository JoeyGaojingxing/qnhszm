<style lang="less">
</style>

<template>
  <div>
    this is Content Components
    <img :src="police" alt="pagehead">
  </div>
</template>

<script>
import police from '../static/images/pagehead.jpg'

export default {
  name: 'Content',
  props: {},
  data() {
      return {
          police
      }
  }
}
</script>
