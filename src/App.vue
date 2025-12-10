<template>
  <v-app dark style="background-color: #2F2F25">
    <app-header/>
      <!-- <transition name="component-fade" mode="out-in"><router-view /></transition> -->
      <router-view />
    <app-footer />
  </v-app>
</template>

<script>
export default {
  components:{
    AppHeader: () => import('./components/AppHeader'),
    AppFooter: () => import('./components/AppFooter')
  },
  mounted: function(){
    // console.log()
  }
}
</script>
<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>