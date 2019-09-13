import React, { useContext, useEffect } from 'react';
import AppContext from './../context/app.context';
import UserItem from './user-item.component';

const Users = () => {
	const appContext = useContext(AppContext);

	const { loading, users, getUsers } = appContext;

	useEffect(() => {
		getUsers();
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

export default Users;