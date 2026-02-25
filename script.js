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

// Multi-language support
const TRANSLATIONS = {
    ru: {
        tab_search: "🔍 Поиск",
        tab_results: "🏠 Объявления",
        tab_map: "🗺 Карта",
        title_search: "Настройки поиска",
        label_property_type: "Тип жилья",
        prop_flat: "Квартира",
        prop_room: "Комната",
        prop_house: "Дома и коттеджи",
        prop_penthouse: "Пентхаусы и Дуплексы",
        label_rooms: "Количество комнат",
        room_studio: "Студия",
        label_people_in_room: "Человек в комнате",
        label_bathrooms: "Сан. узлы",
        label_price: "Цена (€/мес)",
        placeholder_from: "От",
        placeholder_to: "До",
        label_area: "Площадь (м²)",
        label_plot_area: "Площадь участка (м²)",
        label_floor: "Этаж",
        label_condition: "Состояние",
        cond_new: "Новостройка",
        cond_good: "Хорошее состояние",
        cond_renovation: "Нужен ремонт",
        label_features: "Характеристики",
        feat_furniture: "Мебель",
        feat_ac: "Кондиционер",
        feat_lift: "Лифт",
        feat_garage: "Гараж",
        feat_garden: "Сад",
        feat_pool: "Бассейн",
        feat_balcony: "Балкон",
        feat_terrace: "Терраса",
        label_commission: "Комиссия агента",
        commission_no: "Без комиссии",
        label_occupancy: "Кто будет жить",
        rule_kids: "Можно с детьми",
        rule_pets: "Можно с животными",
        hint_occupancy: "Я фильтрую только те объявления, где запрет прописан прямо в тексте описания – с такими хозяевами малореально договориться. Но если запрет указан только в параметрах объявления, а в тексте ничего нет, то стоит пробовать.",
        title_location: "📍 Расположение",
        label_region: "Регион",
        option_lisbon: "Лиссабон",
        option_porto: "Порту (скоро)",
        btn_map: "🗺 Нарисовать область на карте",
        label_metro: "Время до метро",
        metro_5: "до 5 мин",
        metro_10: "до 10 мин",
        metro_15: "до 15 мин",
        metro_20: "до 20 мин",
        metro_25: "до 25 мин",
        metro_30: "до 30 мин",
        metro_any: "Не важно",
        label_environment: "Окружение",
        env_park: "Парк рядом",
        env_quiet: "Без шумных дорог рядом",
        title_notifications: "🔔 Уведомления",
        notify_all: "Все подходящие",
        notify_new: "Только новые",
        hint_notifications: "Выберите опцию «Все подходящие», чтобы сразу увидеть все объявления, соответствующие вашим фильтрам. После этого вы будете получать уведомления о новых публикациях.",
        btn_save: "Сохранить поиск",
        btn_close: "Закрыть",
        loading: "Загрузка...",
        map_placeholder: "Карта будет здесь",
        alert_map: "Функция рисования на карте (Polygon) пока в разработке!"
    },
    en: {
        tab_search: "🔍 Search",
        tab_results: "🏠 Ads",
        tab_map: "🗺 Map",
        title_search: "Search Settings",
        label_property_type: "Property Type",
        prop_flat: "Apartment",
        prop_room: "Room",
        prop_house: "Houses",
        prop_penthouse: "Penthouses and Duplexes",
        label_rooms: "Number of rooms",
        room_studio: "Studio",
        label_people_in_room: "People in room",
        label_bathrooms: "Bathrooms",
        label_price: "Price (€/month)",
        placeholder_from: "Min",
        placeholder_to: "Max",
        label_area: "Area (m²)",
        label_plot_area: "Plot Area (m²)",
        label_floor: "Floor",
        label_condition: "Condition",
        cond_new: "New building",
        cond_good: "Good condition",
        cond_renovation: "Needs renovation",
        label_features: "Features",
        feat_furniture: "Furniture",
        feat_ac: "Air conditioning",
        feat_lift: "Lift",
        feat_garage: "Garage",
        feat_garden: "Garden",
        feat_pool: "Pool",
        feat_balcony: "Balcony",
        feat_terrace: "Terrace",
        label_commission: "Agent commission",
        commission_no: "No commission",
        label_occupancy: "Who will live",
        rule_kids: "Kids allowed",
        rule_pets: "Pets allowed",
        hint_occupancy: "I filter only those ads where the prohibition is written directly in the description text. In good apartments, pets and children are often forbidden by default without serious thought.",
        title_location: "📍 Location",
        label_region: "Region",
        option_lisbon: "Lisbon",
        option_porto: "Porto (soon)",
        btn_map: "🗺 Draw area on map",
        label_metro: "Time to metro",
        metro_5: "up to 5 min",
        metro_10: "up to 10 min",
        metro_15: "up to 15 min",
        metro_20: "up to 20 min",
        metro_25: "up to 25 min",
        metro_30: "up to 30 min",
        metro_any: "Any",
        label_environment: "Environment",
        env_park: "Park nearby",
        env_quiet: "No noisy roads",
        title_notifications: "🔔 Notifications",
        notify_all: "All matching",
        notify_new: "Only new",
        hint_notifications: "Choose 'All matching' to see all ads immediately. After that, you will receive notifications about new posts.",
        btn_save: "Save filters",
        btn_close: "Close",
        loading: "Loading...",
        map_placeholder: "Map will be here",
        alert_map: "Drawing area on map (Polygon) is still in development!"
    },
    pt: {
        tab_search: "🔍 Busca",
        tab_results: "🏠 Anúncios",
        tab_map: "🗺 Mapa",
        title_search: "Configurações de Busca",
        label_property_type: "Tipo de Imóvel",
        prop_flat: "Apartamento",
        prop_room: "Quarto",
        prop_house: "Casas e moradias",
        prop_penthouse: "Penthouses e Duplexes",
        label_rooms: "Número de quartos",
        room_studio: "Estúdio",
        label_people_in_room: "Pessoas no quarto",
        label_bathrooms: "Casas de banho",
        label_price: "Preço (€/mês)",
        placeholder_from: "De",
        placeholder_to: "Até",
        label_area: "Área (m²)",
        label_plot_area: "Área do Lote (m²)",
        label_floor: "Andar",
        label_condition: "Estado",
        cond_new: "Novo",
        cond_good: "Bom estado",
        cond_renovation: "Para recuperar",
        label_features: "Características",
        feat_furniture: "Mobília",
        feat_ac: "Ar condicionado",
        feat_lift: "Elevador",
        feat_garage: "Garagem",
        feat_garden: "Jardim",
        feat_pool: "Piscina",
        feat_balcony: "Varanda",
        feat_terrace: "Terraço",
        label_commission: "Comissão de agência",
        commission_no: "Sem comissão",
        label_occupancy: "Quem vai morar",
        rule_kids: "Pode com crianças",
        rule_pets: "Pode com animais",
        hint_occupancy: "Eu filtro apenas os anúncios onde a proibição está escrita no texto. Em bons apartamentos, animais e crianças são frequentemente proibidos por defeito sem reflexão.",
        title_location: "📍 Localização",
        label_region: "Região",
        option_lisbon: "Lisboa",
        option_porto: "Porto (brevemente)",
        btn_map: "🗺 Desenhar área no mapa",
        label_metro: "Tempo ao metro",
        metro_5: "até 5 min",
        metro_10: "até 10 min",
        metro_15: "até 15 min",
        metro_20: "até 20 min",
        metro_25: "até 25 min",
        metro_30: "até 30 min",
        metro_any: "Indiferente",
        label_environment: "Envolvente",
        env_park: "Próximo de parque",
        env_quiet: "Sem estradas barulhentas",
        title_notifications: "🔔 Notificações",
        notify_all: "Todos correspondentes",
        notify_new: "Apenas novos",
        hint_notifications: "Escolha 'Todos correspondentes' para ver todos os anúncios imediatamente. Depois, receberá notificações de novos posts.",
        btn_save: "Gravar filtros",
        btn_close: "Fechar",
        loading: "A carregar...",
        map_placeholder: "O mapa estará aqui",
        alert_map: "A função de desenhar no mapa (Polígono) está em desenvolvimento!"
    },
    es: {
        tab_search: "🔍 Búsqueda",
        tab_results: "🏠 Anuncios",
        tab_map: "🗺 Mapa",
        title_search: "Ajustes de Búsqueda",
        label_property_type: "Tipo de Propiedad",
        prop_flat: "Apartamento",
        prop_room: "Habitación",
        prop_house: "Casas y chalets",
        prop_penthouse: "Áticos y Dúplex",
        label_rooms: "Número de habitaciones",
        room_studio: "Estudio",
        label_people_in_room: "Personas en la habitación",
        label_bathrooms: "Baños",
        label_price: "Precio (€/mes)",
        placeholder_from: "Desde",
        placeholder_to: "Hasta",
        label_area: "Superficie (m²)",
        label_plot_area: "Tamaño de la Parcela (m²)",
        label_floor: "Planta",
        label_condition: "Estado",
        cond_new: "Obra nueva",
        cond_good: "Buen estado",
        cond_renovation: "A reformar",
        label_features: "Características",
        feat_furniture: "Amueblado",
        feat_ac: "Aire acondicionado",
        feat_lift: "Ascensor",
        feat_garage: "Garaje",
        feat_garden: "Jardín",
        feat_pool: "Piscina",
        feat_balcony: "Balcón",
        feat_terrace: "Terraza",
        label_commission: "Comisión de agencia",
        commission_no: "Sin comisión",
        label_occupancy: "Quién va a vivir",
        rule_kids: "Se permiten niños",
        rule_pets: "Se permiten mascotas",
        hint_occupancy: "Filtro solo aquellos anuncios donde la prohibición está escrita en el texto. En buenos apartamentos, a menudo se prohíben mascotas y niños por defecto sin pensar seriamente.",
        title_location: "📍 Ubicación",
        label_region: "Región",
        option_lisbon: "Lisboa",
        option_porto: "Oporto (pronto)",
        btn_map: "🗺 Dibujar área en el mapa",
        label_metro: "Tiempo al metro",
        metro_5: "hasta 5 min",
        metro_10: "hasta 10 min",
        metro_15: "hasta 15 min",
        metro_20: "hasta 20 min",
        metro_25: "hasta 25 min",
        metro_30: "hasta 30 min",
        metro_any: "Cualquiera",
        label_environment: "Entorno",
        env_park: "Parque cerca",
        env_quiet: "Sin carreteras ruidosas",
        title_notifications: "🔔 Notificaciones",
        notify_all: "Todos coincidentes",
        notify_new: "Solo nuevos",
        hint_notifications: "Elige 'Todos coincidentes' para ver todos los anuncios inmediatamente. Después recibirás notificaciones sobre nuevas publicaciones.",
        btn_save: "Guardar filtros",
        btn_close: "Cerrar",
        loading: "Cargando...",
        map_placeholder: "El mapa estará aquí",
        alert_map: "¡La función de dibujar en el mapa (Polígono) está en desarrollo!"
    }
};

let currentLang = 'ru';

function translateUI() {
    const params = new URLSearchParams(window.location.search);
    currentLang = params.get('language') || 'ru';
    if (!TRANSLATIONS[currentLang]) currentLang = 'ru';

    const t = TRANSLATIONS[currentLang];

    // Translate by data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' && el.type === 'number') {
                el.placeholder = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    });

    // Handle special cases
    document.getElementById('main-btn').innerText = t.btn_save;
}

// Tab Logic
function switchTab(tabName) {
    const t = TRANSLATIONS[currentLang];
    // Hide all
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    // Show current
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Highlight button
    const btns = document.querySelectorAll('.tab-btn');
    if (tabName === 'search') btns[0].classList.add('active');
    if (tabName === 'results') btns[1].classList.add('active');
    if (tabName === 'map') btns[2].classList.add('active');

    // Button text logic
    const mainBtn = document.getElementById('main-btn');
    if (tabName === 'search') {
        mainBtn.innerText = t.btn_save;
        mainBtn.onclick = sendData;
    } else {
        mainBtn.innerText = t.btn_close;
        mainBtn.onclick = () => tg.close();
    }
}

// Pill Logic (Multi-select)
function togglePill(el, groupName) {
    el.classList.toggle('selected');
    updateDynamicUI();
}

// Single Select Logic
function selectOnePill(el, groupName) {
    document.querySelectorAll(`#${groupName} .pill`).forEach(p => p.classList.remove('selected'));
    el.classList.add('selected');
    updateDynamicUI();
}

function updateDynamicUI() {
    const selectedTypes = getSelectedValues('property-type');
    const noTypeSelected = selectedTypes.length === 0;

    const showRooms = noTypeSelected || selectedTypes.includes('flat') || selectedTypes.includes('house') || selectedTypes.includes('penthouse_duplex');
    const showPeopleInRoom = selectedTypes.includes('room');

    document.getElementById('group-rooms').style.display = showRooms ? 'block' : 'none';
    document.getElementById('group-people-in-room').style.display = showPeopleInRoom ? 'block' : 'none';

    const showFloor = noTypeSelected || selectedTypes.includes('flat') || selectedTypes.includes('room') || selectedTypes.includes('penthouse_duplex');
    const showPlotArea = selectedTypes.includes('house');

    document.getElementById('group-floor').style.display = showFloor ? 'block' : 'none';
    document.getElementById('group-plot-area').style.display = showPlotArea ? 'block' : 'none';

    const showLift = noTypeSelected || selectedTypes.includes('flat') || selectedTypes.includes('room');
    const liftPill = document.querySelector('.pill[data-value="lift"]');
    if (liftPill) {
        if (showLift) {
            liftPill.style.display = 'inline-block';
        } else {
            liftPill.style.display = 'none';
            liftPill.classList.remove('selected');
        }
    }
}

function openMapDraw() {
    const t = TRANSLATIONS[currentLang];
    alert(t.alert_map);
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
        min_plot_area: document.getElementById('plot-area-min').value,
        max_plot_area: document.getElementById('plot-area-max').value,

        min_floor: document.getElementById('floor-min').value,
        max_floor: document.getElementById('floor-max').value,

        metro_minutes: getSelectedValues('metro-distance')[0] || 'any',

        no_commission: document.getElementById('no-commission').checked,

        property_types: getSelectedValues('property-type'),
        rooms: getSelectedValues('rooms'),
        people_in_room: getSelectedValues('people-in-room'),
        bathrooms: getSelectedValues('bathrooms'),
        condition: getSelectedValues('condition'),
        features: getSelectedValues('features'),
        rules: getSelectedValues('rules'),
        environment: getSelectedValues('environment'),
        notification_type: getSelectedValues('notification-type')[0] || 'new',
        language: currentLang
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
        'min_plot_area': 'plot-area-min',
        'max_plot_area': 'plot-area-max',
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
    const groups = ['property_type', 'rooms', 'people_in_room', 'bathrooms', 'condition', 'features', 'rules', 'environment', 'metro_minutes', 'notification_type'];
    groups.forEach(group => {
        const val = params.get(group);
        if (val) {
            const values = val.split(',');
            const groupId = group.replace('_type', '-type').replace('_minutes', '-distance').replace('_in_room', '-in-room');
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

// Initial call
translateUI();
loadFiltersFromUrl();
updateDynamicUI();
