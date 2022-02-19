import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Question extends Component {
  render(){
    const {question, user} = this.props
    const {
      id, timestamp, author, optionOne, optionTwo 
    } = question
    
    return(

      <Fragment >
        <div className="author"><strong>{author}</strong></div>
        <div className='question'>
        <div className='avatar'>
          <img src={ user.avatarURL } />
        </div>
        <div className='answerd'>
          <h2>Would you rather...?</h2>
          <p>{optionOne.text}</p>
          <p>{optionTwo.text}</p>
          <button>View Pull</button>
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
  const user = users[question.author]

  return{
    authedUser,
    question,
    user,
  }
}

export default connect(mapStateToProps)(Question);