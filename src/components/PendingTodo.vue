<template lang='haml'>
%div
  %h2 Pending Todos
  %div{'v-for': 'todo in $store.state.pendingTodos', 'v-bind:key': 'todo.id'}
    %input{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:change': 'moveToCompletedTodos(todo)'}
    %span.title {{ todo.title }}
    %button{'v-on:click': 'removePendingTodo(todo)'} delete
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      removePendingTodo (todo) {
        this.$store.commit('removePendingTodo', todo)
      },
      moveToCompletedTodos (todo) {
        console.log(todo)
        this.$store.commit('removePendingTodo', todo)
        console.log(todo)
        this.$store.commit('pushToCompletedTodos', todo)
      }
             },
    mounted () {
    }
  }
</script>

