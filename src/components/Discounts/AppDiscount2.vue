<template>
   <v-card elevation="5">      
      <h3 class="display-1 mb-0 text-xs-center">АКЦИЯ: 5000</h3>
      <v-img :src="require(`../../assets/discounts/5000.jpg`)" aspect-ratio="2"></v-img>
      <v-card-title primary-title>
         <div class="body-2">
            <p class="subheading">При покупке запчастей на сумму от 5000 рублей, Вы получаете скидку 10% на ремонт в наших автосервисах</p>
            <div class="headline orange--text">Условия:</div>
            <div class="grey--text">1. Акция действительна в день покупки запчастей</div>
         </div>
      </v-card-title>
   </v-card>
</template>
<script>

export default {
   
}
</script>