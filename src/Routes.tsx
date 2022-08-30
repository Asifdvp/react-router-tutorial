import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import InnerContent from './components/InnerContent'
import Login from './components/Login'
import ProtectRoutes from './components/ProtectRoutes'
import PublicRoute from './components/PublicRoute'
import Settings from './components/Settings'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
import Tabs from './components/Tabs'

const MainRoutes = () => {
  return (
 
    <Routes>
		{/** Protected Routes */}
		{/** Wrap all Route under ProtectedRoutes element */}
		<Route path="/" element={<ProtectRoutes />}>
			<Route path="/" element={<InnerContent />}>
				<Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="tabs" element={<Tabs  />}>
					<Route path="/tabs" element={<Navigate replace to="tab1" />} />
					<Route path="tab1" element={<Tab1 />} />
					<Route path="tab2" element={<Tab2/>}/>			
					<Route path="tab3" element={<Tab3 />} />
				</Route>
				<Route path="settings" element={<Settings />} />
			
				
			
			
			</Route>
		</Route>

		{/** Public Routes */}
		{/** Wrap all Route under PublicRoutes element */}
		
			<Route path="login" element={<PublicRoute />} >
			<Route path="" element={<Login />} />
				</Route>
			
		

		{/** Permission denied route */}
		
	</Routes>

    
  )
}

export default MainRoutes