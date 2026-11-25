/* Лабораторна робота №4. Варіант n = 66.
   Номер елемента: (n mod 10) + 1 = (66 mod 10) + 1 = 7.
   7-й елемент <body> — заголовок «Улюблені фільми»,
   наступний (8-й) — нумерований список. */
const VARIANT = 66;
const TARGET_NUMBER = (VARIANT % 10) + 1; // 7

/* ---------- Завдання 1 ---------- */

// Кожен клік по елементу по черзі застосовує одну з двох пар кольорів.
function makeToggler(element, schemes) {
    let clicks = 0;
    element.addEventListener('click', function () {
        const scheme = schemes[clicks % schemes.length];
        element.style.backgroundColor = scheme.bg;
        element.style.color = scheme.text;
        clicks++;
    });
}

// 7-й елемент: пошук через getElementById()
const firstTarget = document.getElementById('target-1');
makeToggler(firstTarget, [
    { bg: '#1a73e8', text: '#ffffff' },
    { bg: '#f9ab00', text: '#000000' }
]);

// наступний елемент: пошук через querySelector()
const secondTarget = document.querySelector('ol.target-2');
makeToggler(secondTarget, [
    { bg: '#0b8043', text: '#ffffff' },
    { bg: '#fce8e6', text: '#a50e0e' }
]);

/* ---------- Завдання 2: кнопки під зображенням ---------- */

const STEP = 60;       // крок зміни ширини, px
const MIN_WIDTH = 60;
const MAX_WIDTH = 1200;
const photoBox = document.getElementById('photo-box');

function getPhoto() {
    return document.getElementById('photo');
}

// Додати зображення (якщо його немає)
document.getElementById('btn-add').addEventListener('click', function () {
    if (getPhoto()) return;
    const link = document.createElement('a');
    link.href = 'https://city-adm.lviv.ua/';
    link.target = '_blank';
    link.rel = 'noopener';

    const img = document.createElement('img');
    img.id = 'photo';
    img.src = 'city.jpg';
    img.alt = 'Площа Ринок у Львові';

    link.appendChild(img);
    photoBox.appendChild(link);
});

// Збільшити
document.getElementById('btn-grow').addEventListener('click', function () {
    const img = getPhoto();
    if (!img) return;
    img.style.width = Math.min(img.offsetWidth + STEP, MAX_WIDTH) + 'px';
});

// Зменшити
document.getElementById('btn-shrink').addEventListener('click', function () {
    const img = getPhoto();
    if (!img) return;
    img.style.width = Math.max(img.offsetWidth - STEP, MIN_WIDTH) + 'px';
});

// Видалити
document.getElementById('btn-remove').addEventListener('click', function () {
    const img = getPhoto();
    if (img) img.parentElement.remove();
});
