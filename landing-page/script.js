// CampusLife Hub landing page metrics

const prototypeUrl = "../prototype/index.html";

const ctaButton = document.getElementById("ctaButton");
const demoButton = document.getElementById("demoButton");

const ctaCountDisplay = document.getElementById("ctaCount");
const ctaTableCountDisplay = document.getElementById("ctaTableCount");
const demoCountDisplay = document.getElementById("demoCount");
const conversionRateDisplay = document.getElementById("conversionRate");
const demoMessage = document.getElementById("demoMessage");

// Load saved values from localStorage
let ctaClicks = Number(localStorage.getItem("campusLifeCtaClicks")) || 0;
let demoAttempts =
  Number(localStorage.getItem("campusLifeDemoAttempts")) || 0;

// Update all displayed metrics
function updateMetrics() {
  ctaCountDisplay.textContent = ctaClicks;
  ctaTableCountDisplay.textContent = ctaClicks;
  demoCountDisplay.textContent = demoAttempts;

  let conversionRate = 0;

  if (ctaClicks > 0) {
    conversionRate = Math.round((demoAttempts / ctaClicks) * 100);
  }

  conversionRateDisplay.textContent = `${conversionRate}%`;
}

// Save values in the browser
function saveMetrics() {
  localStorage.setItem("campusLifeCtaClicks", ctaClicks);
  localStorage.setItem("campusLifeDemoAttempts", demoAttempts);
}

// Hero CTA button
ctaButton.addEventListener("click", function () {
  ctaClicks += 1;

  saveMetrics();
  updateMetrics();

  document.getElementById("try").scrollIntoView({
    behavior: "smooth",
  });
});

// Open prototype button
demoButton.addEventListener("click", function () {
  demoAttempts += 1;

  saveMetrics();
  updateMetrics();

  demoMessage.textContent =
    "Opening the CampusLife Hub prototype...";

  setTimeout(function () {
    window.location.href = prototypeUrl;
  }, 700);
});

// Display saved values when the page loads
updateMetrics();
