let targetObj = {
  name: 'Reaper',
  health: 100,
  hits: 0
}

function fusionCannons() {
  targetObj.health--
  targetObj.hits++
  update();
}
function microMissles() {
  targetObj.health -= 5
  targetObj.hits++
  update();
}
function selfDestruct() {
  targetObj.health -= 10
  targetObj.hits++
  update();
}
function update() {
  let healthElem = document.getElementById('health');
  let targetElem = document.getElementById('targetName');
  let hitsElem = document.getElementById('hits');

  healthElem.innerText = targetObj.health.toString();
  targetElem.innerText = targetObj.name;
  hitsElem.innerText = targetObj.hits.toString();
}
update();