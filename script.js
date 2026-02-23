// Initialize Telegram WebApp
let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Apply theme colors
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
document.documentElement.style.setProperty('--tg-theme-hint-color', tg.themeParams.hint_color);
document.documentElement.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color);
document.documentElement.style.setProperty('--tg-theme-button-text-color', tg.themeParams.button_text_color);
document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', tg.themeParams.secondary_bg_color);

// Tab Logic
function switchTab(tabName) {
    // Hide all
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    // Show current
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Highlight button (hacky way)
    const btns = document.querySelectorAll('.tab-btn');
    if (tabName === 'search') btns[0].classList.add('active');
    if (tabName === 'results') btns[1].classList.add('active');
    if (tabName === 'map') btns[2].classList.add('active');

    // Button text logic
    const mainBtn = document.getElementById('main-btn');
    if (tabName === 'search') {
        mainBtn.innerText = "Сохранить поиск";
        mainBtn.onclick = sendData;
    } else {
        mainBtn.innerText = "Закрыть";
        mainBtn.onclick = () => tg.close();
    }
}

// Pill Logic (Multi-select)
function togglePill(el, groupName) {
    // For property-type allow multi-select? Let's say yes.
    el.classList.toggle('selected');
}

// Single Select Logic
function selectOnePill(el, groupName) {
    document.querySelectorAll(`#${groupName} .pill`).forEach(p => p.classList.remove('selected'));
    el.classList.add('selected');
}

function openMapDraw() {
    alert("Функция рисования на карте (Polygon) пока в разработке!");
}

// Send Data Back
function sendData() {
    // Collect data
    const data = {
        action: "save_filters",
        min_price: document.getElementById('price-min').value,
        max_price: document.getElementById('price-max').value,
        min_area: document.getElementById('area-min').value,
        max_area: document.getElementById('area-max').value,

        min_floor: document.getElementById('floor-min').value,
        max_floor: document.getElementById('floor-max').value,

        metro_minutes: getSelectedValues('metro-distance')[0] || 'any',

        no_commission: document.getElementById('no-commission').checked,

        property_types: getSelectedValues('property-type'),
        rooms: getSelectedValues('rooms'),
        bathrooms: getSelectedValues('bathrooms'),
        condition: getSelectedValues('condition'),
        features: getSelectedValues('features'),
        floors: getSelectedValues('floor'),
        rules: getSelectedValues('rules'),
        environment: getSelectedValues('environment'),
        notification_type: getSelectedValues('notification-type')[0] || 'new'
    };

    tg.sendData(JSON.stringify(data));
}

function getSelectedValues(groupId) {
    const selected = document.querySelectorAll(`#${groupId} .pill.selected`);
    return Array.from(selected).map(el => el.getAttribute('data-value'));
}

// Load filters from URL on startup
function loadFiltersFromUrl() {
    const params = new URLSearchParams(window.location.search);

    // 1. Numeric inputs
    const inputs = {
        'min_price': 'price-min',
        'max_price': 'price-max',
        'min_area': 'area-min',
        'max_area': 'area-max',
        'min_floor': 'floor-min',
        'max_floor': 'floor-max'
    };
    for (const [param, id] of Object.entries(inputs)) {
        if (params.has(param)) {
            document.getElementById(id).value = params.get(param);
        }
    }

    // 2. Toggle Switches
    if (params.get('no_commission') === 'true' || params.get('commission_included') === '0') {
        document.getElementById('no-commission').checked = true;
    }

    // 3. Multi-select Pills
    const groups = ['property_type', 'rooms', 'bathrooms', 'condition', 'features', 'rules', 'environment', 'metro_minutes', 'notification_type'];
    groups.forEach(group => {
        const val = params.get(group);
        if (val) {
            const values = val.split(',');
            // Map property_type back to ids if needed, but here group names match id for some 
            const groupId = group.replace('_type', '-type').replace('_minutes', '-distance');
            values.forEach(v => {
                const pill = document.querySelector(`#${groupId} .pill[data-value="${v}"]`);
                if (pill) {
                    if (groupId === 'metro-distance' || groupId === 'notification-type') {
                        selectOnePill(pill, groupId);
                    } else {
                        pill.classList.add('selected');
                    }
                }
            });
        }
    });
}

loadFiltersFromUrl();
