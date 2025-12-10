<template>
  <v-carousel height=100% delimiter-icon='fa-circle'>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
      <v-container text-xs-center>
        <v-flex mt-5 class="headline srg_stroke"> {{item.text}} </v-flex>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Img0 from '../assets/carousel/0.jpg'
import Img1 from '../assets/carousel/1.jpg'
import Img2 from '../assets/carousel/2.jpg'
import Img3 from '../assets/carousel/3.jpg'
  export default {
    data () {
      return {
        items: [
          { src: Img0, text: '' },
          { src: Img1, text: 'TOYODA — это автомобильный холдинг, успешно работающий уже более 20 лет. Мы совершенствуем свои знания и умения, накапливая опыт, и обеспечиваем наших клиентов сервисом наивысшего уровня.' },
          { src: Img2, text: 'Наша фирма предлагает услуги лучших диагностов города! Диагностика неполадок электроники, двигателя, АКПП и МКПП. Гибриды (HYBRID) и не только.' },
          { src: Img3, text: 'За долгие годы мы успели освоить большую часть авто-рынка и зарекомендовать себя. Наши специалисты обеспечивают лучший сервис, поставщики - качество, администрация - улыбку. У машин есть сердце и мы знаем чего оно хочет!' }
        ]
      }
    }
  }
</script>

<style scoped>
  .srg_stroke{
    /* margin: 50px; */
    /* text-shadow: black 0 0 5px; */
    text-shadow: black 1px 1px 0, black -1px -1px 0, black -1px 1px 0, black 1px -1px 0;
  }
</style>
