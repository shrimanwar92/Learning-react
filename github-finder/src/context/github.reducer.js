const GithubReducer = (state, action) => {
	switch(action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			};
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false
			};

		case 'GET_REPOS':
			return {
				...state,
				loading: false,
				repos: action.payload
			};
		default:
			return state;
	}
};

export default GithubReducer;