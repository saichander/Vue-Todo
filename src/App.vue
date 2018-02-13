<template>
  <div id="app">
    <section class="main-section section">
      <div class="container content">
        <Dashboard/>
      </div>
    </section>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'

export default {
  name: 'App',
  components: {
    Dashboard
  },
  template: '<Dashboard/>'
}
</script>

<style>
@import '~bulma'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-section {
}
</style>
