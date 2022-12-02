const subBtn = document.querySelector('#flatBtn');
const formFlat = document.querySelector('[data-formFlat]');

subBtn.addEventListener('click', async (event) => {

  event.preventDefault();
  const adress = formFlat.adress.value;
  const photo = formFlat.photo.value;
  const price = formFlat.price.value;
  const size = formFlat.size.value;
  const floor = formFlat.floor.value;
  const cord = formFlat.cord.value;
  const response = await fetch('/form/flat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ adress, photo, price, size, floor, cord })
  });
  console.log(response.status);
  if (response.status === 200) {
    formFlat.reset();
  }
})