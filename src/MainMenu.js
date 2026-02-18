export const MainMenu = {
    init(onStart) {
        // Create a full-screen overlay for the menu
        const menuOverlay = document.createElement('div');
        menuOverlay.id = 'main-menu';
        menuOverlay.style.cssText = `
            position: absolute;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: url('assets/sprites/backgrounds/main_menu.jpg') no-repeat center center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;

        menuOverlay.innerHTML = `
            <h1 style="color: white; text-shadow: 2px 2px #000;">SULTANS VOID 26</h1>
            <button id="start-game" style="padding: 20px 40px; font-size: 24px; cursor: pointer;">
                ENTER THE VOID
            </button>
        `;

        document.body.appendChild(menuOverlay);

        document.getElementById('start-game').onclick = () => {
            menuOverlay.remove();
            onStart(); // This kicks off the world rendering
        };
    }
};
