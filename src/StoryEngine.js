export const StoryEngine = {
    activeStory: null,

    // Called by the TriggerSystem when a player steps on a story tile
    initiate(eventData) {
        this.activeStory = {
            text: eventData.text,
            spReward: eventData.skillPoints,
            isRead: false
        };
        this.display();
    },

    display() {
        // This is where your story UI pops up over the map
        console.log("--- NARRATIVE EVENT ---");
        console.log(this.activeStory.text);
        
        if (this.activeStory.spReward > 0) {
            console.log(`REWARD: +${this.activeStory.spReward} Skill Points granted.`);
            this.grantSP(this.activeStory.spReward);
        }
    },

    grantSP(points) {
        // Logic to update the player's total Skill Points
        window.playerState.skillPoints += points;
    },

    close() {
        this.activeStory = null;
        // Resume game movement
    }
};
