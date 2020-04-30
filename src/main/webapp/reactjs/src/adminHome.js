import React from 'react';
import './App.css';

import {Container, Row ,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Redirect} from 'react-router';

import NavigationBar from './components/adminNavigationBar';
import Train from './components/Train';
import TrainList from './components/TrainList';
import adminWelcome from './components/adminWelcome';
import adminCreateRule from './components/adminCreateRule';


class adminHome extends React.Component {
		constructor(props)
		{
			super(props);
		}
		render()
		{
		  const marginTop = {
					marginTop: "40px"
			};
		  
		  if(localStorage.getItem('loggedin')==='false')
		  {
			  alert("you have to log in");
			  return <Redirect to="/"/> ;
		  } 
		  return (
		    <Router>
		    	<NavigationBar history={this.props.history}/>
		    	<Container>
		    		<Row>
		    			<Col lg={12} style={marginTop}>
		    				<Switch>
		    					<Route path="/adminHome" exact component={adminWelcome}/>
		    					<Route path="/add" exact component={Train}/>
		    					<Route path="/list" exact component={TrainList}/>
		    					<Route path="/edit/:id" exact component={Train}/>
		    					<Route path="/adminCreateRule" exact component={adminCreateRule}/>	
		    				</Switch>
		    			</Col>
		    		</Row>
		    	</Container>
		    </Router>
		  );
		}
}

export default adminHome;