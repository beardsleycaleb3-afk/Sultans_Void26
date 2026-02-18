export class MapRenderer {
    constructor(canvasContext) {
        this.ctx = canvasContext;
        this.tileSize = 32; // Standard tile size for mobile PWA
        this.tileCache = {};
    }

    // Loads the specific sprites for the current map (e.g., assets/sprites/map1/)
    async loadMapTiles(mapId) {
        const tilesToLoad = ['b', 'c', 'i', 'j', 'l', 'm', 'n', 'r', 's', 't', 'v', 'x'];
        for (const key of tilesToLoad) {
            const img = new Image();
            img.src = `assets/sprites/${mapId}/${key}.png`;
            await img.decode();
            this.tileCache[key] = img;
        }
    }

    // Draws the grid based on a simple array of letters
    render(mapLayout) {
        mapLayout.forEach((row, y) => {
            row.forEach((tileKey, x) => {
                const image = this.tileCache[tileKey];
                if (image) {
                    this.ctx.drawImage(
                        image, 
                        x * this.tileSize, 
                        y * this.tileSize, 
                        this.tileSize, 
                        this.tileSize
                    );
                }
            });
        });
    }
}
