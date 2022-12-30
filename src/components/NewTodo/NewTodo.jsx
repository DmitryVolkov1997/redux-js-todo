import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {addTodo} from '@/store/actions/todos-actions.js'

const NewTodo = () => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		if(text.trim().length) {
			dispatch(addTodo(text))
		}
		
		setText('')
	}
	
	return (
		<form className={'flex items-center gap-x-4'} onSubmit={handleSubmit}>
			<button
			        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base p-2.5 mr-2 mb-2 w-full">Добавить
				задачу
			</button>
			<div className="relative z-0 mb-6 w-full group">
				<input type="text" name="text" id="text"
				       className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-white" value={text} onChange={(e)=>setText(e.target.value)}/>
				<label htmlFor="text"
				       className="text-white peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Название
					задачи</label>
			</div>
		</form>
	)
}

export default NewTodo
