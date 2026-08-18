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
    battleLog = document.getElementById('battleLog');

  deleteMode = false;
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
  const flimsyLeatherBoots = new Equipment(
    'Leather Boots that are holding on by a thread, +1 defense',
    'Boots',
    1,
    'helmet.png',
    0,
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
  const firstEnemy = new Enemy('Weak', 5, 2, 0, 2, [flimsyLeatherBoots], [0.3], '');

  const enemyList = [firstEnemy];

  var heroMaxHealth = 10;
  var heroDamage = 2;
  var heroDefense = 0;
  var unspentStatPoints = 0;
  var heroLevel = 0;
  var heroXP = 0;
  var heroEquipment = ['none', 'none', 'none', 'none', 'none', 'none'];
  var heroArmorInven = [flimsyLeatherBoots];
  var heroWeaponInven = [];
  var heroHealInven = [];
  var currentStage = 0;
  var enemyCurrentHealth = 0;
  var heroCurrentHealth = 0;

  function updateInventory(rowNum) {
    if (rowNum == 1) {
      for (let i = 0; i < 10; ++i) {
        if (i < heroArmorInven.length) {
          inventory[i].src = heroArmorInven[i].src;
        } else {
          inventory[i].src = 'EmptyItemBox.png';
        }
      }
    } else if (rowNum == 2) {
      for (let i = 0; i < 10; ++i) {
        if (i < heroWeaponInven.length) {
          inventory[10 + i].src = heroWeaponInven[i].src;
        } else {
          inventory[10 + i].src = 'EmptyItemBox.png';
        }
      }
    } else if (rowNum == 3) {
      for (let i = 0; i < 10; ++i) {
        if (i < heroHealInven.length) {
          inventory[30 + i].src = heroHealInven[i].src;
          healInventory[i].src = heroHealInven[i].src;
        } else {
          inventory[30 + i].src = 'EmptyItemBox.png';
          healInventory[i].src = 'EmptyItemBox.png';
        }
      }
    } else if (rowNum == 4) {
      for (let i = 0; i < 6; ++i) {
        if (heroEquipment[i] != 'none') {
          equippedImgs[i].src = heroEquipment[i].src;
        } else {
          equippedImgs[i].src = 'EmptyItemBox.png';
        }
      }
    }
  }
  function updateStatsPopUp(){
  	 stats[0].innerText = "Health: " + heroMaxHealth;
     stats[1].innerText = "Damage: " + heroDamage;
     stats[2].innerText = "Defense: " + heroDefense;
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
      FPEneHealthBarCanvas.width,
      FPEneHealthBarCanvas.height,
      0.05 * FPEneHealthBarCanvas.width,
    );
    FPEneHealthBar.fill();
    FPEneHealthBar.closePath();
    FPEneHealthBar.beginPath();
    FPEneHealthBar.fillStyle = 'red';
    FPEneHealthBar.roundRect(
      0,
      0,
      (enemyCurrentHealth / enemyList[currentStage].health) * FPEneHealthBarCanvas.width,
      FPEneHealthBarCanvas.height,
      0.05 * FPEneHealthBarCanvas.width,
    );
    FPEneHealthBar.fill();
    FPEneHealthBar.closePath();
    FPHeroHealthBar.beginPath();
    FPHeroHealthBar.fillStyle = 'gray';
    FPHeroHealthBar.roundRect(
      0,
      0,
      FPHeroHealthBarCanvas.width,
      FPHeroHealthBarCanvas.height,
      0.05 * FPHeroHealthBarCanvas.width,
    );
    FPHeroHealthBar.fill();
    FPHeroHealthBar.closePath();
    FPHeroHealthBar.beginPath();
    FPHeroHealthBar.fillStyle = 'red';
    FPHeroHealthBar.roundRect(
      0,
      0,
      (heroCurrentHealth / heroMaxHealth) * FPHeroHealthBarCanvas.width,
      FPHeroHealthBarCanvas.height,
      0.05 * FPHeroHealthBarCanvas.width,
    );
    FPHeroHealthBar.fill();
    FPHeroHealthBar.closePath();
  }
  function startFightPage() {
    heroCurrentHealth = heroMaxHealth;
    enemyCurrentHealth = enemyList[currentStage].health;
    FPEneHealth.innerText = enemyCurrentHealth + '/' + enemyCurrentHealth + ' HP';
    FPHeroHealth.innerText = heroCurrentHealth + '/' + heroMaxHealth + 'HP';
    updateHealthBars();
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
        battleLog.innerText +=
          '\nHero has healed themselves for ' +
          (min(heroMaxHealth, heroCurrentHealth + heroHealInven[i - 36].effect) -
            heroCurrentHealth) +
          ' HP ' +
          '\n' +
          enemyList[currentStage].name +
          ' has dealt ' +
          enemyList[currentStage].damage +
          ' damage to Hero';
        heroCurrentHealth = min(heroMaxHealth, heroCurrentHealth + heroHealInven[i - 36].effect);
        heroCurrentHealth -= enemyList[currentStage].damage;
        heroHealInven.splice(i - 36, 1);
        updateInventory(3);
        battleLog.scrollTop = battleLog.scrollHeight;
        updateHealthBars();
        checkWinConditions();
      }
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
  }
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
    inventory[i].onmouseout = () => {
      if(itemDes.innerText != "No Item Selected"){
     		itemDesImg.src = "EmptyItemBox.png";
      	itemDes.innerText = "No Item Selected";
      }
    }
    inventory[i].onmouseover = () => {
      showItem(i);
    };
    inventory[i].onclick = () => {
      useItem(i); 
    }
  }
  for (let i = 0; i < 6; ++i) {
    equippedImgs[i].onmouseout = () => {
     	if(itemDes.innerText != "No Item Selected"){
     		itemDesImg.src = "EmptyItemBox.png";
      	itemDes.innerText = "No Item Selected";
      }
    }
    equippedImgs[i].onmouseover = () => {
      showItem(i + 30);
    };
    equippedImgs[i].onclick = () => {
      useItem(i + 30); 
    }
  }
  for (let i = 0; i < 10; ++i) {
    healInventory[i].onmouseout = () => {
      if(CPUDes.innerText != "No Item Selected"){
     		CPUDes.innerText = "No Item Selected";
      }
    }
    healInventory[i].onmouseover = () => {
      showItem(i + 36);
    };
    healInventory[i].onclick = () => {
      useItem(i + 36); 
    }
  }
