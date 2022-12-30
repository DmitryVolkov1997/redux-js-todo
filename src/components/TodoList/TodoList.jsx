import {useDispatch, useSelector} from 'react-redux'
import {completeTodo, removeTodo} from '@/store/actions/todos-actions.js'
import {selectVisibleTodos} from '@/store/selectors/filters-selectors.js'
import {useParams} from 'react-router-dom'

const TodoList = () => {
	const {filter: activeFilter = 'all'} = useParams()
	const todos = useSelector((state) => selectVisibleTodos(state, activeFilter))
	const dispatch = useDispatch()
	
	return (
		<div className={'flex flex-col items-center w-full'}>
			{
				todos.map(todo => (
					<div key={todo.id} className={'flex gap-x-3 items-center w-full'}>
						<input id="default-checkbox" type="checkbox" checked={todo.completed}
						       className="w-10 h-10 text-blue-600 bg-gray-100" onChange={() => dispatch(completeTodo(todo.id))}/>
						<button type="button"
						        className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 w-full">{todo.title}
						</button>
						<button type="button"
						        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
						        onClick={() => dispatch(removeTodo(todo.id))}>Удалить
						</button>
					</div>
				))
			}
		</div>
	)
}

export default TodoList
