<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily<br>Report</h1>
      <router-link class="button" :to="todayUrl">
        START
      </router-link>
    </div>
  </div>
  
</template>

<script>
import moment from 'moment';
export default {
  name: 'Intro',
  // props: {
  //   msg: String
  // },
  methods: {},
  computed: {
    todayUrl() {
      let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');
      console.log(todayUrl)
      return todayUrl;
    }
  }, 
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
