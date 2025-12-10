<template>  
    <v-container fluid grid-list-xs text-xs-center pa-1>
      <v-layout row wrap justify-space-between>
          <v-flex v-for="card in cards" :key="card.title" d-flex md2 pa-2>
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 5}`">
                <v-img :src=card.img aspect-ratio="1"></v-img>
                <div class="body-2">{{card.title}}</div>
                <div class="headline orange--text">{{card.price}}</div>
                <div class="body-2">{{card.adress}}</div>
                <div class="body-2">{{card.phone}}</div>
              </v-card>
            </v-hover>
          </v-flex>          
      </v-layout>
    </v-container>
</template>

<script>
import Card1 from '../../assets/discounts/product1.png'
import Card2 from '../../assets/discounts/product2.png'
import Card3 from '../../assets/discounts/product3.png'
import Card4 from '../../assets/discounts/product4.png'
import Card5 from '../../assets/discounts/product5.png'
export default {
  data: () => ({
      cards: [
        { title: 'Тормозная жидкость ROSDOT', price: 'Цена: 300 руб.', adress: 'Осоавиахимовская 161Б', phone: 'Телефон: 25-66-85', img: Card1 },
        { title: 'Антифриз FELIX', price: 'Цена: 200 руб.', adress: 'Осоавиахимовская 161Б', phone: 'Телефон: 25-66-85', img: Card2 },
        { title: 'Масло TOTACHI 5W-30', price: 'Цена: 2430 руб.', adress: 'Герцена 219', phone: 'Телефон: 68-38-28', img: Card3 },
        { title: 'Масло TOYOTA SN 5W-30', price: 'Цена: 3000 руб.', adress: 'Герцена 219', phone: 'Телефон: 68-38-28', img: Card4 },
        { title: 'Масло TOYOTA SN 5W-40', price: 'Цена: 600 руб./1л', adress: 'Герцена 219', phone: 'Телефон: 68-38-28', img: Card5 },
      ]
    })
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>