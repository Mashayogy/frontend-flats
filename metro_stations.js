const LISBON_METRO_STATIONS = [
    // Blue Line (Linha Azul)
    { name: "Reboleira", lat: 38.7522, lng: -9.2241, line: "blue", color: "#0072CE" },
    { name: "Amadora Este", lat: 38.7587, lng: -9.2179, line: "blue", color: "#0072CE" },
    { name: "Alfornelos", lat: 38.7603, lng: -9.2045, line: "blue", color: "#0072CE" },
    { name: "Pontinha", lat: 38.7622, lng: -9.1969, line: "blue", color: "#0072CE" },
    { name: "Carnide", lat: 38.7591, lng: -9.1927, line: "blue", color: "#0072CE" },
    { name: "Colégio Militar/Luz", lat: 38.7537, lng: -9.1894, line: "blue", color: "#0072CE" },
    { name: "Alto dos Moinhos", lat: 38.7479, lng: -9.1800, line: "blue", color: "#0072CE" },
    { name: "Laranjeiras", lat: 38.7410, lng: -9.1724, line: "blue", color: "#0072CE" },
    { name: "Jardim Zoológico", lat: 38.7413, lng: -9.1685, line: "blue", color: "#0072CE" },
    { name: "Praça de Espanha", lat: 38.7377, lng: -9.1593, line: "blue", color: "#0072CE" },
    { name: "São Sebastião", lat: 38.7340, lng: -9.1536, line: "blue", color: "#0072CE" },
    { name: "Parque", lat: 38.7291, lng: -9.1501, line: "blue", color: "#0072CE" },
    { name: "Marquês de Pombal", lat: 38.7259, lng: -9.1500, line: "blue", color: "#0072CE" },
    { name: "Avenida", lat: 38.7193, lng: -9.1451, line: "blue", color: "#0072CE" },
    { name: "Restauradores", lat: 38.7157, lng: -9.1415, line: "blue", color: "#0072CE" },
    { name: "Baixa-Chiado", lat: 38.7104, lng: -9.1402, line: "blue", color: "#0072CE" },
    { name: "Terreiro do Paço", lat: 38.7072, lng: -9.1328, line: "blue", color: "#0072CE" },
    { name: "Santa Apolónia", lat: 38.7137, lng: -9.1226, line: "blue", color: "#0072CE" },

    // Yellow Line (Linha Amarela)
    { name: "Odivelas", lat: 38.7934, lng: -9.1734, line: "yellow", color: "#FFDE00" },
    { name: "Senhor Roubado", lat: 38.7857, lng: -9.1719, line: "yellow", color: "#FFDE00" },
    { name: "Ameixoeira", lat: 38.7795, lng: -9.1596, line: "yellow", color: "#FFDE00" },
    { name: "Lumiar", lat: 38.7732, lng: -9.1593, line: "yellow", color: "#FFDE00" },
    { name: "Quinta das Conchas", lat: 38.7674, lng: -9.1554, line: "yellow", color: "#FFDE00" },
    { name: "Campo Grande", lat: 38.7601, lng: -9.1578, line: "yellow", color: "#FFDE00" },
    { name: "Cidade Universitária", lat: 38.7514, lng: -9.1591, line: "yellow", color: "#FFDE00" },
    { name: "Entre Campos", lat: 38.7469, lng: -9.1481, line: "yellow", color: "#FFDE00" },
    { name: "Campo Pequeno", lat: 38.7407, lng: -9.1466, line: "yellow", color: "#FFDE00" },
    { name: "Saldanha", lat: 38.7348, lng: -9.1454, line: "yellow", color: "#FFDE00" },
    { name: "Picoas", lat: 38.7302, lng: -9.1470, line: "yellow", color: "#FFDE00" },
    { name: "Rato", lat: 38.7201, lng: -9.1548, line: "yellow", color: "#FFDE00" },

    // Green Line (Linha Verde)
    { name: "Telheiras", lat: 38.7601, lng: -9.1661, line: "green", color: "#009E60" },
    { name: "Alvalade", lat: 38.7532, lng: -9.1441, line: "green", color: "#009E60" },
    { name: "Roma", lat: 38.7480, lng: -9.1413, line: "green", color: "#009E60" },
    { name: "Areeiro", lat: 38.7423, lng: -9.1334, line: "green", color: "#009E60" },
    { name: "Alameda", lat: 38.7369, lng: -9.1338, line: "green", color: "#009E60" },
    { name: "Arroios", lat: 38.7334, lng: -9.1342, line: "green", color: "#009E60" },
    { name: "Anjos", lat: 38.7270, lng: -9.1348, line: "green", color: "#009E60" },
    { name: "Intendente", lat: 38.7232, lng: -9.1352, line: "green", color: "#009E60" },
    { name: "Martim Moniz", lat: 38.7176, lng: -9.1357, line: "green", color: "#009E60" },
    { name: "Rossio", lat: 38.7140, lng: -9.1379, line: "green", color: "#009E60" },
    { name: "Cais do Sodré", lat: 38.7061, lng: -9.1461, line: "green", color: "#009E60" },

    // Red Line (Linha Vermelha)
    { name: "São Sebastião (Red)", lat: 38.7340, lng: -9.1536, line: "red", color: "#E00034" },
    { name: "Saldanha (Red)", lat: 38.7348, lng: -9.1454, line: "red", color: "#E00034" },
    { name: "Alameda (Red)", lat: 38.7369, lng: -9.1338, line: "red", color: "#E00034" },
    { name: "Olaias", lat: 38.7401, lng: -9.1229, line: "red", color: "#E00034" },
    { name: "Bela Vista", lat: 38.7476, lng: -9.1176, line: "red", color: "#E00034" },
    { name: "Chelas", lat: 38.7547, lng: -9.1140, line: "red", color: "#E00034" },
    { name: "Olivais", lat: 38.7608, lng: -9.1118, line: "red", color: "#E00034" },
    { name: "Cabo Ruivo", lat: 38.7629, lng: -9.1051, line: "red", color: "#E00034" },
    { name: "Oriente", lat: 38.7678, lng: -9.0993, line: "red", color: "#E00034" },
    { name: "Moscavide", lat: 38.7749, lng: -9.1030, line: "red", color: "#E00034" },
    { name: "Encarnação", lat: 38.7749, lng: -9.1186, line: "red", color: "#E00034" },
    { name: "Aeroporto", lat: 38.7686, lng: -9.1283, line: "red", color: "#E00034" }
];

const PORTO_METRO_STATIONS = [
    // Yellow Line (Linha Amarela - D)
    { name: "Hospital São João", lat: 41.1822, lng: -8.6006, line: "yellow", color: "#FFDE00" },
    { name: "Pólo Universitário", lat: 41.1736, lng: -8.6008, line: "yellow", color: "#FFDE00" },
    { name: "Salgueiros", lat: 41.1667, lng: -8.5986, line: "yellow", color: "#FFDE00" },
    { name: "Marquês", lat: 41.1611, lng: -8.6044, line: "yellow", color: "#FFDE00" },
    { name: "Faria Guimarães", lat: 41.1567, lng: -8.6092, line: "yellow", color: "#FFDE00" },
    { name: "Trindade", lat: 41.1517, lng: -8.6094, line: "interchange", color: "#0055A4" },
    { name: "Aliados", lat: 41.1481, lng: -8.6111, line: "yellow", color: "#FFDE00" },
    { name: "São Bento", lat: 41.1456, lng: -8.6106, line: "yellow", color: "#FFDE00" },
    { name: "Jardim do Morro", lat: 41.1376, lng: -8.6087, line: "yellow", color: "#FFDE00" },
    { name: "General Torres", lat: 41.1336, lng: -8.6075, line: "yellow", color: "#FFDE00" },
    { name: "Câmara de Gaia", lat: 41.1306, lng: -8.6053, line: "yellow", color: "#FFDE00" },
    { name: "D. João II", lat: 41.1214, lng: -8.6019, line: "yellow", color: "#FFDE00" },
    { name: "Santo Ovídio", lat: 41.1155, lng: -8.6066, line: "yellow", color: "#FFDE00" },

    // Line A (Blue - Linha Azul)
    { name: "Senhor de Matosinhos", lat: 41.1848, lng: -8.6948, line: "A", color: "#0055A4" },
    { name: "Brito Capelo", lat: 41.1818, lng: -8.6934, line: "A", color: "#0055A4" },
    { name: "Matosinhos Sul", lat: 41.1764, lng: -8.6896, line: "A", color: "#0055A4" },
    { name: "Pedro Hispano", lat: 41.1794, lng: -8.6726, line: "A", color: "#0055A4" },
    { name: "Sete Bicas", lat: 41.1788, lng: -8.6601, line: "A", color: "#0055A4" },
    { name: "Senhora da Hora", lat: 41.1878, lng: -8.6575, line: "interchange", color: "#0055A4" },

    // Line B (Red - Linha Vermelha)
    { name: "Póvoa de Varzim", lat: 41.3781, lng: -8.7610, line: "B", color: "#E00034" },
    { name: "Vila do Conde", lat: 41.3533, lng: -8.7411, line: "B", color: "#E00034" },
    { name: "Mindelo", lat: 41.3129, lng: -8.7118, line: "B", color: "#E00034" },
    { name: "Modivas Sul", lat: 41.2829, lng: -8.6818, line: "B", color: "#E00034" },

    // Line C (Green - Linha Verde)
    { name: "ISMAI", lat: 41.2818, lng: -8.6144, line: "C", color: "#009E60" },
    { name: "Fórum Maia", lat: 41.2332, lng: -8.6225, line: "C", color: "#009E60" },
    { name: "Fonte do Cuco", lat: 41.1969, lng: -8.6554, line: "C", color: "#009E60" },

    // Line E (Violet - Linha Violeta)
    { name: "Aeroporto", lat: 41.2372, lng: -8.6706, line: "E", color: "#A1006B" },
    { name: "Botica", lat: 41.2294, lng: -8.6644, line: "E", color: "#A1006B" },
    { name: "Verdes", lat: 41.2201, lng: -8.6596, line: "E", color: "#A1006B" },

    // Line F (Orange - Linha Laranja)
    { name: "Fânzeres", lat: 41.1736, lng: -8.5284, line: "F", color: "#F68D2E" },
    { name: "Venda Nova", lat: 41.1764, lng: -8.5414, line: "F", color: "#F68D2E" },
    { name: "Rio Tinto", lat: 41.1794, lng: -8.5584, line: "F", color: "#F68D2E" },
    { name: "Contumil", lat: 41.1684, lng: -8.5774, line: "F", color: "#F68D2E" },

    // Shared Trunk (Trindade is the main hub)
    { name: "Casa da Música", lat: 41.1583, lng: -8.6305, line: "trunk", color: "#0055A4" },
    { name: "Carolina Michaelis", lat: 41.1578, lng: -8.6219, line: "trunk", color: "#0055A4" },
    { name: "Lapa", lat: 41.1558, lng: -8.6158, line: "trunk", color: "#0055A4" },
    { name: "Trindade", lat: 41.1517, lng: -8.6094, line: "interchange", color: "#0055A4" },
    { name: "Bolhão", lat: 41.1492, lng: -8.6046, line: "trunk", color: "#0055A4" },
    { name: "24 de Agosto", lat: 41.1501, lng: -8.5985, line: "trunk", color: "#0055A4" },
    { name: "Heroísmo", lat: 41.1488, lng: -8.5919, line: "trunk", color: "#0055A4" },
    { name: "Campanhã", lat: 41.1501, lng: -8.5833, line: "trunk", color: "#0055A4" },
    { name: "Estádio do Dragão", lat: 41.1614, lng: -8.5833, line: "trunk", color: "#0055A4" }
];
