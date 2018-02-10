// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
const state = {
  showTodoForm: false,
  pendingTodos: [{id: 1, title: 'Pending Test', description: 'Test Description', selected: false}],
  completedTodos: [{id: 2, title: 'Completed Test', description: 'Test Description', selected: true}]
}

const mutations = {
  updateShowTodoForm (state, value) {
    state.showTodoForm = value
  },
  pushToPendingTodos (state, todo) {
    state.pendingTodos.push(todo)
  },
  pushToCompletedTodos (state, todo) {
    state.completedTodos.push(todo)
  },
  removePendingTodo (state, todo) {
    state.pendingTodos.pop(todo)
  },
  removeCompletedTodo (state, todo) {
    state.completedTodos.pop(todo)
  }
}

const store = new Vuex.Store({
    state,
    mutations
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  mutations,
  components: { App },
  template: '<App/>'
})

