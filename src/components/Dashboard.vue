<template>
<h2>TODO LIST</h2>
<stats/>
</template>
<script>
  import Stats from './Stats.vue'
  import AddTodo from './AddTodo.vue'
  import CompletedTodo from './CompletedTodo.vue'
  import PendingTodo from './PendingTodo.vue'

  export default {
    name: 'Dashboard',
    components: {
      'stats': Stats,
      'add-todo': AddTodo,
      'completed-todo': CompletedTodo,
      'pending-todo': PendingTodo
    },
    template: '<Dashboard/>'
  }
</script>
