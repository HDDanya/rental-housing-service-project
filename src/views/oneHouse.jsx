const React = require('react');

const Layout = require('./Layout');

module.exports = function OneHouse({ oneHouseItem, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="cards">
          <div className="card" style={{ width: '16rem' }}>
            <div className="card-body">
              <figure className="figure">
                <img src={oneHouseItem.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
              </figure>
              <p className="card-text">
                Дом
                {' '}
                {oneHouseItem.size}
                {' '}
                м²
              </p>
              <p className="card-text">
                {oneHouseItem.price}
                {' '}
                ₽ в месяц
              </p>
              <p className="card-text" />
              <p className="card-text">
                Москва
                {' '}
                {oneHouseItem.adress}
                {' '}
              </p>
              {/* <a href={`/flat/${oneFlatItem.id}`} className="btn btn-primary moreBtn">Подробнее</a> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
