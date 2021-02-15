import React, {useReducer, useEffect, useState} from 'react';
import axios from 'axios';
import ShipmentsReducer from './shipments.reducer';
import Pagination from './../pagination/pagination';

const Shipments = () => {
	const initialState = {
		shipments: [],
		loading: false
	};

	let paginate = undefined;

	const [page, setPage] = useState(0);

	const [state, dispatch] = useReducer(ShipmentsReducer, initialState);

	useEffect(() => {
		if(!paginate) {
			getShipments().then(() => {
				getShipmentsPerPage(page);
			});
		} else {
			console.log('--->', page);
		}
		
	}, [page]);

	const getShipments = async() => {
		dispatch({type: 'SET_LOADING'});
		const response = await axios.get('./db.json');
		paginate = new Pagination(response.data.shipments, 20);
	};

	const getShipmentsPerPage = (page) => {
		if(paginate) {
			dispatch({type: 'GET_SHIPMENTS', payload: paginate.collectionPerPage[page]});
			setPage(1);
		}
	};

	return (
		<div className='shipments-list'>
			{JSON.stringify(state.shipments.length)}
		</div>
	);
};

export default Shipments;