<template>
   <Spinner :size="200" :line-size="5" line-color="#DEDEDE" line-background="#595959"></Spinner>
</template>

<script>
export default {
  components: {
    Spinner: () => import('vue-nani-spinner')
  }
}
</script>