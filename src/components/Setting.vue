<template>
  <div class="app" id="app">
    <form class="form" >
      <input class="input form__input" v-model="inputVal"/>
      <button class="btn form__submit-btn" type="button" @click="addTodo(inputVal)">Add</button>
    </form>
    <transition-group tag="ol" name="list" class="todo-list">
      <li
        class="todo-list__item"
        v-bind:class="{ complete: todo.complete }"
        v-bind:key="index"
        v-for="(todo, index) in filteredTodos">
        <button
          class="todo-list__item-content"
          v-on:click="toggleTodo(todo)">
          {{ todo.text }}
        </button>
        <button
          class="btn todo-list__item-remove"
          v-on:click="deleteTodo(index)">
          <i class="fa" v-bind:class="[todo.complete ? 'fa-check' : 'fa-times']"></i>
        </button>
      </li>
    </transition-group>
    <div class="filters">
      <button 
        class="btn filters__btn filters__btn--all" 
        v-on:click="filterTodos('all')">
        All
      </button>
      <button 
        class="btn filters__btn filters__btn--complete" 
        v-on:click="filterTodos('complete')">
        Complete
      </button>
      <button 
        class="btn filters__btn filters__btn--incomplete" 
        v-on:click="filterTodos('incomplete')">
        Incomplete
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  let STORAGE_KEY = 'vue-js-todo-9L'
  let todoStorage = {
    fetch: function () {
      var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return todos;
    },
    save: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }
  var filters = {
    all: function(todos) {
      return todos;
    },
    complete: function(todos) {
      return todos.filter(function(todo) {
        return todo.complete;
      });
    },
    incomplete: function(todos) {
      return todos.filter(function(todo) {
        return !todo.complete;
      });
    }
  }
export default {
  name: 'Setting',
  watch: {
    todos: {
      handler: (todos) => {
        todoStorage.save(todos)
      }
    }
  },
  methods: {
    addTodo (value){
      if (value) {
        this.todos.push({
          text: value,
          complete: false
        });
      }
      value = '';
    },
    toggleTodo (todo) {
      todo.complete = !todo.complete;
    },
    filterTodos(filter) {
      this.visibility = filter;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos);
    }
  },
  created : {
  },
  data() {
    return {
      inputVal: '',
      todos: todoStorage.fetch(),
      visibility: 'all'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
