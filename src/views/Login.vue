<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="srgPrimary">
          <v-toolbar-title>Вход</v-toolbar-title>
          <!-- <v-toolbar-title><div v-if="!isError">Вход</div></v-toolbar-title> -->
          <v-spacer></v-spacer>
          <!-- <v-alert style="width: 100%" :value="isError" type="error" transition="scale-transition" outline>{{textError}}</v-alert> -->
        </v-toolbar>
        <v-alert :value="showPopup" :type="typePopup" transition="scale-transition" outline>{{textPopup}}</v-alert>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field prepend-icon="person" label="Почта" type="email" required v-model="email" :rules="emailRules"></v-text-field>
            <v-text-field prepend-icon="lock" label="Пароль" type="password" required v-model="password" :rules="passRules" :counter="8"></v-text-field>
            <v-layout align-center justify-center>
              <v-flex xs8 md8 class="text-xs-center">
                <v-card class="striped-text"><h1>{{captchaGenString}}</h1></v-card>
              </v-flex>
              <v-flex xs4 md4 class="text-xs-center">
                <v-text-field prepend-icon="keyboard_arrow_right" label="Капча" type="text" required v-model="captchaRes"></v-text-field>
              </v-flex>
            </v-layout>
            <v-overflow-btn :items="dropdown" label="Запомнить меня на: 1 минуту" v-model="time"></v-overflow-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="srgSuccess" :loading="loading" :disabled="!valid" @click.prevent="goTimeout">Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
 data(){
    return{
      valid: true,
      email: 'toyota.gercena@mail.ru',
      emailRules: [
        v => !!v || 'Укажите электронную почту',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail должен быть корректен'
      ],
      password: '11111111',
      passRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 8) || 'Пароль должен быть не менее 8 символов'
      ],
      showPopup: false,
      textPopup: '',
      typePopup: 'error',
      loader: null,
      captchaGen: null,
      captchaGenString: null,
      captchaRes: null,
      loading: false,
      time: 60,
      dropdown: [
        { text: '10 минут', value: 10*60},
        { text: '1 час', value: 60*60},
        { text: '6 часов', value: 60*60*6},
        { text: '12 часов', value: 60*60*12},
        { text: '24 часа', value: 60*60*24},
        { text: '7 дней', value: 60*60*24*7},
        { text: '30 дней', value: 60*60*24*30}
        ],
    }
 },
 created(){
   this.generateCaptcha();
 },
 methods: {
   login() {
     if(this.email === null || this.email.trim() === ''){ this.printPopup('error', 'НЕ УКАЗАН EMAIL'); }
     else if(this.password === null || this.password.trim() === ''){ this.printPopup('error', 'НЕ УКАЗАН ПАРОЛЬ'); }
     else if(this.captchaGen !== this.captchaRes){
      this.printPopup('error', 'КАПЧА ВВЕДЕНА НЕ ВЕРНО');
      this.generateCaptcha();
      this.captchaRes = '';
     }else{
        const params = new URLSearchParams();
        params.append('email', this.email);
        params.append('password', this.password);
        params.append('time', this.time);
        this.$axios.post('http://toyoda/_host/login.php', params)
          .then((res) => { 
            if(res.data.token){
              this.$store.commit('setToken', res.data.token);
              this.$router.push('/profile')
            }else{
              this.printPopup('error', res.data.error);
            }
          })
          .catch((err) => { console.log('login!!!ERROR!!!' + err) })
     }
    },
    goTimeout () {
      this.showPopup = false;
      const a = this.loader;
      this[a] = !this[a];
      setTimeout(() => (this[a] = false, this.login()), 250);
      this.loader = null;
    },
    generateCaptcha(){
      let n1 = this.getRandom(1, 50);
      let n2 = this.getRandom(1, 50);
      let n3 = this.getRandom(1, 50);
      this.captchaGenString = n1+'+'+n2+'-'+n3;
      this.captchaGen = (n1+n2-n3).toString();
      // console.log('Captcha: '+this.captchaGenString+' = '+this.captchaGen);
    },
    getRandom(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
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
.striped-text {
  font-family: 'Rubik One', sans-serif;
  font-size: 1.5em;
  background: repeating-linear-gradient(rgb(110, 110, 110), rgb(156, 156, 156) 1px, rgb(58, 58, 58) 2px, rgb(110, 110, 110) 3px);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
}
</style>