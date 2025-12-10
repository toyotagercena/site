<template>
 <div>
    <br><br><br><br><br><br>
    <div v-if="!isAuth">{{this.$router.push('/login')}}</div>
    <div v-else>
      
      <v-card class="pa-3 ma-3 elevation-11">
         <v-form v-if="!edit" class="text-lg-right">
            <v-btn @click.prevent="" color="#2F2F25">Изменить пароль</v-btn>
            <v-btn @click.prevent="edit=true;showPopup=false;showJetonsGame=false;" color="#2F2F25">Редактировать данные</v-btn>
         </v-form>
         <v-alert :value="showPopup" :type="typePopup" transition="scale-transition" outline>{{textPopup}}</v-alert>
         <v-layout row wrap>
            <v-flex v-for="(u,i) in user" :key="`user${i}`" xs12 sm12 md6 lg4 xl4 pa-1>
               <div v-if="edit && u.edit">
                  <v-text-field :value="u.title" :label="u.discription" box v-model="u.title"></v-text-field>
               </div>
               <div v-else>
                  <v-list-tile>
                     <v-list-tile-action><v-icon color="blue-grey">{{u.icon}}</v-icon></v-list-tile-action>  
                     <v-list-tile-content>
                        <v-list-tile-title class="title">{{u.title}}</v-list-tile-title>
                        <v-list-tile-sub-title class="caption" style="color: grey">{{u.discription}}</v-list-tile-sub-title>
                     </v-list-tile-content>
                  </v-list-tile>
                  <v-divider inset></v-divider> 
               </div>
            </v-flex>  
         </v-layout>
         <v-form v-if="edit" class="text-lg-right">
            <v-btn @click.prevent="edit=false; getInfo();showJetonsGame=true;" color="srgError">Отмена</v-btn>
            <v-btn @click.prevent="saveEdit();showJetonsGame=true;" color="srgSuccess">Сохранить</v-btn>
         </v-form>
      </v-card>
    </div>
    <!-- <app-jeton v-if="showJetonsGame" /> -->
    <transition name="anim1" mode="out-in"><app-jeton v-if="showJetonsGame && isHaveBook" /></transition>
   
    <br><br><br><br><br><br>
 </div>
</template>

<script>
export default {
   components: {
    AppJeton: () => import('../components/AppJeton')
  },
   data(){
      return{
         edit: false,
         userToken: '',
         showPopup: false,
         textPopup: '',
         typePopup: 'error',
         jwtData: {},
         user: {
            numbook:{title:'', edit:'', icon:'', discription:''},
            email:{title:'', edit:'', icon:'', discription:''},
            fio:{title:'', edit:'', icon:'', discription:''},
            phone:{title:'', edit:'', icon:'', discription:''},
            marka:{title:'', edit:'', icon:'', discription:''},
            regnumber:{title:'', edit:'', icon:'', discription:''},
            typets:{title:'', edit:'', icon:'', discription:''},
            vin:{title:'', edit:'', icon:'', discription:''},
            engine:{title:'', edit:'', icon:'', discription:''},
            carcase:{title:'', edit:'', icon:'', discription:''},
            daterelease:{title:'', edit:'', icon:'', discription:''},
            color:{title:'', edit:'', icon:'', discription:''},
            bonus:{title:'', edit:'', icon:'', discription:''},
            jeton:{title:'', edit:'', icon:'', discription:''}
         },
         showJetonsGame: true,
      }
   },
   computed: {
      isAuth(){
         return this.$store.getters.getToken !== '';
      },
      isHaveBook(){
         if(this.user.numbook.title !== '') return true;
         else return false;
      }
   },
   created(){
      this.userToken = this.$store.getters.getToken;
      this.jwtData = this.getJwtData();
      this.getInfo();
   },
   methods: {
      getJwtData() {
         if(this.userToken !== 'undefined'){if (this.userToken) return JSON.parse(atob(this.userToken.split('.')[1]));}
         return {};
      },
      getInfo() {
         const params = new URLSearchParams();
         params.append('token', this.userToken);
         this.$axios.post('http://toyoda/_host/profile.php', params)
         .then((res) => {
            if(res.data.error){
               this.textError = res.data.error;
               this.$store.commit('delToken');
               if(res.data.error === 'Expired token') alert('Истекло время сессии');
               if(res.data.error === 'Another login') alert('Произведен вход на другом устройстве!');
            }else{
               this.user.numbook.title = res.data.numbook; 
               this.user.numbook.edit = false; 
               this.user.numbook.icon = 'fa-book'; 
               this.user.numbook.discription = 'Номер Сервисной книжки';

               this.user.email.title = res.data.email; 
               this.user.email.edit = false; 
               this.user.email.icon = 'fa-envelope'; 
               this.user.email.discription = 'Электронная почта';
               
               this.user.fio.title = res.data.fio; 
               this.user.fio.edit = true; 
               this.user.fio.icon = 'fa-user';
               this.user.fio.discription = 'Ф.И.О.';
               
               this.user.phone.title = res.data.phone; 
               this.user.phone.edit = true; 
               this.user.phone.icon = 'fa-phone';
               this.user.phone.discription = 'Телефон';
               
               this.user.marka.title = res.data.marka; 
               this.user.marka.edit = true; 
               this.user.marka.icon = 'fa-wrench';
               this.user.marka.discription = 'Марка ТС';
               
               this.user.regnumber.title = res.data.regnumber; 
               this.user.regnumber.edit = true; 
               this.user.regnumber.icon = 'fa-id-card';
               this.user.regnumber.discription = 'Рег.номер';
               
               this.user.typets.title = res.data.typets; 
               this.user.typets.edit = true; 
               this.user.typets.icon = 'fa-car';
               this.user.typets.discription = 'Тип ТС';
               
               this.user.vin.title = res.data.vin; 
               this.user.vin.edit = true; 
               this.user.vin.icon = 'fa-key';
               this.user.vin.discription = 'VIN';
               
               this.user.engine.title = res.data.engine; 
               this.user.engine.edit = true; 
               this.user.engine.icon = 'fa-cogs';
               this.user.engine.discription = 'Двигатель';
               
               this.user.carcase.title = res.data.carcase; 
               this.user.carcase.edit = true; 
               this.user.carcase.icon = 'fa-gavel';
               this.user.carcase.discription = 'Кузов';
               
               this.user.daterelease.title = res.data.daterelease; 
               this.user.daterelease.edit = true; 
               this.user.daterelease.icon = 'fa-calendar-alt';
               this.user.daterelease.discription = 'Год выпуска';
               
               this.user.color.title = res.data.color; 
               this.user.color.edit = true; 
               this.user.color.icon = 'fa-palette';
               this.user.color.discription = 'Цвет';
               
               this.user.bonus.title = res.data.bonus; 
               this.user.bonus.edit = false; 
               this.user.bonus.icon = 'fa-percent';
               this.user.bonus.discription = 'Бонусы';
               
               this.user.jeton.title = res.data.jeton; 
               this.user.jeton.edit = false; 
               this.user.jeton.icon = 'fa-donate';
               this.user.jeton.discription = 'Жетоны';
            }
         })
         .catch((err) => { console.log('profile!!!ERROR!!!' + err) })
      },
      saveEdit(){
         // this.edit=false;
         // console.log(this.$refs.tf[9].value);
         const params = new URLSearchParams();
         params.append('numbook', this.user.email.numbook);
         params.append('email', this.user.email.title);
         params.append('fio', this.user.fio.title);
         params.append('phone', this.user.phone.title);
         params.append('marka', this.user.marka.title);
         params.append('regnumber', this.user.regnumber.title);
         params.append('typets', this.user.typets.title);
         params.append('vin', this.user.vin.title);
         params.append('engine', this.user.engine.title);
         params.append('carcase', this.user.carcase.title);
         params.append('daterelease', this.user.daterelease.title);
         params.append('color', this.user.color.title);
         this.$axios.post('http://toyoda/_host/update.php', params)
         .then((res) => { 
            if(res.data.error){
               this.printPopup('error', res.data.error);
            }else{
                this.edit=false;
                if(res.data.save){
                   if(res.data.save == 'changed'){
                      this.printPopup('success', 'Изменения сохранены');
                   }
                }
            }
         })
         .catch((err) => { console.log('profile!!!ERROR!!!' + err) })
      },
      printPopup(typepopup, str){
      this.showPopup = true;
      this.textPopup = str;
      this.typePopup = typepopup;
    }
   }
}
</script>

<style scoped>
.anim1-enter-active, .anim1-leave-active {
  transition: opacity 0.4s ease;
}
.anim1-enter, .anim1-leave-to {
  opacity: 0;
}
</style>

