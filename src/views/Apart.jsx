const React = require('react');

const Layout = require('./Layout');

function Apart({ apart, user }) {
  return (
    <Layout user={user}>
      <div className="container"> 
        {/* <a href="/" className="back">&laquo; На Главную</a> */}
        <div className="cards">
          {apart?.map((el) => (
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
                  ? <button className="delBtn" data-id={el.id} data-type='apart' >deleteCard</button> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = { Apart };
