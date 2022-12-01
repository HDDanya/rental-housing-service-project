const React = require('react');

const Layout = require('./Layout');

module.exports = function OneApart({ oneApartItem, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="cards">
          <div className="card" style={{ width: '16rem' }}>
            <div className="card-body">
              <figure className="figure">
                <img src={oneApartItem.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
              </figure>
              <p className="card-text">
                Квартира
                {' '}
                {oneApartItem.size}
                {' '}
                м²
              </p>
              <p className="card-text">
                {oneApartItem.price}
                {' '}
                ₽ в месяц
              </p>
              <p className="card-text">
                Москва
                {' '}
                {oneApartItem.adress}
                ,
                {' '}
                {oneApartItem.floor}
                -й этаж
              </p>
              {/* <a href={`/apart/${oneApart.id}`} className="btn btn-primary moreBtn">Подробнее</a> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
