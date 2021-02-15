import React from 'react';
import './Header.css'

// FUNTIONAL COMPONENT

const Header = function(props) {
    return(
        <div className="header">
            {props.heading}
        </div>
    )
}


// CLASS COMPONENT

// class Header extends Component {
//     render() {
//         return(
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }
// }

export default Header;