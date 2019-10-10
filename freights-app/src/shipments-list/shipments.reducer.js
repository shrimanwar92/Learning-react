const ShipmentsReducer = (state, action) => {
	switch(action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			};
		case 'GET_SHIPMENTS':
			
			return {
				...state,
				loading: false,
				shipments: action.payload
			};
		default:
			return state;
	}
};

export default ShipmentsReducer;