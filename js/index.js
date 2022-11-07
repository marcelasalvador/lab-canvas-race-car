window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

  let canvas = document.getElementById("canvas");
  if (canvas.style.display === "none") {
    canvas.style.display = "block";
  } else {
    canvas.style.display = "none";
  }
  return startGame
  }
};


