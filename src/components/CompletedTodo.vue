<template lang='haml'>
%div
  .subtitle Completed Todos
  %div{'v-for': 'todo in $store.state.completedTodos'}
    %input{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:change': 'moveToPendingTodos(todo)'}
    %span {{ todo.title }}
    %span{'v-on:click': 'removeCompletedTodo(todo)'}
      %i.fas.fa-trash-alt
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
        this.$store.commit('removeCompletedTodo', todo)
        this.$store.commit('pushToPendingTodos', todo)
      }
             },
    mounted () {
    }
  }
</script>

