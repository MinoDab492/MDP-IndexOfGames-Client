const { app, BrowserWindow } = require('electron');
require('update-electron-app')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
  });

  win.loadFile('GamesUpdated/modified_IndexOfGames.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});