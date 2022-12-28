const filterDropdownButton = document.querySelector(".filter-button");
const filterForm = document.querySelector(".filter-form");
const chevron = document.querySelector(".filter-button > img");

filterDropdownButton.addEventListener("click", () => {
  filterForm.classList.toggle("hidden");
  if (
    chevron.getAttribute("src").includes("./static/images/chevron-down.png")
  ) {
    chevron.setAttribute("src", "./static/images/chevron-up.png");
  } else {
    chevron.setAttribute("src", "./static/images/chevron-down.png");
  }
});

const minYearSlider = document.querySelector("#min-year-slider");
const maxYearSlider = document.querySelector("#max-year-slider");
const minYear = document.getElementById("min-year");
const maxYear = document.getElementById("max-year");
const minSeveritySlider = document.getElementById("min-severity-slider");
const maxSeveritySlider = document.getElementById("max-severity-slider");
const minSeverity = document.getElementById("min-severity");
const maxSeverity = document.getElementById("max-severity");

minYearSlider.addEventListener("input", () => {
  controlFromSlider(minYearSlider, maxYearSlider, minYear);
});

minSeveritySlider.addEventListener("input", () => {
  controlFromSlider(minSeveritySlider, maxSeveritySlider, minSeverity);
});

maxYearSlider.addEventListener("input", () => {
  controlToSlider(minYearSlider, maxYearSlider, maxYear);
});

maxSeveritySlider.addEventListener("input", () => {
  controlToSlider(minSeveritySlider, maxSeveritySlider, maxSeverity);
});

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [min, max] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
  if (min > max) {
    fromSlider.value = max;
    fromInput.textContent = max;
  } else {
    fromInput.textContent = min;
  }
}
function controlToSlider(fromSlider, toSlider, toInput) {
  const [min, max] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
  if (max < min) {
    toSlider.value = min;
    toInput.textContent = min;
  } else {
    toInput.textContent = max;
  }
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
}

function getParsed(currentFrom, currentTo) {
  const min = parseInt(currentFrom.value);
  const max = parseInt(currentTo.value);
  return [min, max];
}

window.addEventListener("load", () => {
  fillSlider(minYearSlider, maxYearSlider, "#C6C6C6", "#25daa5", maxYearSlider);
  fillSlider(
    minSeveritySlider,
    maxSeveritySlider,
    "#C6C6C6",
    "#25daa5",
    maxSeveritySlider
  );
});
