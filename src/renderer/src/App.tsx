import Versions from './components/Versions'
import { Button } from '@mantine/core'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Button variant="filled" onClick={ipcHandle}>
        Send IPC
      </Button>
      <Versions></Versions>
    </>
  )
}

export default App
