<template lang='haml'>
  %div.content
    %h2 Add TODO
    %div.field.is-horizontal
      %div.field-label.is-normal
        %label.label Title
    %div.field.is-horizontal
      %div.control.is-normal
        %input.input{type: 'text', 'v-model': 'title'}
    %div.field.is-horizontal
      %div.field-label.is-normal
        %label.label Description
    %div.field.is-horizontal
      %div.control.is-normal
        %input.input{type: 'text', 'v-model': 'description'}
    %div.some-class
      %button.button.is-primary{"v-on:click": "saveTodo()"} Save
      %button.button.is-primary{"v-on:click": "cancelTodo()"} Cancel
</template>
<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        pendingTodo: []
      }
    },
    methods: {
      saveTodo () {
        console.log(this.title + this.description)
        let todo = { title: this.title, description: this.description, selected: false}
        this.$store.commit('pushToPendingTodos', todo)
        this.$store.commit('updateShowTodoForm', false)
      },
      cancelTodo () {
        console.log(this.title)
        this.title = ''
        this.description = ''
        this.$store.commit('updateShowTodoForm', false)
      }
    }
  }
</script>
