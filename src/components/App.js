import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
/* import sara from '../images/sarah.png'; */
import '../index.css';
import Nav from './Nav';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div >
        <Nav />
      </div>
    );
  }
}

export default connect()(App);
