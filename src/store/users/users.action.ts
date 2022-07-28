import axios from 'axios'
import { UsersActions } from '.'

export const fetchUsersAction = (): any => async (dispatch: any) => {  
 
  dispatch({
    type: UsersActions.GET_USERS,
    payload: {},
  })
}