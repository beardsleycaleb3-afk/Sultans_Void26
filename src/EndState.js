export const EndState = {
    title: "The Shannon Limit Broken",
    law: "g.o.g.",
    result: "1*1=2=o0",
    
    init() {
        console.log("Terminal State Reached: The Void is Sealed.");
        this.renderCredits();
    },

    renderCredits() {
        // Logic to scroll the names of the defeated Sultans
        // and display the final G.O.G. Law text.
    },

    reset() {
        // Backwards to the title screen
        window.location.reload();
    }
};
