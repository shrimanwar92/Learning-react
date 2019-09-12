import React from 'react';

function DataFetchReducer() {

	const fetchReducer = (state, action) => {
		switch(action.type) {
			case 'INIT':
				return {...state, isLoading: true, isError: false};
			break;
			case 'SUCCESS':
				return {...state, isLoading: false, isError: false, payload: action.payload};
			break;
			case 'ERROR':
				return {...state, isLoading: false, isError: true};
			break;
			default:
				throw new new Error();
		}
	};
	
	return fetchReducer;
}

export default DataFetchReducer;