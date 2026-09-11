const themeBtn = document.getElementById('themeBtn');

// ব্রাউজারে আগে কোনো থিম সেভ করা আছে কি না চেক
const savedTheme = localStorage.getItem('satar-theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeBtn) themeBtn.textContent = '🌙 Dark';
} else {
    if (themeBtn) themeBtn.textContent = '☀ Light';
}

// বাটনে ক্লিক করলে ডার্ক ও লাইট টগল হবে
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            themeBtn.textContent = '🌙 Dark';
            localStorage.setItem('satar-theme', 'light');
        } else {
            themeBtn.textContent = '☀ Light';
            localStorage.setItem('satar-theme', 'dark');
        }
    });
}