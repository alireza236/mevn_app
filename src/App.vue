<template>
   <div id="app">
     <transition name="fade">
       <keep-alive>
         <router-view></router-view>
       </keep-alive>
     </transition>
     <v-snackbar
        :timeout="3000"
        bottom
        right
        :color="snackbar.color"
        v-model="snackbar.show">
      {{ snackbar.text }}
    <v-btn dark flat @click.native="snackbar.show = false" icon>
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
   </div>
</template>
<script>
export default {
  data () {
    return {
      snackbar: {
      show: false,
      text: '',
      color: '',
    }
   }
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
