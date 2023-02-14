let state = false;
function changeColor() {
  if (!state) {
    button = document.querySelector(".innercircle");
    back = document.querySelector(".outerradius");
    back.style.background = "#66CB66";
    back.style.border = "2px solid #66CB66";
    button.style.animation = "move-right 500ms forwards ease";
    button.style.cssFloat = "right";
    button.style.right = "20px";
    button.style.top = "0.1px";

    // document.querySelector(".container").style.background = "#1C1C1D";

    state = !state;
  } else {
    button = document.querySelector(".innercircle");
    back = document.querySelector(".outerradius");
    back.style.background = "#e9e9ea";
    back.style.border = "2px solid #e9e9ea";
    button.style.animation = "move-left 500ms forwards ease";
    button.style.cssFloat = "left";
    button.style.right = "-1.2px";
    button.style.top = "0.1px";
    state = !state;
    // document.querySelector(".container").style.background = "#FFFFFF";
  }
}

let state2 = false;
function changeColor2() {
  if (!state2) {
    button = document.querySelector(".innercircle1");
    back = document.querySelector(".outerradius1");
    back.style.background = "#66CB66";
    back.style.border = "2px solid #66CB66";
    button.style.animation = "move-right 500ms forwards ease";
    button.style.cssFloat = "right";
    button.style.right = "20px";
    button.style.top = "0.1px";
    darkmode();
    // document.querySelector(".container").style.background = "#1C1C1D";

    state2 = !state2;
  } else {
    button = document.querySelector(".innercircle1");
    back = document.querySelector(".outerradius1");
    back.style.background = "#e9e9ea";
    back.style.border = "2px solid #e9e9ea";
    button.style.animation = "move-left 500ms forwards ease";
    button.style.cssFloat = "left";
    button.style.right = "-1.2px";
    button.style.top = "0.1px";
    state2 = !state2;
    lightmode();
    // document.querySelector(".container").style.background = "#FFFFFF";
  }
}

function darkmode() {
  container = document.querySelector(".container");
  body = document.body;
  whitebox = document.getElementsByClassName("whitebox");
  heading = document.getElementsByClassName("heading")[0];
  nav = document.querySelector(".l3");
  inp = document.querySelector(".inpsearch");
  outerradius = document.querySelector(".outerradius");
  searchbox = document.querySelector(".searchbox");
  inp.style.background = "rgb(28,28,30)";
  outerradius.style.background = "rgb(57,56,61)";
  outerradius.style.border = " 1px solid rgb(57,56,61)";
  searchbox.style.background = "rgb(28,28,30)";
  inp.style.color = "gray";
  nav.style.background = "rgb(36 36 36 / 44%)";
  heading.style.color = "white";
  container.style.background = "black";
  body.style.color = "white";
  for (let i = 0; i < whitebox.length; i++)
    whitebox[i].style.background = "rgb(28,28,30)";
}

function lightmode() {
  container = document.querySelector(".container");
  body = document.body;
  whitebox = document.getElementsByClassName("whitebox");
  heading.style.color = "black";
  container.style.background = "rgb(242, 241, 247)";
  body.style.color = "black";
  nav.style.background = "rgba(255, 255, 255, 0.439)";
  inp = document.querySelector(".inpsearch");
  searchbox = document.querySelector(".searchbox");
  outerradius = document.querySelector(".outerradius");
  inp.style.background = "rgb(227, 226, 232)";
  outerradius.style.background = "#e9e9ea";
  outerradius.style.border = " 1px solid #e9e9ea";
  searchbox.style.background = "rgb(227, 226, 232)";
  for (let i = 0; i < whitebox.length; i++)
    whitebox[i].style.background = "rgb(255, 255, 255)";
}
