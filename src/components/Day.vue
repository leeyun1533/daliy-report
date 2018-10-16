<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}}
    </h1>

    <ul class="day-list">
      <li v-for="item in items" :key="item.id" class="day-list-item">
        <div class="time">
          <h2>{{item.id}}</h2>
        </div>
        <div class="action">
          <input type="text" v-model="item.action" placeholder="한 일을 작성해주세요">
        </div>
        <day-score
          @onUpdateScore="onUpdateScore"
          :item="item"
        >

        </day-score>
        <div class="note">
          <textarea  v-model="item.note" placeholder="노트를 작성해 주세요">

          </textarea>
        </div>
      </li>
    </ul> 
  </div>
  
</template>

<script>
import DayScore from './DayScore'
export default {
  name: 'Day',
  // props: {
  //   msg: String
  // },
  components: {
    DayScore,    
  },
  methods: {
    onUpdateScore(item, score) {
      console.log(score)
      item.score = score;
      console.log(item)
    },
  },
  data() {
    return {
      items: [
        {
            action: "", // 한 일 
            id: "2018-04-21-08-10", // 날짜. id, key 역할
            note: "", // 노트
            open: false, // 편집모드
            score: undefined, // 점수
        },
        {
            action: "", // 한 일 
            id: "2018-04-21-08-11", // 날짜. id, key 역할
            note: "", // 노트
            open: false, // 편집모드
            score: undefined, // 점수
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
