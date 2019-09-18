import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="links">
				
					<Link to="/">
						<img
							src="https://user-images.githubusercontent.com/901123/27444852-9f382708-5745-11e7-959f-a2bed199f83f.png"
							width="30"
							height="30"
						/>
				    	<span style={styles}>Home</span>
				    </Link>
			    
			</div>
			<span>Github Finder</span>
		</header>
	);
};

const styles = {
	position: "relative",
    bottom: "7px",
    left: "7px"
};

export default Header;