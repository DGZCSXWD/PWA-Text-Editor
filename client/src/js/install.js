const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = "block";
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);
  deferredPrompt = null;
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA was installed");
});
