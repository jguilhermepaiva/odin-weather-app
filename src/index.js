const apiKey = 'XTZYBFUFSXQBJ3ZHED9CZ3BH5';

let currentWeatherData = null; 
let currentUnit = 'C';       
let lastCitySearched = 'Recife';

async function getWeatherData(city) {
    try {
        const apiKey = 'XTZYBFUFSXQBJ3ZHED9CZ3BH5';
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&contentType=json`, { mode: 'cors' });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: response.statusText }));
            console.error(`Erro HTTP: ${response.status}`, errorData);
            if (response.status === 401 || response.status === 403) {
                alert('Erro de autenticação com o serviço de clima. Verifique a chave da API.');
            } else if (response.status === 400 && errorData.message && errorData.message.includes("Invalid location")) {
                alert(`Cidade "${city}" não encontrada ou inválida.`);
            } else {
                alert(`Não foi possível obter os dados do clima para "${city}". Status: ${response.status}`);
            }
            return null; 
        }
        const weatherData = await response.json();
        return weatherData;

    } catch (error) {
        console.error("Erro na requisição para buscar dados do clima:", error);
        alert("Ocorreu um erro ao tentar buscar os dados do clima. Verifique o console para mais detalhes.");
        return null; 
    }
}

function convertTemperature(tempCelsius, toUnit) {
    if (toUnit === 'F') {
        return (tempCelsius * 9/5) + 32;
    } else if (toUnit === 'C') {
        return (tempCelsius - 32) * 5/9; 
    }
    return tempCelsius; 
}

function toggleTemperatureUnit() {
    if (!currentWeatherData) {
        alert("Por favor, busque os dados de uma cidade primeiro.");
        return;
    }

    currentUnit = (currentUnit === 'C') ? 'F' : 'C';
    updateWeatherDisplay(); 
}
function updateWeatherDisplay() {
    if (!currentWeatherData) {
        document.getElementById('city-name').textContent = 'Nenhuma cidade selecionada';
        document.getElementById('current-temp').textContent = '-';
        document.getElementById('current-condition').textContent = '-';
        document.getElementById('high-temp').textContent = 'Máx: -';
        document.getElementById('low-temp').textContent = 'Mín: -';
        return;
    }

    const currentConditions = currentWeatherData.currentConditions;
    const forecastToday = currentWeatherData.days && currentWeatherData.days[0];

    if (!currentConditions || !forecastToday) {
        console.error('Dados do clima estão incompletos ou em formato inesperado.');
        document.getElementById('city-name').textContent = 'Erro ao processar dados.';
        return;
    }

    let displayTemp = parseFloat(currentConditions.temp);
    let displayTempMax = parseFloat(forecastToday.tempmax);
    let displayTempMin = parseFloat(forecastToday.tempmin);
    const unitSymbol = currentUnit === 'F' ? '°F' : '°C';

    if (currentUnit === 'F') {
        displayTemp = convertTemperature(parseFloat(currentConditions.temp), 'F');
        displayTempMax = convertTemperature(parseFloat(forecastToday.tempmax), 'F');
        displayTempMin = convertTemperature(parseFloat(forecastToday.tempmin), 'F');
    }

    const round = (num) => Math.round(num * 10) / 10;

    document.getElementById('city-name').textContent = currentWeatherData.resolvedAddress || lastCitySearched;
    document.getElementById('current-temp').textContent = `${round(displayTemp)}${unitSymbol}`;
    document.getElementById('current-condition').textContent = currentConditions.conditions;
    document.getElementById('high-temp').textContent = `Máx: ${round(displayTempMax)}${unitSymbol}`;
    document.getElementById('low-temp').textContent = `Mín: ${round(displayTempMin)}${unitSymbol}`;

    const changeBtn = document.getElementById('change-btn');
    if (changeBtn) {
        changeBtn.textContent = `Mudar para ${currentUnit === 'C' ? '°F' : '°C'}`;
    }
}

async function fetchAndDisplayWeather(city) {
    lastCitySearched = city; 

    document.getElementById('city-name').textContent = `Carregando dados para ${city}...`;
    document.getElementById('current-temp').textContent = '';
    document.getElementById('current-condition').textContent = '';
    document.getElementById('high-temp').textContent = '';
    document.getElementById('low-temp').textContent = '';
    const changeBtn = document.getElementById('change-btn');
    if (changeBtn) changeBtn.disabled = true;


    const data = await getWeatherData(city);
    if (data) {
        currentWeatherData = data; 
        currentUnit = 'C';       
        updateWeatherDisplay();  
    } else {
       
        currentWeatherData = null;
        updateWeatherDisplay(); 
    }
    if (changeBtn) changeBtn.disabled = false;
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const changeUnitButton = document.getElementById('change-btn'); 

    if (lastCitySearched) {
        fetchAndDisplayWeather(lastCitySearched);
    } else {
        updateWeatherDisplay();
    }


    if (searchButton && cityInput) {
        searchButton.addEventListener('click', () => {
            const city = cityInput.value.trim();
            if (city) {
                fetchAndDisplayWeather(city);
            } else {
                alert('Por favor, digite o nome de uma cidade.');
            }
        });

        cityInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    } else {
        if (!searchButton) console.error("Elemento com id 'search-btn' não encontrado.");
        if (!cityInput) console.error("Elemento com id 'city-input' não encontrado.");
    }

    if (changeUnitButton) {
        changeUnitButton.addEventListener('click', toggleTemperatureUnit);
    } else {
        console.error("Elemento com id 'change-btn' não encontrado.");
    }
});