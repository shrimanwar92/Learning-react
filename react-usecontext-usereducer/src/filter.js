import React, {useReducer} from 'react';

const Filter = ({currentFilter}) => {

	const filterReducer = (state, action) => {
		switch(action.type) {
			case 'SHOW_ALL':
				currentFilter(-1);
			break;
			case 'SHOW_COMPLETE':
				currentFilter(1);
			break;
			case 'SHOW_INCOMPLETE':
				currentFilter(0);
			break;

			default:
				throw new Error();
		}
	};

	const [filter, dispatchFilter] = useReducer(filterReducer, -1);

	const handleShowAll = () => {
		dispatchFilter({type: 'SHOW_ALL'});
	};

	const handleShowComplete = () => {
		dispatchFilter({type: 'SHOW_COMPLETE'});
	};

	const handleShowIncomplete = () => {
		dispatchFilter({type: 'SHOW_INCOMPLETE'});
	};
	
	return(
		<div className="filter-todo-container">
			<button type="button" onClick={handleShowAll}>Show all</button>
			<button type="button" onClick={handleShowComplete}>Show complete</button>
			<button type="button" onClick={handleShowIncomplete}>Show incomplete</button>
		</div>
	);
};

export default Filter;