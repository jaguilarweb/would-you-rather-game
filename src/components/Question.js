import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import sara from '../images/sarah.png';

class Question extends Component {
  render(){
    const {question} = this.props
    const {
      id, timestamp, author, optionOne, optionTwo 
    } = question


    return(

      <Fragment >
        <div className="author">{author}</div>
        <div className='question'>
        <div className='avatar'>
          {/** Reemplazar el src fijo */}
          <img src={sara} />

        </div>
        <div className='answerd'>
          <h2>Would you rather...?</h2>
          <p>{optionOne.text}</p>
          <p>{optionTwo.text}</p>
          <button>Submit</button>
        </div>
        </div>
      </Fragment>
    )
  }
}

//what state does this component need
//from our redux store
function mapStateToProps({authedUser, users, questions}, {id}){
  const question = questions[id]

  return{
    authedUser,
    question,

  }
}

export default connect(mapStateToProps)(Question);