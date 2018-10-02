<template>
  <div id="">
   <v-app id="inspire">
      <navigation-layout></navigation-layout>
      <header-layout></header-layout>
      <v-content>
        <v-container fluid>
           <fade-transition origin="center" mode="out-in" :duration="250">
             <router-view></router-view>
           </fade-transition>
        </v-container>
      </v-content>
    <footer-layout></footer-layout>
  </v-app>
  </div>
</template>
<script>
import HeaderLayout from './Header.vue'
import NavigationLayout from './Navigation.vue'
import FooterLayout from './Footer.vue'
import { FadeTransition } from "vue2-transitions";
export default {
  components: {
    HeaderLayout,
    NavigationLayout,
    FooterLayout,
    FadeTransition
  },
  data () {
    return {

       }
    }
  };
</script>
<style lang="scss" scoped>
</style>
