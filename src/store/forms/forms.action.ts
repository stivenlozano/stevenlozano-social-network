import { FormsActions, FormModel } from '.'

export const clearFormAction = (): any => async (dispatch: any, getState: any) => {  
  dispatch({
    type: FormsActions.CLEAR_FORM,
    payload: {}
  })
}