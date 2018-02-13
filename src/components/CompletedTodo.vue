<template lang='haml'>
%div
  .subtitle Completed Todos
  %div{'v-for': 'todo in $store.state.completedTodos'}
    %div.box.level
      %button.level-item.button.is-danger{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:click': 'moveToPendingTodos(todo)'} Mark as Pending
      %span.level-item {{ todo.title }}
      %span.level-item{'v-on:click': 'removeCompletedTodo(todo)'}
        %i.fas.fa-trash-alt
    %div
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
        todo.selected = false
        this.$store.commit('removeCompletedTodo', todo)
        this.$store.commit('pushToPendingTodos', todo)
      }
             },
    mounted () {
    }
  }
</script>

