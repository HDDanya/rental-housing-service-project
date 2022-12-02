const React = require('react');

const Layout = require('./Layout');

function Main({
  flat, house, apartment, user,
}) {
  return (
    <Layout user={user}>
      {/* <script defer src="/js/moreBtn.js" /> */}

      <div className="container">
        <div data-cards="123" className="cards">
          {flat.map((el_flat) => (
            <a href={`/home/flat/${el_flat.id}`}>

              <div className="card" style={{ width: '16rem' }} key={el_flat.id}>
                <img className="favourite-cart" src="/img/favourite.svg" alt="favourite" />
                <div className="card-body">
                  <figure className="figure">
                    <img src={el_flat.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                  </figure>
                  <a className="card-text">
                    Комната
                    {' '}
                    {el_flat.size}
                    {' '}
                    м²
                  </a>
                  <a className="card-text">
                    Цена:
                    {' '}
                    {el_flat.price}
                    {' '}
                    ₽ в месяц
                  </a>
                  <a className="card-text">
                    Москва
                    {' '}
                    {el_flat.adress}
                    ,
                    {' '}
                    {el_flat.floor}
                    -й этаж
                  </a>
                  {/* {user?.email === 'admin@gmail.com' ? (<a href={`/apart/update/${entry.id}`} className="btn btn-primary">Редактировать</a>) :
                                    (<a href={`/tasks/${entry.id}`} className="btn btn-primary">Подробнее</a>
                                    )} */}
                </div>
              </div>
            </a>
          ))}

          {house.map((el_house) => (
            <a href={`/home/house/${el_house.id}`}>

              <div className="card" style={{ width: '16rem' }} key={el_house.id}>
                <img className="favourite-cart" src="/img/favourite.svg" alt="favourite" />
                <div className="card-body">
                  <figure className="figure">
                    <img src={el_house.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                  </figure>
                  <a className="card-text">
                    Дом
                    {' '}
                    {el_house.size}
                    {' '}
                    м²
                  </a>
                  <a className="card-text">
                    Цена:
                    {' '}
                    {el_house.price}
                    {' '}
                    ₽ в месяц
                  </a>
                  <a className="card-text" />
                  <a className="card-text">
                    Москва
                    {' '}
                    {el_house.adress}

                    {' '}

                  </a>
                  {/* <a href={`/home/house/${el_house.id}`} className="btn btn-primary">Подробнее</a> */}
                  {/* <a href="#" data-delBtn={entry.id} className="m-2 btn btn-danger">DELETE</a> */}
                </div>
              </div>
            </a>
          ))}

          {apartment.map((el_apart) => (

            <a href={`/home/apart/${el_apart.id}`}>

              <div className="card" style={{ width: '16rem' }} key={el_apart.id}>
                <img className="favourite-cart" src="/img/favourite.svg" alt="favourite" />
                <div className="card-body">
                  <figure className="figure">
                    <img src={el_apart.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                  </figure>
                  <a className="card-text">

                    Квартира
                    {' '}
                    {el_apart.size}
                    {' '}
                    м²
                  </a>
                  <a className="card-text">
                    Цена:
                    {' '}
                    {el_apart.price}
                    {' '}
                    ₽ в месяц
                  </a>
                  <a className="card-text" />
                  <a className="card-text">
                    Москва
                    {' '}
                    {el_apart.adress}

                    ,
                    {' '}
                    {el_apart.floor}
                    -й этаж

                    {' '}
                  </a>
                  {/* <a href={`/home/apart/${el_apart.id}`} className="btn btn-primary">Подробнее</a> */}

                  {/* <a href="#" data-delBtn={entry.id} className="m-2 btn btn-danger">DELETE</a> */}
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>

    </Layout>
  );
}

module.exports = Main;
