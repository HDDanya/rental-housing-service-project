const subBtn = document.querySelector('#apartBtn');
const formApart = document.querySelector('[data-formApart]');

subBtn.addEventListener('click', async (event) => {

    event.preventDefault();
    const adress = formApart.adress.value;
    const photo = formApart.photo.value;
    const price = formApart.price.value;
    const size = formApart.size.value;
    const floor = formApart.floor.value;
    const type = formApart.type.value;
    const cord = formApart.cord.value;
    const response = await fetch('/form/apartment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adress, photo, price, size, floor, type, cord })
    });
    console.log(response.status);
    if (response.status === 200) {
        formApart.reset();
    }
})