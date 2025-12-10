<template>
   <div>
      <br><br><br><br>

      <v-card-actions class="justify-center">
        <v-btn
          v-for="(social, i) in socials" :key="i"
          :color="social.color"
          class="white--text"
          fab icon large
          :href="social.src" target="_blank">
          <v-icon size="3em">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="(card,i) in cards" :key="`hhh${i}`" xs12 sm6 md4>
            <v-card max-height="150px">
              <v-container fluid>
                <v-layout row>
                  <v-flex xs4 md3>
                    <v-img :src="card.img" height="100px"></v-img>
                  </v-flex>
                  <v-flex xs8 md9>
                    <v-card-text>
                      <div :class="`font-weight-light ${card.color}--text title`">{{card.title}}</div>
                      <div class="font-weight-light grey--text subheading">{{card.adress}}</div>
                      <div class="font-weight-light grey--text subheading">{{card.phone}}</div>                 
                      <div class="font-weight-light grey--text subheading">{{card.mail}}</div>          
                  </v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>                
          </v-flex>
        </v-layout>
      </v-container>

      <v-card-actions class="justify-center">
        <v-icon size="3em" color="green">{{ 'fab fa-whatsapp' }}</v-icon>&nbsp;
        <div :class="`font-weight-light --text title`">+7(953)398-9565</div>
      </v-card-actions>
     <v-card-actions class="justify-center">
       <div :class="`font-weight-light --text title`">Почта для коммерческих предложений: toyota-omsk@mail.ru</div>
     </v-card-actions>

      <a style="color: white" 
        href="http://2gis.ru/omsk/profiles/282003257810129,70000001007377635,282003257715631,282003257723362,282003257955374,282003257955375/center/73.3357605,55.01765830618351/zoom/12?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
        Посмотреть на карте Омска
      </a>

      <v-container fluid text-xs-center pa-1>
      <div id="map" style="width: 100%; height: 500px;"></div>
      <br><br><br>
      </v-container>
   </div>
</template>

<script>

import shop from '../assets/map/shop.png'
import sto from '../assets/map/sto.png'
// import whatsapp from '../assets/whatsapp.png'
import Card1 from '../assets/cards/1.jpg'
import Card2 from '../assets/cards/2.jpg'
import Card3 from '../assets/cards/3.jpg'
import Card4 from '../assets/cards/4.jpg'
import Card5 from '../assets/cards/5.jpg'

export default {
 data: () => ({
      cards: [
        { title: 'АВТОСЕРВИС', adress: 'ул.Осоавиахимовская, 161б', mail: 'info@toyoda-omsk.ru', phone: '33-82-16, 25-66-85, +7-913-633-8216', color: 'red', img: Card1 },
        { title: 'АВТОСЕРВИС', adress: 'ул.Герцена, 211', mail: 'info@toyoda-omsk.ru', phone: '35-13-35', color: 'red', img: Card2 },
        { title: 'МАГАЗИН TOYODA', adress: 'ул.Герцена, 211', mail: 'info@toyoda-omsk.ru', phone: '24-46-40', color: 'green', img: Card2 },
        { title: 'МАГАЗИН Автомасла', adress: 'ул.Герцена, 219', mail: 'info@toyoda-omsk.ru', phone: '68-38-28', color: 'green', img: Card5 },
        { title: 'МАГАЗИН TOYODA', adress: '1-я Заводская, 21', mail: 'info@toyoda-omsk.ru', phone: '67-31-85', color: 'green', img: Card4 },
      ],
      socials: [
        {
          icon: 'fab fa-vk',
          color: 'indigo',
          src: 'https://vk.com/toyoda_omsk'
        },
        {
          icon: 'fab fa-twitter',
          color: 'cyan darken-1',
          src: 'https://twitter.com/ToyodaNaGercena'
        },
        {
          icon: 'fab fa-instagram',
          color: 'red lighten-3',
          src: 'https://www.instagram.com/toyoda_omsk'
        },
        {
          icon: 'fab fa-odnoklassniki',
          color: 'orange lighten-1',
          src: 'https://ok.ru/group/54034763481253'
        }
      ]
    }),
    methods:{
       
    },
    created: function () {    
      DG.then(function() { 
        var iconShop = DG.icon({ iconUrl: shop, iconSize: [32, 32] });
        var iconSto = DG.icon({ iconUrl: sto, iconSize: [32, 32] });
         var map = DG.map('map', { 'center': [55.01, 73.36], 'zoom': 11 });
         var group = DG.featureGroup([
            DG.marker([55.02001465306908, 73.37204217910768], {icon: iconSto}).addTo(map).bindPopup('Автосервис<hr>33-82-16<br>ул.Осоавиахимовская, 161б'), 
            DG.marker([55.020033105276276, 73.37500333786012], {icon: iconSto}).addTo(map).bindPopup('Автосервис<hr>35-13-35<br>ул.Герцена, 211'), 
            DG.marker([55.02026683249899, 73.37524473667146], {icon: iconShop}).addTo(map).bindPopup('МАГАЗИН Автомасла<hr>68-38-28<br>ул.Герцена, 219'),
            DG.marker([55.020030029909, 73.37525546550752], {icon: iconShop}).addTo(map).bindPopup('МАГАЗИН TOYODA<hr>24-46-40<br>ул.Герцена, 211'),
            DG.marker([55.05483729335821, 73.26659917831422], {icon: iconShop}).addTo(map).bindPopup('МАГАЗИН TOYODA<hr>67-31-85<br>1-я Заводская, 21')
         ]);
         group.addTo(map);
         group.on('click', function(e) { map.setView([e.latlng.lat, e.latlng.lng]);});

         DG.control.location({position: 'bottomright'}).addTo(map);
         DG.control.scale().addTo(map);
         DG.control.ruler({position: 'bottomleft'}).addTo(map);
         DG.control.traffic().addTo(map);
      });
  }
}
</script>
