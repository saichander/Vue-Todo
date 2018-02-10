<template lang='haml'>
%div
  %h2 Completed Todos
  %div{'v-for': 'todo in $store.state.completedTodos', 'v-bind:key': 'todo.id'}
    %input{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:change': 'moveToPendingTodos(todo)'}
    %span.title {{ todo.title }}
    %button{'v-on:click': 'removeCompletedTodo(todo)'} delete
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      removeCompletedTodo (todo) {
        this.$store.commit('removeCompletedTodo', todo)
      },
      moveToPendingTodos (todo) {
        console.log(todo)
        this.$store.commit('removeCompletedTodo', todo)
        console.log(todo)
        this.$store.commit('pushToPendingTodos', todo)
      }
             },
    mounted () {
    }
  }
</script>

