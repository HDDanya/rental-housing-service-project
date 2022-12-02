const React = require('react');

const Layout = require('./Layout');

module.exports = function OneApart({ oneApartItem, user }) {
  return (
    <Layout user={user}>
      <div className="container one-item-container">
        <div className="cards one-item-cards">
          <div className="one-item-column">

            <div className="one-item-row">
              <ul className="list-group list-group-flush-card">
                <img src={oneApartItem.photo} className="card-img-top figure-img img-fluid rounded one-item-img" alt="" />
                <li className="list-group-item">
                  Квартира
                  {' '}
                  {oneApartItem.size}
                  {' '}
                  м²
                </li>
                <li className="list-group-item">
                  Цена
                  {' '}
                  {oneApartItem.price}
                  {' '}
                  ₽ в месяц
                </li>
                <li className="list-group-item">
                  Москва,
                  {' '}
                  {oneApartItem.adress}
                  ,
                  {' '}
                  {oneApartItem.floor}
                  -й этаж
                </li>
                {/* <li className="list-group-item">some text</li>
              <li className="list-group-item">some text</li>
              <li className="list-group-item">some text</li> */}
              </ul>
            </div>

          </div>
          <input id= 'oneApartId' type="hidden" value={oneApartItem.cord}/>
          <div id='map' className='map'></div>
          {/* <div className="text-one-item">
            <p>
              Предлагается трех уровневый пентхаус с новым дизайнерским ремонтом общей площадью 650 кв., м. 
              Функциональная планировка включает: 1-й уровень: кабинет-гостиная с дровяным камином, большая мастер 
              спальня с камином 150 кв., м, женской и мужской гардеробными с окнами, двумя санузлами, детская со своим 
              санузлом и гардеробной. 2-й уровень: парадная гостиная со стеклянным куполом 174 кв. м, барная стойка, 
              чайная зона; столовая с дровяной камин, кухня, комната-спальня для персонала, закрытая профессиональная кухня, 
              парадная лестница на первый уровень, балкон. 3-й уровень: три спальни каждая со своим санузлом, зона СПА, 
              хамам, массажный кабинет, приватная терраса. Квартира укомплектована мебелью Cornelio Cappellini, Provasi, 
              Visionnaire, сантехникой Kohler, техникой Bozе. Интерьер квартиры выполнен в классическом стиле. 
              В отделке использовались дорогостоящие материалы: итальянский мрамор, полудрагоценные камни, натуральная кожа. 
              На первых двух уровнях действует система "умный дом". Высокие потолки 3,8 м.
            </p>
          </div> */}

        </div>

      </div>
    </Layout>
  );
};
