/*Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і
 кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється
 модальне вікно, на кнопку "Закрити" — зникає.*/

const openButton = document.getElementById('open-button');
const modalWindow = document.getElementById('modal-window');

openButton.addEventListener('click', (event) => {
    const modalWindow = document.getElementById('modal-window')
    modalWindow.style.display = 'block';
    openButton.style.display = 'none';

})

const closeButton = document.getElementById('close-button')
closeButton.addEventListener('click', (event) => {
    modalWindow.style.display = 'none';
    openButton.style.display = 'block'
})

