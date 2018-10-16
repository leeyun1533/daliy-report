<template>
  <nav class="nav">
    <ul class="nav-list">
      <li>
        <button @click="today">
          <i class="xi-home"></i>
          <span>오늘</span>
        </button>
      </li>
      <li>
        <router-link to="/calendar">
          <i class="xi-calendar"></i>
          <span>달력</span>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <i class="xi-cog"></i>
          <span>설정 </span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <i class="xi-emoticon-smiley "></i>
          <span>소개</span>
        </router-link>
      </li>
    </ul>
  </nav>
  
</template>

<script>
import moment from 'moment'
export default {
  name: 'Nav',
  // props: {
  //   msg: String
  // },
  methods: {
    today() {
      let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');
      this.$router.push(todayUrl)
      console.log(todayUrl);
    }
  },
  data() {
    return {
      msg: '반갑습니다.',
      isActive: true,
      items: [
        {name:'이정윤',age: 22},
        {name:'dd',age: 22},
        {name:'aa',age: 22},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
