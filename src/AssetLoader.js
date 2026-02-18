export class AssetLoader {
    constructor() {
        this.cache = new Map();
        this.totalAssets = 0;
        this.loadedCount = 0;
    }

    // This handles all the hero directions you have: north, south, east, west
    async preloadHero() {
        const directions = ['north', 'south', 'east', 'west'];
        const types = ['walk', 'idle'];
        
        for (const type of types) {
            for (const dir of directions) {
                // You have 6 frames for walk (0-5) and at least 1 for idle
                const frameCount = type === 'walk' ? 6 : 1;
                for (let i = 0; i < frameCount; i++) {
                    const path = `assets/sprites/hero/${type}/${dir}/${i}.png`;
                    await this.loadImage(path);
                }
            }
        }
    }

    async loadImage(url) {
        if (this.cache.has(url)) return this.cache.get(url);
        
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.cache.set(url, img);
                this.loadedCount++;
                resolve(img);
            };
            img.src = url;
        });
    }

    getPercent() {
        return Math.floor((this.loadedCount / this.totalAssets) * 100);
    }
}
