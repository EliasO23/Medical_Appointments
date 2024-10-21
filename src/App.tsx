
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import AppointmentPage from './pages/AppointmentPage'
import CreateAppointmentPage from './pages/CreateAppointmentPage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/appointment',
      element: <CreateAppointmentPage />
    },
    {
      path: '/listappointments',
      element: <AppointmentPage />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
