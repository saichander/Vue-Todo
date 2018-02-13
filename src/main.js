// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
const state = {
  showTodoForm: false,
  showEditTodo: false,
  pendingTodos: [
    {title: 'Pending Test', description: 'Test Description', selected: false, showEditTodoForm: false},
    {title: 'Style Vue todo app', description: 'Test Description', selected: false, showEditTodoForm: false}
  ],
  completedTodos: [{title: 'Completed Test', description: 'Test Description', selected: true, showEditTodoForm: false}]
}

const mutations = {
  updateShowTodoForm (state, value) {
    state.showTodoForm = value
  },
  updateShowEditTodo (state, value) {
    state.showEditTodo = value
  },
  pushToPendingTodos (state, todo) {
    todo.selected = false
    todo.showEditTodoForm = false
    state.pendingTodos.push(todo)
  },
  pushToCompletedTodos (state, todo) {
    todo.selected = true
    todo.showEditTodoForm = false
    state.completedTodos.push(todo)
  },
  removePendingTodo (state, todo) {
    todo.selected = false
    todo.showEditTodoForm = false
    let index = state.pendingTodos.indexOf(todo)
    state.pendingTodos.splice(index, 1)
  },
  removeCompletedTodo (state, todo) {
    todo.selected = true
    todo.showEditTodoForm = false
    let index = state.completedTodos.indexOf(todo)
    state.completedTodos.splice(index, 1)
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

