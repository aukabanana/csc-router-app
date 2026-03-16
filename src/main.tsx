import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'

import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
