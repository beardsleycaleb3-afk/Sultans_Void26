export class HeroController {
    constructor() {
        this.tileX = 0;
        this.tileY = 0;
        this.direction = 'south'; // Default idle state
        this.frame = 0;
        this.isMoving = false;
    }

    // Takes 'north', 'south', 'east', or 'west' from UIManager
    move(dir) {
        if (this.isMoving) return;
        
        this.direction = dir;
        this.isMoving = true;

        // Update tile position
        if (dir === 'north') this.tileY--;
        if (dir === 'south') this.tileY++;
        if (dir === 'west') this.tileX--;
        if (dir === 'east') this.tileX++;

        // Reset movement lock after a short delay (animation time)
        setTimeout(() => {
            this.isMoving = false;
            // Check for story/battle triggers at the new X/Y
            window.game.checkTriggers(this.tileX, this.tileY);
        }, 200);
    }

    // Pulls the 0.png through 5.png frames you already have
    getSpritePath() {
        const state = this.isMoving ? 'walk' : 'idle';
        const frameNum = this.isMoving ? (Math.floor(Date.now() / 100) % 6) : 0;
        return `assets/sprites/hero/${state}/${this.direction}/${frameNum}.png`;
    }
}
