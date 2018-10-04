<template>
 <v-app id="login" class="primary">
   <v-content>
     <v-container fluid fill-height>
       <v-layout align-center justify-center>
         <v-flex xs12 sm8 md4 lg4>
           <v-card class="elevation-1 pa-3">

             <v-card-text>
               <div class="layout column align-center">
                 <!-- <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120"> -->
                 <h1 class="flex my-4 primary--text">Login</h1>
               </div>
               <v-form class="login" @submit.prevent="login">
                 <v-text-field append-icon="mail" name="email" label="Email" type="text" v-model="email" required></v-text-field>
                 <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" required></v-text-field>
                 <v-card-actions>
                   <!-- <v-btn icon>
                     <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                   </v-btn>
                   <v-btn icon>
                     <v-icon color="red">fa fa-google fa-lg</v-icon>
                   </v-btn>
                   <v-btn icon>
                     <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                   </v-btn> -->
                   <!-- <v-btn block
                     color="success"
                     type="submit"
                     @click="dialog = true"
                     :loading="loading">Register</v-btn> -->
                    Have not account.?
                   <router-link :to="{ name: 'Register'}">Register</router-link>
                   <v-spacer></v-spacer>
                   <v-btn block
                     color="primary"
                     type="submit"
                     @click="dialog = true"
                     :loading="loading">Login</v-btn>
                 </v-card-actions>
               </v-form>
             </v-card-text>

           </v-card>
           <div class="text-xs-center">
             <v-dialog
                 v-model="loading"
                 hide-overlay
                 persistent
                 width="300"
               >
                 <v-card
                   color="primary"
                   dark
                 >
                   <v-card-text>
                     ...Please Wait...
                     <v-progress-linear
                       indeterminate
                       color="white"
                       class="mb-0"
                     ></v-progress-linear>
                   </v-card-text>
                 </v-card>
               </v-dialog>
           </div>
         </v-flex>
       </v-layout>
     </v-container>
   </v-content>
 </v-app>
</template>

<script>
export default {
 data: () => ({
     loading: false,
     email: '',
     password: '',
     dialog:false
 }),
 methods: {
   login () {
     this.loading = true;
      setTimeout(() => {
         let email = this.email
         let password = this.password
          this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
      }, 1000);
    }
  },
  watch:{
   dialog (val) {
        if (!val) return
        setTimeout(() => (this.loading = false), 1000)
      }
  }
};
</script>
<style scoped lang="css">
 #login {
   height: 50%;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   content: "";
   z-index: 0;
 }
</style>
