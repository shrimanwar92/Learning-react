import React, {useReducer} from 'react';
import axios from 'axios';
import AppContext from './app.context';
import AppReducer from './app.reducer';

const AppState = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false
	};

	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Get Users
  	const getUsers = async() => {
    	dispatch({ type: 'SET_LOADING'});

    	const res = await axios.get(
      		`https://reqres.in/api/users`
    	);

    	dispatch({ type: 'GET_USERS', payload: res.data.data });
  	};

	return <AppContext.Provider
		value={{
			users: state.users,
			user: state.user,
			loading: state.loading,
			getUsers
		}}>
		{props.children}
	</AppContext.Provider>
};

export default AppState;