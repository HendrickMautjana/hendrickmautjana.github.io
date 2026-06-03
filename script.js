// Switch to back
function showBack() {
  document.getElementById("front").classList.add("hidden");
  document.getElementById("back").classList.remove("hidden");
}

// Switch to front
function showFront() {
  document.getElementById("back").classList.add("hidden");
  document.getElementById("front").classList.remove("hidden");
}

// Show section
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

// Hide section
function hideSection(id) {
  document.getElementById(id).classList.add("hidden");
}

// Message
function showMessage() {
  document.getElementById("message").innerText = "Message sent successfully!";
}

// Insert GitHub Pages link dynamically
function insertGitHubLink() {
  const linkContainer = document.getElementById("github-link");
  linkContainer.innerHTML = `
    <p>
      Direct Link: 
      <a href="https://hendrickmautjana.github.io/INL261_PROJECT" target="_blank">
        https://hendrickmautjana.github.io/INL261_PROJECT
      </a>
    </p>
  `;
}

// Run when page loads
window.onload = insertGitHubLink;
