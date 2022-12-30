import {SET_FILTER} from '@/store/constants/filters-constants.js'

export const filters = (state = 'all', action) => {
	switch (action.type) {
		case SET_FILTER:
			return action.filter
		default:
			return state
	}
}