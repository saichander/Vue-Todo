<template lang='haml'>
  %div.container
    %h2 Add TODO
    %div.field
      %label.label Title
      %div.control
        %input.input{type: 'text', 'v-model': 'title'}
    %div.field
      %label.label Description
      %div.control
        %input.input{type: 'text', 'v-model': 'description'}
    %div.field.is-grouped
      %div.control
        %button.button.is-link{"v-on:click": "saveTodo()"} Save
      %div.control
        %button.button.is-danger{"v-on:click": "cancelTodo()"} Cancel
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
