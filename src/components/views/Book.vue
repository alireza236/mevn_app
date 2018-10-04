<template>
  <div id="pageTable">
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down">
              </v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :total-items="totalItems"
                :pagination.sync="pagination"
                :loading="loading"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="title">
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.isbn }}</td>
                  <td>{{ props.item.title }}</td>
                  <td>{{ props.item.author }}</td>
                  <td>{{ props.item.description }}</td>
                  <td>{{ props.item. published_year }}</td>
                  <td>{{ props.item.publisher }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
//import { Items as Users } from '../mock_api/user';
import axios from 'axios';
export default {
  data () {
    return {
      search: '',
      totalItems: 0,
      loading: true,
      pagination: {},
      complex: {
        selected: [],
        items: [],
        headers: [
          {
            text: 'ISBN',
            value: 'isbn'
          },
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Author',
            value: 'author'
          },
          {
            text: 'Description',
            value: 'description'
          },
          {
            text: 'Publish Year',
            value: 'published_year'
          },
          {
            text: 'Publisher',
            value: 'publisher'
          },
          {
            text: 'Action',
            value: ''
          },
        ],
      }
    };
  },
  async created(){
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/books`)
        this.complex.items = response.data
        console.log(response)
      } catch (e) {
        this.errors.push(e)
      }
  },
  watch: {
     pagination: {
       handler () {
         this.getDataFromApi()
           .then(data => {
             this.items = data.items
             this.totalItems = data.total
           })
       },
       deep: true
     }
   },
   mounted () {
      this.getDataFromApi()
        .then(data => {
          this.items = data.items
          this.totalItems = data.total
        })
    },
    methods: {
     getDataFromApi () {
       this.loading = true
       return new Promise((resolve, reject) => {
         const { sortBy, descending, page, rowsPerPage } = this.pagination

         let items = this.complex.items
         const total = items.length

         if (this.pagination.sortBy) {
           items = items.sort((a, b) => {
             const sortA = a[sortBy]
             const sortB = b[sortBy]

             if (descending) {
               if (sortA < sortB) return 1
               if (sortA > sortB) return -1
               return 0
             } else {
               if (sortA < sortB) return -1
               if (sortA > sortB) return 1
               return 0
             }
           })
         }

         if (rowsPerPage > 0) {
           items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
         }

         setTimeout(() => {
           this.loading = false
               resolve({
                 items,
                 total
               })
          }, 1000)
       })
     },
     
   }
};
</script>
