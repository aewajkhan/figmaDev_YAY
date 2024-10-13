window.onload = function () {
  // On page load, hide all the select tags
  document.querySelectorAll(".bundle-item-bottom").forEach((unit) => {
    unit.style.display = "none";
  });
};

function toggleExpand(unitId) {
  // Hide all other unit selectors and reset height
  document.querySelectorAll(".bundle-item-bottom").forEach((unit) => {
    unit.style.display = "none";
  });
  document.querySelectorAll(".unit-1").forEach((unit) => {
    unit.classList.remove("expanded");
  });

  // Show the selected unit and expand its height
  const selectedUnit = document.getElementById(`bundle-item-bottom-${unitId}`);
  if (selectedUnit) {
    selectedUnit.style.display = "block";
  }

  // Apply expanded height to the selected unit
  const selectedContainer = document.getElementById(unitId);
  selectedContainer.classList.add("expanded");
}
