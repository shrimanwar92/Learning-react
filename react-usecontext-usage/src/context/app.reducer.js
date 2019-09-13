const AppReducer = (state, action) => {
	switch(action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			}
		break;

		case 'GET_USERS':
			return {
				...state,
				loading: false,
				users: action.payload
			}
		break;

		case 'GET_USER':
			return {
				...state,
				loading: false,
				user: action.payload
			}
		break;

		default:
			return state;
	}
};

export default AppReducer;