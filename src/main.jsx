import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Documentation from './components/Documentation.jsx'
import Products from './components/Products.jsx'
import AboutUs from './components/AboutUs.jsx'
import Payment from './components/Payment.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pricing',
    element: <Pricing/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/documentation',
    element: <Documentation/>,
  },
  {
    path: '/products',
    element: <Products/>,
  },
  {
    path: '/about',
    element: <AboutUs/>,
  },
  {
    path: '/payment',
    element: <Payment/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
