let health = 100;

function fusionCannons() {
  health = health - 1
  update();
}
function microMissles() {
  health = health - 5
  update();
}
function selfDestruct() {
  health = health - 10
  update();
}
function update() {
  let healthElem = document.getElementById('health');

  healthElem.innerText = health.toString();
}
update();