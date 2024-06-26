const form = document.querySelector('.form');
const submitButton = document.querySelector('.btn-submit');
const listModal = document.querySelector('#list-modal');
const itemList = document.querySelector('#itemList');
const closeListModalButton = document.querySelector('.close');
const newProductButton = document.querySelector('#newProductButton');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);

    fetch("http://localhost:8080/product", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(() => {
            fetch('http://localhost:8080/product')
                .then(response => response.json())
                .then(data => {
                    listModal.style.display = 'block';
                    itemList.innerHTML = '';

                    data.forEach(item => {
                        const li = document.createElement("li");
                        const liContent = document.createTextNode(`${item.name} - ${item.price}`);
                        li.appendChild(liContent);
                        itemList.appendChild(li);
                    });
                })
                .catch(error => console.error('Erro ao buscar produtos:', error));
        });

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
});