"use strict";
window.addEventListener("load", ready);

let points = 0;
let lives = 3;

const salad = document.querySelector("#salad");
const tomato = document.querySelector("#tomato");
const jalapeno = document.querySelector("#jalapeno");
const banana = document.querySelector("#banana");
const strawberry = document.querySelector("#strawberry");

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function resetLives() {
  lives = 3;
}

function startGame() {
  resetLives();
  points = 0;
  lives = 3;

  document.querySelector("#game_start").currentTime = 0;
  document.querySelector("#game_start").play();

  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  startAllAnimations();

  document
    .querySelector("#salad_container")
    .addEventListener("click", clickSalad);
  document
    .querySelector("#tomato_container")
    .addEventListener("click", clickTomato);
  document
    .querySelector("#jalapeno_container")
    .addEventListener("click", clickJalapeno);
  document
    .querySelector("#banana_container")
    .addEventListener("click", clickBanana);
  document
    .querySelector("#strawberry_container")
    .addEventListener("click", clickStrawberry);

  document
    .querySelector("#salad_container")
    .addEventListener("animationiteration", saladRestart);
  document
    .querySelector("#tomato_container")
    .addEventListener("animationiteration", tomatoRestart);
  document
    .querySelector("#jalapeno_container")
    .addEventListener("animationiteration", jalapenoRestart);
  startTimer();
}

function startAllAnimations() {
  document.querySelector("#salad_container").classList.add("falling1");
  document.querySelector("#tomato_container").classList.add("falling2");
  document.querySelector("#jalapeno_container").classList.add("falling3");
  document.querySelector("#banana_container").classList.add("pattern");
  document.querySelector("#strawberry_container").classList.add("sliding");

  document.querySelector("#salad_container").classList.add("position1");
  document.querySelector("#tomato_container").classList.add("position2");
  document.querySelector("#jalapeno_container").classList.add("position3");
  document.querySelector("#banana_container").classList.add("position4");
  document.querySelector("#strawberry_container").classList.add("position5");
}

function clickSalad() {
  console.log("Click salad");
  const salad = this;

  salad.removeEventListener("click", clickSalad);

  salad.classList.add("paused");
  salad.querySelector("img").classList.add("zoom_out");

  document.querySelector("#sound_coin").currentTime = 0;
  document.querySelector("#sound_coin").play();
  salad.addEventListener("animationend", saladGone);

  incrementPoints2();
}

function saladGone() {
  console.log("salad gone");
  const salad = this;
  salad.removeEventListener("animationend", saladGone);
  salad.querySelector("img").classList.remove("zoom_out");
  salad.classList.remove("paused");
  saladRestart.call(this);
  salad.addEventListener("click", clickSalad);
}

function saladRestart() {
  console.log("salad restart");
  const salad = this;

  salad.classList.remove("falling1");
  salad.offsetWidth;
  salad.classList.add("falling1");
  salad.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );
  salad.classList.remove("falling1", "falling2", "falling3");

  const p = Math.ceil(Math.random() * 3);
  salad.classList.add(`falling${p}`);
}

function clickTomato() {
  console.log("Click tomato");
  const tomato = this;

  tomato.removeEventListener("click", clickTomato);

  tomato.classList.add("paused");
  tomato.querySelector("img").classList.add("zoom_out");

  document.querySelector("#sound_coin").currentTime = 0;
  document.querySelector("#sound_coin").play();
  tomato.addEventListener("animationend", tomatoGone);

  incrementPoints();
}

function tomatoGone() {
  console.log("tomato gone");
  const tomato = this;
  tomato.removeEventListener("animationend", tomatoGone);
  tomato.querySelector("img").classList.remove("zoom_out");
  tomato.classList.remove("paused");
  tomatoRestart.call(this);
  tomato.addEventListener("click", clickTomato);
}

function tomatoRestart() {
  console.log("tomato restart");
  const tomato = this;

  tomato.classList.remove("falling2");
  tomato.offsetWidth;
  tomato.classList.add("falling2");
  tomato.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );
  tomato.classList.remove("falling1", "falling2", "falling3");

  const p = Math.ceil(Math.random() * 3);
  tomato.classList.add(`falling${p}`);
}

function clickJalapeno() {
  console.log("Click Jalapeno");
  const jalapeno = this;

  jalapeno.removeEventListener("click", clickJalapeno);

  jalapeno.classList.add("paused");
  jalapeno.querySelector("img").classList.add("zoom_out");

  document.querySelector("#sound_coin").currentTime = 0;
  document.querySelector("#sound_coin").play();
  jalapeno.addEventListener("animationend", jalapenoGone);

  incrementPoints3();
}

function jalapenoGone() {
  console.log("jalapeno gone");
  const jalapeno = this;
  jalapeno.removeEventListener("animationend", jalapenoGone);
  jalapeno.querySelector("img").classList.remove("zoom_out");
  jalapeno.classList.remove("paused");
  jalapenoRestart.call(this);
  jalapeno.addEventListener("click", clickJalapeno);
}

function jalapenoRestart() {
  console.log("jalapeno restart");
  const jalapeno = this;

  jalapeno.classList.remove("falling3");
  jalapeno.offsetWidth;
  jalapeno.classList.add("falling3");
  jalapeno.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );
  jalapeno.classList.remove("falling1", "falling2", "falling3");

  const p = Math.ceil(Math.random() * 3);
  //   jalapeno.classList.add(`position${p}`);
  //   const t = math.ceil(Math.random() * 3 + 1);
  jalapeno.classList.add(`falling${p}`);
}
function clickBanana() {
  console.log("Click banana");
  const banana = this;
  document
    .querySelector("#banana_container")
    .removeEventListener("click", clickBanana);
  banana.classList.add("paused");
  document.querySelector("#banana_sprite").classList.add("zoom_in");
  banana.addEventListener("animationend", bananaGone);

  document.querySelector("#sound_bomb").currentTime = 0;
  document.querySelector("#sound_bomb").play();
  decrementLives();
}

function bananaGone() {
  const banana = this;
  banana.removeEventListener("animationend", bananaGone);
  document.querySelector("#banana_sprite").classList.remove("zoom_in");
  banana.classList.remove("paused");
  banana.classList.remove("falling");
  banana.offsetWidth;
  banana.classList.add("falling");
  bananaRestart.call(this);
  banana.addEventListener("click", clickBanana);
}

function bananaRestart() {
  console.log("banana restart");
  const banana = this;

  banana.classList.remove("falling");
  banana.offsetWidth;
  banana.classList.add("falling");
  banana.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );

  //   const p = Math.ceil(Math.random() * 3);
  //   banana.classList.add(`position${p}`);
}

function clickStrawberry() {
  console.log("Click strawberry");
  const strawberry = this;
  strawberry.removeEventListener("click", clickStrawberry);
  strawberry.classList.add("paused");
  document.querySelector("#strawberry_sprite").classList.add("zoom_in");
  strawberry.addEventListener("animationend", strawberryGone);

  document.querySelector("#sound_bomb").currentTime = 0;
  document.querySelector("#sound_bomb").play();
  decrementLives();
}

function strawberryGone() {
  const strawberry = this;
  strawberry.removeEventListener("animationend", strawberryGone);
  document.querySelector("#strawberry_sprite").classList.remove("zoom_in");
  strawberry.classList.remove("paused");
  strawberry.classList.remove("falling");
  strawberry.offsetWidth;
  strawberry.classList.add("falling");
  strawberryRestart.call(this);
  strawberry.addEventListener("click", clickStrawberry);
}

function strawberryRestart() {
  console.log("strawberry restart");
  const strawberry = this;

  strawberry.classList.remove("falling");
  strawberry.offsetWidth;
  strawberry.classList.add("falling");
  strawberry.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );

  //   const p = Math.ceil(Math.random() * 3);
  //   strawberry.classList.add(`position${p}`);
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();

  if (points >= 25) {
    levelComplete();
  }
}

function incrementPoints2() {
  console.log("Giv point");
  points = points + 2;
  console.log("har nu " + points + " point");
  displayPoints();

  if (points >= 25) {
    levelComplete();
  }
}

function incrementPoints3() {
  console.log("Giv point");
  points = points + 3;
  console.log("har nu " + points + " point");
  displayPoints();

  if (points >= 25) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#coin_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");

  if (lives <= 1) {
    gameOver();
  }

  showDecrementedLives();
  lives--;
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_gameOver").currentTime = 0;
  document.querySelector("#sound_gameOver").play();
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  stopGame();
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#game_complete").currentTime = 0;
  document.querySelector("#game_complete").play();
  document.querySelector("#btn_retry").addEventListener("click", startGame);
  resetPoints();
  stopGame();
}
function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("tiden er gået!");
  if (points >= 25) {
    levelComplete();
  } else {
    gameOver();
  }
}

function stopGame() {
  document
    .querySelector("#time_sprite")
    .removeEventListener("animationend", timeIsUp);
  document.querySelector("#time_sprite").classList.remove("shrink");

  document.querySelector("#game_start").pause();
  document.querySelector("#salad_container").classList.remove("falling");
  document.querySelector("#tomato_container").classList.remove("falling");
  document.querySelector("#jalapeno_container").classList.remove("falling");
  document.querySelector("#banana_container").classList.remove("falling");
  document.querySelector("#strawberry_container").classList.remove("falling");
  document.querySelector("#sound_background").pause();

  document
    .querySelector("#salad_container")
    .removeEventListener("click", clickSalad);
  document
    .querySelector("#tomato_container")
    .removeEventListener("click", clickTomato);
  document
    .querySelector("#jalapeno_container")
    .removeEventListener("click", clickJalapeno);
  document
    .querySelector("#banana_container")
    .removeEventListener("click", clickBanana);
  document
    .querySelector("#strawberry_container")
    .removeEventListener("click", clickStrawberry);
}
