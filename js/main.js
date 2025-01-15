let history = JSON.parse(localStorage.getItem('calHistory')) || [];

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value) || '';
        if (display.value) {
            const entry = `${display.value} = ${result}`;
            history.unshift(entry);
            localStorage.setItem('calHistory', JSON.stringify(history));
            updateHistoryDisplay();
        }
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function appendSing() {
    const display = document.getElementById('display');
    let currentValue = display.value;

    if (currentValue.startsWith('-')) {
        currentValue = currentValue.slice(1);
    } else {
        currentValue = '-' + currentValue;
    }
    document.getElementById('display').value = currentValue;
}

function updateHistoryDisplay() {
    const historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
}

function historyClean() {
    history = [];
    localStorage.removeItem('calHistory');
    updateHistoryDisplay();
}

function toggleHistory() {
    const historyCard = document.getElementById('historyCard');
    historyCard.classList.toggle('hidden');
    historyCard.classList.toggle('visible');
}

updateHistoryDisplay();
// test

