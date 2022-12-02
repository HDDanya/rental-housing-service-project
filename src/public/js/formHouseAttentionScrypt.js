const subBtn = document.querySelector('#houseBtn');
const formHouse = document.querySelector('[data-formHouse]');

subBtn.addEventListener('click', async (event) => {

    event.preventDefault();
    const adress = formHouse.adress.value;
    const photo = formHouse.photo.value;
    const price = formHouse.price.value;
    const size = formHouse.size.value;
    const cord = formHouse.cord.value;
    const response = await fetch('/form/house', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adress, photo, price, size, cord })
    });
    console.log(response.status);
    if (response.status === 200) {
        formHouse.reset();
    }
})