<template>
   <v-card elevation="5">      
      <h3 class="display-1 mb-0 text-xs-center">АКЦИЯ: День рождения</h3>
      <v-img :src="require(`../../assets/discounts/happy.jpg`)" aspect-ratio="3"></v-img>
      <v-card-title primary-title>
         <div class="body-2">
            <p class="subheading">В течение 7 дней (в сам день рождения, за 3 дня до, и 3 дня после) Вы можете получить дополнительную скидку 5% на рементные работы.</p>
            <div class="headline orange--text">Условия:</div>
            <div class="grey--text">1. Иметь сервисную книжку нашего СТО</div>
            <div class="grey--text">2. Предъявить паспорт или водительское удостоверение кассиру</div>
            <div class="grey--text">Акцией можно воспользоваться только один раз.</div>
         </div>
      </v-card-title>
   </v-card>
</template>
<script>

export default {
   
}
</script>