<template>
<div>
   <v-container fluid grid-list-sm pl-0 pr-0>
      <v-layout row wrap justify-center>
         <v-flex d-flex md12 pa-2><app-discount0/></v-flex>
          <v-flex d-flex md12 pa-2><app-discount1/></v-flex>
         <v-flex d-flex md12 pa-2><app-discount6/></v-flex>
         <v-flex d-flex md6 pa-2><app-discount2/></v-flex>
         <v-flex d-flex md6 pa-2><app-discount3/></v-flex>
         <app-discount4/>
         <app-discount5/>
      </v-layout>
   </v-container>
</div>
</template>

<script>
export default {
   components: {
    AppDiscount0: () => import('../components/Discounts/AppDiscount0'),
    // AppDiscount1: () => import('../components/Discounts/AppDiscount1'),
   //  AppDiscount6: () => import('../components/Discounts/AppDiscount6'),
    AppDiscount2: () => import('../components/Discounts/AppDiscount2'),
    AppDiscount3: () => import('../components/Discounts/AppDiscount3'),
    // AppDiscount5: () => import('../components/Discounts/AppDiscount5'),
    AppDiscount4: () => import('../components/Discounts/AppDiscount4')
  }
}
</script>
