import './App.css'
import NewTodo from '@/components/NewTodo/NewTodo.jsx'
import TodoList from '@/components/TodoList/TodoList.jsx'
import Filters from '@/components/Filters/Filters.jsx'

function App() {
	return (
		<div className={'app'}>
			<div className="form">
				<NewTodo/>
				<Filters/>
				<TodoList/>
			</div>
		</div>
	)
}

export default App
