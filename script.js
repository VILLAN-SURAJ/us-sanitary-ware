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
    if (e.target === calcModal) {
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

  // --------------------------------------------
  // Catalog Addition Functionality
  // --------------------------------------------
  const addCatalogBtn = document.getElementById("addCatalogBtn");
  const catalogModal = document.getElementById("catalogModal");
  const catalogCloseBtn = document.querySelector(".catalog-close");
  const catalogForm = document.getElementById("catalogForm");
  const galleryContainer = document.querySelector(".gallery");

  // Open catalog modal on button click
  addCatalogBtn.addEventListener("click", function() {
    catalogModal.style.display = "block";
  });

  // Close catalog modal when clicking the close button
  catalogCloseBtn.addEventListener("click", function() {
    catalogModal.style.display = "none";
  });

  // Close catalog modal when clicking outside modal content
  window.addEventListener("click", function(e) {
    if (e.target === catalogModal) {
      catalogModal.style.display = "none";
    }
  });

  // Handle catalog form submission
  catalogForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Get form input values
    const title = document.getElementById("catalogTitle").value;
    const imageUrl = document.getElementById("catalogImageUrl").value;
    const description = document.getElementById("catalogDescription").value;

    // Basic validation for required fields
    if (!title || !imageUrl) {
      alert("Please fill out the required fields (Title and Image URL).");
      return;
    }

    // Create a new catalog item element
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // Create and set up the image element
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = title;

    // Create the title element
    const titleElement = document.createElement("p");
    titleElement.textContent = title;

    // Append image and title to the new item
    itemDiv.appendChild(imgElement);
    itemDiv.appendChild(titleElement);

    // Optionally add a description
    if (description) {
      const descElement = document.createElement("p");
      descElement.textContent = description;
      itemDiv.appendChild(descElement);
    }

    // Append the new catalog item to the gallery
    galleryContainer.appendChild(itemDiv);

    // Reset the form and close the modal
    catalogForm.reset();
    catalogModal.style.display = "none";
  });
});
