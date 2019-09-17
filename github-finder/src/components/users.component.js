import React, {useContext} from 'react';
import GithubContext from './../context/github.context';
import {BrowserRouter as Router, Link} from 'react-router-dom';

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
	  		<Router>
				<Link to="/profile">
			    	<h3>{user.login}</h3>
			    </Link>
			</Router>
		</div>
	);
};

export default Users;