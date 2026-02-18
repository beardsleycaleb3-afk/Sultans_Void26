import { AssetLoader } from './AssetLoader.js';
import { MainMenu } from './MainMenu.js';
import { PlayerState } from './PlayerState.js';
import { MapRenderer } from './MapRenderer.js';
import { HeroController } from './HeroController.js';
import { UIManager } from './UIManager.js';
import { TriggerSystem } from './TriggerSystem.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const loader = new AssetLoader();
const renderer = new MapRenderer(ctx);
const hero = new HeroController();

async function initGame() {
    // 1. Preload images (Void Rats, Hero walk cycles, etc.)
    await loader.preloadHero();
    
    // 2. Show the Main Menu (the main_menu.jpg)
    MainMenu.init(() => {
        startGameLoop();
    });
}

function startGameLoop() {
    // 3. Setup UI Buttons
    UIManager.init(
        (dir) => hero.move(dir), // Movement buttons
        () => TriggerSystem.checkTile('map1', hero.tileX, hero.tileY) // Action button
    );

    // 4. Run the render loop
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw map, then hero
        renderer.render(window.currentMapData); 
        // Logic for drawing hero sprite goes here...
        requestAnimationFrame(update);
    }
    update();
}

initGame();
