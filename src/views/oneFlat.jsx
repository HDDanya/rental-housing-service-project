const React = require('react');

const Layout = require('./Layout');

module.exports = function OneFlat({ oneFlatItem, user }) {
  return (
    <Layout user={user}>
      <div className="container one-item-container">
        <div className="cards one-item-cards">
          <div className="one-item-column">

            <div className="one-item-row">
              <ul className="list-group list-group-flush-card">
                <img src={oneFlatItem.photo} className="card-img-top figure-img img-fluid rounded one-item-img" alt="" />
                <li className="list-group-item">
                  Квартира
                  {' '}
                  {oneFlatItem.size}
                  {' '}
                  м²
                </li>
                <li className="list-group-item">
                  Цена
                  {' '}
                  {oneFlatItem.price}
                  {' '}
                  ₽ в месяц
                </li>
                <li className="list-group-item">
                  Москва,
                  {' '}
                  {oneFlatItem.adress}
                  ,
                  {' '}
                  {oneFlatItem.floor}
                  -й этаж
                </li>
                {/* <li className="list-group-item">some text</li>
              <li className="list-group-item">some text</li>
              <li className="list-group-item">some text</li> */}
              </ul>
            </div>

          </div>
          {/* <input id='oneFlatId' type="hidden" value={oneFlatItem.cord} />
          <div id='map' className='map'></div> */}
          <div className="text-one-item">
            <p>
              Пентхаус, 2 -комн. Гагринская 10, для 8 гостей

              Миллениум Тауэр с большой закрытой территорией, детскими и спорт площадками, ландшафтными зонами.

              Рядом пляжи, остановка транспорта, 2 столовые и кафе с домашней кухней, 3 ресторана, 3 супермаркета, спортклуб, караоке, банкоматы, 2 массажных салона, детский клуб, 2 театра, артКафе и спаСалон - вся инфраструктура заслуженно любимого района — «Светлана».

              Парковка в домe по записи или в многоуровневом паркинге рядом (450₽/ночь).

              До моря - 10 сек ходьбы через красивый сквер, до бассейна с морской водой — 6 мин.

              Спальня: комфортная кровать 160*200, шкаф, кресло, балкон, детская кровать, кондиционер;

              Санузел: ванна, фен, утюг, жидкое мыло, туалетная бумага, полотенца (смена 1 раз в неделю), стиральная машина;

              Прихожая: вешалка;

              Панорамные окна и балкон, виды 180• на море и горы; уличная обеденная мебель, подвесной лежак, телескоп;

              Многоуровневый паркинг (450₽/ночь)

              24 этаж. Спальные места: 2-спальная кровать 160*200; 3 2-спальных диван-кровати;
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
};
