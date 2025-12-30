// Initialize Icons
lucide.createIcons();

// --- BILINGUAL DATA & LOGIC ---

// Translation Dictionary
const translations = {
    en: {
        nav_home: "Home",
        nav_doctors: "Doctor's Schedule",
        nav_location: "Location",
        nav_contact: "Contact",
        location_sub: "Bolpur, West Bengal",
        hero_title_1: "Your Trusted",
        hero_title_2: "Medical Partner",
        hero_desc: "Providing quality medicines and connecting you with the best specialists in Bolpur. We care for your health and well-being.",
        hero_cta: "Find a Doctor",
        hero_contact: "Contact Us",
        section_doctors_title: "Doctor's Schedule",
        section_doctors_subtitle: "Find the right specialist for your needs.",
        section_location_title: "Visit Us",
        section_location_subtitle: "Conveniently located in the heart of Bolpur.",
        footer_about: "Your trusted pharmacy and medical center in Bolpur. We are committed to serving the community with genuine medicines and expert medical consultation.",
        footer_contact_title: "Contact Info",
        footer_hours_title: "Store Hours",
        day_mon_sat: "Mon - Sat",
        day_sun: "Sunday",
        no_results: "No doctors found matching your search.",
        // UI Labels
        lbl_specialist: "Specialist",
        lbl_time: "Time",
        lbl_days: "Visiting Days",
        lbl_search_placeholder: "Search by name or specialist..."
    },
    bn: {
        nav_home: "হোম",
        nav_doctors: "ডাক্তারদের সময়সূচী",
        nav_location: "লোকেশন",
        nav_contact: "যোগাযোগ",
        location_sub: "বোলপুর, পশ্চিমবঙ্গ",
        hero_title_1: "আপনার বিশ্বস্ত",
        hero_title_2: "মেডিকেল পার্টনার",
        hero_desc: "বোলপুরে গুণমানসম্পন্ন ওষুধ এবং সেরা বিশেষজ্ঞ ডাক্তারদের সাথে আপনাকে সংযুক্ত করছি। আমরা আপনার সুস্বাস্থ্যের যত্ন নিই।",
        hero_cta: "ডাক্তার খুঁজুন",
        hero_contact: "যোগাযোগ করুন",
        section_doctors_title: "ডাক্তারদের সময়সূচী",
        section_doctors_subtitle: "আপনার প্রয়োজনের জন্য সঠিক বিশেষজ্ঞ খুঁজুন।",
        section_location_title: "আমাদের ঠিকানা",
        section_location_subtitle: "বোলপুরের কেন্দ্রস্থলে অবস্থিত।",
        footer_about: "বোলপুরে আপনার বিশ্বস্ত ফার্মেসি এবং মেডিকেল সেন্টার। আমরা সঠিক ওষুধ এবং বিশেষজ্ঞ ডাক্তারের পরামর্শ নিয়ে সম্প্রদায়ের সেবা করতে প্রতিশ্রুতিবদ্ধ।",
        footer_contact_title: "যোগাযোগের তথ্য",
        footer_hours_title: "খোলার সময়",
        day_mon_sat: "সোম - শনি",
        day_sun: "রবিবার",
        no_results: "আপনার অনুসন্ধানের সাথে মিলছে এমন কোন ডাক্তার পাওয়া যায়নি।",
        // UI Labels
        lbl_specialist: "বিশেষজ্ঞ",
        lbl_time: "সময়",
        lbl_days: "ভিজিটিং দিন",
        lbl_search_placeholder: "নাম বা বিশেষজ্ঞ দ্বারা অনুসন্ধান করুন..."
    }
};

// Current Language State
let currentLang = 'en';

// --- DOCTOR DATA (EDIT HERE) ---
// Add or Remove doctors from this list
const doctors = [
    {
        id: 1,
        name: { en: "Dr. Anirban Roy", bn: "ডাঃ অনির্বাণ রায়" },
        specialty: { en: "General Physician", bn: "জেনারেল ফিজিশিয়ান" },
        degree: "MBBS, MD",
        days: { en: "Mon, Wed, Fri", bn: "সোম, বুধ, শুক্র" },
        time: { en: "5:00 PM - 8:00 PM", bn: "বিকাল ৫টা - রাত ৮টা" },
        color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
        id: 2,
        name: { en: "Dr. S. K. Gupta", bn: "ডাঃ এস. কে. গুপ্ত" },
        specialty: { en: "Cardiologist", bn: "হৃদরোগ বিশেষজ্ঞ" },
        degree: "MBBS, DM (Cardio)",
        days: { en: "Saturday Only", bn: "শুধুমাত্র শনিবার" },
        time: { en: "10:00 AM - 2:00 PM", bn: "সকাল ১০টা - দুপুর ২টা" },
        color: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
        id: 3,
        name: { en: "Dr. P. Chatterjee", bn: "ডাঃ পি. চ্যাটার্জি" },
        specialty: { en: "Pediatrician (Child)", bn: "শিশু বিশেষজ্ঞ" },
        degree: "MBBS, DCH",
        days: { en: "Tue, Thu", bn: "মঙ্গল, বৃহস্পতি" },
        time: { en: "6:00 PM - 9:00 PM", bn: "সন্ধ্যা ৬টা - রাত ৯টা" },
        color: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
        id: 4,
        name: { en: "Dr. M. Begum", bn: "ডাঃ এম. বেগম" },
        specialty: { en: "Gynecologist", bn: "স্ত্রীরোগ বিশেষজ্ঞ" },
        degree: "MBBS, DGO",
        days: { en: "Wednesday", bn: "বুধবার" },
        time: { en: "11:00 AM - 1:00 PM", bn: "সকাল ১১টা - দুপুর ১টা" },
        color: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
        id: 5,
        name: { en: "Dr. R. Das", bn: "ডাঃ আর. দাস" },
        specialty: { en: "Orthopedic", bn: "অর্থোপেডিক" },
        degree: "MS (Ortho)",
        days: { en: "Sunday", bn: "রবিবার" },
        time: { en: "9:00 AM - 12:00 PM", bn: "সকাল ৯টা - দুপুর ১২টা" },
        color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
];

// --- FUNCTIONS ---

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    updateContent();
}

function updateContent() {
    // 1. Update Language Toggle Button Text
    const langLabel = document.getElementById('lang-label');
    const mobileLangLabel = document.getElementById('mobile-lang-label');

    if (currentLang === 'en') {
        langLabel.textContent = "বাংলা";
        mobileLangLabel.textContent = "BN";
        document.body.classList.remove('lang-bn');
    } else {
        langLabel.textContent = "English";
        mobileLangLabel.textContent = "EN";
        document.body.classList.add('lang-bn');
    }

    // 2. Update Static Text Elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // 3. Update Input Placeholder
    const searchInput = document.getElementById('doctor-search');
    searchInput.placeholder = translations[currentLang]['lbl_search_placeholder'];

    // 4. Re-render Doctor Cards
    renderDoctors();
}

function renderDoctors() {
    const grid = document.getElementById('doctors-grid');
    const searchInput = document.getElementById('doctor-search').value.toLowerCase();
    const noResults = document.getElementById('no-results');

    grid.innerHTML = '';

    let hasResults = false;

    doctors.forEach(doctor => {
        // Search Logic (Search against both English and Bengali names/specialties)
        const nameEn = doctor.name.en.toLowerCase();
        const nameBn = doctor.name.bn.toLowerCase();
        const specEn = doctor.specialty.en.toLowerCase();
        const specBn = doctor.specialty.bn.toLowerCase();

        if (nameEn.includes(searchInput) || nameBn.includes(searchInput) ||
            specEn.includes(searchInput) || specBn.includes(searchInput)) {

            hasResults = true;

            // Create Card HTML
            const card = document.createElement('div');
            card.className = "bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1";

            const labels = translations[currentLang];

            card.innerHTML = `
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-slate-900 leading-tight">${doctor.name.en}</h3>
                            <h4 class="text-lg font-medium text-slate-600 font-bengali mb-2">${doctor.name.bn}</h4>
                            
                            <span class="inline-block px-2 py-1 text-xs font-semibold rounded-full ${doctor.color} mb-1">
                                ${doctor.specialty.en}
                            </span>
                            <div class="text-xs text-slate-500 font-bengali mt-0.5">
                                ${doctor.specialty.bn}
                            </div>
                        </div>
                        <div class="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                    </div>
                    
                    <p class="text-sm text-slate-400 mb-4 border-b pb-2">${doctor.degree}</p>
                    
                    <div class="space-y-3">
                        <div class="flex items-start text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-medical-500 mr-3 mt-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <div>
                                <p class="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-0.5">${labels.lbl_days}</p>
                                <p class="font-medium text-slate-700">${doctor.days.en}</p>
                                <p class="text-slate-600 font-bengali text-sm">${doctor.days.bn}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-medical-500 mr-3 mt-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <div>
                                <p class="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-0.5">${labels.lbl_time}</p>
                                <p class="font-medium text-slate-700">${doctor.time.en}</p>
                                <p class="text-slate-600 font-bengali text-sm">${doctor.time.bn}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        }
    });

    if (!hasResults) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initial Render
updateContent();
