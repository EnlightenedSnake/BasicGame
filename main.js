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
	MPBackgroundImg = document.getElementById('backgroundImage'),
    saveBtn = document.getElementById('saveButton'),
    loadBtn = document.getElementById('loadButton'),
    MPEneDsc = document.getElementById('mainPageEnemyDescription'),
    MPEneImg = document.getElementById('mainPageEnemyImage'),
    incStageLvlBtn = document.getElementById('increaseStageLevel'),
    decStageLvlBtn = document.getElementById('decreaseStageLevel'),
    MPHeroTable = document.getElementById('mainPageHeroTable'),
    MPHeroXPBarCanvas = document.getElementById('XPBar'),
    MPHeroXPBar = MPHeroXPBarCanvas.getContext('2d'),
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
    CPUDsc = document.getElementById('consumableItemDescription'),
    battleLog = document.getElementById('battleLog');

  class Equipment {
    name = 'Sword';
    type = 'Helmet, Chestplate, Pants, Boots, Weapon, Shield, or Healing';
    effect = 0; //Effect = defense+, damage+, or healing amount
    src = '';
    indexNum;
    constructor(nam, typ, eff, img, indexNumber) {
      this.name = nam;
      this.type = typ;
      this.effect = eff;
      this.src = img;
      this.indexNum = indexNumber;
    }
  }
  const flimsyLeatherBoots = new Equipment('Leather Boots that are holding on by a thread, +1 defense', 'Boots', 1, '', 0);

  class Enemy {
    name = '';
    health = 0;
    damage = 0;
    defense = 0;
    exp = 0;
    drops = [];
    probs = [];
    src = '';
    constructor(nam, hth, dmg, def, xp, drp, prb, img) {
      this.name = nam;
      this.health = hth;
      this.damage = dmg;
      this.defense = def;
      this.exp = xp;
      this.drops = drp;
      this.probs = prb;
      this.src = img;
    }
  }
  const firstEnemy = new Enemy('Enraged Earthworm', 5, 2, 0, 2, [flimsyLeatherBoots], [0.3], 'imageFolder/WormBoss.png');
  const secondEnemy = new Enemy('Lost Chicken', 10, 4, 1, 5, [], [], 'imageFolder/chickenMonster.png');

  const equipmentList = [flimsyLeatherBoots];
  const enemyList = [firstEnemy, secondEnemy];
  const stageLvlReq = [5, 8];
  const stageBackgrounds = ['imageFolder/background1.png','imageFolder/background2.png'];
							
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
  var deleteMode = false;

  function updateInventory(rowNum) {
    if (rowNum == 1) {
      for (let i = 0; i < 10; ++i) {
        if (i < heroArmorInven.length) {
          inventory[i].src = heroArmorInven[i].src;
        } else {
          inventory[i].src = 'imageFolder/EmptyItemBox.png';
        }
      }
    } else if (rowNum == 2) {
      for (let i = 0; i < 10; ++i) {
        if (i < heroWeaponInven.length) {
          inventory[10 + i].src = heroWeaponInven[i].src;
        } else {
          inventory[10 + i].src = 'imageFolder/EmptyItemBox.png';
        }
      }
    } else if (rowNum == 3) {
      for (let i = 0; i < 10; ++i) {
        if (i < heroHealInven.length) {
          inventory[20 + i].src = heroHealInven[i].src;
          healInventory[i].src = heroHealInven[i].src;
        } else {
          inventory[20 + i].src = 'imageFolder/EmptyItemBox.png';
          healInventory[i].src = 'imageFolder/EmptyItemBox.png';
        }
      }
    } else if (rowNum == 4) {
      for (let i = 0; i < 6; ++i) {
        if (heroEquipment[i] != 'none') {
          equippedImgs[i].src = heroEquipment[i].src;
        } else {
          equippedImgs[i].src = 'imageFolder/EmptyItemBox.png';
        }
      }
    }
  }
  function updateStatsPopUp(){
  	 stats[0].innerText = "Health: " + heroMaxHealth;
     stats[1].innerText = "Damage: " + heroDamage;
     stats[2].innerText = "Defense: " + heroDefense;
     statPoints.innerText = "Stat Points: " + unspentStatPoints;
  }
  function equipItem(rowNum, index) {
    if (rowNum == 1) {
      let j = ['Helmet', 'Chestplate', 'Pants', 'Boots'].indexOf(heroArmorInven[index].type);
      if (heroEquipment[j] == 'none') {
        heroEquipment[j] = heroArmorInven[index];
        heroDefense += heroEquipment[j].effect;
        heroArmorInven.splice(index, 1);
      } else {
        heroDefense -= heroEquipment[j].effect;
        heroDefense += heroArmorInven[index].effect;
        let temp = heroEquipment[j];
        heroEquipment[j] = heroArmorInven[index];
        heroArmorInven[index] = temp;
      }
    } else if (rowNum == 2) {
      let j = ['Weapon', 'Shield'].indexOf(heroWeaponInven[index].type);
      if (heroEquipment[j] == 'none') {
        heroEquipment[j] = heroWeaponInven[index];
        if (j == 0) {
          heroDamage += heroEquipment[j].effect;
        } else {
          heroDefense += heroEquipment[j].effect;
        }
        heroWeaponInven.splice(index, 1);
      } else {
        if (j == 0) {
          heroDamage -= heroEquipment[j].effect;
          heroDamage += heroWeaponInven[index].effect;
        } else {
          heroDefense -= heroEquipment[j].effect;
          heroDefense += heroWeaponInven[index].effect;
        }
        let temp = heroEquipment[j];
        heroEquipment[j] = heroWeaponInven[index];
        heroWeaponInven[index] = temp;
      }
    } else {
      if (index < 4) {
        if (heroArmorInven.length < 9) {
          heroDefense -= heroEquipment[index].effect;
          heroArmorInven.push(heroEquipment[index]);
          heroEquipment[index] = 'none';
          updateInventory(1);
        }
      } else {
        if (heroWeaponInven.length < 9) {
          if (index == 5) {
            heroDamage -= heroEquipment[index].effect;
          } else {
            heroDefense -= heroEquipment[index].effect;
          }
          heroWeaponInven.push(heroEquipment[index]);
          heroEquipment[index] = 'none';
          updateInventory(2);
        }
      }
    }
    updateStatsPopUp();
  }
  function showItem(i) {
    if (i < 10) {
      if (i < heroArmorInven.length) {
        itemDesImg.src = heroArmorInven[i].src;
        itemDes.innerText = heroArmorInven[i].name;
      }
    } else if (i < 20) {
      if (i - 10 < heroWeaponInven.length) {
        itemDesImg.src = heroWeaponInven[i - 10].src;
        itemDes.innerText = heroWeaponInven[i - 10].name;
      }
    } else if (i < 30) {
      if (i - 20 < heroHealInven.length) {
        itemDesImg.src = heroHealInven[i - 20].src;
        itemDes.innerText = heroHealInven[i - 20].name;
      }
    } else if (i < 36) {
      if (heroEquipment[i - 30] != 'none') {
        itemDesImg.src = heroEquipment[i - 30].src;
        itemDes.innerText = heroEquipment[i - 30].name;
      }
    } else {
      if (i - 36 < heroHealInven.length) {
        CPUDsc.innerText = heroHealInven[i - 36].name;
      }
    }
  }
  function updateHealthBars() {
    FPEneHealth.innerText = (Math.max(0, enemyCurrentHealth)).toFixed(2) + '/' + enemyList[currentStage].health + ' HP';
    FPHeroHealth.innerText = (Math.max(0, heroCurrentHealth)).toFixed(2) + '/' + heroMaxHealth + 'HP';
    FPEneHealthBar.reset();
    FPHeroHealthBar.reset();
    FPEneHealthBar.beginPath();
    FPEneHealthBar.fillStyle = 'gray';
    FPEneHealthBar.roundRect(0, 0, FPEneHealthBarCanvas.width, FPEneHealthBarCanvas.height, 0.05 * FPEneHealthBarCanvas.width);
    FPEneHealthBar.fill();
    FPEneHealthBar.closePath();
    FPEneHealthBar.beginPath();
    FPEneHealthBar.fillStyle = 'red';
    FPEneHealthBar.roundRect(0,0,(enemyCurrentHealth / enemyList[currentStage].health) * FPEneHealthBarCanvas.width, FPEneHealthBarCanvas.height, 0.05 * FPEneHealthBarCanvas.width);
    FPEneHealthBar.fill();
    FPEneHealthBar.closePath();
    FPHeroHealthBar.beginPath();
    FPHeroHealthBar.fillStyle = 'gray';
    FPHeroHealthBar.roundRect(0,0,FPHeroHealthBarCanvas.width,FPHeroHealthBarCanvas.height,0.05 * FPHeroHealthBarCanvas.width);
    FPHeroHealthBar.fill();
    FPHeroHealthBar.closePath();
    FPHeroHealthBar.beginPath();
    FPHeroHealthBar.fillStyle = 'red';
    FPHeroHealthBar.roundRect(0,0,(heroCurrentHealth / heroMaxHealth) * FPHeroHealthBarCanvas.width,FPHeroHealthBarCanvas.height,0.05 * FPHeroHealthBarCanvas.width);
    FPHeroHealthBar.fill();
    FPHeroHealthBar.closePath();
  }
  function updateXPBar() {
    MPHeroTable.children[0].children[1].children[0].innerText = "Level: " + heroLevel;
    MPHeroXPBar.reset();
    MPHeroXPBar.beginPath();
    MPHeroXPBar.fillStyle = 'black';
    MPHeroXPBar.roundRect(0,0,MPHeroXPBarCanvas.width,MPHeroXPBarCanvas.height,0.05 * MPHeroXPBarCanvas.width);
    MPHeroXPBar.fill();
    MPHeroXPBar.closePath();
    MPHeroXPBar.beginPath();
    MPHeroXPBar.fillStyle = 'blue';
    MPHeroXPBar.roundRect(0,0,(heroXP / (4*Math.pow(1.5,heroLevel))) * MPHeroXPBarCanvas.width,MPHeroXPBarCanvas.height,0.05 * MPHeroXPBarCanvas.width);
    MPHeroXPBar.fill();
    MPHeroXPBar.closePath();
  }
  function startFightPage() {
    heroCurrentHealth = heroMaxHealth;
    enemyCurrentHealth = enemyList[currentStage].health;
	FPEneImg.src = enemyList[currentStage].src;
    FPEneHealth.innerText = enemyCurrentHealth + '/' + enemyCurrentHealth + ' HP';
    FPHeroHealth.innerText = heroCurrentHealth + '/' + heroMaxHealth + 'HP';
    updateHealthBars();
  }
	function checkWinConditions() {
    if (heroCurrentHealth <= 0) {
      battleLog.innerText += '\nYou died, press any key to go to Main Page';
      battleLog.scrollTop = battleLog.scrollHeight;
      document.onkeydown = () => {
        FP.style.display = 'none';
        MP.style.display = 'flex';
        battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
      }
    } else if (enemyCurrentHealth <= 0){
    	battleLog.innerText += "\nYou have defeated " + enemyList[currentStage].name + " and have gained " + enemyList[currentStage].exp + " XP";
      heroXP += enemyList[currentStage].exp;
      let dropRandNum = Math.random();
      let dropCurrentChance = 0;
      for(let i = 0; i < enemyList[currentStage].drops.length; ++i){
      	dropCurrentChance += enemyList[currentStage].probs[i];
        if(dropRandNum <= dropCurrentChance){
          battleLog.innerText += " and have obtained the " + enemyList[currentStage].drops[i].name;
          if(enemyList[currentStage].drops[i].type == "Weapon" || enemyList[currentStage].drops[i].type == "Shield") {
           	if(heroWeaponInven.length < 9){
            	heroWeaponInven.push(enemyList[currentStage].drops[i]);
              updateInventory(2);
            } else {
            	battleLog.innerText += " but because of you full inventory row, it has been discarded";  
            }
          } else if(enemyList[currentStage].drops[i].type == "Healing") {
            	if(heroHealInven.length < 9){
            	heroHealInven.push(enemyList[currentStage].drops[i]);
              updateInventory(3);
            } else {
            	battleLog.innerText += " but because of you full inventory row, it has been discarded";  
            }
          } else {
            if(heroArmorInven.length < 9){
            	heroArmorInven.push(enemyList[currentStage].drops[i]);
              updateInventory(1);
            } else {
            	battleLog.innerText += " but because of you full inventory row, it has been discarded";  
            }
          }
          break;
        }
      }
      if(heroXP >= 4 * Math.pow(1.5,heroLevel)){
    		battleLog.innerText += "\nYou have leveled up!";
        heroXP -= 4 * Math.pow(1.5,heroLevel);
        heroLevel++;
        unspentStatPoints += 2;
      }
      updateXPBar();
      updateStatsPopUp();
      battleLog.scrollTop = battleLog.scrollHeight;
      document.onkeydown = () => {
        FP.style.display = 'none';
        MP.style.display = 'flex';
        battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
      }
    }
  }
  function useItem(i) {
    if (i < 10) {
      if (i < heroArmorInven.length) {
        if (deleteMode) {
          heroArmorInven.splice(i, 1);
        } else {
          equipItem(1, i);
          updateInventory(4);
        }
        updateInventory(1);
      }
    } else if (i < 20) {
      if (i - 10 < heroWeaponInven.length) {
        if (deleteMode) {
          heroWeaponInven.splice(i-10, 1);
        } else {
          equipItem(2, i-10);
          updateInventory(4);
        }
        updateInventory(2);
      }
    } else if (i < 30) {
      if (i - 20 < heroHealInven.length) {
        if (deleteMode) {
          heroArmorInven.splice(i-20, 1);
          updateInventory(3);
        }
      }
    } else if (i < 36) {
      if (heroEquipment[i - 30] != 'none') {
        equipItem(5, i-30);
        updateInventory(4);
      }
    } else {
      if (i - 36 < heroHealInven.length) {
        battleLog.innerText += '\nHero has healed themselves for ' + (Math.min(heroMaxHealth, heroCurrentHealth + heroHealInven[i - 36].effect) - heroCurrentHealth).toFixed(2) + ' HP ' + '\n' + enemyList[currentStage].name + ' has dealt ' + (enemyList[currentStage].damage*(2-(2/(1+Math.exp(-heroDefense/20))))).toFixed(2) + ' damage to Hero';
        heroCurrentHealth = Math.min(heroMaxHealth, heroCurrentHealth + heroHealInven[i - 36].effect);
        heroCurrentHealth -= enemyList[currentStage].damage*(2-(2/(1+Math.exp(-heroDefense/20))));
        heroHealInven.splice(i - 36, 1);
        updateInventory(3);
        battleLog.scrollTop = battleLog.scrollHeight;
        updateHealthBars();
        checkWinConditions();
      }
    }
  }
	function updateMainPage(){
	MPBackgroundImg.src = stageBackgrounds[currentStage];
  	MPEneImg.src = enemyList[currentStage].src;
    MPEneDsc.innerText = enemyList[currentStage].name + "\n" + enemyList[currentStage].health + " HP\n";
    for(let i = 0; i < enemyList[currentStage].drops.length; ++i){
    	MPEneDsc.innerText += enemyList[currentStage].drops[i].name.slice(0,enemyList[currentStage].drops[i].name.indexOf(",")) + "(" + (enemyList[currentStage].probs[i]*100) + "%)";
      if( i < enemyList[currentStage].drops.length-1){
      	MPEneDsc.innerText += ", "; 
      }
    }
    if(currentStage == 0){
    	decStageLvlBtn.style.display = "none"; 
    } else {
      decStageLvlBtn.style.display = "flex"; 
    }
    if(currentStage == stageLvlReq.length-1){
    	incStageLvlBtn.style.display = "none";
    } else {
     	incStageLvlBtn.style.display = "flex";
      incStageLvlBtn.innerText = "Go Foward\nReq Level " + stageLvlReq[currentStage];
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
  deleteModeBtn.onclick = () => {
    deleteMode = !deleteMode;
    deleteModeBtn.style.fontWeight = "normal";
    if(deleteMode){
      deleteModeBtn.style.fontWeight = "bold";
    }
  };
  incStageLvlBtn.onclick = () => {
	if(heroLevel >= stageLvlReq[currentStage]){
	  	currentStage++;
	    updateMainPage();
	}
  };
  decStageLvlBtn.onclick = () => {
  	currentStage--;
    updateMainPage();
  };
  attackBtn.onclick = () => {
    if (enemyCurrentHealth <= 0 || heroCurrentHealth <= 0) {
      FP.style.display = 'none';
      MP.style.display = 'flex';
      battleLog.innerText = "It's time to d-d-d-d-d-d-duel";
    } else {
      enemyCurrentHealth -= heroDamage*(2-(2/(1+Math.exp(-enemyList[currentStage].defense/20))));
      heroCurrentHealth -= enemyList[currentStage].damage*(2-(2/(1+Math.exp(-heroDefense/20))));
      battleLog.innerText += '\nHero has dealt ' + (heroDamage*(2-(2/(1+Math.exp(-enemyList[currentStage].defense/20))))).toFixed(2) + ' damage to ' + enemyList[currentStage].name + '\n' + enemyList[currentStage].name + ' has dealt ' + (enemyList[currentStage].damage*(2-(2/(1+Math.exp(-heroDefense/20))))).toFixed(2) + ' damage to Hero';
      battleLog.scrollTop = battleLog.scrollHeight;
      updateHealthBars();
      checkWinConditions();
    }
  };
  saveBtn.onclick = () => {
    let temp = [heroMaxHealth,heroDamage,heroDefense,unspentStatPoints,heroLevel,heroXP];
    let tempEquip = [];
    let tempInventory = [[],[],[]];
    for(let i = 0; i < 6; ++i){
      if(heroEquipment[i] == "none"){
        tempEquip.push("none");
      } else {
        tempEquip.push(heroEquipment[i].indexNum);
      }
    }
    for(let i = 0; i < heroArmorInven.length; ++i){
    	tempInventory[0].push(heroArmorInven[i].indexNum);  
    }
    for(let i = 0; i < heroWeaponInven.length; ++i){
    	tempInventory[1].push(heroWeaponInven[i].indexNum); 
    }
    for(let i = 0; i < heroHealInven.length; ++i){
    	tempInventory[2].push(heroHealInven[i].indexNum); 
    }
    temp.push(tempEquip);
    temp.push(tempInventory);
    localStorage.setItem("storage",btoa(JSON.stringify(temp)));
  };
  loadBtn.onclick = () => {
    heroArmorInven = [];
    heroWeaponInven = [];
    heroHealInven = [];
    let temp = JSON.parse(atob(localStorage.getItem("storage")));
    heroMaxHealth = temp[0];
    heroDamage = temp[1];
    heroDefense = temp[2];
    unspentStatPoints = temp[3];
    heroLevel = temp[4];
    heroXP = temp[5];
    for(let i = 0; i < 6; ++i){
      if(temp[6][i] == "none"){
        heroEquipment[i] = "none";
      } else {
        heroEquipment[i] = equipmentList[temp[6][i]];
      }
    }
    for(let i = 0; i < temp[7][0].length; ++i){
    	heroArmorInven.push(equipmentList[temp[7][0][i]]);  
    }
    for(let i = 0; i < temp[7][1].length; ++i){
    	heroWeaponInven.push(equipmentList[temp[7][1][i]]); 
    }
    for(let i = 0; i < temp[7][2].length; ++i){
    	heroHealInven.push(equipmentList[temp[7][2][i]]); 
    }
    for(let i = 1; i < 5; ++i){
    	updateInventory(i);
    }
    updateStatsPopUp();
    updateXPBar();
    MPHeroTable.children[0].children[0].children[0].innerText = "Health: " + heroMaxHealth + "/" + heroMaxHealth;
  };
  for (let i = 0; i < 3; ++i) {
  	incStatBtn[i].onclick = () => {
    	if(unspentStatPoints > 0){
      	 if(i == 0){
           heroMaxHealth++;
           MPHeroTable.children[0].children[0].children[0].innerText = "Health: " + heroMaxHealth + "/" + heroMaxHealth;
         } else if (i == 1) {
           heroDamage++;
         } else {
           heroDefense++;
         }
        unspentStatPoints--;
      }
      updateStatsPopUp();
    };
  }
  for (let i = 0; i < 30; ++i) {
    inventory[i].onmouseout = () => {
      if(itemDes.innerText != "No Item Selected"){
     		itemDesImg.src = "imageFolder/EmptyItemBox.png";
      	itemDes.innerText = "No Item Selected";
      }
    };
    inventory[i].onmouseover = () => {
      showItem(i);
    };
    inventory[i].onclick = () => {
      useItem(i); 
    };
  }
  for (let i = 0; i < 6; ++i) {
    equippedImgs[i].onmouseout = () => {
     	if(itemDes.innerText != "No Item Selected"){
     		itemDesImg.src = "imageFolder/EmptyItemBox.png";
      	itemDes.innerText = "No Item Selected";
      }
    };
    equippedImgs[i].onmouseover = () => {
      showItem(i + 30);
    };
    equippedImgs[i].onclick = () => {
      useItem(i + 30); 
    };
  }
  for (let i = 0; i < 10; ++i) {
    healInventory[i].onmouseout = () => {
      if(CPUDsc.innerText != "No Item Selected"){
     		CPUDsc.innerText = "No Item Selected";
      }
    };
    healInventory[i].onmouseover = () => {
      showItem(i + 36);
    };
    healInventory[i].onclick = () => {
      useItem(i + 36); 
    };
  }
  
  //Starting functions
  updateXPBar();
