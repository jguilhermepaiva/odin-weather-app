import './styles.css';
import sunIcon from './assets/sun.png'; 
import moonIcon from './assets/moon.png';

// --- VARIÁVEIS GLOBAIS PARA MANTER O ESTADO ---
let currentWeatherData = null; // Armazena os dados da API (sempre em Celsius)
let currentUnit = 'C';       // Unidade de exibição atual: 'C' ou 'F'
let lastCitySearched = 'Recife'; // Cidade padrão ou última pesquisada

// --- FUNÇÃO PARA BUSCAR DADOS DA API (Sua versão, com a chave e tratamento de erro) ---
async function getWeatherData(city) {
    const apiKey = 'XTZYBFUFSXQBJ3ZHED9CZ3BH5'; // Sua chave da API
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;



    let alertWasShown = false;

    try {
        const response = await fetch(apiUrl, { mode: 'cors' });

        if (!response.ok) {
            let errorMessage = `Erro HTTP: ${response.status}`;
            try {
                const errorData = await response.json();
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                } else if (response.statusText) {
                    errorMessage = response.statusText;
                }

                if (response.status === 400 && (errorMessage.includes("Invalid location") || errorMessage.includes("Bad data"))) {
                    alert(`Cidade "${city}" não encontrada ou inválida. Verifique o nome e tente novamente.`);
                    alertWasShown = true;
                } else if (response.status === 401 || response.status === 403) {
                    alert('Erro de autenticação com o serviço de clima. Verifique a sua chave da API.');
                    alertWasShown = true;
                }
            } catch (e) {
                console.warn("[getWeatherData] Não foi possível analisar a resposta de erro como JSON.", e);
                const errorText = await response.text().catch(() => "Não foi possível ler o corpo do erro como texto.");
            }
            console.error(`[getWeatherData] Falha ao buscar dados para "${city}". Status: ${response.status}, Mensagem: ${errorMessage}`);
            if (!alertWasShown) {
                alert(`Não foi possível obter os dados do clima para "${city}". Verifique o console para mais detalhes.`);
            }
            return null;
        }
        const data = await response.json();
        // console.log('[getWeatherData] Sucesso! Dados JSON recebidos:', data);
        return data;
    } catch (error) {
        console.error("[getWeatherData] Erro no bloco catch (ex: problema de rede):", error);
        alert("Ocorreu um erro de conexão ao tentar buscar os dados do clima. Verifique sua internet.");
        return null;
    }
}

// --- FUNÇÃO UTILITÁRIA PARA CONVERTER TEMPERATURA ---
function convertCelsiusToFahrenheit(tempCelsius) {
    return (tempCelsius * 9/5) + 32;
}

// --- FUNÇÃO PARA ATUALIZAR O DOM COM OS DADOS E A UNIDADE CORRETA ---
function renderWeatherDisplay() {
    const changeBtn = document.getElementById('change-btn');

    if (!currentWeatherData) {
        document.getElementById('city-name').textContent = 'Busque por uma cidade';
        document.getElementById('current-temp').textContent = '-';
        document.getElementById('current-condition').textContent = '';
        document.getElementById('high-temp').textContent = 'Máx: -';
        document.getElementById('low-temp').textContent = 'Mín: -';
        if (changeBtn) changeBtn.disabled = true; // Desabilita o botão se não há dados
        return;
    }

    if (changeBtn) changeBtn.disabled = false; // Habilita o botão se há dados

    const currentConditions = currentWeatherData.currentConditions;
    const forecastToday = currentWeatherData.days && currentWeatherData.days[0];

    if (!currentConditions || !forecastToday) {
        console.error('Estrutura de dados do clima inválida em currentWeatherData.');
        document.getElementById('city-name').textContent = `Erro ao processar dados para ${lastCitySearched}.`;
        // Limpar outros campos...
        return;
    }

    // As temperaturas em currentWeatherData.currentConditions.temp, etc., estão SEMPRE em Celsius
    let displayTemp = parseFloat(currentConditions.temp);
    let displayTempMax = parseFloat(forecastToday.tempmax);
    let displayTempMin = parseFloat(forecastToday.tempmin);
    let unitSymbol = '°C';

    if (currentUnit === 'F') {
        displayTemp = convertCelsiusToFahrenheit(displayTemp);
        displayTempMax = convertCelsiusToFahrenheit(displayTempMax);
        displayTempMin = convertCelsiusToFahrenheit(displayTempMin);
        unitSymbol = '°F';
    }
    // Se currentUnit for 'C', não fazemos nada, pois os valores já estão corretos.

    const round = (num) => Math.round(num * 10) / 10;

    document.getElementById('city-name').textContent = currentWeatherData.resolvedAddress || lastCitySearched;
    document.getElementById('current-temp').textContent = `${round(displayTemp)}${unitSymbol}`;
    document.getElementById('current-condition').textContent = currentConditions.conditions;
    document.getElementById('high-temp').textContent = `Máx: ${round(displayTempMax)}${unitSymbol}`;
    document.getElementById('low-temp').textContent = `Mín: ${round(displayTempMin)}${unitSymbol}`;

    changeTemperatureStyle(); // Chama a função para aplicar o estilo baseado na temperatura
    updateToggleButtonText();
}

// --- FUNÇÃO PARA ATUALIZAR O TEXTO DO BOTÃO DE ALTERNÂNCIA DE UNIDADE ---
function updateToggleButtonText() {
    const toggleButton = document.getElementById('change-btn');
    if (toggleButton) {
        toggleButton.textContent = `Mudar para ${currentUnit === 'C' ? '°F' : '°C'}`;
    }
}

// --- FUNÇÃO PRINCIPAL PARA BUSCAR NOVOS DADOS E INICIAR A EXIBIÇÃO ---
async function fetchAndDisplayWeather(city) {
    lastCitySearched = city; // Atualiza a última cidade pesquisada

    document.getElementById('city-name').textContent = `Carregando dados para ${city}...`;
    document.getElementById('current-temp').textContent = '';
    document.getElementById('current-condition').textContent = '';
    document.getElementById('high-temp').textContent = '';
    document.getElementById('low-temp').textContent = '';
    const changeBtn = document.getElementById('change-btn');
    if (changeBtn) changeBtn.disabled = true;

    const dataFromAPI = await getWeatherData(city); // Busca os dados

    if (dataFromAPI) {
        currentWeatherData = dataFromAPI; // ARMAZENA os dados globalmente (em Celsius)
        currentUnit = 'C';                // SEMPRE que novos dados são buscados, resetamos para Celsius
        renderWeatherDisplay();           // Chama a função para exibir no DOM
    } else {
        // Se getWeatherData falhou, currentWeatherData pode já ser null ou podemos explicitamente
        currentWeatherData = null; // Garante que está nulo se a busca falhar
        renderWeatherDisplay(); // Chama render para limpar a tela ou mostrar msg de erro
    }
    // O botão será reabilitado dentro de renderWeatherDisplay se currentWeatherData for válido
    
}

// --- FUNÇÃO PARA ALTERNAR A UNIDADE DE TEMPERATURA (NÃO BUSCA NOVOS DADOS) ---
function toggleTemperatureUnit() {
    if (!currentWeatherData) { // Só faz algo se já tivermos dados carregados
        alert("Por favor, busque os dados de uma cidade primeiro.");
        return;
    }

    currentUnit = (currentUnit === 'C') ? 'F' : 'C';

    renderWeatherDisplay();
}

async function changeTemperatureStyle (){
    const currentConditions = currentWeatherData.currentConditions;
    const container = document.querySelector('.app-container');
    const weatherIcon = document.querySelector('.weather-icon');
    if(currentConditions.temp >= 20) {
        weatherIcon.src = sunIcon; 
        document.body.classList.add('warm');
        container.classList.add('warm');
        document.body.classList.remove('cold');
        container.classList.remove('cold');
    } else {
        weatherIcon.src = moonIcon;
        document.body.classList.add('cold');
        container.classList.add('cold');
        document.body.classList.remove('warm');
        container.classList.remove('warm');
    }
}

// --- CONFIGURAÇÃO DOS EVENT LISTENERS QUANDO O DOM ESTIVER PRONTO ---
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const changeUnitButton = document.getElementById('change-btn'); // Botão para alternar unidade

    // Carrega dados da cidade padrão ao iniciar e atualiza o texto do botão
    if (lastCitySearched) {
        fetchAndDisplayWeather(lastCitySearched);
    } else {
        updateToggleButtonText(); // Garante que o texto do botão está correto mesmo sem dados
        renderWeatherDisplay(); // Limpa a tela se não houver cidade padrão
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
                event.preventDefault();
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