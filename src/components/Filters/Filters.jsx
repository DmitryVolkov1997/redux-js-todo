import {NavLink} from 'react-router-dom'


const Filters = () => {
	
	return (
		<div className={'mb-2.5'}>
			<NavLink to={'/all'}>
				<button type="button"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
					All
				</button>
			</NavLink>
			<NavLink to={'/active'}>
				<button type="button"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
					active
				</button>
			</NavLink>
			<NavLink to={'/completed'}>
				<button type="button"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
					completed
				</button>
			</NavLink>
		</div>
	)
}

export default Filters
