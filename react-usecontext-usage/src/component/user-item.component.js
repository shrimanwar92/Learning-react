import React from 'react';

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

export default UserItem;
