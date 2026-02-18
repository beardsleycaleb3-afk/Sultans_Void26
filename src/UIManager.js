export const UIManager = {
    init(onMove, onAction) {
        // Create the D-Pad and Action buttons for mobile
        const controls = document.createElement('div');
        controls.id = 'ui-controls';
        controls.innerHTML = `
            <div class="d-pad">
                <button id="btn-up">↑</button>
                <div class="middle-row">
                    <button id="btn-left">←</button>
                    <button id="btn-right">→</button>
                </div>
                <button id="btn-down">↓</button>
            </div>
            <button id="btn-action">ACTION / TALK</button>
        `;
        document.body.appendChild(controls);

        // Bind the clicks to the movement logic
        document.getElementById('btn-up').onclick = () => onMove('north');
        document.getElementById('btn-down').onclick = () => onMove('south');
        document.getElementById('btn-left').onclick = () => onMove('west');
        document.getElementById('btn-right').onclick = () => onMove('east');
        
        // Action button for story/chests/interactions
        document.getElementById('btn-action').onclick = () => onAction();
    },

    updateStats(hp, sp) {
        // Updates the HUD with your health and Skill Points
        console.log(`HUD Update - HP: ${hp} | SP: ${sp}`);
    }
};
