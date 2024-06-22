const submitButton = document.querySelector('.btn-submit');
const listModal = document.querySelector('#list-modal');
const closeListModalButton = document.querySelector('.close');
const newProductButton = document.querySelector('#newProductButton');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    listModal.style.display = 'block';
});

closeListModalButton.addEventListener('click', () => {
    listModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === listModal) {
        listModal.style.display = 'none';
    }
});

newProductButton.addEventListener('click', () => {
    listModal.style.display = 'none';
    //reserved for sending to backend logic
});
