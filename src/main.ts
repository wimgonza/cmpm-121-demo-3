// todo

const button = document.createElement("button");
button.textContent = "I am a button.";

button.addEventListener("click", () => {
  alert("You clicked the button!");
});

document.body.appendChild(button);
