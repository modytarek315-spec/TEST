// script.js

// Product Data
const productsData = {
    engine: [
        { id: 'e1', name: 'Engine Oil Filter', brand: 'Bosch', price: 12.99, emoji: '🔧', category: 'engine' },
        { id: 'e2', name: 'Air Filter', brand: 'ACDelco', price: 18.50, image: 'https://m.media-amazon.com/images/I/71SRS5E+NfL.jpg', category: 'engine' },
        { id: 'e3', name: 'Spark Plugs Set', brand: 'Denso', price: 24.99, emoji: '⚡', category: 'engine' },
        { id: 'e4', name: 'Timing Belt', brand: 'Bosch', price: 45.00, emoji: '🔧', category: 'engine' },
        { id: 'e5', name: 'Water Pump', brand: 'ACDelco', price: 65.00, emoji: '💧', category: 'engine' },
        { id: 'e6', name: 'Fuel Filter', brand: 'Denso', price: 15.99, emoji: '⛽', category: 'engine' },
        { id: 'e7', name: 'Alternator Belt', brand: 'Bosch', price: 22.50, emoji: '🔧', category: 'engine' },
        { id: 'e8', name: 'Thermostat', brand: 'ACDelco', price: 28.00, emoji: '🌡️', category: 'engine' },
        { id: 'e9', name: 'Engine Gasket Set', brand: 'Denso', price: 55.00, emoji: '🔧', category: 'engine' },
        { id: 'e10', name: 'Oxygen Sensor', brand: 'Bosch', price: 48.99, emoji: '📡', category: 'engine' }
    ],
    brakes: [
        { id: 'b1', name: 'Brake Pads Front', brand: 'Brembo', price: 45.00, emoji: '🛑', category: 'brakes' },
        { id: 'b2', name: 'Brake Pads Rear', brand: 'Wagner', price: 42.00, emoji: '🛑', category: 'brakes' },
        { id: 'b3', name: 'Brake Rotors Front', brand: 'Raybestos', price: 85.00, emoji: '⚙️', category: 'brakes' },
        { id: 'b4', name: 'Brake Rotors Rear', brand: 'Brembo', price: 80.00, emoji: '⚙️', category: 'brakes' },
        { id: 'b5', name: 'Brake Fluid DOT 4', brand: 'Wagner', price: 12.99, emoji: '🛢️', category: 'brakes' },
        { id: 'b6', name: 'Brake Caliper Front', brand: 'Raybestos', price: 95.00, emoji: '🔧', category: 'brakes' },
        { id: 'b7', name: 'Brake Caliper Rear', brand: 'Brembo', price: 90.00, emoji: '🔧', category: 'brakes' },
        { id: 'b8', name: 'Brake Lines Kit', brand: 'Wagner', price: 35.00, emoji: '🔗', category: 'brakes' },
        { id: 'b9', name: 'Parking Brake Cable', brand: 'Raybestos', price: 28.50, emoji: '🔗', category: 'brakes' },
        { id: 'b10', name: 'Brake Master Cylinder', brand: 'Brembo', price: 120.00, emoji: '🔧', category: 'brakes' }
    ],
    tires: [
        { id: 't1', name: 'All-Season Tire 205/55R16', brand: 'Michelin', price: 95.00, emoji: '🚗', category: 'tires' },
        { id: 't2', name: 'Performance Tire 225/45R17', brand: 'Goodyear', price: 125.00, emoji: '🏎️', category: 'tires' },
        { id: 't3', name: 'Winter Tire 195/65R15', brand: 'Bridgestone', price: 110.00, emoji: '❄️', category: 'tires' },
        { id: 't4', name: 'Alloy Wheel 16"', brand: 'Michelin', price: 150.00, emoji: '⚙️', category: 'tires' },
        { id: 't5', name: 'Alloy Wheel 17"', brand: 'Goodyear', price: 175.00, emoji: '⚙️', category: 'tires' },
        { id: 't6', name: 'Steel Wheel 15"', brand: 'Bridgestone', price: 85.00, emoji: '⚙️', category: 'tires' },
        { id: 't7', name: 'Tire Pressure Sensor', brand: 'Michelin', price: 45.00, emoji: '📡', category: 'tires' },
        { id: 't8', name: 'Wheel Hub Cap Set', brand: 'Goodyear', price: 35.00, emoji: '🔧', category: 'tires' },
        { id: 't9', name: 'Lug Nuts Set', brand: 'Bridgestone', price: 22.00, emoji: '🔩', category: 'tires' },
        { id: 't10', name: 'Valve Stems Kit', brand: 'Michelin', price: 15.00, emoji: '🔧', category: 'tires' }
    ],
    lights: [
        { id: 'l1', name: 'LED Headlight Bulbs', brand: 'Philips', price: 55.00, emoji: '💡', category: 'lights' },
        { id: 'l2', name: 'Halogen Headlight Bulbs', brand: 'Sylvania', price: 28.00, emoji: '💡', category: 'lights' },
        { id: 'l3', name: 'Tail Light Assembly', brand: 'Hella', price: 85.00, emoji: '🔴', category: 'lights' },
        { id: 'l4', name: 'Fog Light Kit', brand: 'Philips', price: 95.00, emoji: '🌫️', category: 'lights' },
        { id: 'l5', name: 'Turn Signal Bulbs', brand: 'Sylvania', price: 12.00, emoji: '🟡', category: 'lights' },
        { id: 'l6', name: 'Interior LED Kit', brand: 'Hella', price: 45.00, emoji: '💡', category: 'lights' },
        { id: 'l7', name: 'Battery 12V', brand: 'Philips', price: 120.00, emoji: '🔋', category: 'lights' },
        { id: 'l8', name: 'Alternator', brand: 'Sylvania', price: 185.00, emoji: '⚡', category: 'lights' },
        { id: 'l9', name: 'Starter Motor', brand: 'Hella', price: 165.00, emoji: '🔧', category: 'lights' },
        { id: 'l10', name: 'Fuse Box Kit', brand: 'Philips', price: 35.00, emoji: '⚡', category: 'lights' }
    ],
    fluids: [
        { id: 'f1', name: 'Engine Oil 5W-30 (5L)', brand: 'Mobil', price: 32.00, emoji: '🛢️', category: 'fluids' },
        { id: 'f2', name: 'Engine Oil 10W-40 (5L)', brand: 'Castrol', price: 35.00, emoji: '🛢️', category: 'fluids' },
        { id: 'f3', name: 'Transmission Fluid (4L)', brand: 'Valvoline', price: 45.00, emoji: '🛢️', category: 'fluids' },
        { id: 'f4', name: 'Coolant/Antifreeze (4L)', brand: 'Mobil', price: 22.00, emoji: '💧', category: 'fluids' },
        { id: 'f5', name: 'Power Steering Fluid (1L)', brand: 'Castrol', price: 15.00, emoji: '🛢️', category: 'fluids' },
        { id: 'f6', name: 'Brake Fluid DOT 4 (1L)', brand: 'Valvoline', price: 12.00, emoji: '🛢️', category: 'fluids' },
        { id: 'f7', name: 'Windshield Washer Fluid (4L)', brand: 'Mobil', price: 8.00, emoji: '💧', category: 'fluids' },
        { id: 'f8', name: 'Differential Oil (2L)', brand: 'Castrol', price: 28.00, emoji: '🛢️', category: 'fluids' },
        { id: 'f9', name: 'Fuel System Cleaner', brand: 'Valvoline', price: 18.00, emoji: '🧽', category: 'fluids' },
        { id: 'f10', name: 'Engine Flush', brand: 'Mobil', price: 16.00, emoji: '🧽', category: 'fluids' }
    ]
};

// Maintenance Data
const maintenanceData = [
    {
        km: 10000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' },
            { service: 'Visual Inspection', description: 'Check all fluid levels and belts' }
        ],
        parts: ['e1', 'f1']
    },
    {
        km: 20000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Air Filter Replacement', description: 'Install new air filter' },
            { service: 'Cabin Filter Replacement', description: 'Replace cabin air filter' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' },
            { service: 'Brake Inspection', description: 'Check brake pads and rotors' }
        ],
        parts: ['e1', 'e2', 'f1']
    },
    {
        km: 30000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Spark Plugs Replacement', description: 'Install new spark plugs' },
            { service: 'Fuel Filter Replacement', description: 'Replace fuel filter' },
            { service: 'Coolant Flush', description: 'Drain and refill coolant system' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e3', 'e6', 'f1', 'f4']
    },
    {
        km: 40000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Air Filter Replacement', description: 'Install new air filter' },
            { service: 'Transmission Fluid Check', description: 'Inspect transmission fluid level' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' },
            { service: 'Battery Test', description: 'Test battery condition' }
        ],
        parts: ['e1', 'e2', 'f1']
    },
    {
        km: 50000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Brake Fluid Replacement', description: 'Flush and replace brake fluid' },
            { service: 'Brake Pads Inspection', description: 'Check brake pad thickness' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' },
            { service: 'Suspension Check', description: 'Inspect suspension components' }
        ],
        parts: ['e1', 'f1', 'b5']
    },
    {
        km: 60000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Timing Belt Replacement', description: 'Replace timing belt' },
            { service: 'Water Pump Replacement', description: 'Install new water pump' },
            { service: 'Coolant Flush', description: 'Drain and refill coolant system' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e4', 'e5', 'f1', 'f4']
    },
    {
        km: 70000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Air Filter Replacement', description: 'Install new air filter' },
            { service: 'Transmission Fluid Change', description: 'Replace transmission fluid' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e2', 'f1', 'f3']
    },
    {
        km: 80000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Spark Plugs Replacement', description: 'Install new spark plugs' },
            { service: 'Brake Pads Replacement', description: 'Replace front and rear brake pads' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e3', 'f1', 'b1', 'b2']
    },
    {
        km: 90000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Coolant Flush', description: 'Drain and refill coolant system' },
            { service: 'Power Steering Fluid Change', description: 'Replace power steering fluid' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'f1', 'f4', 'f5']
    },
    {
        km: 100000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Major Service Inspection', description: 'Comprehensive vehicle inspection' },
            { service: 'Brake System Overhaul', description: 'Complete brake system service' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' },
            { service: 'Suspension Inspection', description: 'Detailed suspension check' }
        ],
        parts: ['e1', 'f1', 'b1', 'b2', 'b5']
    },
    {
        km: 110000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Air Filter Replacement', description: 'Install new air filter' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e2', 'f1']
    },
    {
        km: 120000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Timing Belt Replacement', description: 'Replace timing belt (2nd time)' },
            { service: 'Water Pump Inspection', description: 'Check water pump condition' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e4', 'f1']
    },
    {
        km: 130000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Transmission Fluid Change', description: 'Replace transmission fluid' },
            { service: 'Differential Oil Change', description: 'Replace differential oil' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'f1', 'f3', 'f8']
    },
    {
        km: 140000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Spark Plugs Replacement', description: 'Install new spark plugs' },
            { service: 'Fuel System Cleaning', description: 'Clean fuel injectors and system' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'e3', 'f1', 'f9']
    },
    {
        km: 150000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Coolant Flush', description: 'Drain and refill coolant system' },
            { service: 'Brake Fluid Replacement', description: 'Flush and replace brake fluid' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'f1', 'f4', 'b5']
    },
    {
        km: 160000,
        services: [
            { service: 'Engine Oil Change', description: 'Replace engine oil and filter' },
            { service: 'Oil Filter Replacement', description: 'Install new oil filter' },
            { service: 'Major Service Inspection', description: 'Comprehensive vehicle inspection' },
            { service: 'Engine Flush', description: 'Clean engine internals' },
            { service: 'Complete Brake Service', description: 'Full brake system maintenance' },
            { service: 'Tire Rotation', description: 'Rotate all four tires' }
        ],
        parts: ['e1', 'f1', 'f10', 'b1', 'b2']
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'engine';
let filteredProducts = {};
let currentMaintenanceKm = null;

// Initialize
function init() {
    loadProducts();
    updateCartCount();
    setupSearch();
    loadMaintenanceOptions();

    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig: {
                site_title: "Auto Parts Store",
                tagline: "Quality Parts for Your Vehicle",
                hero_title: "Welcome to Auto Parts Store",
                hero_subtitle: "Find quality parts for your vehicle with fast shipping and great prices",
                cta_button: "Shop Now",
                footer_text: "© 2024 Auto Parts Store. All rights reserved.",
                background_color: "#f8f9fa",
                primary_color: "#667eea",
                secondary_color: "#764ba2",
                text_color: "#2c3e50",
                accent_color: "#ff6b6b",
                font_family: "Inter",
                font_size: 16
            },
            onConfigChange: async (config) => {
                const customFont = config.font_family || "Inter";
                const baseSize = config.font_size || 16;
                const baseFontStack = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

                document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
                document.body.style.fontSize = `${baseSize}px`;
                document.body.style.background = config.background_color || "#f8f9fa";
                document.body.style.color = config.text_color || "#2c3e50";

                const headers = document.querySelectorAll('.header');
                headers.forEach(header => {
                    header.style.background = `linear-gradient(135deg, ${config.primary_color || "#667eea"} 0%, ${config.secondary_color || "#764ba2"} 100%)`;
                });

                const heroes = document.querySelectorAll('.hero');
                heroes.forEach(hero => {
                    hero.style.background = `linear-gradient(135deg, ${config.primary_color || "#667eea"} 0%, ${config.secondary_color || "#764ba2"} 100%)`;
                });

                const buttons = document.querySelectorAll('.add-to-cart-btn, .checkout-btn, .place-order-btn, .view-details-btn, .book-maintenance-btn, .cta-button');
                buttons.forEach(btn => {
                    btn.style.background = config.primary_color || "#667eea";
                });

                const navTabs = document.querySelectorAll('.nav-tab.active');
                navTabs.forEach(tab => {
                    tab.style.background = config.primary_color || "#667eea";
                });

                const prices = document.querySelectorAll('.product-price, .cart-item-price, .summary-row.total, .part-price');
                prices.forEach(price => {
                    price.style.color = config.primary_color || "#667eea";
                });

                const removeBtns = document.querySelectorAll('.remove-btn, .close-modal');
                removeBtns.forEach(btn => {
                    btn.style.background = config.accent_color || "#ff6b6b";
                });

                document.getElementById('site-title').textContent = config.site_title || "Auto Parts Store";
                document.getElementById('tagline').textContent = config.tagline || "Quality Parts for Your Vehicle";
                document.getElementById('hero-title').textContent = config.hero_title || "Welcome to Auto Parts Store";
                document.getElementById('hero-subtitle').textContent = config.hero_subtitle || "Find quality parts for your vehicle with fast shipping and great prices";
                document.getElementById('cta-button').textContent = config.cta_button || "Shop Now";
                document.getElementById('footer-text').textContent = config.footer_text || "© 2024 Auto Parts Store. All rights reserved.";
            },
            mapToCapabilities: (config) => ({
                recolorables: [
                    {
                        get: () => config.background_color || "#f8f9fa",
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.primary_color || "#667eea",
                        set: (value) => {
                            config.primary_color = value;
                            window.elementSdk.setConfig({ primary_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || "#2c3e50",
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.secondary_color || "#764ba2",
                        set: (value) => {
                            config.secondary_color = value;
                            window.elementSdk.setConfig({ secondary_color: value });
                        }
                    },
                    {
                        get: () => config.accent_color || "#ff6b6b",
                        set: (value) => {
                            config.accent_color = value;
                            window.elementSdk.setConfig({ accent_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || "Inter",
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || 16,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk.setConfig({ font_size: value });
                    }
                }
            }),
            mapToEditPanelValues: (config) => new Map([
                ["site_title", config.site_title || "Auto Parts Store"],
                ["tagline", config.tagline || "Quality Parts for Your Vehicle"],
                ["hero_title", config.hero_title || "Welcome to Auto Parts Store"],
                ["hero_subtitle", config.hero_subtitle || "Find quality parts for your vehicle with fast shipping and great prices"],
                ["cta_button", config.cta_button || "Shop Now"],
                ["footer_text", config.footer_text || "© 2024 Auto Parts Store. All rights reserved."]
            ])
        });
    }
}

// Load Products
function loadProducts() {
    Object.keys(productsData).forEach(category => {
        filteredProducts[category] = [...productsData[category]];
        renderProducts(category);
    });
}

// Render Products
function renderProducts(category) {
    const container = document.getElementById(`${category}-products`);
    container.innerHTML = '';

    filteredProducts[category].forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
      <div class="product-image">
        ${product.emoji}
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3>${product.name}</h3>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${category}')">
          Add to Cart
        </button>
      </div>
    `;
        container.appendChild(card);
    });
}

// Add to Cart
function addToCart(productId, category) {
    const product = productsData[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.style.background = '#28a745';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Show Category
function showCategory(category) {
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.category-page').forEach(page => page.classList.remove('active'));
    document.getElementById(`${category}-page`).classList.add('active');

    currentCategory = category;
}

// Show Page
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}-page`).classList.add('active');

    const categoryNav = document.getElementById('category-nav');
    const homeBtn = document.getElementById('home-btn');

    if (page === 'home') {
        categoryNav.style.display = 'none';
        homeBtn.style.display = 'none';
    } else {
        homeBtn.style.display = 'inline-block';
        if (page === 'engine' || page === 'brakes' || page === 'tires' || page === 'lights' || page === 'fluids') {
            categoryNav.style.display = 'flex';
        } else {
            categoryNav.style.display = 'none';
        }
    }

    if (page === 'cart') {
        renderCart();
    } else if (page === 'checkout') {
        renderCheckoutSummary();
    }
}

// Show Parts Section
function showPartsSection() {
    showPage('parts-main');
}

// Show Parts Category
function showPartsCategory(category) {
    // Hide all pages first
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show the specific category page
    document.getElementById(`${category}-page`).classList.add('active');

    // Show navigation and home button
    document.getElementById('category-nav').style.display = 'flex';
    document.getElementById('home-btn').style.display = 'inline-block';

    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    const categoryTabs = {
        'engine': 0,
        'brakes': 1,
        'tires': 2,
        'lights': 3,
        'fluids': 4
    };
    const tabIndex = categoryTabs[category];
    if (tabIndex !== undefined) {
        document.querySelectorAll('.nav-tab')[tabIndex].classList.add('active');
    }

    currentCategory = category;
}

// Render Cart
function renderCart() {
    const container = document.getElementById('cart-content');

    if (cart.length === 0) {
        container.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>
    `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    container.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
            ${item.emoji || '🔧'}
          </div>
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <div class="cart-item-brand">${item.brand}</div>
            <div class="quantity-controls">
              <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
          <div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="cart-summary">
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Tax (10%):</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row total">
        <span>Total:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <button class="checkout-btn" onclick="showPage('checkout')">Proceed to Checkout</button>
    </div>
  `;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Render Checkout Summary
function renderCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('checkout-summary').innerHTML = `
    ${cart.map(item => `
      <div class="summary-row">
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('')}
    <div class="summary-row" style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #e9ecef;">
      <span>Subtotal:</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Tax (10%):</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>Total:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;
}

// Place Order
function placeOrder(e) {
    e.preventDefault();

    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const successMsg = document.getElementById('order-success');
    successMsg.classList.add('active');

    setTimeout(() => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        successMsg.classList.remove('active');
        form.reset();
        showPage('engine');
    }, 3000);
}

// Filter Products
function filterProducts(category, filterType, value) {
    if (!value) {
        filteredProducts[category] = [...productsData[category]];
    } else {
        filteredProducts[category] = productsData[category].filter(p => p[filterType] === value);
    }
    renderProducts(category);
}

// Sort Products
function sortProducts(category, sortType) {
    if (!sortType) {
        filteredProducts[category] = [...productsData[category]];
    } else if (sortType === 'price-low') {
        filteredProducts[category].sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-high') {
        filteredProducts[category].sort((a, b) => b.price - a.price);
    } else if (sortType === 'name') {
        filteredProducts[category].sort((a, b) => a.name.localeCompare(b.name));
    }
    renderProducts(category);
}

// Setup Search
function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        Object.keys(productsData).forEach(category => {
            if (query === '') {
                filteredProducts[category] = [...productsData[category]];
            } else {
                filteredProducts[category] = productsData[category].filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.brand.toLowerCase().includes(query)
                );
            }
            renderProducts(category);
        });
    });
}

// Load Maintenance Options
function loadMaintenanceOptions() {
    const container = document.getElementById('maintenance-grid');
    container.innerHTML = maintenanceData.map(m => `
    <div class="maintenance-card" onclick="showMaintenanceDetails(${m.km})">
      <h3>${m.km.toLocaleString()} KM Service</h3>
      <p>${m.services.length} services included</p>
      <button class="view-details-btn">View Details & Book</button>
    </div>
  `).join('');
}

// Show Maintenance Details
function showMaintenanceDetails(km) {
    currentMaintenanceKm = km;
    const maintenance = maintenanceData.find(m => m.km === km);

    // Update page content
    document.getElementById('service-title').textContent = `${km.toLocaleString()} KM Service`;
    document.getElementById('service-badge').textContent = `${maintenance.services.length} Services Included`;

    // Render services list
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = maintenance.services.map(service => `
    <div class="service-item">
      <h4>${service.service}</h4>
      <p>${service.description}</p>
    </div>
  `).join('');

    // Render parts grid
    renderMaintenancePartsList(maintenance.parts);

    // Setup parts option handlers
    setupPartsOptionHandlers();

    // Update booking summary
    updateBookingSummary();

    // Show the details page
    showPage('maintenance-details');
}

// Render Maintenance Parts List
function renderMaintenancePartsList(partIds) {
    const allProducts = Object.values(productsData).flat();
    const parts = partIds.map(id => allProducts.find(p => p.id === id)).filter(p => p);

    const partsGrid = document.getElementById('parts-grid');
    partsGrid.innerHTML = parts.map(part => `
    <div class="part-card" onclick="togglePartSelection('${part.id}')">
      <input type="checkbox" id="part-${part.id}" value="${part.id}" checked onchange="updateBookingSummary()">
      <div class="part-emoji">
        ${part.emoji || '🔧'}
      </div>
      <div class="part-info">
        <h4>${part.name}</h4>
        <div class="part-brand">${part.brand}</div>
      </div>
      <div class="part-price">$${part.price.toFixed(2)}</div>
    </div>
  `).join('');
}

// Setup Parts Option Handlers
function setupPartsOptionHandlers() {
    const withPartsCard = document.getElementById('with-parts-card');
    const withoutPartsCard = document.getElementById('without-parts-card');
    const withPartsRadio = document.getElementById('with-parts-radio');
    const withoutPartsRadio = document.getElementById('without-parts-radio');
    const partsSelectionArea = document.getElementById('parts-selection-area');

    withPartsCard.onclick = () => {
        withPartsRadio.checked = true;
        withPartsCard.classList.add('active');
        withoutPartsCard.classList.remove('active');
        partsSelectionArea.classList.remove('hidden');
        updateBookingSummary();
    };

    withoutPartsCard.onclick = () => {
        withoutPartsRadio.checked = true;
        withoutPartsCard.classList.add('active');
        withPartsCard.classList.remove('active');
        partsSelectionArea.classList.add('hidden');
        updateBookingSummary();
    };
}

// Toggle Part Selection
function togglePartSelection(partId) {
    const checkbox = document.getElementById(`part-${partId}`);
    const partCard = checkbox.closest('.part-card');

    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        partCard.classList.add('selected');
    } else {
        partCard.classList.remove('selected');
    }

    updateBookingSummary();
}

// Update Booking Summary
function updateBookingSummary() {
    const maintenance = maintenanceData.find(m => m.km === currentMaintenanceKm);
    const withParts = document.getElementById('with-parts-radio').checked;
    const summaryContent = document.getElementById('booking-summary-content');

    let laborCost = 150; // Base labor cost
    let partsCost = 0;
    let selectedPartsCount = 0;

    if (withParts) {
        const selectedCheckboxes = document.querySelectorAll('#parts-grid input[type="checkbox"]:checked');
        const allProducts = Object.values(productsData).flat();

        selectedCheckboxes.forEach(checkbox => {
            const part = allProducts.find(p => p.id === checkbox.value);
            if (part) {
                partsCost += part.price;
                selectedPartsCount++;
            }
        });
    }

    const total = laborCost + partsCost;

    summaryContent.innerHTML = `
    <div class="summary-row">
      <span>Service Type:</span>
      <span>${currentMaintenanceKm.toLocaleString()} KM Maintenance</span>
    </div>
    <div class="summary-row">
      <span>Services Count:</span>
      <span>${maintenance.services.length} services</span>
    </div>
    <div class="summary-row">
      <span>Labor Cost:</span>
      <span>$${laborCost.toFixed(2)}</span>
    </div>
    ${withParts ? `
      <div class="summary-row">
        <span>Selected Parts (${selectedPartsCount}):</span>
        <span>$${partsCost.toFixed(2)}</span>
      </div>
    ` : `
      <div class="summary-row">
        <span>Parts:</span>
        <span>Not included</span>
      </div>
    `}
    <div class="summary-row">
      <span>Total Cost:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;
}

// Book Maintenance Service
function bookMaintenanceService() {
    const withParts = document.getElementById('with-parts-radio').checked;
    let selectedParts = [];

    if (withParts) {
        const checkboxes = document.querySelectorAll('#parts-grid input[type="checkbox"]:checked');
        const allProducts = Object.values(productsData).flat();

        checkboxes.forEach(cb => {
            const part = allProducts.find(p => p.id === cb.value);
            if (part) {
                selectedParts.push(part);
            }
        });

        // Add selected parts to cart
        selectedParts.forEach(part => {
            const existingItem = cart.find(item => item.id === part.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...part, quantity: 1 });
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Show success notification
    const successNotification = document.getElementById('booking-success');
    successNotification.classList.add('active');

    setTimeout(() => {
        successNotification.classList.remove('active');
        showPage('maintenance');
    }, 3000);
}

// Initialize on load
init();