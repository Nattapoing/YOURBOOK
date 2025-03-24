document.addEventListener('DOMContentLoaded', function() {
    // Modal สำหรับนโยบาย
    const modal = document.getElementById("policyModal");
    if (modal) {
        const loginButtons = document.querySelectorAll(".btn"); // ทุกปุ่มล็อกอิน
        const closeButton = document.querySelector(".close-btn");
        const laterButton = document.querySelector(".later-btn");

        // ฟังก์ชันเปิด Modal
        function showModal() {
            modal.classList.add("show"); // เพิ่มคลาส show เพื่อแสดง Modal
        }

        // ฟังก์ชันเปิดโมดัล (สำหรับฟังก์ชัน onclick ในปุ่ม HTML)
        function openModal() {
            showModal();
        }

        // ฟังก์ชันปิด Modal
        function closeModal() {
            modal.classList.remove("show"); // ลบคลาส show เพื่อซ่อน Modal
        }

        // ฟังก์ชันเมื่อกดยอมรับนโยบาย
        function acceptPolicy() {
            // ปิดโมดัล
            closeModal();
            // เปลี่ยนหน้าไปยัง home.html
            window.location.href = "home.html";
        }

        // เพิ่ม Event ให้ปุ่มล็อกอินทุกปุ่มให้เปิด Modal
        loginButtons.forEach(button => {
            button.addEventListener("click", showModal);
        });

        // ปิด Modal เมื่อกดปุ่ม ❌ หรือ "ไว้ทีหลัง"
        if (closeButton) closeButton.addEventListener("click", closeModal);
        if (laterButton) laterButton.addEventListener("click", closeModal);

        // ปิด Modal เมื่อคลิกพื้นที่นอกกล่อง
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // ทำให้ acceptPolicy สามารถเข้าถึงได้จากภายนอก
        window.acceptPolicy = acceptPolicy;
        window.openModal = openModal;
    }

    // การนำทางระหว่างหน้าต่างๆ
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems) {
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
    }

    // การจัดการกับแท็บ
    const tabs = document.querySelectorAll('.tab');
    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // ตรวจสอบว่าคลิกที่แท็บ "กองหนังสือ" หรือไม่
                if (this.textContent.trim() === "กองหนังสือ") {
                    window.location.href = "filter.html";
                    return;
                }
                
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // สลับระหว่างชั้นหนังสือและกองหนังสือ
                // คุณอาจต้องใส่ลอจิกเพิ่มเติมที่นี่
            });
        });
    }

    // ปุ่มกรองหนังสือ
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            // เมื่อกดปุ่มกรอง ให้ไปที่หน้ากรองหนังสือ
            window.location.href = 'filter.html';
        });
    }

    // ตรวจสอบว่ามีตัวกรองที่เลือกไว้ใน localStorage หรือไม่
    const selectedFilter = localStorage.getItem('selectedFilter');
    const bookShelfTitle = document.querySelector('.book-shelf h2');
    if (selectedFilter && bookShelfTitle) {
        // แสดงตัวกรองที่เลือกในหน้าหลัก
        if (selectedFilter === 'หนังสือทั้งหมด') {
            bookShelfTitle.innerHTML = 'หนังสือทั้งหมดในชั้นหนังสือ <span class="count">(0 เล่ม)</span>';
        } else if (selectedFilter === 'อ่านล่าสุดใน 7 วัน') {
            bookShelfTitle.innerHTML = 'อ่านล่าสุดใน 7 วัน <span class="count">(0 เล่ม)</span>';
        }
        
        // ล้างตัวกรองหลังจากใช้งาน (ถ้าต้องการ)
        // localStorage.removeItem('selectedFilter');
    }

    // ส่วนของฟังก์ชันในหน้า filter.html
    // การจัดการกับตัวเลือกกรอง
    const filterItems = document.querySelectorAll('.filter-item');
    if (filterItems) {
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
    }

    // ปุ่ม '+ กองหนังสือ' และ 'แก้ไข' ในหน้า filter.html
    const addBtn = document.querySelector('.add-btn');
    const editBtn = document.querySelector('.edit-btn');

    if (addBtn) {
        addBtn.addEventListener('click', function() {
            // ใส่ลอจิกสำหรับการเพิ่มกองหนังสือใหม่
            alert('คุณกำลังเพิ่มกองหนังสือใหม่');
        });
    }

    if (editBtn) {
        editBtn.addEventListener('click', function() {
            // ใส่ลอจิกสำหรับการแก้ไขรายการ
            alert('คุณกำลังแก้ไขรายการ');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Modal สำหรับนโยบาย (คงเดิม)
    // ...

    // การจัดการกับแท็บ
    const tabs = document.querySelectorAll('.tab');
    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // ตรวจสอบข้อความในแท็บที่คลิก
                if (this.textContent.trim() === "ชั้นหนังสือ") {
                    window.location.href = "home.html";
                    return;
                } else if (this.textContent.trim() === "กองหนังสือ") {
                    window.location.href = "filter.html";
                    return;
                }
                
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // การนำทางระหว่างหน้าต่างๆ (คงเดิม)
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems) {
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
    }

    // โค้ดที่เหลือคงเดิม...
});

document.addEventListener('DOMContentLoaded', function() {
    // เลือกปุ่ม shop
    const shopButton = document.querySelector('.nav-item:nth-child(2)');
    
    // เพิ่ม event listener เมื่อคลิก
    shopButton.addEventListener('click', function() {
        window.location.href = 'bookstore.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // เลือกแท็บทั้งหมดในเมนูร้านหนังสือ
    const storeTabs = document.querySelectorAll('.store-tab');
    
    // เพิ่ม event listener สำหรับแต่ละแท็บ
    storeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // ลบ class active จากแท็บทั้งหมด
            storeTabs.forEach(t => t.classList.remove('active'));
            
            // เพิ่ม class active ให้กับแท็บที่คลิก
            this.classList.add('active');
        });
    });
    
    // ตั้งค่าเริ่มต้นให้แท็บแรกเป็น active
    if (storeTabs.length > 0) {
        storeTabs[0].classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // โค้ดอื่นๆ ที่คุณมีอยู่...

    // เพิ่ม event listener สำหรับการคลิกที่หนังสือ
    const bookItems = document.querySelectorAll('.book-card');
    bookItems.forEach(book => {
        book.addEventListener('click', function() {
            const bookTitle = this.querySelector('.book-title').textContent;
            const bookPrice = this.querySelector('.price-button').textContent;
            
            // เก็บข้อมูลหนังสือที่เลือกใน localStorage
            localStorage.setItem('selectedBook', bookTitle);
            localStorage.setItem('selectedBookPrice', bookPrice);
            
            // นำทางไปยังหน้ารายละเอียดหนังสือ
            // window.location.href = 'book-detail.html';
            
            // หรือเปิดหน้าต่างป็อปอัพแสดงรายละเอียด
            alert('คุณเลือกหนังสือ: ' + bookTitle + '\nราคา: ' + bookPrice);
        });
    });

    // เพิ่ม event listener สำหรับปุ่มราคา
    const priceButtons = document.querySelectorAll('.price-button');
    priceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // ป้องกันการทำงานซ้ำกับ event ของ book-card
            
            const bookTitle = this.closest('.book-card').querySelector('.book-title').textContent;
            const bookPrice = this.textContent;
            
            // เพิ่มหนังสือลงในตะกร้า
            addToCart(bookTitle, bookPrice);
            
            alert('เพิ่ม "' + bookTitle + '" ลงในตะกร้าแล้ว');
        });
    });

    function addToCart(title, price) {
        // รับข้อมูลตะกร้าปัจจุบัน (ถ้ามี)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // เพิ่มรายการใหม่
        cart.push({
            title: title,
            price: price,
            quantity: 1
        });
        
        // บันทึกกลับลงใน localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
// Wait for the DOM to be fully loaded
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation for the footer menu items
    setupNavigation();
    
    // Setup back button functionality
    setupBackButton();
});

function setupNavigation() {
    // Get all navigation items in the footer
    const navItems = document.querySelectorAll('.nav-item');
    
    // Add click event listeners to each nav item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add 'active' class to the clicked item
            this.classList.add('active');
            
            // Get the text content of the span element to determine which page to navigate to
            const pageName = this.querySelector('span').textContent.trim();
            
            // Navigate to the appropriate page based on the nav item clicked
            switch(pageName) {
                case 'ชั้นหนังสือ':
                    window.location.href = 'home.html';
                    break;
                case 'ร้านหนังสือ':
                    window.location.href = 'bookstore.html';
                    break;
                case 'ตะกร้า':
                    window.location.href = 'cart.html';
                    break;
                case 'ตั้งค่า':
                    window.location.href = 'setting.html';
                    break;
                default:
                    // Default case, stay on current page
                    break;
            }
        });
    });
}

function setupBackButton() {
    // Get back button if it exists on the page
    const backButton = document.querySelector('.back-button');
    
    // Add click event listener to the back button if it exists
    if (backButton) {
        backButton.addEventListener('click', function() {
            // Go back to the previous page in browser history
            window.history.back();
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
    
    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Store tabs functionality
    const storeTabs = document.querySelectorAll('.store-tab');
    if (storeTabs.length > 0) {
        storeTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                storeTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});// script.js

// สร้าง array สำหรับเก็บรายการสินค้าในตะกร้า
let cartItems = [];

// เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    // ตรวจสอบว่ามีข้อมูลตะกร้าที่บันทึกไว้ใน localStorage หรือไม่
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
    
    // ถ้าอยู่ในหน้า bookstore ให้เพิ่ม event listener กับปุ่มราคา
    if (document.querySelector('.bookstore-page')) {
        const priceButtons = document.querySelectorAll('.price-button');
        
        priceButtons.forEach(button => {
            button.addEventListener('click', function() {
                // หาข้อมูลหนังสือจาก DOM parent ของปุ่ม
                const bookCard = this.closest('.book-card');
                const bookTitle = bookCard.querySelector('.book-title').textContent;
                const bookPrice = this.textContent.replace('฿', '').trim();
                const bookImage = bookCard.querySelector('.book-image img').src;
                
                // เพิ่มหนังสือลงในตะกร้า
                addToCart(bookTitle, parseFloat(bookPrice), bookImage);
                
                // แสดงข้อความแจ้งเตือน
                alert(`เพิ่ม "${bookTitle}" ลงในตะกร้าแล้ว`);
            });
        });
    }
    
    // ถ้าอยู่ในหน้า cart ให้แสดงรายการสินค้าในตะกร้า
    if (document.querySelector('.cart-page')) {
        displayCart();
    }
});

// ฟังก์ชั่นเพิ่มสินค้าลงในตะกร้า
function addToCart(title, price, image) {
    // ตรวจสอบว่าสินค้านี้มีอยู่ในตะกร้าแล้วหรือไม่
    const existingItem = cartItems.find(item => item.title === title);
    
    if (existingItem) {
        // ถ้ามีอยู่แล้ว เพิ่มจำนวน
        existingItem.quantity += 1;
    } else {
        // ถ้ายังไม่มี เพิ่มรายการใหม่
        cartItems.push({
            title: title,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // บันทึกข้อมูลตะกร้าลงใน localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// ฟังก์ชั่นแสดงรายการสินค้าในตะกร้า
function displayCart() {
    const cartContainer = document.querySelector('main');
    
    // ถ้าไม่มีสินค้าในตะกร้า ให้แสดงตะกร้าว่าง
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <main class="empty-cart-container">
                <img src="images/cartoon.png" alt="ตะกร้าว่าง" class="cart-image">
                <div class="text-container">
                    <div class="empty-title">ยังไม่มีหนังสือในตะกร้า</div>
                    <div class="empty-subtitle">คุณสามารถเลือกหนังสือที่คุณต้องการได้จากหน้าร้าน</div>
                    <a href="bookstore.html" class="go-shopping">ไปหน้าร้าน</a>
                </div>
            </main>
        `;
        return;
    }
    
    // คำนวณราคารวม
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    
    // สร้าง HTML สำหรับรายการสินค้าในตะกร้า
    let cartItemsHTML = '';
    cartItems.forEach(item => {
        cartItemsHTML += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">฿ ${item.price}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-decrease" data-title="${item.title}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-increase" data-title="${item.title}">+</button>
                </div>
                <button class="remove-item" data-title="${item.title}">X</button>
            </div>
        `;
    });
    
    // แสดงรายการสินค้าและราคารวม
    cartContainer.innerHTML = `
        <div class="cart-items-container">
            <h2>รายการสินค้าในตะกร้า</h2>
            <div class="cart-items">
                ${cartItemsHTML}
            </div>
            <div class="cart-total">
                <div class="total-label">รวมทั้งสิ้น:</div>
                <div class="total-price">฿ ${totalPrice.toFixed(2)}</div>
            </div>
            <button class="checkout-button">ชำระเงิน</button>
        </div>
    `;
    
    // เพิ่ม event listener สำหรับปุ่มเพิ่ม/ลดจำนวน และลบสินค้า
    addCartEventListeners();
}

// เพิ่ม event listener สำหรับปุ่มในตะกร้า
function addCartEventListeners() {
    // ปุ่มเพิ่มจำนวน
    const increaseButtons = document.querySelectorAll('.quantity-increase');
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const item = cartItems.find(item => item.title === title);
            if (item) {
                item.quantity += 1;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                displayCart();
            }
        });
    });
    
    // ปุ่มลดจำนวน
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const item = cartItems.find(item => item.title === title);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                displayCart();
            }
        });
    });
    
    // ปุ่มลบสินค้า
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            cartItems = cartItems.filter(item => item.title !== title);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            displayCart();
        });
    });
    
    // ปุ่มชำระเงิน
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            alert('กำลังดำเนินการชำระเงิน...');
            // เพิ่มโค้ดสำหรับการชำระเงินตรงนี้
        });
    }
}
