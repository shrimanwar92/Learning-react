import React, {useReducer} from 'react';
import GithubContext from './github.context';
import GithubReducer from './github.reducer';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';
const BASE_REPOS_URL = 'https://api.github.com/users/';

const GithubState = (props) => {	
	
	const initialState = {
		loading: false,
		users: [],
		repos: []
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// search users
	const searchUsers = async(search) => {
		dispatch({type: 'SET_LOADING'});
		const response = await axios.get(`${BASE_URL}${search}`);
		dispatch({type: 'GET_USERS', payload: response.data.items});
	};

	//get user repos
	const getUserRepos = async(name) => {
		dispatch({type: 'SET_LOADING'});
		const response = await axios.get(`${BASE_REPOS_URL}${name}/repos`);
		console.log(response.data);
		dispatch({type: 'GET_REPOS', payload: response.data});

	};

	return (
		<GithubContext.Provider value={{
			users: state.users,
			repos: state.repos,
			loading: state.loading,
			searchUsers,
			getUserRepos
		}}>
		{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;