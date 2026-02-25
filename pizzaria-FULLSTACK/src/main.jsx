import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register';
import Logar from './pages/Logar';
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {path: "/", element: <LandingPage/> },
  {path:"/Register", element: <Register/>},
  {path:"/Logar", element: <Logar/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
