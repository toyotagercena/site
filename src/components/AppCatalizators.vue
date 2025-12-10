<template>  
    <v-container fluid grid-list-md text-xs-center pa-1>
      <h3 class="display-1 mb-0 text-xs-center">Катализаторы</h3>
      <v-layout row wrap justify-space-between>
          <v-flex v-for="card in cards" :key="card.title" d-flex md2 pa-1>
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 5}`">
                <v-img :src=card.img aspect-ratio="1"></v-img>
                <p class="headline orange--text">{{card.title}}</p>
                <p class="body-2">{{card.text}} ({{card.ps}} руб.)</p>
              </v-card>
            </v-hover>
          </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import cat1 from "../assets/catalizators/215412 Катализатор ТО26-300.jpg"
import cat2 from "../assets/catalizators/215413 Катализатор ТО21-300.jpg"
import cat3 from "../assets/catalizators/215414 Катализатор ТО02-250.jpg"
import cat4 from "../assets/catalizators/215415 Катализатор ТО81-300.jpg"
import cat5 from "../assets/catalizators/215416 Катализатор ТО05-300.jpg"
import cat6 from "../assets/catalizators/219287 Катализатор ТО02-175 ~ 12406 '45.jpg"
import cat7 from "../assets/catalizators/219288 Катализатор ТО02-200 ~ 12407 '51.jpg"
import cat8 from "../assets/catalizators/219289 Катализатор ТО02-225 ~ 12408 '57.jpg"
import cat9 from "../assets/catalizators/219290 Катализатор ТО03-175 ~ 12409 '45.jpg"
import cat10 from "../assets/catalizators/219291 Катализатор ТО03-200 ~ 12410 '51.jpg"
import cat11 from "../assets/catalizators/219293 Катализатор ТО05-225 ~ 12412 '57.jpg"
import cat12 from "../assets/catalizators/219294 Катализатор ТО81-250 ~ 12413 '63.jpg"
import cat13 from "../assets/catalizators/219295 Катализатор ТО82-200 ~ 12414 '51.jpg"
import cat14 from "../assets/catalizators/219296 Катализатор ТО21-175 ~ 12415 '45.jpg"
import cat15 from "../assets/catalizators/219297 Катализатор ТО21-250 ~ 12416 '63.jpg"

export default {
  data: () => ({
      cards: [
        { img: cat1, title: '215412', text: 'ТО26-300', ps: '5000' },
        { img: cat2, title: '215413', text: 'ТО21-300', ps: '5000' },
        { img: cat3, title: '215414', text: 'ТО02-250', ps: '5000' },
        { img: cat4, title: '215415', text: 'ТО81-300', ps: '5000' },
        { img: cat5, title: '215416', text: 'ТО05-300', ps: '5000' },
        { img: cat6, title: '219287', text: "ТО02-175 ~ 12406 '45", ps: '5000' },
        { img: cat7, title: '219288', text: "ТО02-200 ~ 12407 '51", ps: '5000' },
        { img: cat8, title: '219289', text: "ТО02-225 ~ 12408 '57", ps: '5000' },
        { img: cat9, title: '219290', text: "ТО03-175 ~ 12409 '45", ps: '5000' },
        { img: cat10, title: '219291', text: "ТО03-200 ~ 12410 '51", ps: '5000' },
        { img: cat11, title: '219293', text: "ТО05-225 ~ 12412 '57", ps: '5000' },
        { img: cat12, title: '219294', text: "ТО81-250 ~ 12413 '63", ps: '5000' },
        { img: cat13, title: '219295', text: "ТО82-200 ~ 12414 '51", ps: '5000' },
        { img: cat14, title: '219296', text: "ТО21-175 ~ 12415 '45", ps: '5000' },
        { img: cat15, title: '219297', text: "ТО21-250 ~ 12416 '63", ps: '5000' },
      ]
    })
}
</script>
