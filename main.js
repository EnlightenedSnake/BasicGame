//Naming Conventions: MP=Main Page, IP=Inventory Page, FP=Fight Page, Btn=Button, Img=Image, Ene=Enemy, Dsc=Description
const IPtoMPBtn = document.getElementById('returnMainPage'),
      MPtoIPBtn = document.getElementById('gotoInventory'),
      MPtoFPBtn = document.getElementById('fightButton'),
      FPtoMPBtn = document.getElementById('runButton'),
      MP = document.getElementById('mainPage'),
      FP = document.getElementById('fightPage'),
      IP = document.getElementById('inventoryPage'),
      incStatBtn = document.getElementsByClassName('incStat'),
      stats = document.getElementsByClassName('stat'),
      statPoints = document.getElementById('statPoints'),
      equippedImgs = document.getElementsByClassName('equippedSlot'),
      inventory = document.getElementsByClassName('inventorySpace'),
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
