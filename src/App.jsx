import './App.css'
import Dashboard from './components/Dashboard'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Routelayout from './components/Routelayout'
import AddingClients from './components/AddingClients'
import Client from './components/Client'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Routelayout />}>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='client' element={<Client />}></Route>
        <Route path='AddData' element={<AddingClients />} ></Route>
      </Route>
    )
  )
  
  return (

    <RouterProvider router={router} />

  )
}

export default App
