export const PlayerState = {
    // Core stats
    stats: {
        hp: 100,
        mp: 50,
        skillPoints: 0,
        level: 1
    },

    // Tracking the heavy story beats
    // Stores IDs of triggers already activated so they don't loop
    history: {
        completedEvents: [], 
        beastsDefeated: []
    },

    // Check if we've already experienced this story beat
    hasSeen(eventId) {
        return this.history.completedEvents.includes(eventId);
    },

    // Record the event and add the reward
    recordStoryEvent(eventId, spReward) {
        if (!this.hasSeen(eventId)) {
            this.history.completedEvents.push(eventId);
            this.stats.skillPoints += spReward;
            console.log(`Story Logged: ${eventId}. Current SP: ${this.stats.skillPoints}`);
        }
    },

    // Save/Load for PWA persistence
    saveProgress() {
        localStorage.setItem('sultans_void_save', JSON.stringify(this));
    }
};
