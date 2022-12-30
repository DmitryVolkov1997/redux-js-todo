import {ADD_TODO, COMPLETE_TODO, REMOVE_TODO} from '@/store/constants/todos-constants.js'

const addTodo = (text) => ({type: ADD_TODO, title: text})

const removeTodo = (id) => ({type: REMOVE_TODO, id})

const completeTodo = (id) => ({type: COMPLETE_TODO, id})

export {addTodo, removeTodo, completeTodo}