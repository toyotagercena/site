<template>
   <div>
      <br><br><br><br>
      <v-container fluid grid-list-sm pl-0 pr-0>
      <v-layout row wrap justify-center>
         <v-flex v-for="(item,i) in items" :key="`polezno${i}`" xs12 sm12 md6 lg4 xl4 pa-2>
           <v-card><v-img height="100%" :src="item"></v-img></v-card>
         </v-flex>
      </v-layout>
   </v-container>
   </div>
</template>

<script>
import Img1 from '../assets/polezno/1.jpg'
import Img2 from '../assets/polezno/2.jpg'
import Img3 from '../assets/polezno/3.jpg'
import Img4 from '../assets/polezno/4.jpg'
import Img5 from '../assets/polezno/5.jpg'
import Img6 from '../assets/polezno/6.jpg'

export default {
 data: () => ({
      items: [Img1,Img2,Img3,Img4,Img5,Img6]
    }),
    methods:{
       
    }
}
</script>
