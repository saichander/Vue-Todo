<template lang='haml'>
  %div.container
    %div.field
      %label.label Title
    %div.control
      %input.input{type: 'text', 'v-model': 'todo.title'}
    %div.field
      %label.label Description
      %div.control
        %input.input{type: 'text', 'v-model': 'todo.description'}
    %div.field.is-grouped
      %div.control
        %button.button.is-link{"v-on:click": "closeTodo(todo)"} Save & Close
      %div.control
        %button.button.is-danger{"v-on:click": "resetTodo(todo)"} Reset
</template>
<script>
  export default {
    props: ['todo'],
    data () {
      return {
        tempTitle: '',
        tempDescription: ''
      }
    },
    methods: {
      resetTodo (todo) {
        todo.title = this.tempTitle
        todo.description = this.tempDescription
      },
      closeTodo (todo) {
        todo.showEditTodoForm = false;
      }
    },
    created () {
      this.tempTitle = this.todo.title
      this.tempDescription = this.todo.description
    }
  }
</script>
