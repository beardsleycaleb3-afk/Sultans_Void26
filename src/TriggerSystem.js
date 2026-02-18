export const TriggerSystem = {
    // This looks at the specific map you're on (map1, map2, etc.)
    checkTile(mapId, x, y) {
        const event = this.getEventAt(mapId, x, y);

        if (event) {
            if (event.type === 'battle') {
                return this.startBattle(event.enemyId);
            } 
            if (event.type === 'story') {
                return this.triggerStory(event.text, event.skillPoints);
            }
        }
    },

    triggerStory(text, sp) {
        console.log(`Story: ${text}`);
        // Reward for stepping here
        return {
            display: text,
            reward: sp // Adds skill points directly
        };
    }
};
