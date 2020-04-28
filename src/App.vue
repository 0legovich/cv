<template>
  <v-app>
    <v-content>
      <v-layout row wrap class="screen-size-height">
        <v-flex md8 xs12 order-xs2 class="full-height">
          <Skils class="full-height darkBlueGrey lightGrey--text" />
        </v-flex>
        <v-flex md4 xs12 order-md2 class="full-height">
          <Main class="full-height lightBlueGrey lightGrey--text" />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main'
import Skils from './components/Skils'

export default {
  name: 'App',
  components: {
    Main,
    Skils
  }
}
</script>

<style>
body {
  font-family: ProximaNova,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
}
.full-height {
  height: 100%
}
@media (max-width: 960px) {
  .full-height.md8 {
    height: max-content
  }
}
.screen-size-height {
  height: 100vh
}
</style>
