<template lang='haml'>
  %div.content
    %div.field.is-horizontal
      %div.field-label.is-normal
        %label.label Title
    %div.field.is-horizontal
      %div.control.is-normal
        %input.input{type: 'text', 'v-model': 'todo.title'}
    %div.field.is-horizontal
      %div.field-label.is-normal
        %label.label Description
    %div.field.is-horizontal
      %div.control.is-normal
        %input.input{type: 'text', 'v-model': 'todo.description'}
    %div.some-class
      %button.button.is-primary{"v-on:click": "resetTodo(todo)"} Reset
      %button.button.is-primary{"v-on:click": "closeTodo()"} Save & Close
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
      closeTodo () {
        this.$store.commit('updateShowEditTodo', false)
      }
    },
    created () {
      this.tempTitle = this.todo.title
      this.tempDescription = this.todo.description
    }
  }
</script>
