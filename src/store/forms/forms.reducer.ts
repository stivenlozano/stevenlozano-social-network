import { initialState, FormsActions } from '.'
import { AnyAction } from 'redux'

export default function FormsReducer( state = initialState, action: AnyAction) {
  const { type, payload } = action
  
  switch(type){
    default:
      return state;
  }
}
