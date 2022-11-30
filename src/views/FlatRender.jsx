
const React = require('react');
const Layout = require('./Layout');

function FlatRender({
  flat, house, apartment, user,
}) {
  return (
    <Layout user={user}>
      <main className="main">

        <br />
        <div data-cards="123" className="cards">
          {flat?.map((entry) => (
            <div className="card" style={{ width: '16rem' }} key={entry.id}>
              <div className="card-body">
                <figure className="figure">
                  <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                </figure>
                <p className="card-text">
                  Комната
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
                <p className="card-text">
                  Москва
                  {' '}
                  {entry.adress}
                  ,
                  {' '}
                  {entry.floor}
                  -й этаж
                </p>
                <a href={`/tasks/${entry.id}`} className="btn btn-primary">Детали</a>
                {/* <a href="#" data-delBtn={entry.id} className="m-2 btn btn-danger">DELETE</a> */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

module.exports = FlatRender;
