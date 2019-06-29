import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    darkBlueGrey: '#263238',
    lightBlueGrey: '#2e3d44',
    lightGrey: '#EEEEEE'
  }
})
