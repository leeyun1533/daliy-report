<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p :class="{active: isActive}">ss</p>
    <ul>
      <li v-for="item in items" :key="item.name">
          <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'Calendar',
  // props: {
  //   msg: String
  // },
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
