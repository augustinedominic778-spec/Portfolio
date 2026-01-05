// 1. DATABASE (The Properties)
const properties = [
    {
        id: 1,
        title: "Modern Skyward Villa",
        price: "$1,250,000",
        type: "Villa",
        location: "Malibu, California",
        lat: 34.0259, lng: -118.7798,
        mainImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c47?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 4, baths: 3, sqft: 3200, yearBuilt: 2019, garage: "2 Cars",
        desc: "A breathtaking architectural masterpiece overlooking the Pacific. This home features floor-to-ceiling glass walls, a smart automation system, and a zero-edge infinity pool."
    },
    {
        id: 2,
        title: "The Blue Penthouse",
        price: "$875,000",
        type: "Apartment",
        location: "Manhattan, NY",
        lat: 40.7831, lng: -73.9712,
        mainImg: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502000206303-1e0485d2da3d?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 2, baths: 2, sqft: 1500, yearBuilt: 2015, garage: "Valet",
        desc: "Urban luxury redefined. Located in the heart of the city, this penthouse offers 360-degree views, a private elevator, and a custom designer kitchen."
    }
];

// 2. INITIALIZE HOMEPAGE
function initHome() {
    const grid = document.getElementById('property-grid');
    if (!grid) return;

    renderProperties(properties);

    document.getElementById('search-trigger').onclick = () => {
        const loc = document.getElementById('loc-search').value.toLowerCase();
        const type = document.getElementById('type-search').value;
        
        const filtered = properties.filter(p => 
            (p.location.toLowerCase().includes(loc)) && 
            (type === "" || p.type === type)
        );
        renderProperties(filtered);
    };

    // Map Setup
    const map = L.map('map-container').setView([37.0902, -95.7129], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    properties.forEach(p => {
        L.marker([p.lat, p.lng]).addTo(map).bindPopup(`<b>${p.title}</b><br>${p.price}`);
    });
}

function renderProperties(data) {
    const grid = document.getElementById('property-grid');
    grid.innerHTML = data.map(p => `
        <a href="detail.html?id=${p.id}" class="card">
            <img src="${p.mainImg}" class="card-img" alt="property">
            <div class="card-body">
                <div class="card-price">${p.price}</div>
                <h3 class="card-title">${p.title}</h3>
                <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
                <div class="card-meta">
                    <span><i class="fas fa-bed"></i> ${p.beds} Beds</span>
                    <span><i class="fas fa-bath"></i> ${p.baths} Baths</span>
                    <span><i class="fas fa-expand"></i> ${p.sqft} sqft</span>
                </div>
            </div>
        </a>
    `).join('');
}

// 3. INITIALIZE DETAIL PAGE
function initDetail() {
    const container = document.getElementById('detail-content');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const p = properties.find(item => item.id === id);

    if (!p) {
        container.innerHTML = "<h1>Property Not Found</h1>";
        return;
    }

    const extraImages = p.images.slice(3).map(img => 
        `<img src="${img}" style="width:100%; height:200px; object-fit:cover; border-radius:5px;">`
    ).join('');

    container.innerHTML = `
        <button class="btn-back" style="margin-bottom:20px; border:none; background:transparent; cursor:pointer; font-size:16px; display:flex; align-items:center; gap:8px;">
            <i class="fas fa-arrow-left"></i> Back
        </button>
        <div class="gallery-grid">
            <img src="${p.images[0]}" class="main-img">
            <div style="display:grid; gap:15px;">
                <img src="${p.images[1]}">
                <img src="${p.images[2]}">
            </div>
        </div>
        ${extraImages ? `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:15px; margin-top:15px;">${extraImages}</div>` : ''}
        <div class="detail-info">
            <div class="info-text">
                <h1>${p.title}</h1>
                <p style="color:var(--accent-blue); font-weight:700; font-size:24px;">${p.price}</p>
                <p>${p.location}</p>
                <div class="card-meta" style="margin: 20px 0; font-size: 18px;">
                    <span><i class="fas fa-bed"></i> ${p.beds} Bedrooms</span>
                    <span><i class="fas fa-bath"></i> ${p.baths} Bathrooms</span>
                    <span><i class="fas fa-expand"></i> ${p.sqft} sqft Area</span>
                    <span><i class="fas fa-calendar-alt"></i> Built ${p.yearBuilt}</span>
                    <span><i class="fas fa-car"></i> ${p.garage}</span>
                </div>
                <hr>
                <p class="desc-text">${p.desc}</p>
            </div>
            <div class="contact-card">
                <h3>Interested in this property?</h3>
                <p style="margin-bottom:20px;">Contact our elite agents today.</p>
                <input type="text" placeholder="Your Name" style="width:100%; padding:10px; margin-bottom:10px; border-radius:5px; border:1px solid #ddd;">
                <button class="btn-primary" style="width:100%">Request a Tour</button>
            </div>
        </div>
    `;
}

// 4. INITIALIZE BACK BUTTONS
function initBackButtons() {
    const buttons = document.querySelectorAll('.btn-back');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    });
}

// Controller
document.addEventListener('DOMContentLoaded', () => {
    initHome();
    initDetail();
    initBackButtons();
});
