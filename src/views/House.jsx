const React = require('react');

const Layout = require('./Layout');

function House({ house, user }) {
  return (
    <Layout user={user}>
      <div className="container">

        <main className="main">

          <br />
          <div data-cards="123" className="cards">
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
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

    </Layout>
  );
};


module.exports = House;
