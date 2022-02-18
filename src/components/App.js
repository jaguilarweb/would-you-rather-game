import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
/* import sara from '../images/sarah.png'; */
import '../index.css';
import Nav from './Nav';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div >
        <Nav />
        {this.props.loading === true
          ? null
          : <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}


export default connect()(App);
