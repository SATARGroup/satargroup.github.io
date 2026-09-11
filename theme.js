const themeBtn = document.getElementById('themeBtn');
const siteLogo = document.getElementById('siteLogo');

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.add('light-theme'); // দুই ক্লাসই একসাথে দিয়ে নিশ্চিত করা হলো
        if (themeBtn) themeBtn.textContent = '🌙 Dark';
        if (siteLogo) siteLogo.src = 'lightlogo.png';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.remove('light-theme');
        if (themeBtn) themeBtn.textContent = '☀ Light';
        if (siteLogo) siteLogo.src = 'darklogo.png';
    }
}

// আগের সেভ করা থিম চেক
const currentTheme = localStorage.getItem('satar-theme') || 'dark';
applyTheme(currentTheme);

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-mode');
        const nextTheme = isLight ? 'dark' : 'light';
        applyTheme(nextTheme);
        localStorage.setItem('satar-theme', nextTheme);
    });
}
