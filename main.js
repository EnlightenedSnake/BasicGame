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
      FPEneHealthBar = document.getElementById('fightPageEnemyHealthBar'),
      FPEneHealth = document.getElementById('fightPageEnemyHealth'),
      FPEneImg = document.getElementById('fightPageEnemyImage'),
      FPHeroHealth = document.getElementById('fightPageHeroHealth'),
      FPHeroHealthBar = document.getElementById('fightPageHeroHealthBar'),
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


function showItem(i){
	if (i<10) {
  	if (i>heroArmorInven.length) {
    	return;
    } else {
      itemDesImg.src = heroArmorInven[i].img;
      itemDes = heroArmorInven[i].name;
    }
  }else if(i < 20){
    if (i>heroWeaponInven.length) {
    	return;
    } else {
      itemDesImg.src = heroWeaponInven[i].img;
      itemDes = heroWeaponInven[i].name;
    }
  }else if(i < 30){
    if (i>heroHealInven.length) {
    	return;
    } else {
      itemDesImg.src = heroHealInven[i].img;
      itemDes = heroHealInven[i].name;
    }
  } else {
    if (heroEquipment[i] == "none"){
    	return; 
    } else {
    	itemDesImg.src = heroEquipment[i].img;
      itemDes = heroEquipment[i].name;
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
}
FPtoMPBtn.onclick = () => {
    FP.style.display = "none";
    MP.style.display = "flex";
}
openSPUBtn.onclick = () => {
    SPU.style.display = "flex";
}
closeSPUBtn.onclick = () => {
    SPU.style.display = "none";
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
