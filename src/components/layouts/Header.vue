<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn> -->
      <v-btn flat v-if="isLoggedIn">
        <a @click="logout">Logout</a>
        <!-- <span></span> -->
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

</template>

<script>
  export default {
    data: ()=>({
       dialog:''
    }),
    computed : {
      isLoggedIn : function(){
        return this.$store.getters.isLoggedIn
      },

    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>
