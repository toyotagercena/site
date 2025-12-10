<template>
  <div>
    <div v-if="isloading">
    <v-container fill-height style="height: 80vh">
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center">
          <AppLoading/>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
    <v-container v-else fluid>
      <AppCarousel/> 

      <!-- <v-container fluid grid-list-md text-xs-center pa-1>
        <h3 class="display-1 mb-0 text-xs-center">Speed Mate</h3>
        <v-layout row wrap>
          <v-flex v-for="i in 2" :key="i" d-flex xs12 sm12 md12 ma-1>
            <v-card>
              <Video :mp4="require('../assets/speed_mate_'+i+'.mp4')" />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container> -->

      <AppCards/>
      <AppCatalizators/>
      <AppDiscounts/>
      <AppFlamp/>    
      <AppAbout/>
    </v-container>

<!-- /////////////////////////////////////////////// -->
<v-dialog v-model="dialogError" width="650">
      <v-card class="text-xs-center">
        <v-card-title class="headline red">
          ВАЖНАЯ ИНФОРМАЦИЯ
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialogError = false"><v-icon>close</v-icon></v-btn>
          </v-card-title>
        <v-container fluid grid-list-md>
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 sm5 md5 lg5 xl5 child-flex>
            <div>
              <v-img :src="require(`../assets/attention.png`)" height="100%"></v-img>
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm7 md7 lg7 xl7>
            <div class="subheading">
              <v-card-text>В связи с Указом Президента РФ об объявлении в России нерабочих дней, наши СТО и магазины будут закрыты на период с 30.03.2020г. по 05.04.2020г.</v-card-text>
              <v-card-text>Приносим свои извенения за предоставленные неудобства</v-card-text>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      </v-card>
    </v-dialog>
<!-- /////////////////////////////////////////////// -->

<!-- // Диалоговое окно Кавказская пленница -->
    <v-dialog v-model="dialogKafe" width="500">
      <v-card class="text-xs-center">
        <v-card-title class="headline orange">
          Кафе Кавказская пленница
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialogKafe = false"><v-icon>close</v-icon></v-btn>
          </v-card-title>
        <v-container fluid grid-list-md>
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 sm5 md5 lg5 xl5 child-flex>
            <div>
              <v-img :src="require(`../assets/kafe.png`)" height="100%"></v-img>
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm7 md7 lg7 xl7>
            <div class="subheading">
              <v-card-text>Приглашаем посетить наше кафе оформленное в стилистике кинофильма Кавказская пленница.</v-card-text>
              <v-card-text>Кафе находится по адресу:<br>Орджоникидзе 73, т.33-82-14</v-card-text>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" 
            @click="dialog = false" 
            href="http://xn--80aaaahumklccn1aa0a3a7g9g.xn--p1ai/"
            target="_blank">
            Посетить сайт кафе
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- // Диалоговое Орджоникидзе Солнечная электричество -->
    <v-dialog v-model="dialogEnergy" width="500">
      <v-card class="text-xs-center">
        <v-card-title class="headline orange">
          Солнечная энергия
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialogEnergy = false"><v-icon>close</v-icon></v-btn>
          </v-card-title>
        <v-container fluid grid-list-md>
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 sm5 md5 lg5 xl5 child-flex>
            <div>
              <v-img :src="require(`../assets/energy.png`)" height="100%"></v-img>
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm7 md7 lg7 xl7>
            <div class="subheading">
              <v-card-text>Надоели бесконечные счета за электричество и тепло?</v-card-text>
              <v-card-text>Тогда Солнечная энергия - это Ваш выход.</v-card-text>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" 
            @click="dialog = false" 
            href="http://energy-omsk.ru"
            target="_blank">
            Посетить сайт
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!-- // Диалоговое Стерилизация салона -->
    <v-dialog v-model="dialogSalon" width="500">
      <v-card class="text-xs-center">
        <v-card-title class="headline orange">
          1500 руб. / 15 минут
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialogSalon = false"><v-icon>close</v-icon></v-btn>
          </v-card-title>
        <v-container fluid grid-list-md>
        <v-layout row wrap align-center>
          <v-flex d-flex>
            <div>
              <v-img :src="require(`../assets/salon.jpg`)" height="100%"></v-img>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      </v-card>
    </v-dialog>

<!-- // Диалоговое Подкачка азотом-->
    <v-dialog v-model="dialogAzot" width="500">
      <v-card class="text-xs-center">
        <v-card-title class="headline orange">
          Подкачка азотом
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialogAzot = false"><v-icon>close</v-icon></v-btn>
          </v-card-title>
        <v-container fluid grid-list-md>
        <v-layout row wrap align-center>
          <v-flex d-flex xs12 sm5 md5 lg5 xl5 child-flex>
            <div>
              <v-img :src="require(`../assets/azot.png`)" height="100%"></v-img>
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm7 md7 lg7 xl7>
            <div class="subheading">
              <v-card-text class="caption">ПРИИМУЩЕСТВА:<br>Малекулы азота больше молекул кислорода, благодоря этому утечка газа из шин уменьшается, что позволит подкачивать колеса в 2-3 раза реже.<br>Азот имеет более высокие демпфирующие свойства, поэтому в жару и холод эксплуатация будет одинаково комфортной.<br>Азот не вызывает окисления усиливающих конструкций шины, что снижает естественный износ шин, позволяя сэкономить на их ремонте и замене.</v-card-text>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      </v-card>
    </v-dialog>

<!-- // Диалоговое Экспресс замена масла-->
    <v-dialog v-model="dialogExpress" width="500">
      <v-card class="text-xs-center">
        <v-card-title class="headline orange">

          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialogAzot = false"><v-icon>close</v-icon></v-btn>
        </v-card-title>
        <v-container fluid grid-list-md>
          <v-layout row wrap align-center>
            <v-flex d-flex>
              <v-card-text class="title">
                - Экспресс замена масла - БЕСПЛАТНО<br><br>
                <p class="body-2">
                  *Замена масленного фильтра от 150р. до 250р. (в зависимости от марки автомобиля)
                  <br><br>
                  Демонтаж и монтаж защиты от 200р.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  components: {
    AppCarousel: () => import('../components/AppCarousel'),
    // Video: () => import('../components/Video'),
    AppVideos: () => import('../components/AppVideos'),
    AppCards: () => import('../components/AppCards'),
    AppAbout: () => import('../components/AppAbout'),
    AppLoading: () => import('../components/AppLoading'),
    AppDiscounts: () => import('../components/AppDiscounts'),
    AppFlamp: () => import('../components/AppFlamp'),
    AppCatalizators: () => import('../components/AppCatalizators')
  },
  data () {
    return {
      isloading: false,
      dialogError: false,
      dialogKafe: false,
      dialogEnergy: false,
      dialogSalon: false,
      dialogAzot: false,
      dialogExpress: false,
    }
  },
  mounted: function () {
    // this.showModalError()
    // this.showModalKafe()
    // this.showModalEnergy()
    // this.showModalSalon()
    // this.showModalAzot()
    this.showModalExpress()
  },
  methods:{

  /////////////////////////////////////
  // showModalError: function () {
  //     var v = this;
  //     setTimeout(function () { v.dialogError = true }, 1000);
  //  },
  //    showModalSalon: function () {
  //     var v = this;
  //     setTimeout(function () { v.dialogSalon = true }, 5000);//10000
  //  },
  //     showModalAzot: function () {
  //       var v = this;
  //       setTimeout(function () { v.dialogAzot = true }, 1000);
  //     },
  //   showModalExpress: function () {
  //     var v = this;
  //     setTimeout(function () { v.dialogExpress = true }, 1000);
  //   },
  // showModalKafe: function () {
  //      var v = this;
  //      setTimeout(function () { v.dialogKafe = true }, 10000);
  //  },
  //  showModalEnergy: function () {
  //     var v = this;
  //     setTimeout(function () { v.dialogEnergy = true }, 10000);//10000
  //  },
  }
}
</script>
