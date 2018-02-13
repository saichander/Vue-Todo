<template lang='haml'>
%div
  .subtitle Pending Todos
  %div{'v-for': 'todo in $store.state.pendingTodos', class: 'container'}
    %div.box
      %div.level
        %button.level-item.button.is-success{type: 'checkbox', 'v-model': 'todo.selected', 'v-on:click': 'moveToCompletedTodos(todo)'} Mark as Complete
        %span.level-item {{ todo.title }}
        %span.level-item{'v-on:click': 'showEditTodo(todo)'}
          %i.fas.fa-pencil-alt
        %span.level-item{'v-on:click': 'removePendingTodo(todo)'}
          %i.fas.fa-trash-alt
      %div.level{'v-show': 'todo.showEditTodoForm'}
        %EditTodo{':todo': 'todo'}
    %div
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
      showEditTodo (todo) {
        todo.showEditTodoForm = true;
      },
      removePendingTodo (todo) {
        this.$store.commit('removePendingTodo', todo)
      },
      moveToCompletedTodos (todo) {
        todo.selected = true
        this.$store.commit('removePendingTodo', todo)
        this.$store.commit('pushToCompletedTodos', todo)
      }
             },
    mounted () {
    }
  }
</script>
<style>
  $box-background-color: #000;
  @import '~bulma';
  .box {
    width: 50%;
  }
</style>

