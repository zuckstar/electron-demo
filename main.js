const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const urlLocation = isDev ? 'http://localhost:3000' : 'dummy'

  win.loadURL(urlLocation)
}

app.whenReady().then(() => {
  createWindow()
})