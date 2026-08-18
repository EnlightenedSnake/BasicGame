<style>
* {
margin: 0;
padding: 0;
font-size: min(4vw, 4vh);
}

body {
overflow: hidden;
}

#inventoryPage {
display: none;
flex-direction: row;
flex-wrap: wrap;
}

#returnMainPage {
display: inherit;
position: fixed;
}
#itemDescriptionSection {
display: inherit;
width: 50vw;
height: 60vh;
justify-content: center;
align-items: center;
background-color: #aaaaaa;
}
#largeItemImage {
display: inherit;
position: absolute;
width: 35vw;
height: 35vh;
object-fit: contain;
top: 5vh;
}
#equippedSection {
display: inherit;
width: 50vw;
height: 60vh;
justify-content: center;
align-items: center;
background-color: #888888;
}

.equippedSlot {
width: 3vw;
height: 3vh;
padding: 1.5vh 0vw 1.5vh 1vw;
object-fit: contain;
}

#itemDescriptionSection > p {
position: absolute;
width: 45vw;
height: 15vh;
top: 46vh;
overflow-wrap: break-word;
overflow-y: auto;
}
#inventorySection {
display: inherit;
width: 100vw;
height: 40vh;
justify-content: center;
align-items: center;
background-color: #626262;
}
#deleteModeButton {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 10vw;
height: 5vh;
bottom: 30vh;
right: 5vw;
font-size: min(3vw, 3vh);
}
#inventorySection > table {
border-collapse: collapse;
}
.inventorySlot {
width: 5vw;
height: 5vh;
object-fit: contain;
}

#mainPage {
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
align-items: end;
justify-content: center;
}

#gotoInventory {
display: inherit;
position: fixed;
top: 0;
left: 0;
width: 10vw;
height: 10vh;
background-color: white;
background-image: url(backpack.png);
background-size: contain;
background-repeat: no-repeat;
border-width: 0;
}

#saveButton {
position: fixed;
display: inherit;
width: 10vw;
top: 0;
right: 0;
justify-content: center;
}

#loadButton {
display: inherit;
position: fixed;
width: 10vw;
right: 0;
top: 5.5vh;
justify-content: center;
}
#statsButton {
display: inherit;
position: fixed;
top: 10vh;
left: 0;
width: 10vw;
height: 10vh;
background-color: white;
background-image: url(lvlbtn.png);
background-size: contain;
background-repeat: no-repeat;
border-width: 0;
}

#statsPopUp {
display: none;
position: fixed;
width: 50vw;
height: 60vh;
right: 25vw;
top: 20vh;
justify-content: center;
align-items: center;
background-color: #aaaaaa;
}

#exitStatsPopUpButton {
display: inherit;
position: absolute;
top: 0.2vh;
left: 0.2vw;
}
.stat {
padding: 2.5vh 0vw 2.5vh 5vw;
}

#mainPageEnemyDescription {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
text-align: center;
width: 40vw;
height: 30vh;
top: 0;
right: 30vw;
background-color: rgb(121, 120, 120);
}
#mainPageEnemyImage {
display: inherit;
position: absolute;
width: 30vw;
height: 30vh;
object-fit: contain;
right: 35vw;
top: 35vh;
}
#decreaseStageLevel {
display: none;
position: absolute;
justify-content: center;
align-items: center;
font-size: min(2.5vw, 2.5vh);
width: 15vw;
height: 10vh;
left: 5vw;
top: 45vh;
}
#increaseStageLevel {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
font-size: min(2.5vw, 2.5vh);
width: 15vw;
height: 10vh;
right: 5vw;
top: 45vh;
}
#fightButton {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 10vw;
height: 5vh;
right: 45vw;
bottom: 25vh;
}
#mainPageHeroDiv {
display: inherit;
width: 30vw;
height: 20vh;
justify-content: center;
align-items: center;
background-color: rgb(100, 102, 102);
}

#fightPage {
display: none;
flex-direction: row;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
}
#fightPageEnemyHealthBar {
display: inherit;
position: absolute;
width: 80vw;
height: 5vh;
right: 10vw;
top: 2vh;
}
#fightPageEnemyHealth {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 30vw;
height: 10vh;
right: 35vw;
top: 9vh;
background-color: red;
}
#fightPageEnemyImage {
display: inherit;
position: absolute;
width: 25vw;
height: 25vh;
object-fit: contain;
right: 37.5vw;
top: 22.5vh;
}
#fightPageHeroHealthBar {
display: inherit;
position: absolute;
width: 40vw;
height: 5vh;
right: 30vw;
bottom: 45vh;
}
#fightPageHeroHealth {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 20vw;
height: 8vh;
right: 40vw;
bottom: 36vh;
background-color: rgb(0, 63, 125);
}
#attackButton {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 15vw;
height: 10vh;
bottom: 25vh;
left: 20vw;
}
#itemsButton {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 15vw;
height: 10vh;
bottom: 25vh;
right: 42.5vw;
}
#runButton {
display: inherit;
position: absolute;
justify-content: center;
align-items: center;
width: 15vw;
height: 10vh;
bottom: 25vh;
right: 20vw;
}
#consumablesPopUp {
display: none;
position: absolute;
justify-content: center;
align-items: center;
width: 75vw;
height: 50vh;
right: 12.5vw;
top: 20vh;
background-color: rgb(132, 132, 132);
}
#closeConsumablesPopUpButton {
display: inherit;
position: absolute;
top: 0;
left: 0;
}
#consumablesPopUp > table {
position: absolute;
width: 70vw;
height: 10vh;
top: 8vh;
border-collapse: collapse;
}
.consumableSlot {
width: 6.5vw;
height: 6.5vh;
object-fit: contain;
}
#consumableItemDescription {
display: inherit;
position: absolute;
width: 68vw;
height: 23vh;
bottom: 5vh;
padding: 1vh 1vw 1vh 1vw;
background-color: rgb(96, 96, 96);
}
#battleLog {
display: inherit;
position: absolute;
width: 100vw;
height: 20vh;
bottom: 0;
overflow-wrap: break-word;
overflow-y: auto;
padding: 1.5vh 0vw 0vh 1.5vw;
border-top: 0.5vh dashed rgb(0, 0, 0);
background-color: rgb(102, 102, 102);
}
</style>
<div id="inventoryPage">
<button id="returnMainPage">X</button>
<div id="equippedSection">
<table>
  <tr>
	<td>Helmet:</td>
	<td>
	  <img src="" class="equippedSlot" />
	</td>
  </tr>
  <tr>
	<td>Chestplate:</td>
	<td>
	  <img src="" class="equippedSlot" />
	</td>
  </tr>
  <tr>
	<td>Pants:</td>
	<td>
	  <img src="" class="equippedSlot" />
	</td>
  </tr>
  <tr>
	<td>Boots:</td>
	<td>
	  <img src="" class="equippedSlot" />
	</td>
  </tr>
  <tr>
	<td>Weapon:</td>
	<td>
	  <img src="" class="equippedSlot" />
	</td>
  </tr>
  <tr>
	<td>Shield:</td>
	<td>
	  <img src="" class="equippedSlot" />
	</td>
  </tr>
</table>
</div>
<div id="itemDescriptionSection">
<img src="EmptyItemBox.png" id="largeItemImage" />
<p id="itemDescription">No Item Selected</p>
</div>
<div id="inventorySection">
<button id="deleteModeButton">Delete</button>
<table>
  <tr class="inventorySpace"></tr>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  <tr class="inventorySpace">
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  </tr>
  <tr class="inventorySpace">
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="inventorySlot" src="EmptyItemBox.png" /></td>
  </tr>
</table>
</div>
</div>
<div id="mainPage">
<button id="gotoInventory"></button>
<button id="saveButton">Save</button>
<button id="loadButton">Load</button>
<button id="statsButton"></button>
<p id="mainPageEnemyDescription">Weak Enemy<br />5 HP <br />Flimsy Leather Boots(30%)</p>
<img src=" " id="mainPageEnemyImage" />
<button id="decreaseStageLevel">Go Back<br />A Stage<br /></button>
<button id="increaseStageLevel">Go Foward<br />Req Level 5<br /></button>
<button id="fightButton">Fight</button>
<div id="mainPageHeroDiv">
<table id="mainPageHeroTable">
  <tr>
	<td>Health: 10/10</td>
	<td></td>
  </tr>
  <tr>
	<td>Level: 0</td>
	<td><canvas id="xpbar" width="10" height="8"></canvas></td>
  </tr>
</table>
</div>
<div id="statsPopUp">
<button id="exitStatsPopUpButton">X</button>
<table>
  <tr>
	<td>
	  <button class="incStat">+</button>
	</td>
	<td class="stat">Health: 10</td>
  </tr>
  <tr>
	<td>
	  <button class="incStat">+</button>
	</td>
	<td class="stat">Damage: 2</td>
  </tr>
  <tr>
	<td>
	  <button class="incStat">+</button>
	</td>
	<td class="stat">Defenese: 0</td>
  </tr>
  <tr>
	<td></td>
	<td id="statPoints">Stat Points: 0</td>
  </tr>
</table>
</div>
</div>
<div id="fightPage">
<canvas id="fightPageEnemyHealthBar"></canvas>
<p id="fightPageEnemyHealth">En. Health</p>
<img src=" " id="fightPageEnemyImage" />
<canvas id="fightPageHeroHealthBar"></canvas>
<p id="fightPageHeroHealth">Health</p>
<button id="attackButton">Attack</button>
<button id="itemsButton">Items</button>
<button id="runButton">Run</button>
<div id="consumablesPopUp">
<button id="closeConsumablesPopUpButton">X</button>
<table>
  <tr id="consumableItemsRow">
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
	<td><img data-id="" class="consumableSlot" src="EmptyItemBox.png" /></td>
  </tr>
</table>
<p id="consumableItemDescription">Description Here</p>
</div>
<p id="battleLog">It's time to d-d-d-d-d-duel</p>
</div>

<script>
//Naming Conventions: MP=Main Page, IP=Inventory Page, FP=Fight Page, Btn=Button, Img=Image, Ene=Enemy, Dsc=Description
const IPtoMPBtn = document.getElementById('returnMainPage'),
MPtoIPBtn = document.getElementById('gotoInventory'),
MPtoFPBtn = document.getElementById('fightButton'),
FPtoMPBtn = document.getElementById('runButton'),
MP = document.getElementById('mainPage'),
FP = document.getElementById('fightPage'),
IP = document.getElementById('inventoryPage'),
SPU = document.getElementById('statsPopUp'),
CPU = document.getElementById('consumablesPopUp'),
openSPUBtn = document.getElementById('statsButton'),
closeSPUBtn = document.getElementById('exitStatsPopUpButton'),
incStatBtn = document.getElementsByClassName('incStat'),
stats = document.getElementsByClassName('stat'),
statPoints = document.getElementById('statPoints'),
equippedImgs = document.getElementsByClassName('equippedSlot'),
itemDesImg = document.getElementById('largeItemImage'),
itemDes = document.getElementById('itemDescription'),
inventory = document.getElementsByClassName('inventorySlot'),
deleteModeBtn = document.getElementById('deleteModeButton'),
saveBtn = document.getElementById('saveButton'),
loadBtn = document.getElementById('loadButton'),
MPEneDsc = document.getElementById('mainPageEnemyDescription'),
MPEneImg = document.getElementById('mainPageEnemyImage'),
incStageLvl = document.getElementById('increaseStageLevel'),
decStageLvl = document.getElementById('decreaseStageLevel'),
MPHeroTable = document.getElementById('mainPageHeroTable'),
MPHeroXPBar = MPHeroTable.children[0].children[1].children[1].children[0].getContext('2d'),
FPEneHealthBarCanvas = document.getElementById('fightPageEnemyHealthBar'),
FPEneHealthBar = FPEneHealthBarCanvas.getContext('2d'),
FPEneHealth = document.getElementById('fightPageEnemyHealth'),
FPEneImg = document.getElementById('fightPageEnemyImage'),
FPHeroHealth = document.getElementById('fightPageHeroHealth'),
FPHeroHealthBarCanvas = document.getElementById('fightPageHeroHealthBar'),
FPHeroHealthBar = FPHeroHealthBarCanvas.getContext('2d'),
attackBtn = document.getElementById('attackButton'),
openCPUBtn = document.getElementById('itemsButton'),
closeCPUBtn = document.getElementById('closeConsumablesPopUpButton'),
healInventory = document.getElementsByClassName('consumableSlot'),
CPUDes = document.getElementById('consumableItemDescription'),
battleLog = document.getElementById('battleLog'),
htmlEle = document.getElementsByTagName("html")[0];

class Equipment {
name = 'Sword';
type = 'Helmet, Chestplate, Pants, Boots, Weapon, Shield, or Healing';
effect = 0; //Effect = defense+, damage+, or healing amount
image = '';
constructor(nam, typ, eff, img) {
  this.name = nam;
  this.type = typ;
  this.effect = eff;
  this.image = img;
}
}
const flimsyLeatherBoots = new Equipment(
'Leather Boots that are holding on by a thread, +1 defense',
'Boots',
1,
'',
);

const equipmentList = [flimsyLeatherBoots];

class Enemy {
name = 'Joe';
health = 0;
damage = 0;
defense = 0;
exp = 0;
drops = [];
probs = [];
image = '';
constructor(nam, hth, dmg, def, xp, drp, prb, img) {
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
const firstEnemy = new Enemy('Weak', 5, 2, 0, 2, [flimsyLeatherBoots], [0.3], '');

const enemyList = [firstEnemy];

var heroMaxHealth = 10;
var heroDamage = 2;
var heroDefense = 0;
var unspentStatPoints = 0;
var heroLevel = 0;
var heroXP = 0;
var heroEquipment = ['none', 'none', 'none', 'none', 'none', 'none'];
var heroArmorInven = [];
var heroWeaponInven = [];
var heroHealInven = [];
var currentStage = 0;
var enemyCurrentHealth = 0;
var heroCurrentHealth = 0;

function showItem(i) {
if (i < 10) {
  if (i > heroArmorInven.length) {
	return;
  } else {
	itemDesImg.src = heroArmorInven[i].img;
	itemDes.innerText = heroArmorInven[i].name;
  }
} else if (i < 20) {
  if (i - 10 > heroWeaponInven.length) {
	return;
  } else {
	itemDesImg.src = heroWeaponInven[i - 10].img;
	itemDes.innerText = heroWeaponInven[i - 10].name;
  }
} else if (i < 30) {
  if (i - 20 > heroHealInven.length) {
	return;
  } else {
	itemDesImg.src = heroHealInven[i - 20].img;
	itemDes.innerText = heroHealInven[i - 20].name;
  }
} else if (i < 36) {
  if (heroEquipment[i - 30] == 'none') {
	return;
  } else {
	itemDesImg.src = heroEquipment[i - 30].img;
	itemDes.innerText = heroEquipment[i - 30].name;
  }
} else {
  if (i - 36 > heroHealInven.length) {
	return;
  } else {
	CPUDes.innerText = heroHealInven[i - 20].name;
  }
}
}
function updateHealthBars() {
FPEneHealth.innerText =
  Math.max(0, enemyCurrentHealth) + '/' + enemyList[currentStage].health + ' HP';
FPHeroHealth.innerText = Math.max(0, heroCurrentHealth) + '/' + heroMaxHealth + 'HP';
FPEneHealthBar.reset();
FPHeroHealthBar.reset();
FPEneHealthBar.beginPath();
FPEneHealthBar.fillStyle = 'gray';
FPEneHealthBar.roundRect(
  0,
  0,
  0.6 * htmlEle.clientWidth,
  0.29 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPEneHealthBar.fill();
FPEneHealthBar.closePath();
FPEneHealthBar.beginPath();
FPEneHealthBar.fillStyle = 'red';
FPEneHealthBar.roundRect(
  0,
  0.0,
  (enemyCurrentHealth / enemyList[currentStage].health) * 0.6 * htmlEle.clientWidth,
  0.29 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPEneHealthBar.fill();
FPEneHealthBar.closePath();
FPHeroHealthBar.beginPath();
FPHeroHealthBar.fillStyle = 'gray';
FPHeroHealthBar.roundRect(
  0,
  0,
  0.6 * htmlEle.clientWidth,
  0.29 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPHeroHealthBar.fill();
FPHeroHealthBar.closePath();
FPHeroHealthBar.beginPath();
FPHeroHealthBar.fillStyle = 'red';
FPHeroHealthBar.roundRect(
  0,
  0,
  (heroCurrentHealth / heroMaxHealth) * 0.6 * htmlEle.clientWidth,
  0.29 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPHeroHealthBar.fill();
FPHeroHealthBar.closePath();
}
function startFightPage() {
heroCurrentHealth = heroMaxHealth;
enemyCurrentHealth = enemyList[currentStage].health;
FPEneHealth.innerText = enemyCurrentHealth + '/' + enemyCurrentHealth + ' HP';
FPHeroHealth.innerText = heroCurrentHealth + '/' + heroMaxHealth + 'HP';
FPEneHealthBar.beginPath();
FPEneHealthBar.fillStyle = 'gray';
FPEneHealthBar.roundRect(
  0,
  0,
  0.6 * htmlEle.clientWidth,
  0.29 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPEneHealthBar.fill();
FPEneHealthBar.fillStyle = 'red';
FPEneHealthBar.roundRect(
  0.025 * htmlEle.clientWidth,
  0.025 * htmlEle.clientHeight,
  0.55 * htmlEle.clientWidth,
  0.24 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPEneHealthBar.fill();
FPHeroHealthBar.beginPath();
FPHeroHealthBar.fillStyle = 'gray';
FPHeroHealthBar.roundRect(
  0,
  0,
  0.6 * htmlEle.clientWidth,
  0.29 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPHeroHealthBar.fill();
FPHeroHealthBar.fillStyle = 'red';
FPHeroHealthBar.roundRect(
  0.025 * htmlEle.clientWidth,
  0.025 * htmlEle.clientHeight,
  0.55 * htmlEle.clientWidth,
  0.24 * htmlEle.clientHeight,
  0.025 * htmlEle.clientHeight,
);
FPHeroHealthBar.fill();
}
function checkWinConditions() {
if (heroCurrentHealth == 0) {
  battleLog.innerText += '\nYou died, press any key to go to Main Page';
  battleLog.scrollTop = battleLog.scrollHeight;
  document.onkeydown = () => {
	FP.style.display = 'none';
	MP.style.display = 'flex';
	battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
  };
}
}

IPtoMPBtn.onclick = () => {
IP.style.display = 'none';
MP.style.display = 'flex';
};
MPtoIPBtn.onclick = () => {
MP.style.display = 'none';
IP.style.display = 'flex';
};
MPtoFPBtn.onclick = () => {
MP.style.display = 'none';
FP.style.display = 'flex';
startFightPage();
};
FPtoMPBtn.onclick = () => {
FP.style.display = 'none';
MP.style.display = 'flex';
battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
};
openSPUBtn.onclick = () => {
SPU.style.display = 'flex';
};
closeSPUBtn.onclick = () => {
SPU.style.display = 'none';
};
openCPUBtn.onclick = () => {
CPU.style.display = 'flex';
};
closeCPUBtn.onclick = () => {
CPU.style.display = 'none';
};
attackBtn.onclick = () => {
if (enemyCurrentHealth <= 0 || heroCurrentHealth <= 0) {
  FP.style.display = 'none';
  MP.style.display = 'flex';
  battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
} else {
  enemyCurrentHealth -= heroDamage;
  heroCurrentHealth -= enemyList[currentStage].damage;
  battleLog.innerText +=
	'\nHero has dealt ' +
	heroDamage +
	' damage to ' +
	enemyList[currentStage].name +
	'\n' +
	enemyList[currentStage].name +
	' has dealt ' +
	enemyList[currentStage].damage +
	' damage to Hero';
  battleLog.scrollTop = battleLog.scrollHeight;
  updateHealthBars();
  checkWinConditions();
}
};
for (let i = 0; i < 30; ++i) {
inventory[i].mouseover = () => {
  showItem(i);
};
}
for (let i = 0; i < 6; ++i) {
equippedImgs[i].mouseover = () => {
  showItem(i + 30);
};
}
for (let i = 0; i < 10; ++i) {
healInventory[i].mouseover = () => {
  showItem(i + 36);
};
}
</script>
