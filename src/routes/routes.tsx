import React, { lazy } from 'react'
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { PATHS } from '../constants'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.BASE} element={ <Navigate to={PATHS.LOGIN} replace /> }/>
      <Route path={PATHS.LOGIN} element={ <h1>Login</h1> }/>
      <Route path={PATHS.POSTS} element={ <h1>Post</h1> }/>
      <Route path='*' element={ <Navigate to="/" replace /> }/>
    </Routes>
  )
}
