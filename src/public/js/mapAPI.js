module.exports = async function getMapApi() {
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [33.080569, 78.444949],
      zoom: 3.5,
      // controls: ['Real Estate'],
    }, {
      searchControlProvider: 'yandex#search',
    });
  });
};
