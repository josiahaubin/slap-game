let targetObj = {
  name: 'Reaper',
  health: 100,
  hits: 0,
  inventory: []
}
let items = {
  nanoBoost: { name: "Ana's Nano Boost", modifier: 5, description: "Powered Up!!" },
  repairPack: { name: "Brigitte's Repair Pack", modifier: -1, description: "Patching you up" },
  shield: { name: "Reinhardt's Barrier Field", modifier: -2, description: "Get behind my shield" }
}

//This function lets the user fire D.Va's fusion cannons, dealing 1 damage to reaper
function fusionCannons() {
  targetObj.health -= 2 + addMods();
  targetObj.hits++
  checkHealth(targetObj.health)
  update();
}

//This function lets the user fire D.Va's micro missiles, dealing 5 damage to reaper
function microMissles() {
  targetObj.health -= 5 + addMods();
  targetObj.hits++
  checkHealth(targetObj.health)
  update();
}

//This function lets the user perform D.Va's ultimate, dealing 10 damage to reaper
function selfDestruct() {
  targetObj.health -= 10 + addMods();
  targetObj.hits++
  checkHealth(targetObj.health)
  update();
}

//This function gives reaper damage reduction
function giveShield() {
  targetObj.inventory.push(items.shield);
}

//This function gives reaper damage amplification
function giveNanoBoost() {
  targetObj.inventory.push(items.nanoBoost);
}

//This function gives reaper damage reduction
function giveRepairPack() {
  targetObj.inventory.push(items.repairPack);
}

//This function removes items
function removeItems() {
  targetObj.inventory.pop();
}

//This function adds up the total damage reduction for reaper
function addMods() {
  let totalModifier = 0;

  for (let index = 0; index < targetObj.inventory.length; index++) {
    totalModifier = totalModifier + targetObj.inventory[index].modifier;
  }
  return totalModifier;
}

//This function allows the user to give the target player an item
function giveItem(itemSelected) {
  if (itemSelected == items.nanoBoost.name) {
    giveNanoBoost();
  } else if (itemSelected == items.repairPack.name) {
    giveRepairPack();
  } else {
    giveShield();
  }
}

//This function will check the targets health and if it is at zero it will tell the user that D.Va won
function checkHealth(targetHealth) {
  if (targetHealth <= 0) {
    alert("Elimination: D.Va wins!")
    replay();
  }
}

//This function sets the health and hits values back to the orginal settings
function replay() {
  targetObj.health = 100;
  targetObj.hits = 0;
  update();
}

//This function updates the screen
function update() {
  let healthElem = document.getElementById('health');
  let targetElem = document.getElementById('targetName');
  let hitsElem = document.getElementById('hits');

  healthElem.innerText = targetObj.health.toString();
  targetElem.innerText = targetObj.name;
  hitsElem.innerText = targetObj.hits.toString();
}
update();