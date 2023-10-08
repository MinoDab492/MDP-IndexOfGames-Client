// Get the modal and close button elements
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

// Get the modal content elements
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var modalOptions = document.getElementById("modal-options");

// Add event listeners to the buttons that should trigger the modal
var buttons = document.querySelectorAll(".box-button");
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    // Extract data attributes from the button
    var boxTitle = this.parentNode.getAttribute("data-title");
    var boxDescription = this.parentNode.getAttribute("data-description");

    // Set the modal content
    modalTitle.textContent = boxTitle;
    modalDescription.textContent = boxDescription;

    // Get the option buttons related to this button
    var optionButtons = this.parentNode.querySelectorAll(".box-button-option");

    // Clear previous option buttons
    modalOptions.innerHTML = "";

    // Create option buttons dynamically based on data attributes
    optionButtons.forEach(function (optionButton) {
      var buttonText = optionButton.getAttribute("data-button-text") || "";
      var buttonLink = optionButton.getAttribute("data-button-link") || "#";

      var option = document.createElement("a");
      option.textContent = buttonText;
      option.href = buttonLink;
      option.target = "_blank"; // Open in a new tab
      option.classList.add("modal-option-button");
      modalOptions.appendChild(option);
    });

    // Display the modal
    modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal content
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
