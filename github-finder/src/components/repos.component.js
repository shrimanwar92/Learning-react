import React, {useContext, useEffect} from 'react';
import GithubContext from './../context/github.context';

const UserRepos = ({match}) => {
	const { loading, getUserRepos, repos } = useContext(GithubContext);
	
	useEffect(() => {
		getUserRepos(match.params.name)
	}, []);

	if(loading) {
		return <div className="content">Loading...</div>;
	} else {
		return(
			<div className="content">
        		<ul className="repos-list">
	        		{repos.map(repo => (
	          			<RepoItem key={repo.id} repo={repo} />
	        		))}
	        	</ul>
      		</div>
		);
	}
};

const RepoItem = ({repo}) => {
	return (
		<React.Fragment>
			<li className="repo-item">
				<div className="repo-image">
					<img height="50" width="50" src={repo.owner.avatar_url} />
				</div>
				<div className="details">
					<span className="name">{repo.name}</span>
					<span className="description">{repo.description}</span>
				</div>
			</li>
		</React.Fragment>
	);
};

export default UserRepos;