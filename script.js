// 1. DATABASE (The Properties)
const properties = [
    {
        id: 1,
        title: "Modern Skyward Villa",
        price: 4500000,
        type: "Villa",
        location: "Malibu, California",
        lat: 34.0259, lng: -118.7798,
        mainImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 5, baths: 4.5, sqft: 4200, yearBuilt: 2021, garage: "3 Cars",
        featured: true,
        amenities: ["Infinity Pool", "Home Theater", "Wine Cellar", "Smart Home System"],
        desc: "Perched on the cliffs of Malibu, this architectural marvel offers panoramic ocean views. Features include a home theater, wine cellar, and an infinity pool that blends seamlessly with the horizon."
    },
    {
        id: 2,
        title: "The Blue Penthouse",
        price: 2875000,
        type: "Apartment",
        location: "Manhattan, New York",
        lat: 40.7831, lng: -73.9712,
        mainImg: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502000206303-1e0485d2da3d?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 3, baths: 3, sqft: 2100, yearBuilt: 2018, garage: "Valet",
        amenities: ["Private Elevator", "Rooftop Terrace", "Concierge Service", "Skyline Views"],
        desc: "Experience the pinnacle of urban living in this triplex penthouse. Floor-to-ceiling windows frame the NYC skyline, while the private rooftop terrace provides a serene escape from the city below."
    },
    {
        id: 3,
        title: "Aspen Winter Lodge",
        price: 3200000,
        type: "Cabin",
        location: "Aspen, Colorado",
        lat: 39.1911, lng: -106.8175,
        mainImg: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 6, baths: 5, sqft: 5000, yearBuilt: 2015, garage: "2 Cars + Snowmobile",
        amenities: ["Stone Fireplace", "Heated Floors", "Ski Storage", "Hot Tub"],
        desc: "A cozy yet expansive timber-frame lodge located minutes from the slopes. Features a massive stone fireplace, heated floors, and a private hot tub surrounded by pine trees."
    },
    {
        id: 4,
        title: "Tropical Oasis Estate",
        price: 1950000,
        type: "Villa",
        location: "Miami, Florida",
        lat: 25.7617, lng: -80.1918,
        mainImg: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 5, baths: 4, sqft: 3800, yearBuilt: 2020, garage: "2 Cars",
        amenities: ["Private Dock", "Guest House", "Tropical Garden", "Outdoor Kitchen"],
        desc: "Modern luxury meets tropical paradise. This waterfront property features a private dock, lush landscaping, and an open-concept design perfect for indoor-outdoor living."
    },
    {
        id: 5,
        title: "Historic Parisian Apartment",
        price: 2100000,
        currency: "EUR",
        type: "Apartment",
        location: "Paris, France",
        lat: 48.8566, lng: 2.3522,
        mainImg: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 3, baths: 2, sqft: 1800, yearBuilt: 1890, garage: "None",
        amenities: ["High Ceilings", "Marble Fireplace", "Herringbone Floors", "Balcony"],
        desc: "Classic Haussmannian elegance in the 7th arrondissement. High ceilings, herringbone parquet floors, and marble fireplaces define this exquisite residence near the Eiffel Tower."
    },
    {
        id: 6,
        title: "Glass Lake House",
        price: 950000,
        type: "Cottage",
        location: "Lake Tahoe, Nevada",
        lat: 39.0968, lng: -120.0324,
        mainImg: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 2, baths: 2, sqft: 1200, yearBuilt: 2017, garage: "1 Car",
        amenities: ["Lake Access", "Floor-to-Ceiling Windows", "Radiant Heating", "Kayak Storage"],
        desc: "A minimalist retreat designed to immerse you in nature. Floor-to-ceiling windows offer uninterrupted views of the lake and surrounding mountains."
    },
    {
        id: 7,
        title: "Sunset Boulevard Estate",
        price: 6500000,
        type: "Estate",
        location: "Beverly Hills, California",
        lat: 34.0736, lng: -118.4004,
        mainImg: "https://images.unsplash.com/photo-1600596542815-27b88e39e1d7?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1600596542815-27b88e39e1d7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c47?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 6, baths: 7, sqft: 6500, yearBuilt: 2022, garage: "4 Cars",
        featured: true,
        amenities: ["Infinity Pool", "Home Gym", "Guest House", "Smart Security"],
        desc: "An iconic estate on Sunset Boulevard featuring contemporary design, expansive outdoor living spaces, and breathtaking city views."
    },
    {
        id: 8,
        title: "Amalfi Coast Villa",
        price: 3500000,
        currency: "EUR",
        type: "Villa",
        location: "Amalfi, Italy",
        lat: 40.6340, lng: 14.6027,
        mainImg: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1599809275671-b5942cabc7ad?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 4, baths: 4, sqft: 3000, yearBuilt: 2010, garage: "2 Cars",
        featured: true,
        amenities: ["Sea View", "Private Terrace", "Lemon Grove", "Historic Architecture"],
        desc: "A stunning villa perched on the cliffs of the Amalfi Coast. Enjoy uninterrupted sea views, a private lemon grove, and authentic Italian architecture."
    },
    {
        id: 9,
        title: "Industrial Berlin Loft",
        price: 1200000,
        currency: "EUR",
        type: "Loft",
        location: "Berlin, Germany",
        lat: 52.5200, lng: 13.4050,
        mainImg: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502000206303-1e0485d2da3d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 2, baths: 2, sqft: 1800, yearBuilt: 1920, garage: "Street Parking",
        featured: true,
        amenities: ["Exposed Brick", "High Ceilings", "Open Plan", "Central Location"],
        desc: "A spacious industrial loft in the heart of Berlin. Features exposed brick walls, soaring ceilings, and a modern open-plan layout perfect for creative living."
    },
    {
        id: 10,
        title: "Tokyo Zen Garden House",
        price: 1850000,
        type: "House",
        location: "Tokyo, Japan",
        lat: 35.6762, lng: 139.6503,
        mainImg: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1528360983277-13d9b152c6d4?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 3, baths: 2, sqft: 1600, yearBuilt: 2019, garage: "1 Car",
        amenities: ["Zen Garden", "Tatami Room", "Minimalist Design", "Ofuro Tub"],
        desc: "A serene modern sanctuary in the heart of Tokyo. Features a private internal courtyard garden, traditional tatami room, and minimalist concrete architecture."
    },
    {
        id: 11,
        title: "Kensington Townhouse",
        price: 5500000,
        currency: "GBP",
        type: "Townhouse",
        location: "London, UK",
        lat: 51.5014, lng: -0.1919,
        mainImg: "https://images.unsplash.com/photo-1513584685908-95c9e2d01361?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1513584685908-95c9e2d01361?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 4, baths: 3.5, sqft: 2800, yearBuilt: 1880, garage: "Street Permit",
        amenities: ["Period Features", "Private Garden", "Wine Cellar", "Library"],
        desc: "An immaculate Victorian townhouse in one of London's most prestigious neighborhoods. High ceilings, original cornicing, and a landscaped rear garden."
    },
    {
        id: 12,
        title: "Palm Jumeirah Villa",
        price: 8200000,
        type: "Villa",
        location: "Dubai, UAE",
        lat: 25.1124, lng: 55.1390,
        mainImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c47?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 6, baths: 7, sqft: 7500, yearBuilt: 2021, garage: "4 Cars",
        amenities: ["Private Beach", "Infinity Pool", "Staff Quarters", "Marble Floors"],
        desc: "Luxury living on the Palm. This signature villa offers direct beach access, stunning views of the Atlantis, and opulent interiors dripping in gold and marble."
    },
    {
        id: 13,
        title: "Sydney Harbour Penthouse",
        price: 6800000,
        currency: "AUD",
        type: "Apartment",
        location: "Sydney, Australia",
        lat: -33.8688, lng: 151.2093,
        mainImg: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 3, baths: 3, sqft: 2400, yearBuilt: 2016, garage: "2 Cars",
        amenities: ["Opera House View", "Wrap-around Balcony", "Concierge", "Gym"],
        desc: "Wake up to the world's most beautiful harbour. This penthouse features floor-to-ceiling glass, bespoke joinery, and an entertaining terrace with iconic views."
    },
    {
        id: 14,
        title: "Swiss Alps Chalet",
        price: 4900000,
        currency: "CHF",
        type: "Chalet",
        location: "Zermatt, Switzerland",
        lat: 46.0207, lng: 7.7491,
        mainImg: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 5, baths: 4, sqft: 3500, yearBuilt: 2018, garage: "Electric Buggy",
        amenities: ["Matterhorn View", "Sauna", "Ski-in/Ski-out", "Fireplace"],
        desc: "A luxurious alpine retreat with unobstructed views of the Matterhorn. Blends traditional timber construction with modern luxury and wellness facilities."
    },
    {
        id: 15,
        title: "Santorini Cliffside Cave",
        price: 1500000,
        currency: "EUR",
        type: "Villa",
        location: "Oia, Greece",
        lat: 36.4618, lng: 25.3753,
        mainImg: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&w=1200&q=80"
        ],
        beds: 2, baths: 2, sqft: 1100, yearBuilt: 1900, garage: "None",
        amenities: ["Caldera View", "Plunge Pool", "Whitewashed Walls", "Terrace"],
        desc: "A traditional cave house renovated to modern standards. Suspended high above the Aegean Sea, offering the world-famous Oia sunset from your private terrace."
    }
];

// Helper: Format Price
const formatPrice = (price, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 0
    }).format(price);
};

// Helper: Convert to USD for filtering (Approximate rates)
const convertToUSD = (price, currency = 'USD') => {
    const rates = { 'USD': 1, 'EUR': 1.1, 'GBP': 1.3, 'AUD': 0.65, 'CHF': 1.1, 'JPY': 0.007 };
    return price * (rates[currency] || 1);
};

// 2. INITIALIZE PROPERTY GRID (Properties Page)
function initPropertyGrid() {
    const grid = document.getElementById('property-grid');
    if (!grid) return;
    
    // State for pagination
    let currentData = properties;
    let visibleItems = 6;
    const loadMoreContainer = document.getElementById('load-more-container');

    // Inject Sort Dropdown into Filter Box
    const filterBox = document.querySelector('.filter-box');
    if (filterBox) {
        const sortSelect = document.createElement('select');
        sortSelect.id = 'sort-price';
        sortSelect.innerHTML = `
            <option value="default">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        `;
        // Insert before the search button (assuming button is last child)
        filterBox.insertBefore(sortSelect, filterBox.lastElementChild);
        sortSelect.addEventListener('change', () => handleSearch());

        // Inject Favorites Toggle
        const favBtn = document.createElement('button');
        favBtn.id = 'fav-filter';
        favBtn.innerText = '♥ Saved';
        
        favBtn.onclick = () => {
            const isActive = favBtn.getAttribute('data-active') === 'true';
            favBtn.setAttribute('data-active', !isActive);
            handleSearch();
        };
        filterBox.insertBefore(favBtn, filterBox.lastElementChild);
    }

    // Core Display Function with Pagination
    const updateDisplay = () => {
        const sliced = currentData.slice(0, visibleItems);
        renderProperties(sliced);
        
        // Handle Load More Button
        if (loadMoreContainer) {
            loadMoreContainer.style.display = visibleItems >= currentData.length ? 'none' : 'block';
        }

        // Handle No Results
        if (currentData.length === 0) {
            grid.innerHTML = '<div class="no-results"><i class="fas fa-search" style="font-size: 2rem; margin-bottom: 15px; display:block; color:var(--accent-blue);"></i>No properties found matching your criteria.</div>';
        }
    };

    const handleSearch = () => {
        const loc = document.getElementById('loc-search') ? document.getElementById('loc-search').value.toLowerCase() : '';
        const type = document.getElementById('type-search') ? document.getElementById('type-search').value : '';
        const minPrice = document.getElementById('min-price') ? parseFloat(document.getElementById('min-price').value) : 0;
        const maxPrice = document.getElementById('max-price') ? parseFloat(document.getElementById('max-price').value) : Infinity;
        const sortType = document.getElementById('sort-price')?.value;
        const showFavs = document.getElementById('fav-filter')?.getAttribute('data-active') === 'true';
        
        const filtered = properties.filter(p => {
            const isFav = localStorage.getItem(`fav_${p.id}`) === 'true';
            const priceUSD = convertToUSD(p.price, p.currency);

            return (p.location.toLowerCase().includes(loc)) && 
                   (type === "" || p.type === type) &&
                   (!showFavs || isFav) &&
                   (priceUSD >= minPrice) &&
                   (maxPrice ? priceUSD <= maxPrice : true);
        });

        // Sorting Logic
        if (sortType === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortType === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        currentData = filtered;
        visibleItems = 6; // Reset to first page
        updateDisplay();
    };

    const searchTrigger = document.getElementById('search-trigger');
    if (searchTrigger) searchTrigger.onclick = handleSearch;

    // Load More Listener
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.onclick = () => {
            visibleItems += 6;
            updateDisplay();
        };
    }

    const locInput = document.getElementById('loc-search');
    if (locInput) {
        locInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }

    // Initial Render
    updateDisplay();
}

function renderProperties(data) {
    const grid = document.getElementById('property-grid');
    if (grid) {
        grid.innerHTML = data.map(p => {
            const isFav = localStorage.getItem(`fav_${p.id}`) === 'true';
            const badge = p.featured ? `<div class="card-badge">Featured</div>` : '';
            return `
            <a href="detail.html?id=${p.id}" class="card">
                ${badge}
                <div class="card-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${p.id})">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </div>
                <img src="${p.mainImg}" class="card-img" alt="property" loading="lazy">
                <div class="card-body">
                    <div class="card-price">${formatPrice(p.price, p.currency)}</div>
                    <h3 class="card-title">${p.title}</h3>
                    <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
                    <div class="card-meta">
                        <span><i class="fas fa-bed"></i> ${p.beds} Beds</span>
                        <span><i class="fas fa-bath"></i> ${p.baths} Baths</span>
                        <span><i class="fas fa-expand"></i> ${p.sqft} sqft</span>
                    </div>
                </div>
            </a>
        `}).join('');
    }
}

// Toggle Favorite Function
window.toggleFavorite = (e, id) => {
    e.preventDefault(); // Prevent clicking the card link
    const key = `fav_${id}`;
    const isFav = localStorage.getItem(key) === 'true';
    
    if (isFav) {
        localStorage.removeItem(key);
        e.currentTarget.classList.remove('active');
        e.currentTarget.querySelector('i').classList.replace('fas', 'far');
    } else {
        localStorage.setItem(key, 'true');
        e.currentTarget.classList.add('active');
        e.currentTarget.querySelector('i').classList.replace('far', 'fas');
    }
};

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

    document.title = `${p.title} | Luxury Real Estate`;

    const extraImages = p.images.slice(3).map(img => 
        `<img src="${img}" style="width:100%; height:200px; object-fit:cover; border-radius:5px;">`
    ).join('');

    const amenitiesHtml = p.amenities ? `
        <h3 style="margin-top:30px; margin-bottom:15px;">Property Amenities</h3>
        <div class="amenities-grid">
            ${p.amenities.map(a => `<span class="amenity-tag"><i class="fas fa-check"></i> ${a}</span>`).join('')}
        </div>
    ` : '';

    container.innerHTML = `
        <button class="btn-back" style="margin-bottom:20px; border:none; background:transparent; cursor:pointer; font-size:16px; display:flex; align-items:center; gap:8px;">
            <i class="fas fa-arrow-left"></i> Back
        </button>
        <div class="gallery-grid" id="gallery-container">
            <img src="${p.images[0]}" class="main-img">
            <div style="display:grid; gap:15px;">
                <img src="${p.images[1]}">
                <img src="${p.images[2]}">
            </div>
        </div>
        ${extraImages ? `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:15px; margin-top:15px;" id="extra-gallery">${extraImages}</div>` : ''}
        <div class="detail-info">
            <div class="info-text">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:15px; margin-bottom: 10px;">
                    <h1 style="margin-bottom:0;">${p.title}</h1>
                    <button id="btn-share" class="btn-primary" style="padding: 8px 15px; font-size: 14px; white-space: nowrap; height:fit-content;"><i class="fas fa-share-alt"></i> Share</button>
                </div>
                <p style="color:var(--accent-blue); font-weight:700; font-size:24px;">${formatPrice(p.price, p.currency)}</p>
                <p>${p.location}</p>
                <div class="card-meta" style="margin: 20px 0; font-size: 18px;">
                    <span><i class="fas fa-bed"></i> ${p.beds} Bedrooms</span>
                    <span><i class="fas fa-bath"></i> ${p.baths} Bathrooms</span>
                    <span><i class="fas fa-expand"></i> ${p.sqft} sqft Area</span>
                    <span><i class="fas fa-calendar-alt"></i> Built ${p.yearBuilt}</span>
                    <span><i class="fas fa-car"></i> ${p.garage}</span>
                </div>
                ${amenitiesHtml}
                <hr>
                <p class="desc-text">${p.desc}</p>
                <div id="single-map" style="height: 300px; width: 100%; border-radius: 10px; margin-top: 30px; z-index: 1;"></div>
            </div>
            
            <div class="contact-card">
                <h3 style="margin-bottom:10px;">Interested in this property?</h3>
                <p style="margin-bottom:20px; color:var(--gray); font-size:0.9rem;">Fill out the form below to schedule a private viewing with our agents.</p>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <input type="text" id="contact-name" placeholder="Your Name" style="width:100%; padding:12px; border-radius:6px; border:1px solid #ddd; outline:none;">
                    <input type="email" id="contact-email" placeholder="Your Email" style="width:100%; padding:12px; border-radius:6px; border:1px solid #ddd; outline:none;">
                    <input type="tel" id="contact-phone" placeholder="Phone Number" style="width:100%; padding:12px; border-radius:6px; border:1px solid #ddd; outline:none;">
                </div>
                <button id="btn-request" class="btn-primary" style="width:100%; margin-top:15px; padding:12px;">Request a Tour</button>
            </div>
            
            <!-- Mortgage Calculator -->
            <div class="contact-card" style="margin-top: 30px;">
                <h3>Mortgage Calculator</h3>
                <div class="calc-grid">
                    <div><label>Down Payment</label><input type="number" id="calc-down" value="${p.price * 0.2}"></div>
                    <div><label>Interest Rate (%)</label><input type="number" id="calc-rate" value="6.5" step="0.1"></div>
                    <div><label>Loan Term (Years)</label><input type="number" id="calc-term" value="30"></div>
                </div>
                <button id="btn-calc" class="btn-primary" style="width:100%; margin-top:15px; background:var(--primary-blue);">Calculate</button>
                <h4 style="margin-top:15px; text-align:center;">Monthly: <span id="calc-result" style="color:var(--accent-blue); font-size:1.2em;">-</span></h4>
            </div>
        </div>
    `;

    // Inject Similar Properties Section
    const similar = properties.filter(item => item.type === p.type && item.id !== p.id).slice(0, 3);
    if (similar.length > 0) {
        const similarHtml = similar.map(s => `
            <a href="detail.html?id=${s.id}" class="card" style="text-decoration:none; color:inherit;">
                <img src="${s.mainImg}" class="card-img" style="height:200px;">
                <div class="card-body">
                    <div class="card-price" style="font-size:18px;">${formatPrice(s.price, s.currency)}</div>
                    <h4 style="font-size:16px; margin:5px 0;">${s.title}</h4>
                    <p style="font-size:14px; color:var(--gray);"><i class="fas fa-map-marker-alt"></i> ${s.location}</p>
                </div>
            </a>
        `).join('');

        container.insertAdjacentHTML('beforeend', `
            <div class="section-title" style="margin-top:60px; font-size:24px;">Similar Properties</div>
            <div class="property-grid" style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:20px;">${similarHtml}</div>
        `);
    }

    // Lightbox Logic
    if (!document.getElementById('lightbox')) {
        const lightboxHtml = `<div id="lightbox" class="lightbox"><span class="lightbox-close">&times;</span><img id="lightbox-img" src=""></div>`;
        document.body.insertAdjacentHTML('beforeend', lightboxHtml);
        
        document.querySelector('.lightbox-close').onclick = () => {
            document.getElementById('lightbox').classList.remove('active');
        };
        document.getElementById('lightbox').onclick = (e) => {
            if(e.target.id === 'lightbox') document.getElementById('lightbox').classList.remove('active');
        };
    }

    const openLightbox = (src) => {
        document.getElementById('lightbox-img').src = src;
        document.getElementById('lightbox').classList.add('active');
    };

    // Attach click events to all gallery images
    const allImages = container.querySelectorAll('img:not(.card-img)'); // Select images in detail view
    allImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.onclick = () => openLightbox(img.src);
    });

    if (typeof L !== 'undefined') {
        const map = L.map('single-map').setView([p.lat, p.lng], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker([p.lat, p.lng]).addTo(map).bindPopup(p.location).openPopup();
    }

    const btnRequest = document.getElementById('btn-request');
    if (btnRequest) {
        btnRequest.onclick = () => {
            const name = document.getElementById('contact-name').value;
            if (name) alert(`Thanks ${name}, we will be in touch shortly!`);
            else alert('Please enter your name.');
        };
    }

    // Calculator Logic
    const btnCalc = document.getElementById('btn-calc');
    if (btnCalc) {
        const calculateMortgage = () => {
            const down = parseFloat(document.getElementById('calc-down').value) || 0;
            const rate = parseFloat(document.getElementById('calc-rate').value) || 0;
            const term = parseFloat(document.getElementById('calc-term').value) || 0;
            
            const principal = p.price - down;
            const monthlyRate = rate / 100 / 12;
            const numberOfPayments = term * 12;
            
            let monthlyPayment = 0; 
            if (rate === 0) monthlyPayment = principal / numberOfPayments;
            else monthlyPayment = principal * monthlyRate * (Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

            document.getElementById('calc-result').innerText = formatPrice(monthlyPayment, p.currency);
        };
        btnCalc.onclick = calculateMortgage;
        // Run once on load
        calculateMortgage();
    }

    // Share Button Logic
    const btnShare = document.getElementById('btn-share');
    if (btnShare) {
        btnShare.onclick = () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                btnShare.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    btnShare.innerHTML = '<i class="fas fa-share-alt"></i> Share';
                }, 2000);
            }).catch(err => {
                alert('Failed to copy link.');
                console.error('Could not copy text: ', err);
            });
        };
    }
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

// 5. INITIALIZE MAP (Home Page)
function initMap() {
    const mapContainer = document.getElementById('map-container');
    if (mapContainer && typeof L !== 'undefined') {
        const map = L.map('map-container');
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        const markers = [];
        properties.forEach(p => {
            markers.push(L.marker([p.lat, p.lng]).addTo(map).bindPopup(`<b>${p.title}</b><br>${formatPrice(p.price, p.currency)}`));
        });
        
        if (markers.length) {
            const group = L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        } else {
            map.setView([37.0902, -95.7129], 4);
        }
    }
}

// 6. INITIALIZE HOME SEARCH
function initHomeSearch() {
    const searchTrigger = document.getElementById('search-trigger');
    const grid = document.getElementById('property-grid');
    if (searchTrigger && !grid) {
        searchTrigger.onclick = () => {
            window.location.href = 'properties.html';
        };
    }
}

// 7. INITIALIZE BRANDING (Logo Enhancement)
function initBranding() {
    const logo = document.querySelector('.logo');
    if (logo && !logo.querySelector('.tagline')) {
        const originalText = logo.innerHTML;
        logo.innerHTML = `
            <div style="display:flex; align-items:center; gap:12px;">
                <i class="fas fa-gem" style="font-size: 28px; background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                <div style="display:flex; flex-direction:column;">
                    <div style="font-family:'Playfair Display', serif; font-size:24px; font-weight:700; line-height:1; color:var(--primary-blue);">
                        ${originalText}
                    </div>
                    <div class="tagline" style="font-size:9px; letter-spacing:2px; text-transform:uppercase; color:var(--gray); font-weight:500; margin-top:2px;">Luxury Real Estate</div>
                </div>
            </div>
        `;
    }
}

// 8. LIST PROPERTY MODAL
function initListProperty() {
    // 1. Create Modal HTML
    if (!document.getElementById('list-modal')) {
        const modalHtml = `
            <div id="list-modal" class="modal">
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <h2 style="margin-bottom:10px; font-family:'Playfair Display', serif;">List Your Property</h2>
                    <p style="color:var(--gray); margin-bottom:25px; font-size:0.9rem;">Submit your property details for review by our agents.</p>
                    <form id="list-form">
                        <div class="form-group">
                            <label>Property Title</label>
                            <input type="text" required placeholder="e.g. Seaside Villa">
                        </div>
                        <div class="form-group">
                            <label>Location</label>
                            <input type="text" required placeholder="City, Country">
                        </div>
                        <div class="form-group">
                            <label>Expected Price ($)</label>
                            <input type="number" required placeholder="0.00">
                        </div>
                        <button type="submit" class="btn-primary" style="width:100%; padding:15px;">Submit Listing</button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const modal = document.getElementById('list-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const form = document.getElementById('list-form');

    // 2. Find the Trigger Button (Try ID 'btn-list' first, then search by text)
    let listBtn = document.getElementById('btn-list');
    if (!listBtn) {
        const buttons = Array.from(document.querySelectorAll('a, button'));
        listBtn = buttons.find(b => b.textContent.trim().toLowerCase() === 'list property');
    }

    if (listBtn) {
        listBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    }

    // 3. Close Logic
    if (closeBtn) closeBtn.onclick = () => modal.classList.remove('active');
    if (modal) modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('active');
    };

    // 4. Form Submit Logic
    if (form) form.onsubmit = (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
            btn.style.background = '#10b981'; // Green
            
            setTimeout(() => {
                modal.classList.remove('active');
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
                alert("Thank you! Our agents will contact you shortly to finalize your listing.");
            }, 1500);
        }, 1500);
    };
}

// Controller
document.addEventListener('DOMContentLoaded', () => {
    initPropertyGrid();
    initDetail();
    initBackButtons();
    initMap();
    initHomeSearch();
    initBranding();
    initListProperty();
});
