import React, {useReducer} from 'react';
import GithubContext from './github.context';
import GithubReducer from './github.reducer';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

const GithubState = (props) => {	
	
	const initialState = {
		loading: false,
		users: []
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// search users
	const searchUsers = async(search) => {
		dispatch({type: 'SET_LOADING'});
		const response = await axios.get(`${BASE_URL}${search}`);
		dispatch({type: 'GET_USERS', payload: response.data.items});
	};

	return (
		<GithubContext.Provider value={{
			users: state.users,
			loading: state.loading,
			searchUsers
		}}>
		{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;