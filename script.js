let doctorsData = [];

const grid = document.getElementById('doctors-grid');
const searchInput = document.getElementById('searchInput');
const specialtyFilter = document.getElementById('specialtyFilter');
const locationFilter = document.getElementById('locationFilter');
const resultsCount = document.getElementById('results-count');

async function loadDoctors() {
    try {
        const response = await fetch('data.json');
        doctorsData = await response.json();
        
        populateSpecialties(doctorsData);
        renderDoctors(doctorsData);
    } catch (error) {
        console.error("Error loading data:", error);
        grid.innerHTML = `<p style="color: red;">Failed to load data. Please refresh.</p>`;
    }
}

// ADVANCED CS FEATURE: Dynamically extract unique specialties to build the dropdown
function populateSpecialties(data) {
    const specialties = [...new Set(data.map(doc => doc.specialty))].sort();
    
    specialties.forEach(spec => {
        const option = document.createElement('option');
        option.value = spec;
        option.innerText = spec;
        specialtyFilter.appendChild(option);
    });
}

function renderDoctors(data) {
    resultsCount.innerHTML = `<i class="fa-solid fa-user-doctor"></i> Found ${data.length} Specialists`;

    if (data.length === 0) {
        grid.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 3rem; color: var(--muted-text);">
                <h3>No doctors found</h3>
                <p>Try adjusting your search terms or filters.</p>
            </div>
        `;
        return;
    }

    const htmlString = data.map(doc => `
        <div class="card">
            <span class="spec-badge">${doc.specialty}</span>
            <h3>${doc.name}</h3>
            
            <div class="info-row">
                <i class="fa-solid fa-hospital"></i>
                <span><strong>Hospital/Chamber:</strong><br>${doc.hospital}</span>
            </div>
            
            <div class="info-row">
                <i class="fa-solid fa-location-dot"></i>
                <span>${doc.location}</span>
            </div>

            <div class="info-row">
                <i class="fa-solid fa-clock"></i>
                <span>${doc.hours}</span>
            </div>

            <div class="info-row">
                <i class="fa-solid fa-certificate"></i>
                <span>${doc.experience}</span>
            </div>

            <a href="tel:${doc.contact.split(',')[0].replace(/[^0-9+]/g, '')}" class="book-btn">
                <i class="fa-solid fa-phone"></i> Call to Book: ${doc.contact}
            </a>
        </div>
    `).join('');

    grid.innerHTML = htmlString;
}

function filterDoctors() {
    const searchTerm = searchInput.value.toLowerCase();
    const specValue = specialtyFilter.value;
    const locValue = locationFilter.value;

    const filteredData = doctorsData.filter(doc => {
        // 1. Check Search (Matches Name OR Hospital)
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm) || 
                              doc.hospital.toLowerCase().includes(searchTerm);
        
        // 2. Check Specialty
        const matchesSpec = specValue === "All" || doc.specialty === specValue;
        
        // 3. Check Location Area
        let matchesLoc = true;
        if (locValue !== "All") {
            if (locValue === "Other") {
                matchesLoc = !doc.location.toLowerCase().includes("dhanmondi") &&
                             !doc.location.toLowerCase().includes("gulshan") &&
                             !doc.location.toLowerCase().includes("banani") &&
                             !doc.location.toLowerCase().includes("uttara") &&
                             !doc.location.toLowerCase().includes("mirpur") &&
                             !doc.location.toLowerCase().includes("panthapath") &&
                             !doc.location.toLowerCase().includes("green road");
            } else {
                matchesLoc = doc.location.toLowerCase().includes(locValue.toLowerCase()) || 
                             doc.hospital.toLowerCase().includes(locValue.toLowerCase());
            }
        }

        return matchesSearch && matchesSpec && matchesLoc;
    });

    renderDoctors(filteredData);
}

searchInput.addEventListener('input', filterDoctors);
specialtyFilter.addEventListener('change', filterDoctors);
locationFilter.addEventListener('change', filterDoctors);

loadDoctors();