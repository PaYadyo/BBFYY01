export function themeconfig() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savetheme = localStorage.getItem('theme');
        
    if (savetheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️'; 
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
            
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️'; 
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙'; 
            localStorage.setItem('theme', 'light');
        }
    });
}

export function setting() {
    const settingtooglebtn = document.getElementById('setting-toggle');
    const settingmenu = document.getElementById('setting-menu');

    if (!settingtooglebtn || !settingmenu) return;

    settingtooglebtn.addEventListener('click', () => {
        settingmenu.classList.toggle('show');
    });
}