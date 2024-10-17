// Function to change the DOM
function changeDOM() {
    // Selecting elements
    let idSelecting = document.getElementById("ID-DOM");
    let classSelecting = document.getElementsByClassName("Class-DOM");
    let tagElements = document.getElementsByTagName('h2');

    // Using querySelector to select the first element with class 'Class-DOM'
    let myClassElementUsingQuery = document.querySelector(".Class-DOM");

    // Manipulating content and style
    idSelecting.innerHTML = "This is updated content!";
    idSelecting.style.backgroundColor = "lightgreen";

    // Creating a new element
    let newParagraph = document.createElement("p");
    newParagraph.textContent = 'This is a new paragraph.';
    idSelecting.appendChild(newParagraph);

    // Removing an element
    let headingToRemoved = tagElements[0];
    headingToRemoved.remove();

    // Setting attributes
    idSelecting.setAttribute("contenteditable", "true");
    if (classSelecting.length > 0) {
        classSelecting[0].setAttribute("title", "This is a class DOM element");
    }

    // Adding an event listener to the updated ID-DOM
    idSelecting.addEventListener("click", function() {
        alert("Don't click me!");
    });

    // Preventing default action on a link
    let myLink = document.querySelector("a");
    myLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert("You are Evitable, LOL!");
    });
}

