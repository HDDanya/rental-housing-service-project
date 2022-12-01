const React = require('react');
const Layout = require('./Layout');

function FavoriteRender({
  flat, appartament, house, user,
}) {
  return (
    <Layout user={user}>

      <div className="container">
        <a href="/" className="back">Главная</a>
        {/* <main className="main"> */}
        <div data-cards="123" className="cards">
          {flat?.map((el) => (
            <div className="card" style={{ width: '16rem' }} key={el.id}>
              <div className="card-body">
                <figure className="figure">
                  <img src={el.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                </figure>
                <p className="card-text">
                  Комната
                  {' '}
                  {el.size}
                  {' '}
                  м²
                </p>
                <p className="card-text">
                  {el.price}
                  {' '}
                  ₽ в месяц
                </p>
                <p className="card-text">
                  Москва
                  {' '}
                  {el.adress}
                  ,
                  {' '}
                  {el.floor}
                  -й этаж
                </p>
                <a href={`/tasks/${el.id}`} className="btn btn-primary">Подробнее</a>
                {/* <a href="#" data-delBtn={el.id} className="m-2 btn btn-danger">DELETE</a> */}
              </div>
            </div>
          ))}

          {house?.map((el) => (
            <div className="card" style={{ width: '16rem' }} key={el.id}>
              <div className="card-body">
                <figure className="figure">
                  <img src={el.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                </figure>
                <p className="card-text">
                  Дом
                  {' '}
                  {el.size}
                  {' '}
                  м²
                </p>
                <p className="card-text">
                  {el.price}
                  {' '}
                  ₽ в месяц
                </p>
                <p className="card-text" />
                <p className="card-text">
                  Москва
                  {' '}
                  {el.adress}

                  {' '}

                </p>
                <a href={`/tasks/${el.id}`} className="btn btn-primary">Детали</a>
                {/* <a href="#" data-delBtn={el.id} className="m-2 btn btn-danger">DELETE</a> */}
              </div>
            </div>
          ))}

          {appartament?.map((el) => (

            <div className="card" style={{ width: '16rem' }} key={el.id}>
              <div className="card-body">
                <figure className="figure">
                  <img src={el.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                </figure>
                <p className="card-text">

                  Квартира
                  {' '}
                  {el.size}
                  {' '}
                  м²
                </p>
                <p className="card-text">
                  {el.price}
                  {' '}
                  ₽ в месяц
                </p>
                <p className="card-text" />
                <p className="card-text">
                  Москва
                  {' '}
                  {el.adress}

                  ,
                  {' '}
                  {el.floor}
                  -й этаж

                  {' '}
                </p>
                <a href={`/tasks/${el.id}`} className="btn btn-primary">Детали</a>
                {/* <a href="#" data-delBtn={el.id} className="m-2 btn btn-danger">DELETE</a> */}
              </div>
            </div>
          ))}

        </div>
        {/* </main> */}
      </div>

    </Layout>
  );
}

module.exports = FavoriteRender;
