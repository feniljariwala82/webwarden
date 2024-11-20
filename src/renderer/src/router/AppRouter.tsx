import App from '@renderer/App'
import { createHashRouter } from 'react-router-dom'

export const appRouter = createHashRouter([
  {
    path: '/',
    element: <App />
  }
])
