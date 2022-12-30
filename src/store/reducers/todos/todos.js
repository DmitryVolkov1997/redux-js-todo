import {ADD_TODO, COMPLETE_TODO, REMOVE_TODO} from '@/store/constants/todos-constants.js'

export const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {id: new Date().getTime(), title: action.title, completed: false}]
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id)
		case COMPLETE_TODO:
			return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
		default:
			return state
	}
}
