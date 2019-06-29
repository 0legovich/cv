<template>
  <v-container>
    <v-layout text-xs-center wrap class="centered">
      <v-flex xs12 class="container-wrapper" @mouseleave="updateHoverState(false)" @mouseenter="updateHoverState(true)">
        <div>
          <div v-if="!hoverState" >
            <v-card class="circle-radius img-wrapper">
              <v-img
                contain
                class="white--text"
                :src="profileImg"
              />
            </v-card>
            <br />
            <h1 class="headline">Shpak Roman Olegovich</h1>
          </div>
          <div v-else="hoverState">
            <v-card class="lightBlueGrey lightGrey--text">
              <br/>
              <h1 class="headline">Ruby on Rails Developer</h1>
              <br/>
              <h1 class="title">Shpak Roman Olegovich</h1>
              <h5 class="body-1">{{ yearsOld }} y.o.</h5>
              <v-btn flat icon color="pink" href="https://tglink.me/r0legovich" target="_blank">
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-card>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import profile from "../assets/profile.jpg";

export default {
  data: () => ({ profileImg: profile, yearsOld: Math.floor((new Date() - new Date('1996', '2', '29')) / 31536000000), hoverState: false }),
  methods: {
    updateHoverState(isHover) {
      setTimeout(() => this.hoverState = isHover, 130);
    }
  }
};
</script>

<style>
  .circle-radius {
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }
  .centered {
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .img-wrapper {
    max-width: 230px;
    margin: 0 auto;
  }
  .container-wrapper {
    min-height: 230px;
  }
</style>
