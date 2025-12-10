<template>
 <v-footer :fixed="true" class="pa-3">

    <a href="https://metrika.yandex.ru/stat/?id=47110302&amp;from=informer" target="_blank" rel="nofollow">
      <img src="https://informer.yandex.ru/informer/47110302/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
        style="width:88px; height:31px; border:0;" 
        alt="Яндекс.Метрика" 
        title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" 
        class="ym-advanced-informer" 
        data-cid="47110302" 
        data-lang="ru" />
    </a>
    <a href="https://top.mail.ru/jump?from=2981394" target="_blank">
      <img src="//top-fwz1.mail.ru/counter?id=2981394;t=617;l=1" style="border:0;" height="30" width="88" alt="Рейтинг@Mail.ru" />
    </a>
    
    <div style="width: 50%">
      <marquee-text :duration="20" :repeat="10">
         <h3 style="color: grey">
           <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <v-icon color='green'>fa-info-circle</v-icon>&nbsp;
           <span>Послегарантийное обслуживание. </span> -->

           <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <v-icon color='orange'>fa-exclamation-triangle</v-icon>&nbsp;
           <span>Остерегайтесь подделок! </span> -->

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <v-icon color='deep-purple lighten-2'>fa-clock</v-icon>&nbsp;
           <span>{{curtime}}</span>

           <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <v-icon color='green'>fab fa-whatsapp</v-icon>&nbsp;
           <span>+7(953)398-9565 </span> -->

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <v-icon color='green'>fa-duotone fa-briefcase</v-icon>&nbsp;
           <span>ВАКАНСИЯ: Автослесарь (ученик с последующим трудоустройство). Зарплата сдельная.Официальное трудоустройство.</span>
          </h3>
      </marquee-text>
    </div>
    <v-spacer></v-spacer>
    <div>TOYODA на Герцена &copy; 1996 - {{ new Date().getFullYear() }}</div>
  </v-footer>  
</template>

<script>
export default {
  data: () => ({
    curtime: ''
  }),
  mounted () {
    this.setTime();
  },
  methods:{
    setTime(){
      var monthNames = [
        "Января", "Февраля", "Марта",
        "Апреля", "Мая", "Июня", "Июля",
        "Августа", "Сентября", "Октября",
        "Ноября", "Декабря"
      ];
      var date = new Date();
      var d = date.getUTCDate();
      var M = date.getUTCMonth();
      var y = date.getUTCFullYear();
      var h = date.getUTCHours()+6;
      var m = date.getUTCMinutes();
      if(m.toString().length < 2) { m = '0'+m; }
      this.curtime = 'В Омске: ' +d+' '+monthNames[M]+' '+y+' ('+h+':'+m+')';
      var v = this;
      setTimeout(function () {v.setTime() }, 30000);
    }
  },
}
</script>