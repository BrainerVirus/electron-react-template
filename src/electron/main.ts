import path from 'node:path'
import { BrowserWindow, app } from 'electron'

app.on('ready', () => {
  const mainWindow = new BrowserWindow({})

  // Load the file with the hash fragment pointing to home route
  mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'), {
    hash: '/',
  })
})
