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
	}
};

export default GithubReducer;