let targetObj = {
  name: 'Reaper',
  health: 100,
  hits: 0,
  inventory: []
}
let items = {
  damageAmplification: { name: "Zenyatta's Discord Orb", modifier: 2, description: "Damage is amplified" },
  damageBoost: { name: "Ana's Nano Boost", modifier: 5, description: "Powered UP!" },
  shield: { name: "Reinhardt's Barrier Field", modifier: 3, description: "Get behind my shield" }
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