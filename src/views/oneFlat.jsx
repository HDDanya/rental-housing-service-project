const React = require('react');

const Layout = require('./Layout');

module.exports = function OneFlat({ oneFlatItem, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="cards">
          <div className="card" style={{ width: '16rem' }}>
            <div className="card-body">
              <figure className="figure">
                <img src={oneFlatItem.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
              </figure>
              <p className="card-text">
                Комната
                {' '}
                {oneFlatItem.size}
                {' '}
                м²
              </p>
              <p className="card-text">
                {oneFlatItem.price}
                {' '}
                ₽ в месяц
              </p>
              <p className="card-text">
                Москва
                {' '}
                {oneFlatItem.adress}
                ,
                {' '}
                {oneFlatItem.floor}
                -й этаж
              </p>
              {/* <a href={`/flat/${oneFlatItem.id}`} className="btn btn-primary moreBtn">Подробнее</a> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
