<template>
<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="srgPrimary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-alert :value="isError" type="error" transition="scale-transition" outline>{{textError}}</v-alert>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field prepend-icon="person" label="Почта" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Пароль" type="password" required v-model="password" :counter="8" :rules="passRules"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Повторить пароль" type="password" required v-model="confirm" :counter="8" :rules="passRules"></v-text-field>
                  <v-layout align-center justify-center>
                    <v-flex xs8 md8 class="text-xs-center"><v-card class="striped-text"><h1>{{captchaGenString}}</h1></v-card></v-flex>
                    <v-flex xs4 md4 class="text-xs-center">
                      <v-text-field prepend-icon="keyboard_arrow_right" label="Капча" type="text" required v-model="captchaRes"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="srgSuccess" :loading="loading" :disabled="!valid" @click.prevent="goTimeout">Зарегестрироваться</v-btn>
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
      email: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: null,
      passRules: [
        v => !!v || 'Введите пароль',
        v => (v && v.length >= 8) || 'Пароль должен быть не менее 8 символов'
      ],
      confirm: null,
      isError: false,
      textError: '',
      loader: null,
      loading: false,
      captchaGen: null,
      captchaGenString: null,
      captchaRes: null,
    }
 },
 created(){
   this.generateCaptcha();
 },
 methods: {
   reg() {
     if(this.email === null || this.email.trim() === ''){ this.printError('НЕ УКАЗАН EMAIL'); }
     else if(this.password === null || this.password.trim() === ''){ this.printError('НЕ УКАЗАН ПАРОЛЬ'); }
     else if(this.confirm === null || this.confirm.trim() === ''){ this.printError('ПОВТОРИТЕ ПАРОЛЬ'); }
     else if(this.password !== this.confirm){ this.printError('ПАРОЛИ НЕ СОВПАДАЮТ'); }
     else if(this.captchaGen !== this.captchaRes){
      this.printError('КАПЧА ВВЕДЕНА НЕ ВЕРНО');
      this.generateCaptcha();
      this.captchaRes = '';
     }else{
      const params = new URLSearchParams();
      params.append('email', this.email);
      params.append('password', this.password);
      params.append('confirm', this.confirm);
      var md5 = require('md5');
      params.append('activation', md5(this.email + Date.now()));
      this.$axios.post('http://toyoda/_host/reg.php', params)
        .then((res) => { 
          if(res.data.error){
            this.printError(res.data.error);
          }else{
            alert('Вам отправлено письмо для подтверждения регистрации.');
            this.$router.push('/login');
          }
        })
        .catch((err) => { console.log('reg!!!ERROR!!!' + err) })
     }
    },
    goTimeout () {
      this.isError = false;
      const a = this.loader;
      this[a] = !this[a];
      setTimeout(() => (this[a] = false, this.reg()), 250);
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
    printError(str){
      this.isError = true;
      this.textError = str;
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
