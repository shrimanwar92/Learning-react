import React, {useContext} from 'react';
import GithubContext from './../context/github.context';
import {Link} from 'react-router-dom';
import Search from './search.component';

const Users = () => {
	const githubContext = useContext(GithubContext);

	const {loading, users} = githubContext;

	if(loading) {
		return <div className="content">Loading...</div>;
	} else {
		return(
			<React.Fragment>
				<Search />
				<div className="content">
	        		{users.map(user => (
	          			<UserItem key={user.id} user={user} />
	        		))}
	      		</div>
	      	</React.Fragment>
		);
	}

};

const UserItem = ({user}) => {
	
	return (
		<div className='card text-center'>
	  		<img
	    		src={user.avatar_url}
	    		alt=''
	    		className='round-img'
	    		style={{ width: '60px' }}
	  		/>
	  		
			<Link to={`/profile/${user.login}`}>
		    	<h3>{user.login}</h3>
		    </Link>
			
		</div>
	);
};

export default Users;