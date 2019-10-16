function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var value = JSON.parse(str)
    return value;
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num,cuntry,coin) {
    return new Intl.NumberFormat(cuntry,{ style: 'currency', currency: coin }).format(num);
}