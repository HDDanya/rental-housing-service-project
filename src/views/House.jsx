const React = require('react');

const Layout = require('./Layout');

module.exports = function House({ house, user }) {
  return (
    <Layout user={user}>
      <div className="container">
{user.email === 'admin@gmail.com' ? (
   <div data-cards="123" className="cards">
          {house?.map((entry) => (
            <div className="card" style={{ width: '16rem' }} key={entry.id}>
              <div className="card-body">
                <figure className="figure">
                  <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                </figure>
                <p className="card-text">
                  Дом
                  {' '}
                  {entry.size}
                  {' '}
                  м²
                </p>
                <p className="card-text">
                  {entry.price}
                  {' '}
                  ₽ в месяц
                </p>
                <p className="card-text" />
                <p className="card-text">
                  Москва
                  {' '}
                  {entry.adress}
                  {' '}
                </p>
                <a href={`/house/update/${entry.id}`} className="btn btn-primary">Редактировать</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      ):
       (
        <main className="main">

          <br />
          <div data-cards="123" className="cards cards-house">
            {house?.map((entry) => (
              <a href={`/home/house/${entry.id}`}>

                <div className="card" style={{ width: '16rem' }} key={entry.id}>
                  <div className="card-body">
                    <figure className="figure">
                      <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                    </figure>
                    <p className="card-text">
                      Дом
                      {' '}
                      {entry.size}
                      {' '}
                      м²
                    </p>
                    <p className="card-text">
                      {entry.price}
                      {' '}
                      ₽ в месяц
                    </p>
                    <p className="card-text" />
                    <p className="card-text">
                      Москва
                      {' '}
                      {entry.adress}
                      {' '}
                    </p>
                    {/* <a href={`/home/house/${entry.id}`} className="btn btn-primary moreBtn">Подробнее</a> */}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
   )}
    </Layout>
  );
};
