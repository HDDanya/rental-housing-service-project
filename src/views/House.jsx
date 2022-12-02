const React = require('react');

const Layout = require('./Layout');

module.exports = function House({ house, user }) {
  return (
    <Layout user={user}>
      <script defer src="js/deleteCards.js" />
      <div className="container">
        <div data-cards="123" className="cards">
          {user?.email === 'admin@gmail.com' ? (
            <>
              {house?.map((entry) => (
                <div className="card" style={{ width: '16rem' }} key={entry.id}>
                  <img className="favourite-cart" src="/img/favourite.svg" alt="favourite" />
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
                    <div className="buttons">
                      <a href={`/house/update/${entry.id}`} className="btn editBtn">Изменить</a>
                      <button className="btn delBtn" data-id={entry.id} data-type="house">Удалить</button>
                    </div>
                  </div>
                </div>
              ))}

            </>
          )
            : (
              <>
                {house?.map((entry) => (
                  <a href={`/home/house/${entry.id}`}>

                    <div className="card" style={{ width: '16rem' }} key={entry.id}>
                      <img className="favourite-cart" src="/img/favourite.svg" alt="favourite" />
                      <div className="card-body">
                        <figure className="figure">
                          <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                        </figure>
                        <a className="card-text-house">
                          Дом
                          {' '}
                          {entry.size}
                          {' '}
                          м²
                        </a>
                        <a className="card-text-house">
                          {entry.price}
                          {' '}
                          ₽ в месяц
                        </a>
                        <a className="card-text-house" />
                        <a className="card-text-house">
                          Москва,
                          {' '}
                          {entry.adress}
                          {' '}
                        </a>
                      </div>
                    </div>
                  </a>
                ))}

              </>
            )}
        </div>
      </div>
    </Layout>
  );
};
