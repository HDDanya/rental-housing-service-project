
const React = require('react');
const Layout = require('./Layout');

function FlatRender({
  flat, user,
}) {
  return (
    <Layout user={user}>
      <main className="main">

        <br />
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
                <a href={`/tasks/${el.id}`} className="btn btn-primary">Детали</a>
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
