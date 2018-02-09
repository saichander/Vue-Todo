<template lang='haml'>
%div
  %h2 TODO LIST
  %Stats
  %div{'v-if': 'showTodo'}
    %AddTodo
  %button{'v-else': 'showTodo', 'v-on:click': 'showAddTodo()'} Add Todo
  %PendingTodo
  %CompletedTodo
</template>
<script>
  import Stats from './Stats.vue'
  import AddTodo from './AddTodo.vue'
  import CompletedTodo from './CompletedTodo.vue'
  import PendingTodo from './PendingTodo.vue'

  export default {
    name: 'Dashboard',
    data () {
      return {
        showTodo: false
      }
    },
    components: {
      Stats,
      AddTodo,
      CompletedTodo,
      PendingTodo
    },
    methods: {
      showAddTodo () {
        console.log('showAddTodo'+this.showTodo)
        this.showTodo = true
      },
      hideTodo () {
        console.log('true')
        this.showTodo = false
      }
    },
    watch: {
      'hide-todo' () {
        this.hideTodo()
       }
    }
  }
</script>
