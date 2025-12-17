import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../page/Home'
import { Login } from '../../page/Login'
import { Register } from '../../page/Register'
import { ErrorRoutes } from './ErrorRoutes'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
  return (
 <Routes>
    <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Register/>}/>
    <Route path='*' element={<ErrorRoutes/>}/>
 </Routes>
  )
}
