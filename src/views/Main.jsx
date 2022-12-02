const React = require('react');

const Layout = require('./Layout');

function Main({
  flat, house, apartment, user,
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
                <a href={`${el.id}`} className="btn btn-primary">Подробнее</a>
                {user?.email === 'admin@gmail.com'
                  ? <button className="delBtn" data-id={el.id} data-type='flat' >deleteCard</button> : null}
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
                <a href={`${el.id}`} className="btn btn-primary">Подробнее</a>
                {user?.email === 'admin@gmail.com'
                  ? <button className="delBtn" data-id={el.id} data-type='house' >deleteCard</button> : null}
                {/* <a href="#" data-delBtn={el.id} className="m-2 btn btn-danger">DELETE</a> */}
              </div>
            </div>
          ))}

          {apartment?.map((el) => (

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
                <a href={`${el.id}`} className="btn btn-primary">Подробнее</a>
                {user?.email === 'admin@gmail.com'
                  ? <button className="delBtn" data-id={el.id} data-type='apart' >deleteCard</button> : null}
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

module.exports = Main;
