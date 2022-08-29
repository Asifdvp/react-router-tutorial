import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dasboard from './components/Dasboard'
import InnerContent from './components/InnerContent'
import Tabs from './components/Tabs'

const MainRoutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<InnerContent/>}>
    <Route path='/tabs' element={<Tabs/>}/>
    <Route path='/dasboard' element={<Dasboard/>}/>
    <Route path='/dasboard' element={<Dasboard/>}/>

        </Route>
    

</Routes>


    </div>
  )
}

export default MainRoutes