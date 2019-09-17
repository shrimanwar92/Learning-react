import React, {useState, useContext} from 'react';
import GithubContext from './../context/github.context';

const Search = () => {
	const [search, setSearch] = useState('');
	
	const githubContext = useContext(GithubContext);
	const {searchUsers} = githubContext;

	const handleSubmit = (e) => {
		e.preventDefault();
		searchUsers(search);
		setSearch('');
	};

	return(
		<form className="search-form" onSubmit={handleSubmit}>
			<input type="text" 
				value={search}
				placeholder="Press enter to search" 
				onChange={(e) => setSearch(e.target.value)} 
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default Search;