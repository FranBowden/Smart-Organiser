const { dialog } = require("electron");
//Documentation: https://www.electronjs.org/docs/latest/api/dialog

async function openFolderDialog() {
  //opens a dialog to select a folder
  console.log("openFolderDialog called!");
  const result = await dialog.showOpenDialog({
    //options for dialog
    title: "Select a folder",
    buttonLabel: "Select Folder",
    properties: ["openDirectory"],
  });
  return result.filePaths[0];
}
module.exports = {
  openFolderDialog,
};
