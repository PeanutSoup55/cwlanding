import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Documentation from './components/Documentation.jsx'

import OurStory from './components/OurStory.jsx'

import GettingStarted from './components/documentation/GettingStarted.jsx'
import Security from './components/documentation/Security.jsx'
import UserGuides from './components/documentation/UserGuides.jsx'
import AboutThisSite from './components/documentation/AboutThisSite.jsx'

import PaymentSuccess from './components/payment/PaymentSuccess.jsx'
import Register from './components/payment/Resgister.jsx'

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
    path: '/our-story',
    element: <OurStory/>,
  },
 
  {
    path: '/started',
    element: <GettingStarted/>,
  },
  {
    path: '/security',
    element: <Security/>,
  },
  {
    path: '/guides',
    element: <UserGuides/>,
  },

  {
    path: '/about-site',
    element: <AboutThisSite/>,
  },
  {
    path: '/payment-success',
    element: <PaymentSuccess/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
