import React, {useReducer, useEffect, useState} from 'react';
import axios from 'axios';
import ShipmentsReducer from './shipments.reducer';
import Pagination from './../pagination/pagination';

const Shipments = () => {
	const initialState = {
		shipments: [],
		loading: false
	};

	const [page, setPage] = useState(0);

	const [state, dispatch] = useReducer(ShipmentsReducer, initialState);

	useEffect(() => {
		getShipments();
	}, [page]);

	const getShipments = async() => {
		dispatch({type: 'SET_LOADING'});
		const response = await axios.get('./db.json');
		dispatch({type: 'GET_SHIPMENTS', payload: response.data.shipments});
		const paginate = new Pagination(response.data.shipments, 20);
		console.log(paginate);
	};

	return (
		<div className='shipments-list'>
			{JSON.stringify(state.shipments)}
		</div>
	);
};

export default Shipments;