import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Create from './pages/Create'
import Home from './pages/Home'
import PostsDetail from './pages/detail/PostsDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/Create' element={<Create />} />
      <Route path='/posts/:slug' element={<PostsDetail />} />
    </Route>
  )
)
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
