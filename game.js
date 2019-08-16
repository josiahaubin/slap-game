let targetObj = {
  name: 'Reaper',
  health: 100,
  hits: 0,
  inventory: []
}
let items = {
  nanoBoost: { name: "Ana's Nano Boost", modifier: 5, description: "Powered Up!!" },
  repairPack: { name: "Brigitte's Repair Pack", modifier: -1, description: "Patching you up" },
  shield: { name: "Reinhardt's Barrier Field", modifier: -5, description: "Get behind my shield" }
}

//This function lets the user fire D.Va's fusion cannons, dealing 1 damage to reaper
function fusionCannons() {
  targetObj.health -= 1 + addMods();
  targetObj.hits++
  update();
}

//This function lets the user fire D.Va's micro missiles, dealing 5 damage to reaper
function microMissles() {
  targetObj.health -= 5 + addMods();
  targetObj.hits++
  update();
}

//This function lets the user perform D.Va's ultimate, dealing 10 damage to reaper
function selfDestruct() {
  targetObj.health -= 10 + addMods();
  targetObj.hits++
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