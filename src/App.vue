<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from 'components/FooterGuide/FooterGuide.vue'
  export default {

    mounted() {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('autoLogin')
    },
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
