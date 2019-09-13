import React, {Fragment} from 'react';
import './users.css';

let users = [{
    "login": "kevwil",
    "id": 35,
    "node_id": "MDQ6VXNlcjM1",
    "avatar_url": "https://avatars2.githubusercontent.com/u/35?v=4",
    "site_admin": false
  },{
    "login": "kevwil",
    "id": 351,
    "node_id": "MDQ6VXNlcjM1",
    "avatar_url": "https://avatars2.githubusercontent.com/u/35?v=4",
    "site_admin": false
  },]

function UserList() {

	return(
		<div className="users-container">
			<ul className="github-finder__user-list">
				{
					users.map(user => (
						<User key={user.id} user={user} />
					))
				}
			</ul>
		</div>
	);
}

function User({user}) {

	return(
		<div className="github-finder__user">
			<img src={user.avatar_url} />
			<li>{user.login}</li>
		</div>
	);
}

export default UserList;