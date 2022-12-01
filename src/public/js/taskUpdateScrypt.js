const updBtn = document.querySelector('[data-updateForm]');
const subBtn = document.querySelector('#update');

const updFlat = document.querySelector('[data-updateFlat]');
const flatBtn = document.querySelector('#updFlat');

const updHouse = document.querySelector('[data-updateHouse]');
const houseBtn = document.querySelector('#updHouse');

subBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const taskId = updBtn.id.value;
    const adress = updBtn.adress.value;
    const photo = updBtn.photo.value;
    const price = updBtn.price.value;
    const size = updBtn.size.value;
    const floor = updBtn.floor.value;
    const type = updBtn.type.value;
    const response = await fetch('/apart/update/:id', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, adress, photo, price, size, floor, type })
    });
});

houseBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const taskId = updHouse.id.value;
    const adress = updHouse.adress.value;
    const photo = updHouse.photo.value;
    const price = updHouse.price.value;
    const size = updHouse.size.value;
    const response = await fetch('/house/update/:id', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, adress, photo, price, size })
    });
});

flatBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const taskId = updFlat.id.value;
    const adress = updFlat.adress.value;
    const photo = updFlat.photo.value;
    const price = updFlat.price.value;
    const size = updFlat.size.value;
    const floor = updFlat.floor.value;
    const response = await fetch('/flat/update/:id', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, adress, photo, price, size, floor })
    });
});
