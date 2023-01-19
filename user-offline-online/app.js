function hasNetwork(online) {
    const element = document.querySelector(".status");
    // Update the DOM to reflect the current status
    if (online) {
      element.classList.remove("offline");
      element.classList.add("online");
      element.innerText = "Online";
    } else {
      element.classList.remove("online");
      element.classList.add("offline");
      element.innerText = "Offline";
    }
  }
  window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);
  });