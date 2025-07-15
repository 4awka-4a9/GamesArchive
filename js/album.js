const iframe = document.getElementById("myFrame");

iframe.addEventListener("click", () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { // Safari
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { // IE/Edge
    iframe.msRequestFullscreen();
  }
});