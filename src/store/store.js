import {createStore, combineReducers} from 'redux'
import {todos} from '@/store/reducers/todos/todos.js'
import {filters} from '@/store/reducers/filters/filters.js'
import {loadState, saveState} from '@/store/local-storage.js'

const reducers = combineReducers({
	todos,
	filters
})

export const configureStore = () => {
	const todos = loadState()
	
	const store = createStore(reducers, todos)
	
	store.subscribe(() => {
		saveState({todos: store.getState().todos})
	})
	
	return store
}
