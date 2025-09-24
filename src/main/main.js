const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const dialogManager = require("./dialogManager");

function createWindow() {
  //icon path
  const iconPath = path.join(__dirname, "../assets/icons/app-icon.png");

  //Opens window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, "../renderer/assets/icons/app-icon.png"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("src/renderer/index.html");
}
//When app is ready to create window
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

//Quit when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//IPC handler for folder selection
ipcMain.handle("select-folder", async () => {
  return await dialogManager.openFolderDialog();
});
