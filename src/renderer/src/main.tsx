import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={appRouter} />
    </MantineProvider>
  </React.StrictMode>
)
