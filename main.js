//Naming Conventions: MP=Main Page, IP=Inventory Page, FP=Fight Page, Btn=Button, Img=Image, Ene=Enemy, Dsc=Description
  const IPtoMPBtn = document.getElementById('returnMainPage'),
      MPtoIPBtn = document.getElementById('gotoInventory'),
      MPtoFPBtn = document.getElementById('fightButton'),
      FPtoMPBtn = document.getElementById('runButton'),
      MP = document.getElementById('mainPage'),
      FP = document.getElementById('fightPage'),
      IP = document.getElementById('inventoryPage'),
      SPU = document.getElementById('statsPopUp'),
  	  openSPUBtn = document.getElementById('statsButton'),
  	  closeSPUBtn = document.getElementById('exitStatsPopUpButton'),
      incStatBtn = document.getElementsByClassName('incStat'),
      stats = document.getElementsByClassName('stat'),
      statPoints = document.getElementById('statPoints'),
      equippedImgs = document.getElementsByClassName('equippedSlot'),
      itemDesImg = document.getElementById('largeItemImage'),
      itemDes = document.getElementById('itemDescription'),
      inventory = document.getElementsByClassName('inventorySlot'),
      saveBtn = document.getElementById('saveButton'),
      loadBtn = document.getElementById('loadButton'),
      MPEneDsc = document.getElementById('mainPageEnemyDescription'),
      MPEneImg = document.getElementById('mainPageEnemyImage'),
      incStageLvl = document.getElementById('increaseStageLevel'),
      decStageLvl = document.getElementById('decreaseStageLevel'),
      MPHeroTable = document.getElementById('mainPageHeroTable'),
      MPHeroXPBar = MPHeroTable.children[0].children[1].children[1].children[0].getContext("2d"),
      FPEneHealthBarCanvas = document.getElementById('fightPageEnemyHealthBar'),
      FPEneHealthBar = FPEneHealthBarCanvas.getContext("2d"),
      FPEneHealth = document.getElementById('fightPageEnemyHealth'),
      FPEneImg = document.getElementById('fightPageEnemyImage'),
      FPHeroHealth = document.getElementById('fightPageHeroHealth'),
      FPHeroHealthBarCanvas = document.getElementById('fightPageHeroHealthBar'),
      FPHeroHealthBar = FPHeroHealthBarCanvas.getContext("2d"),
      attackBtn = document.getElementById('attackButton'),
      itemsBtn = document.getElementById('itemsButton'),
      battleLog = document.getElementById('battleLog');

class Equipment {
  name = "Sword";
  type = "Helmet, Chestplate, Pants, Boots, Weapon, Shield, or Healing";
  effect = 0; //Effect = defense+, damage+, or healing amount
  image = "";
  constructor(nam, typ, eff, img){
    this.name = nam; 
    this.type = typ;
    this.effect = eff;
    this.image = img;
  }
}
const flimsyLeatherBoots = new Equipment("Leather Boots that are holding on by a thread, +1 defense", "Boots", 1, "");

const equipmentList = [flimsyLeatherBoots];
  
class Enemy {
  name = "Joe";
  health = 0;
  damage = 0;
  defense = 0;
  exp = 0;
  drops = [];
  probs = [];
  image = "";
  constructor(nam, hth, dmg, def, xp, drp, prb, img){
    this.name = nam;
    this.health = hth;
    this.damage = dmg;
    this.defense = def;
    this.exp = xp;
    this.drops = drp;
    this.probs = prb;
    this.image = img;
  }
}
const firstEnemy = new Enemy("Weak",5,2,0,2, [flimsyLeatherBoots],[0.3],"");

const enemyList = [firstEnemy];
  
var heroMaxHealth = 10;
var heroDamage = 2;
var heroDefense = 0;
var unspentStatPoints = 0;
var heroLevel = 0;
var heroXP = 0;
var heroEquipment = ["none","none","none","none","none","none"];
var heroArmorInven = [];
var heroWeaponInven = [];
var heroHealInven = [];
var currentStage = 0;
var enemyCurrentHealth = 0;
var heroCurrentHealth = 0;

function showItem(i){
	if (i<10) {
  	if (i>heroArmorInven.length) {
    	return;
    } else {
      itemDesImg.src = heroArmorInven[i].img;
      itemDes.innerText = heroArmorInven[i].name;
    }
  }else if(i < 20){
    if (i>heroWeaponInven.length) {
    	return;
    } else {
      itemDesImg.src = heroWeaponInven[i].img;
      itemDes.innerText = heroWeaponInven[i].name;
    }
  }else if(i < 30){
    if (i>heroHealInven.length) {
    	return;
    } else {
      itemDesImg.src = heroHealInven[i].img;
      itemDes.innerText = heroHealInven[i].name;
    }
  } else {
    if (heroEquipment[i] == "none"){
    	return; 
    } else {
    	itemDesImg.src = heroEquipment[i].img;
      itemDes.innerText = heroEquipment[i].name;
    }
  }
}
function updateHealthBars() {
  FPEneHealth.innerText = enemyCurrentHealth + "/" + enemyList[currentStage].health + " HP";
  FPHeroHealth.innerText = heroCurrentHealth + "/" + heroMaxHealth + "HP";
  FPEneHealthBar.reset();
  FPHeroHealthBar.reset();
  FPEneHealthBar.beginPath();
  FPEneHealthBar.fillStyle = "gray";  	
  FPEneHealthBar.roundRect(0,0,0.6*window.innerWidth,0.29*window.innerHeight,0.025*window.innerHeight);
  FPEneHealthBar.fill();
  FPEneHealthBar.closePath();
  FPEneHealthBar.beginPath();
  FPEneHealthBar.fillStyle = "red";
  FPEneHealthBar.roundRect(0,0.0,(enemyCurrentHealth/enemyList[currentStage].health)*0.6*window.innerWidth,0.29*window.innerHeight,0.025*window.innerHeight);
  FPEneHealthBar.fill();
  FPEneHealthBar.closePath();
  FPHeroHealthBar.beginPath();
  FPHeroHealthBar.fillStyle = "gray";  	
  FPHeroHealthBar.roundRect(0,0,0.6*window.innerWidth,0.29*window.innerHeight,0.025*window.innerHeight);
  FPHeroHealthBar.fill();
  FPHeroHealthBar.closePath();
  FPHeroHealthBar.beginPath();
  FPHeroHealthBar.fillStyle = "red";
  FPHeroHealthBar.roundRect(0,0,(heroCurrentHealth/heroMaxHealth)*0.6*window.innerWidth,0.29*window.innerHeight,0.025*window.innerHeight);
  FPHeroHealthBar.fill();
  FPHeroHealthBar.closePath();
}
function startFightPage() {
  heroCurrentHealth = heroMaxHealth;
  enemyCurrentHealth = enemyList[currentStage].health;
  FPEneHealth.innerText = enemyCurrentHealth + "/" + enemyCurrentHealth + " HP";
  FPHeroHealth.innerText = heroCurrentHealth + "/" + heroMaxHealth + "HP";
  FPEneHealthBar.beginPath();
  FPEneHealthBar.fillStyle = "gray";  	
  FPEneHealthBar.roundRect(0,0,0.6*window.innerWidth,0.29*window.innerHeight,0.025*window.innerHeight);
  FPEneHealthBar.fill();
  FPEneHealthBar.fillStyle = "red"; 	
  FPEneHealthBar.roundRect(0.025*window.innerWidth,0.025*window.innerHeight,0.55*window.innerWidth,0.24*window.innerHeight,0.025*window.innerHeight);
  FPEneHealthBar.fill();
  FPHeroHealthBar.beginPath();
  FPHeroHealthBar.fillStyle = "gray";
  FPHeroHealthBar.roundRect(0,0,0.6*window.innerWidth,0.29*window.innerHeight,0.025*window.innerHeight);
  FPHeroHealthBar.fill();
  FPHeroHealthBar.fillStyle = "red";
  FPHeroHealthBar.roundRect(0.025*window.innerWidth,0.025*window.innerHeight,0.55*window.innerWidth,0.24*window.innerHeight,0.025*window.innerHeight);
  FPHeroHealthBar.fill();
  
}
function checkWinConditions(){
	if(heroCurrentHealth == 0){
  	battleLog.innerText += "\nYou died, press any key to go to Main Page"
    document.onkeydown = () => {
    	FP.style.display = "none";
    	MP.style.display = "flex";
      battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
    }
  }
}

IPtoMPBtn.onclick = () => {
    IP.style.display = "none";
    MP.style.display = "flex";
}
MPtoIPBtn.onclick = () => {
    MP.style.display = "none";
    IP.style.display = "flex";
}
MPtoFPBtn.onclick = () => {
    MP.style.display = "none";
    FP.style.display = "flex";
	startFightPage();
}
FPtoMPBtn.onclick = () => {
    FP.style.display = "none";
    MP.style.display = "flex";
	battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
}
openSPUBtn.onclick = () => {
    SPU.style.display = "flex";
}
closeSPUBtn.onclick = () => {
    SPU.style.display = "none";
}
attackBtn.onclick = () => {
  if(enemyCurrentHealth <= 0 || heroCurrentHealth <= 0){
	FP.style.display = "none";
    MP.style.display = "flex";
    battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
  } else {
	enemyCurrentHealth -= heroDamage;
  	heroCurrentHealth -= enemyList[currentStage].damage;
  	battleLog.innerText += "\nHero has dealt " + heroDamage + " damage to " + enemyList[currentStage].name + "\n" + enemyList[currentStage].name + " has dealt " + enemyList[currentStage].damage + " damage to Hero"
  	updateHealthBars();
  	checkWinConditions();
  }
}
for (let i = 0; i < 30; ++i) {
  inventory[i].mouseover = () => {
  	showItem(i);
  };
}
for (let i = 0; i < 6; ++i) {
 	equippedImgs[i].mouseover = () => {
   	showItem(i+30); 
  }
}
