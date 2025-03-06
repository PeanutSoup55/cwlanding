import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Documentation from './components/Documentation.jsx'

import OurStory from './components/OurStory.jsx'
import Payment from './components/Payment.jsx'
import DevStory from './components/documentation/DevStory.jsx'
import GettingStarted from './components/documentation/GettingStarted.jsx'
import Security from './components/documentation/Security.jsx'
import UserGuides from './components/documentation/UserGuides.jsx'

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
    path: '/payment',
    element: <Payment/>,
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
    path: '/story',
    element: <DevStory/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
