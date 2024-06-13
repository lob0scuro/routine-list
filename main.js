const tiles = document.getElementsByClassName("task-tile");
var clickedTiles = [];

const clicked = (tile) => {
  if (tile.src != "images/check.png") {
    clickedTiles.push(tile.src);
    tile.src = "images/check.png";
  } else {
    return;
  }
  console.log(clickedTiles);
  if (clickedTiles.length === tiles.length) {
    alert("All done! Great job!!");
    location.href = "index.html";
  }
};

const reset = () => {
  location.reload();
};
