const GLYPHS = {
    GROUND: "o00o",       // Mirror Kernel
    PLAYER: "0O0",        // Charged Balance
    GENESIS: "oO00oO1GlF+", 
    VOID: "...."
};

class SultanEngine {
    constructor() {
        this.view = document.getElementById('game-buffer');
        this.x = 5; this.y = 5; this.dim = 11;
        this.init();
    }
    init() {
        window.addEventListener('keydown', e => this.move(e.key));
        window.addEventListener('touchstart', e => {
            const t = e.touches[0];
            if (t.clientX < window.innerWidth/2) this.x--; else this.x++;
            this.render();
        });
        this.render();
    }
    move(key) {
        if (key === "ArrowLeft") this.x--; if (key === "ArrowRight") this.x++;
        if (key === "ArrowUp") this.y--; if (key === "ArrowDown") this.y++;
        this.render();
    }
    render() {
        let out = "";
        for (let i = 0; i < this.dim; i++) {
            let row = "";
            for (let j = 0; j < this.dim; j++) {
                row += (j === this.x && i === this.y) ? `<span class="player">${GLYPHS.PLAYER}</span>` : 
                       ((i + j) % 2 === 0 ? GLYPHS.GROUND : GLYPHS.VOID);
            }
            out += `<div>${row}</div>`;
        }
        this.view.innerHTML = out;
    }
}
new SultanEngine();
