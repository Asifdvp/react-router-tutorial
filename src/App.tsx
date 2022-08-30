import React from 'react'
import Sidebar from './components/Sidebar'
import MainRoutes from './Routes'
import './styles.css'
const App = () => {
  return (
    <div className='app'>
     
<Sidebar/>
      {/* Sidebar */}
<MainRoutes/>
{/* innercontainer */}

    </div>
  )
}

export default App