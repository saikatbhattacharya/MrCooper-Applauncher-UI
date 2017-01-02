import React from 'react';
import style from '../css/style.css';
import store from '../store';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

class header extends React.Component {
	state = {
		inTheatreClass : this.props.inTheatreClass,
		comingSoonClass : this.props.comingSoonClass
	}
	
	inTheatres = ()=>{
		this.setState({
		inTheatreClass : "filter toggle active",
		comingSoonClass : "filter toggle"
	})
	browserHistory.push('/in-theatre');
	}

	comingSoon = ()=>{
		this.setState ({
		inTheatreClass : "filter toggle",
		comingSoonClass : "filter toggle active"
	})
	browserHistory.push('/coming-soon');
	}

	render = () => {
		return (
			<div>
				<div id="fixed-header-padding"></div>
				<nav className="navbar navbar-inverse" role="navigation">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#" sl-processed="1"><img style={{ 'width': '300px', 'paddingTop': '15px' }} src="https://d14t8xmihdgf99.cloudfront.net/assets/logobeta2-d8ea4638221addf08fe8f742f385ab02.png" /></a>
					</div>
				</nav>
				<div className="full-container">
					<div className="filters" data-component="FilterBar" style={{"margin": "-5px -5px -10px"}}>
						<span data-component="StatusFilter" style={{'boxSizing': 'border-box'}}>
							<span className={this.state.comingSoonClass} data-url="coming-soon" data-value="CS" onClick={this.comingSoon}>Coming Soon</span>
							<span className={this.state.inTheatreClass} data-url="in-theatres" data-value="IT" onClick={this.inTheatres}>In Theatres</span>
						</span>
					</div>
				</div>
				<hr/>
			</div>
		)
	}
}


export default header;
