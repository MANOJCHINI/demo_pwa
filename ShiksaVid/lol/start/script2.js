// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.error("Service Worker Registration Failed:", err));
}

// Handle Install Prompt
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      console.log("User choice:", choice.outcome);
      deferredPrompt = null;
    });
  });
});