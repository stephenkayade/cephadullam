import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLoader from './helpers/MainLoader'
import DashboardLayout from './components/layouts/Dashboard'
import UserState from './context/user/userState'
import CourseState from './context/course/courseState'

const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/auth/Login'))
const Users = React.lazy(() => import('./pages/dashboard/users/Users'))
const Courses = React.lazy(() => import('./pages/dashboard/courses/Courses'))

const App = () => {
  return (
    <Router>
      <CourseState>
        <UserState>
          <Suspense fallback={MainLoader()}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/admin/login' element={<Login />} />
              {/* <Route path='/dashboard' element={<DashboardLayout Component={Dashboard} header='Dashboard' />} /> */}
              <Route path='/dashboard/users' element={<DashboardLayout Component={Users} header='User Dashboard' />} />
              <Route path='/dashboard/courses' element={<DashboardLayout Component={Courses} header='Course Dashboard' />} />
            </Routes>
          </Suspense>
        </UserState>
      </CourseState>
    </Router>
  )
}

export default App