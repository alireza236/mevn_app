 <template>
   <div id="">
     <v-navigation-drawer
      fixed
      class="grey lighten-4"
      app
      v-model="drawer">
         <v-toolbar flat class="transparent">
         <v-list class="pa-0">
           <v-list-tile avatar>
             <v-list-tile-avatar>
               <img src="https://randomuser.me/api/portraits/men/85.jpg">
             </v-list-tile-avatar>
             <v-list-tile-content>
               <v-list-tile-title v-if="fullName && fullName.length">
                 {{fullName}}
               </v-list-tile-title>
               <v-list-tile-title v-if="errors && errors.length">
                 {{errors.message}}
               </v-list-tile-title>
             </v-list-tile-content>
           </v-list-tile>
         </v-list>
       </v-toolbar>

       <v-list class="pt-0" dense>
         <v-divider></v-divider>
         <v-list-tile to="/">
           <v-list-tile-action>
             <v-icon>dashboard</v-icon>
           </v-list-tile-action>

           <v-list-tile-content>
             <v-list-tile-title>Home</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>

         <v-list-tile to="/user">
           <v-list-tile-action>
             <v-icon>dashboard</v-icon>
           </v-list-tile-action>

           <v-list-tile-content>
             <v-list-tile-title>User</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>

         <v-list-tile to="/book">
           <v-list-tile-action>
             <v-icon>dashboard</v-icon>
           </v-list-tile-action>

           <v-list-tile-content>
             <v-list-tile-title>Book</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list>

     </v-navigation-drawer>
   </div>
 </template>
 <script>
 import axios from 'axios';
 export default {
   data: () => ({
     drawer:null,
     username:'' ,
     errors: []
   }),
   async created(){
       try {
         const response = await axios.get('http://127.0.0.1:3000/api/v1/users');
          this.username = response.data.firstName+' '+response.data.lastName;
       } catch (error) {
         this.errors.push(error)
       }
   },
   computed: {
    fullName: function () {
      return this.username
    }
  }
 }
 </script>
 <style lang="scss" scoped>
 </style>
