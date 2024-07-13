function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal(header, body) {
  const iframeContainer = document.getElementById('iframeContainer');
  const iframe = document.getElementById('modalIframe');
  iframeContainer.style.display = 'flex';

  // Set the src and load the iframe
  iframe.src = 'modal.html';
  
  iframe.onload = function() {
    iframe.contentWindow.postMessage({ header: header, body: body }, '*');
  };
}

window.addEventListener('click', function(event) {
  const iframeContainer = document.getElementById('iframeContainer');
  if (event.target === iframeContainer) {
    iframeContainer.style.display = 'none';
  }
});