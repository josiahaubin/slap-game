let health = 100;

function slap() {
  health = health - 1
  update();
}
function update() {
  let healthElem = document.getElementById('health');

  healthElem.innerText = health.toString();
}
update();