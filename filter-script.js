document.addEventListener('DOMContentLoaded', function() {
    // เชื่อมโยงการนำทางระหว่างหน้าต่างๆ
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.querySelector('span').textContent;
            
            if (page === 'ชั้นหนังสือ') {
                window.location.href = 'home.html';
            } else if (page === 'ร้านหนังสือ') {
                // ส่งไปยังหน้าร้านหนังสือ (ถ้ามี)
                // window.location.href = 'shop.html';
            } else if (page === 'ตะกร้า') {
                // ส่งไปยังหน้าตะกร้า (ถ้ามี)
                // window.location.href = 'cart.html';
            } else if (page === 'ตั้งค่า') {
                // ส่งไปยังหน้าตั้งค่า (ถ้ามี)
                // window.location.href = 'settings.html';
            }
        });
    });

    // การจัดการกับแท็บ
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // สลับระหว่างชั้นหนังสือและกองหนังสือ
            // คุณอาจต้องใส่ลอจิกเพิ่มเติมที่นี่
        });
    });

    // การจัดการกับตัวเลือกกรอง
    const filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // ตั้งค่าตัวกรองที่เลือกและกลับไปที่หน้าหลัก
            const filterType = this.querySelector('.filter-text').textContent;
            
            // เก็บประเภทของตัวกรองใน localStorage
            localStorage.setItem('selectedFilter', filterType);
            
            // กลับไปที่หน้าหลัก
            window.location.href = 'home.html';
        });
    });

    // ปุ่ม '+ กองหนังสือ' และ 'แก้ไข'
    const addBtn = document.querySelector('.add-btn');
    const editBtn = document.querySelector('.edit-btn');

    addBtn.addEventListener('click', function() {
        // ใส่ลอจิกสำหรับการเพิ่มกองหนังสือใหม่
        alert('คุณกำลังเพิ่มกองหนังสือใหม่');
    });

    editBtn.addEventListener('click', function() {
        // ใส่ลอจิกสำหรับการแก้ไขรายการ
        alert('คุณกำลังแก้ไขรายการ');
    });
});