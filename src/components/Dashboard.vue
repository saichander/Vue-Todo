<template lang='haml'>
%div
  %h2 TODO LIST
  %Stats
  %div{'v-if': '$store.state.showTodoForm'}
    %AddTodo
  %button{'v-else': '$store.state.showTodoForm', 'v-on:click': 'showAddTodo()'} Add Todo
  %PendingTodo
  %CompletedTodo
</template>
<script>
  import Stats from './Stats.vue'
  import AddTodo from './AddTodo.vue'
  import CompletedTodo from './CompletedTodo.vue'
  import PendingTodo from './PendingTodo.vue'
  export default {
    name: 'Dashboard',
    data () {
      return {
      }
    },
    computed: {
    },
    components: {
      Stats,
      AddTodo,
      CompletedTodo,
      PendingTodo
    },
    computed: {
      test () {
        console.log(this.$store)
        return this.$store.state.test
      }
    },
    methods: {
      showAddTodo () {
        console.log('showAddTodo'+this.showTodo)
        this.$store.commit('updateShowTodoForm', true)
      }
    }
  }
</script>
