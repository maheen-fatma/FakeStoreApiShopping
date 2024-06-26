import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import AllProd from './components/AllProd/AllProd'
import Category from './components/Category/Category'
import Cart from './components/Cart/Cart'
const router= createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:"",
        element: <AllProd />
      },
      {
        path:":cat",
        element: <Category />
      },
      {
        path:"cart",
        element: <Cart />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
