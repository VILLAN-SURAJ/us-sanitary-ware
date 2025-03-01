document.addEventListener("DOMContentLoaded", function() {
    // Tile Calculator Functionality
    const calcIcon = document.getElementById("calcIcon");
    const calcModal = document.getElementById("calcModal");
    const closeBtn = document.querySelector(".close");
    const calcForm = document.getElementById("calcForm");
    const calcResults = document.getElementById("calcResults");
    
    // Open modal when clicking the calculator icon
    calcIcon.addEventListener("click", function() {
      calcModal.style.display = "block";
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener("click", function() {
      calcModal.style.display = "none";
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(e) {
      if (e.target == calcModal) {
        calcModal.style.display = "none";
      }
    });
    
    // Calculate tiles on form submission
    calcForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const length = parseFloat(document.getElementById("platformLength").value);
      const breadth = parseFloat(document.getElementById("platformBreadth").value);
      
      if (isNaN(length) || isNaN(breadth) || length <= 0 || breadth <= 0) {
        calcResults.innerHTML = "<p>Please enter valid positive numbers for both dimensions.</p>";
        return;
      }
      
      const area = length * breadth; // Platform area in sq ft
      
      // Tile sizes in square feet
      const area2x2 = 2 * 2;   // 4 sq ft
      const area2x4 = 2 * 4;   // 8 sq ft
      const area1x2 = 1 * 2;   // 2 sq ft
      
      const tiles2x2 = Math.ceil(area / area2x2);
      const tiles2x4 = Math.ceil(area / area2x4);
      const tiles1x2 = Math.ceil(area / area1x2);
      
      calcResults.innerHTML = `
        <h3>Results:</h3>
        <p>Platform Area: ${area.toFixed(2)} sq ft</p>
        <p>Tiles (2ft x 2ft): ${tiles2x2} tiles</p>
        <p>Tiles (2ft x 4ft): ${tiles2x4} tiles</p>
        <p>Tiles (1ft x 2ft): ${tiles1x2} tiles</p>
      `;
    });
  });
  