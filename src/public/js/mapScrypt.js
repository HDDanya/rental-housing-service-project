const apartId = document.querySelector('#oneApartId');
const houseId = document.querySelector('#oneHouseId');
const flatId = document.querySelector('#oneFlatId');

const numId = (apartId?.value.split(','));
const numIdHouse = (houseId?.value.split(','));
console.log(numIdHouse);
const numIdFlat = (flatId?.value.split(','));

const newHs = numIdHouse?.map((el) => Number(el));
const newAP = numId?.map((el) => Number(el));
const newFl = numIdFlat?.map((el) => Number(el));

function init() {
    const myMap = new ymaps.Map('map', {
        center: newAP || newFl || newHs,
        zoom: 17,
    }, {
        searchControlProvider: 'yandex#search',
    });
}
ymaps.ready(init);
