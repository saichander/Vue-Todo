<template lang='haml'>
%div
  %h2 Pending Todos
  %div{'v-for': 'todo in $store.state.pendingTodos'}
    %div
      %input{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:change': 'moveToCompletedTodos(todo)'}
      %span.title {{ todo.title }}
      %button{'v-on:click': 'showEditTodoForm(todo)'} edit
      %button{'v-on:click': 'removePendingTodo(todo)'} delete
    %div{'v-if': '$store.state.showEditTodo'}
      %EditTodo{':todo': 'todo'}
</template>
<script>
  import AddTodo from './AddTodo.vue'
  import EditTodo from './EditTodo.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      EditTodo
    },
    methods: {
      showEditTodoForm (todo) {
        this.$store.commit('updateShowEditTodo', true)
      },
      removePendingTodo (todo) {
        this.$store.commit('removePendingTodo', todo)
      },
      moveToCompletedTodos (todo) {
        this.$store.commit('removePendingTodo', todo)
        this.$store.commit('pushToCompletedTodos', todo)
      }
             },
    mounted () {
    }
  }
</script>

