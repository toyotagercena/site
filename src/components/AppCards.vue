<template>
  <div>
    <!-- <v-layout justify-center> -->
      <v-container fluid grid-list-md pl-0 pr-0>
        <v-layout row wrap>
          <v-flex v-for="card in cards" :key="card.adress" v-bind="{ [`xs${card.flex}`]: true }" xs12 sm6 md3>
            <v-hover>
              <v-card slot-scope="{ hover }" elevation="5">
                <div v-if="card.ismap">
                  <iframe :src="card.map" height="295px" width="100%"></iframe>
                </div>
                <div v-else>
                  <v-img :src=card.src height="300px">
                    <v-scale-transition>
                      <div v-if="hover" 
                        class="d-flex transition-fast-in-fast-out black" 
                        style="height: 100%; opacity: .5; cursor: pointer"
                        @click="card.ismap=true">
                        <v-icon v-html="'fa-street-view'" size="500%"></v-icon>
                      </div>
                    </v-scale-transition>
                  </v-img>  
                </div>
                <v-card-text class="pt-2" style="position: relative;">
                  <div class="font-weight-light grey--text title mb-2">{{card.adress}}</div>
                  <div class="headline font-weight-light orange--text mb-2">{{card.title}}</div>
                </v-card-text>
              </v-card>
            </v-hover>                
          </v-flex>
        </v-layout>
      </v-container>
    <!-- </v-layout> -->
  </div>
</template>

<script>
import Card1 from '../assets/cards/1.jpg'
import Card2 from '../assets/cards/2.jpg'
import Card3 from '../assets/cards/3.jpg'
import Card4 from '../assets/cards/4.jpg'
export default {
 data: () => ({
      cards: [
        { adress: 'Осоавиахимовская 161б', title: 'СТО', src: Card1, flex: 3, hover: false, ismap: false, map: 'https://yandex.ru/map-widget/v1/-/CCrC64yX' },
        { adress: 'Герцена 211 и 219', title: 'СТО, Запчасти и Масла', src: Card2, flex: 3, hover: false, ismap: false, map: 'https://yandex.ru/map-widget/v1/-/CCrK5D3a' },
        { adress: 'Осоавиахимовская, 81', title: 'Запчасти', src: Card3, flex: 3, hover: false, ismap: false, map: 'https://yandex.ru/map-widget/v1/-/CCUIi-TV9A' },
        { adress: '1-я Заводская, 21', title: 'Запчасти', src: Card4, flex: 3, hover: false, ismap: false, map: 'https://yandex.ru/map-widget/v1/-/CCr16Mmn' }
      ]
    })
}
</script>

<style scope>

</style>
