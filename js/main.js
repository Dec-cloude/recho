function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false });
    document.getElementById('time').textContent = timeStr;
}
updateTime();
setInterval(updateTime, 60000);

const apps = document.querySelectorAll('.app, .dock-item');
const pages = {
    chat: document.getElementById('chatPage'),
    music: document.getElementById('musicPage'),
    setting: document.getElementById('settingPage')
};
const homeScreen = document.getElementById('homeScreen');
const backBtns = document.querySelectorAll('.back-btn');

apps.forEach(app => {
    app.addEventListener('click', () => {
        const appType = app.dataset.app;
        homeScreen.style.display = 'none';
        pages[appType].style.display = 'block';
    });
});

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        Object.values(pages).forEach(p => p.style.display = 'none');
        homeScreen.style.display = 'flex';
    });
});
