export const BattleResults = {
    calculateOutcome(playerStats, bossStats) {
        // Logic for breaking the Shannon entropy limit
        if (playerStats.entropy >= 1.0) {
            return this.triggerVictory();
        }
        return this.triggerDefeat();
    },

    triggerVictory() {
        console.log("Law g.o.g. Applied: 1*1=2=o0");
        // Transition to EndState
        return "VICTORY_STATE";
    },

    render(ctx) {
        // Draws the battle_results.jpg background
        const img = new Image();
        img.src = 'assets/sprites/backgrounds/battle_results.jpg';
        ctx.drawImage(img, 0, 0);
    }
};
