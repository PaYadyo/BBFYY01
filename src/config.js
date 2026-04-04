export function themeconfig() {
    const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const savetheme = localStorage.getItem('mytheme');
        
        if (savetheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️'; d// เพิ่มบรรทัดนี้: ให้เปลี่ยนไอคอนเป็นพระอาทิตย์เลย
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
           
        themeToggle.addEventListener('click', () => {
            // สลับคลาส 'dark-mode' เข้า/ออก จากแท็ก body
            body.classList.toggle('dark-mode');
            
            // เปลี่ยนไอคอนปุ่มตามธีมปัจจุบัน
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️'; // ถ้าเป็นโหมดมืด ให้แสดงรูปพระอาทิตย์
                localStorage.setItem('mytheme', 'dark');
            } else {
                themeToggle.textContent = '🌙'; // ถ้าเป็นโหมดสว่าง ให้แสดงรูปพระจันทร์
                localStorage.setItem('mytheme', 'light');
            }
        });
}