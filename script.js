const btnNo = document.getElementById("btnNo");
const btnYes = document.getElementById("btnYes");
const img = document.getElementById("img");
const accepted = document.getElementById("accepted");

btnNo.addEventListener("mouseenter", (e) => {
  const rand = Math.random() * 100;

  let top =
    e.y + rand > e.pageY ? (e.y - rand > 0 ? e.y - rand : e.y) : e.y + rand;
  let bottom =
    e.x + rand > e.pageX ? (e.x - rand > 0 ? e.x - rand : e.pageX) : e.x + rand;
  Object.assign(btnNo.style, {
    position: "absolute",
    top: top + "px",
    left: bottom + "px",
  });
});

btnNo.addEventListener("click", (e) => {
  img.src = "https://media1.giphy.com/media/6V2MqHAVpOlU57gFnL/giphy.gif?cid=ecf05e47vhjchibeziqdqkkc4jlz8gak6kvr69rv8k0yvqh8&ep=v1_gifs_related&rid=giphy.gif&ct=g"
});

btnYes.addEventListener("click", (e) => {
  accepted.style.display = "flex";
});
