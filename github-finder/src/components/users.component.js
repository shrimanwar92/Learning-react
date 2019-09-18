import React, {useContext, useEffect} from 'react';
import GithubContext from './../context/github.context';
import {Link} from 'react-router-dom';

const Users = () => {
	const githubContext = useContext(GithubContext);

	const {loading, users} = githubContext;

	if(loading) {
		return <div className="content">Loading...</div>;
	} else {
		return(
			<div className="content">
        		{users.map(user => (
          			<UserItem key={user.id} user={user} />
        		))}
      		</div>
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