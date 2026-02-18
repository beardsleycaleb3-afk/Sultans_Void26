async function loadProphecy() {
  const response = await fetch("assets/data/prophecy.json");
  const data = await response.json();
  return data.maps;
}

function showText(message: string) {
  const log = document.getElementById("battleLog");
  if (!log) return;
  log.textContent = message;
}

async function initSultan() {
  const maps = await loadProphecy();
  const firstMap = maps[0];

  // Show first map intro text in the battle log area
  showText(firstMap.start);

  // Set placeholder sprites for now
  const enemySprite = document.getElementById("enemySprite") as HTMLImageElement | null;
  if (enemySprite) {
    enemySprite.src = "assets/gfx/enemy/ee01_void_rat.png";
  }

  const playerSprite = document.getElementById("playerSprite") as HTMLImageElement | null;
  if (playerSprite) {
    playerSprite.src = "assets/gfx/rs/hero_idle_south.png";
  }

  // Show battle screen as our first test screen
  const title = document.getElementById("titleScreen");
  const battle = document.getElementById("battleScreen");
  if (title) title.style.display = "none";
  if (battle) battle.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
  initSultan();
});
