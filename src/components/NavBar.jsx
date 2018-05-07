import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';
import $ from 'jquery';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			appTitle: this.props.appTitle,
		};
		this.logoutUser = this.logoutUser.bind(this);
		this.collapseDropdown = this.collapseDropdown.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		Auth.deauthenticateUser()
		$('#primaryNavigation').removeClass('show');
		this.props.onUserLogout()
	}

	collapseDropdown() {
		$('#primaryNavigation').removeClass('show');
	}

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      	<Link className="navbar-brand" to="/">
      		Kieu Salon
      	</Link>
    		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#primaryNavigation" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        	<span className="navbar-toggler-icon"></span>
    		</button>
		    <div className="collapse navbar-collapse" id="primaryNavigation">
		      <ul className="navbar-nav mr-auto">
		        
		        <li className="nav-item">
		          <Link className="nav-link" to="/" onClick={ this.collapseDropdown }>
		            <i className="fas fa-lg fa-home"></i>
		          </Link>
		        </li>

		        { this.props.isLoggedIn ? (
			        <li className="nav-item">
			          <Link className="nav-link" to="/profile" onClick={ this.collapseDropdown }>
			            Profile
			          </Link>
			        </li>
		        ) : null }	

		        <li className="nav-item">
		          { this.props.isLoggedIn ? 
		          	(
				          <a className="nav-link" href="" onClick={ this.logoutUser }>
				            <i className="fas fa-lg fa-sign-out-alt"></i>
				          </a>
		          	) : (
				          <Link className="nav-link" to="/login" onClick={ this.collapseDropdown }>
				            <i className="fas fa-lg fa-sign-in-alt"></i>
				          </Link>
		          	)
	          	}
		        </li>
		      </ul>
		    </div>        		      	
      </nav>
    );
  }
}

export default NavBar;
