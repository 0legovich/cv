<template>
  <v-container>
    <v-layout text-xs-center wrap class="full-height">
      <v-flex md6 xs12 v-for="(card, i) in cards" :key="i" class="base-padding card-wrapper">
        <div class="card full-height" @mouseenter="updateHoverState(true)" @mouseleave="updateHoverState(false)" >
            <div class="card-title">
              {{ card.name }}
            </div>
            <div class="card-info">
              <List v-if="typeof card.info === 'object'" :cardInfo="card.info" />
              <div v-else>
                {{ card.info }}
              </div>
            </div>
          </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import List from './List';
  import { skills } from './skills'
  export default {
    name: 'Skils',
    components: {List},
    data: () => ({
      hoverState: false,
      cards: skills,
    }),
    methods: {
      updateHoverState(isHover) {
        this.hoverState = isHover
      }
    },
  }
</script>
<style>
  .base-padding {
    padding: 2%;
  }
  .card-wrapper {
    height: 33%;
  }
  .card {
    margin: 2%;
    transition: 1s all;
    color: #BDBDBD;
    overflow: hidden;
    width: 100%;
    overflow-y: scroll;
  }
  .card-title {
    font-size: 1.5rem;
    margin: 4%;
  }
  .card-info {
    text-align: left;
    margin: 4%;
  }
  .card:hover {
    box-shadow: 0 10px 25px 10px
    rgba(0, 0, 0, .1);
    color: #FAFAFA;
  }
  .card::-webkit-scrollbar {
    background-color:#263238;
    width:16px
  }

  .card::-webkit-scrollbar-track {
      background-color:#263238;
  }

  .card::-webkit-scrollbar-thumb {
      background-color:#263238;
      border-radius:16px;
      border:4px solid #263238
  }
  @media(max-width: 960px ) {
    .card-wrapper {
      height: auto;
    }
  }
</style>
