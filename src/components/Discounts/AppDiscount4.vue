<template>  
    <v-container fluid grid-list-md text-xs-center pa-1>
      <v-layout row wrap justify-space-between>
          <v-flex v-for="card in cards" :key="card.title" d-flex md3 pa-2>
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 5}`">
                <v-icon size="7em">{{card.icon}}</v-icon>
                <p class="headline orange--text">{{card.title}}</p>
                <p class="body-2">{{card.text}}</p>
                <p class="caption">{{card.ps}}</p>
              </v-card>
            </v-hover>
          </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
      cards: [
        { icon: 'fa-car', title: 'Бесплатная диагностика', text: 'Диагностика ходовой части бесплатно в том случае если машина сразу остается на ремонт.', ps: '' },
        { icon: 'fa-tint', title: 'Замена масла', text: 'При замене масла в Коробке Передач - замена в двигателе бесплатно, при условии покупки масла в нашем магазине', ps: '' },
        { icon: 'fa-tags', title: 'Всем скидки', text: 'Обладателю Сервисной книжки предоставляется скидка 10% на слесарные работы и от 5% до 10% на автозапчати в день ремонта.', ps: '' },
        { icon: 'fa-palette', title: 'Малярные работы', text: 'Сезонные скидки на жестяно-малярные работы.', ps: '*Подробности у представителей' },
      ]
    })
}
</script>
