import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import DataFetchReducer from './HackerNewsApiReducer';

function useHackerNewsApi(initialUrl, initialData) {
	const [url, setUrl] = useState(initialUrl);

    const [data, dispatch] = useReducer(DataFetchReducer(), {
		isLoading: false,
		isError: false,
		payload: initialData
	});

	useEffect(() => {
		const fetchData = async() => {
			dispatch({type: 'INIT'});
			try {
		  		const result = await axios(url);
		  		dispatch({type: 'SUCCESS', payload: result.data});
			} catch(e) {
		  		dispatch({type: 'ERROR'});
			}
		};

		fetchData();
    }, [url]);

    return [data, setUrl];
};

export default useHackerNewsApi;