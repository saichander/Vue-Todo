<template lang='haml'>
%div
  .subtitle Pending Todos
  %div{'v-for': 'todo in $store.state.pendingTodos', class: 'container'}
    %div.columns
      %input.column{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:change': 'moveToCompletedTodos(todo)'}
      %span.column {{ todo.title }}
      %span.column{'v-on:click': 'showEditTodoForm(todo)'}
        %i.fas.fa-pencil-alt
      %span.column{'v-on:click': 'removePendingTodo(todo)'}
        %i.fas.fa-trash-alt
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

