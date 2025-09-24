document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("selectSourceBtn")
    .addEventListener("click", async () => {
      try {
        const folderPath = await window.electronAPI.selectFolder(); //
        if (folderPath) {
          document.getElementById("sourcePath").value = folderPath;
        }
      } catch (error) {
        console.error("Error selecting folder:", error);
      }
    });
});
