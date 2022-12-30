import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {configureStore} from './store/store.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const store = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path={'/'} element={<App/>}>
						<Route path={':filter'} element={<App/>}/>
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
