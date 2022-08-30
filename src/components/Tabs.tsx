import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TabNav from './TabNav'

const Tabs = () => {

  
  return (
    <div className='tabs'>
    <h1>Tabs demo page Bikash web</h1>
    {/* Tab Navigation */}
<TabNav/>

    {/* Tab Inner Content */}
    <Outlet/>
    </div>
  )
}

export default Tabs