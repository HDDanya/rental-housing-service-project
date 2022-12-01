const React = require('react');

const Layout = require('./Layout');

function Flat({ flat, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        {/* <a href="/" className="back">&laquo; На Главную</a> */}
        <div className="cards">
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
                {user?.email === 'admin@gmail.com' ? (<a href={`/flat/update/${el.id}`} className="btn btn-primary">Редактировать</a>) :
                  (<a href={`/tasks/${el.id}`} className="btn btn-primary">Подробнее</a>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Flat;
