<template>
   <div>
      <br><br><br><br>
      <v-card>
      <v-card-title>
         <div style="color: orange; font-size: 2em">Обязательно уточняйте наличие по телефону: 24-46-40</div>
         <v-spacer></v-spacer>
         <v-text-field v-model="search" append-icon="fa-search" label="Поиск" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="products" :search="search">
         <template v-slot:items="props">
            <td>
               <v-img 
                  width="150" 
                  :src="require(`../sale/images/${props.item.code}.jpg`)" 
                  style="cursor: zoom-in"
                  @click.stop="dialogShow(require(`../sale/images/${props.item.code}.jpg`))"
               >
               </v-img>
            </td>
            <td>{{ props.item.code }}</td>
            <td>
               <div v-if="props.item.price1 == props.item.price2">
                  <div class="price2"><span>{{ props.item.price2 }}</span></div>
               </div>
               <div v-else>
                  <div class="price1"><span>{{ props.item.price1 }}</span></div>
                  <div class="price2"><span>{{ props.item.price2 }}</span></div>
               </div>
            </td>
            <td>{{ props.item.qty }}</td>
            <td>
               {{ props.item.dis1 }}<br>
               {{ props.item.dis2 }}
            </td>
         </template>
         <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="fa-exclamation-triangle">"{{ search }}" не найден.</v-alert>
         </template>
      </v-data-table>
   </v-card>
    <br><br><br><br>
    <div v-if="dialogImg != null">
      <v-dialog v-model="dialog" max-width="80%">
         <v-card>
            <v-img :src="dialogImg"></v-img>
         </v-card>
      </v-dialog>
   </div>
    
   </div>
</template>

<script>
  export default {
    data () {
      return {
         dialog: false,
         dialogImg: null,
         search: '',
         headers: [
          { text: 'Фото', sortable: false, value: 'photo' },
          { text: 'Код', align: 'left', sortable: false, value: 'code' },
          { text: 'Цена (руб.)', sortable: false, value: 'price' },
          { text: 'Кол-во', sortable: false, value: 'qty' },
          { text: 'Примечание', sortable: false, value: 'discription' }
        ],
         products: [
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(6005) NISSAN PATFINDER  1997-', dis2: 'стелаж (верх) №1' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1748) NISSAN AD Y10', dis2: 'стелаж (верх) №1' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN PATROL 1981-1991', dis2: 'стелаж (верх) №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(8255) TOYOTA DYNA', dis2: 'стелаж (верх) №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'HONDA CIVIC 1995-', dis2: 'стелаж (верх) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN LAUREL C35', dis2: 'стелаж (верх) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN CUBE 1998-', dis2: 'стелаж (верх) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN PRESAGE', dis2: 'стелаж (верх) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1748) NISSAN AD Y10', dis2: 'стелаж (верх) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1760) MITSUBISHI PADJERO ', dis2: 'стелаж (верх) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(N5660) NISSAN ATLAS F23 1991-', dis2: 'стелаж (верх) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN SERENA C23', dis2: 'стелаж (верх) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(6002) NISSAN PRIMERA P11', dis2: 'стелаж (верх) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(6005) NISSAN PATFINDER  1997-', dis2: 'стелаж (верх) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(6001) NISSAN SUNNY B14', dis2: 'стелаж (верх) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(8302) CAMRI SXV20', dis2: 'стелаж (верх) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(6006) NISSAN PATROL Y61', dis2: 'стелаж (верх) №6' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'HONDA CIVIC', dis2: 'стелаж (верх) №6' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T8C0) TOYOTA STAPLET EP90', dis2: 'стелаж (верх) №7' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N3U0) NISSAN PRIMERA P11', dis2: 'стелаж (верх) №7' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(H2U0)  HONDA DOMANI 1992-', dis2: 'стелаж (верх) №7' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'TOYOTA SPRINTER, CARIB AE95', dis2: 'стелаж (верх) №7' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T4F0) TOYOTA CAMRI SV40', dis2: 'стелаж (верх) №8' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N6C0) NISSAN PRIMERA P10', dis2: 'стелаж (верх) №8' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(8303) TOYOTA IPSUM', dis2: 'стелаж (верх) №8' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T9C3) TOYOTA RAUM', dis2: 'стелаж (верх) №9' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T3K3) TOYOTA SPACIO', dis2: 'стелаж (верх) №10' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N2J8) NISSAN TERRANO R20', dis2: 'стелаж (верх) №11' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'TOYOTA DYNA 1984-95', dis2: 'стелаж (верх) №11' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1820) МИТ ЛАНЦЕР', dis2: 'стелаж (верх) №12' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T5W3) TOYOTA HARRIER старый', dis2: 'стелаж (верх) №13' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(8246) TOYOTA HIACE  1983-1989', dis2: 'стелаж (верх) №13' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(2003) HONDA SHUTLE', dis2: 'стелаж (верх) №13' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T9V6) TOYOTA ESTIMA', dis2: 'стелаж (верх) №15' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'TOYOTA HIACE 83-89', dis2: 'стелаж (верх) №15' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(3962) HONDA CRV 1995-', dis2: 'стелаж (верх) №16' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T3R2) TOYOTA MARK2 GX81 HARD', dis2: 'стелаж (верх) №16' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N6V6) NISSAN LARGO 1993', dis2: 'стелаж (верх) №17' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN SUNNY B15', dis2: 'стелаж (верх) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1403) TOYOTA L/CRUISER FJ70', dis2: 'стелаж (низ) №1' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN PRERIA M12', dis2: 'стелаж (низ) №1' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN SERENA C23', dis2: 'стелаж (низ) №1' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(N3T6) NISSAN TERRANO WD21', dis2: 'стелаж (низ) №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(Z3T6) USIZU ELF 350', dis2: 'стелаж (низ) №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1403) TOYOTA L/CRUISER 78 НЕ ПОДХОДИТ', dis2: 'стелаж (низ) №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(H2UO) HONDA DOMANI', dis2: 'стелаж (низ) №3' },
         //{ code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N8C2) NISSAN PRESEA  R11', dis2: 'стелаж (низ) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1832) NISSAN MARCH K11', dis2: 'стелаж (низ) №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N5460) NISSAN ATLAS F22', dis2: 'стелаж (низ) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(8301) TOYOTA PRAD0 1996-           4800', dis2: 'стелаж (низ) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N7C2) NISSAN PRESEA  R10', dis2: 'стелаж (низ) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T1F0) TOYOTA CAMRI SV30', dis2: 'стелаж (низ) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(1540) TOYOTA SRPINTER,CARIB AE9*', dis2: 'стелаж (низ) №4' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T596) TOYOTA TOWACE YR22', dis2: 'стелаж (низ) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T1F0) TOYOTA CAMRI SV30', dis2: 'стелаж (низ) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T5C0) TOYOTA TERCEL EL41', dis2: 'стелаж (низ) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(WS1539) TOYOTA COROLLA AE91', dis2: 'стелаж (низ) №5' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'TOYOTA NADIA                              3000', dis2: 'стелаж (низ) №6' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1909) SUBARU LEGACY', dis2: 'стелаж (низ) №6' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1272) ISUZU ELF', dis2: 'стелаж (низ) №6' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN PRIMERA P11', dis2: 'стелаж (низ) №7' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 3, dis1: '(N3T6) NISSAN TERRANO WD21 1985-1996', dis2: 'стелаж (низ) №8' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'МАРИНО', dis2: 'стелаж (низ) №8' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'NISSAN CUBE 1998-', dis2: 'стелаж (низ) №8' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1540) TOYOTA CARIB AE95', dis2: 'стелаж (низ) №9' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(WS6006) NISSAN PATROL Y61 1998-', dis2: 'стелаж (низ) №9' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'TOYOTA CARIB 1997-99', dis2: 'стелаж (низ) №9' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(T5R2) TOYOTA CHASER 1992-1996', dis2: 'стелаж (низ) №10' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(1811) TOYOTA SPRINTER AE100', dis2: 'стелаж (низ) №10' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(2003) HONDA  SHUTLE', dis2: 'стелаж (низ) №11' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(M4E0) MAZDA 626 1992-1997', dis2: 'стелаж (низ) №12' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T3F0) TOYOTA CAMRI SXV10', dis2: 'стелаж (низ) №13' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(5661) MITSUBISHI PAJERO 2003', dis2: 'стелаж (низ) №13' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 3, dis1: 'TOYOTA COROLLA 1983-93   зад', dis2: 'стелаж (низ) №16' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '68131-1A080', dis2: 'стелаж (низ) №16' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '68131-89108 Hilux 130 зад', dis2: 'стелаж (низ) №16' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(WS1653) TOYOTA HIACE 1889-1995      4800', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N3U0) NISSAN PRIMERA P11', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(N2J8) NISSAN TERRANO R20', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(56111-2B111) TOYOTA CORONA ST190  оригинал 11200', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(56111-22841) TOYOTA CHASER GX90  оригинал    11200', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(RWT1F0) TOYOTA CAMRI SV30 зад', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: 'TOYOTA Corona AT192   REAR', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(RWT6E0) TOYOTA COROLLA AE90 зад', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(RWT2H2) TOYOTA CHASER GX100', dis2: 'стелаж (низ) №18' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 2, dis1: '(N2U0) NISSAN BLUEBERD U13', dis2: 'ящик №1' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(8305) TOYOTA CALDINA ST2*', dis2: 'ящик №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T4F0) TOYOTA CAMRI SV40', dis2: 'ящик №2' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(8301) TOYOTA PRADO 90', dis2: 'ящик №3' },
         { code: 'Лобовое стекло', price1: 1800, price2: 1800, qty: 1, dis1: '(T5G0) TOYOTA CRESTA GX100', dis2: 'ящик №3' }
        ]
      }
    },
    methods: {
      dialogShow(img) {
         this.dialogImg = img;
         this.dialog = true;
      }
   }
  }
</script>

<style scoped>
.price1{
	color:rgb(248, 97, 97);  /* цвет зачеркивающей линии */
	text-decoration: line-through;
	display:inline;
	font-size: large;
}
.price1 span {
	color: rgb(189, 189, 189);  /* цвет зачеркиваемого текста */
}
.price2{
	color: rgb(42, 228, 42);
	font-weight: bold;
	font-size: x-large;
}

td{
	vertical-align: middle;
}

.call{
	font-weight: bold;
	font-size: x-large;
	color: #7f1933;
}
</style>