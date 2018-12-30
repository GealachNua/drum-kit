// for loop to set event listener on all drum kit buttons.

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked");
}

