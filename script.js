function init(){
// input, button, and headline elements 
  const entryInput = document.getElementById("entryinput");
  const entryButton = document.getElementById("entrybutton");
  const textOutput = document.getElementById("textoutput");

  // click event listener
  entryButton.addEventListener("click", function() {
    // Get the text entered by the user
    const message = entryInput.value;

    // Display alert
    alert("Debarlaben: " + message);

    // Change the h2 text to input value
    textOutput.textContent = message;
  });
}

window.addEventListener('load', init);
