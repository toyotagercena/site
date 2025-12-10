<template>
   <v-card elevation="5">      
      <h3 class="display-1 mb-0 text-xs-center">АКЦИЯ: Жилет</h3>
      <v-img :src="require(`../../assets/discounts/jilet.jpg`)" aspect-ratio="2"></v-img>
      <v-card-title primary-title>
         <div class="body-2">
            <p class="subheading">Отремонтируй свой автомобиль и получи автомобильный жилет</p>
            <div class="headline orange--text">Условия:</div>
            <div class="grey--text">1. Акция проводится только для клиентов без сервисной книжки нашего сервиса.</div>
            <div class="grey--text">2. Жилет выдается только при условии ремонта от 5000 рублей единовременно и выписывается сервисная книжка для обслуживания в наших автосервисах.</div>
         </div>
      </v-card-title>
   </v-card>
</template>
<script>

export default {
   
}
</script>