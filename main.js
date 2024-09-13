let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let container = document.querySelector(".container");
let hasMessage = false; // Setting text content

// Creating response for yes button
const yesClick = () => {
  // Checking if there is text content
  if (!hasMessage) {
    let myResponse = document.createElement("div");
    myResponse.textContent = "Thank you for liking me!";
    container.appendChild(myResponse);
    hasMessage = true; // Setting the text content so it won't append anymore
  }
};

const changePosition = () => {
  // Get container dimensions
  let containerRect = container.getBoundingClientRect();

  // Calculate available space for button to move within the container
  let maxX = containerRect.width - noButton.offsetWidth;
  let maxY = containerRect.height - noButton.offsetHeight;

  // Generate random X and Y positions within the container bounds
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  // Apply random positions to the "No" button
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
};

//event listeners
yesButton.addEventListener("click", yesClick);
noButton.addEventListener("mouseover", changePosition);
