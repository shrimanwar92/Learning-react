import React, { useContext, useEffect } from 'react';
import AppContext from './../context/app-context/app.context';
import AlertContext from './../context/alert-context/alert.context';

const Users = () => {
	const appContext = useContext(AppContext);
	const alertContext = useContext(AlertContext);

	const { loading, users, getUsers } = appContext;
	const { setAlert } = alertContext;

	useEffect(() => {
		getUsers().then(() => {
			setAlert('Users loaded successfully', 'success');
		});
	}, []);

  	if (loading) {
    	return <div>Loading...</div>;
  	} else {
    	return (
      		<div style={userStyle}>
        		{users.map(user => (
          			<UserItem key={user.id} user={user} />
        		))}
      		</div>
    	);
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

const UserItem = ({user}) => {
	
	return (
		<div className='card text-center'>
	  		<img
	    		src={user.avatar}
	    		alt=''
	    		className='round-img'
	    		style={{ width: '60px' }}
	  		/>
	  		<h3>{user.first_name} {user.last_name}</h3>
		</div>
	);
};

export default Users;