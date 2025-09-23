const { app, BrowserWindow } = require("electron");
const path = require("path"); // Add this line!

function createWindow() {
  const iconPath = path.join(__dirname, "../assets/icons/app-icon.png");

  console.log("Looking for icon at:", iconPath);

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

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
