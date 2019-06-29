<template>
  <ul>
    <li v-for="item in cardInfo" >{{ item }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    props: ['cardInfo'],
  }
</script>
