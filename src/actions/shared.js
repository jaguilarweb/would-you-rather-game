import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

//TODO: Create auth
const AUTHED_ID = 'jaguilarweb'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then(({users, questions}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}

