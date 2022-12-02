const React = require('react');

const Layout = require('./Layout');

module.exports = function OneHouse({ oneHouseItem, user }) {
  return (
    <Layout user={user}>
      <div className="container one-item-container">
        <div className="cards one-item-cards">
          <div className="one-item-column">

            <div className="one-item-row">
              <ul className="list-group list-group-flush-card">
                <img src={oneHouseItem.photo} className="card-img-top figure-img img-fluid rounded one-item-img" alt="" />
                <li className="list-group-item">
                  Квартира
                  {' '}
                  {oneHouseItem.size}
                  {' '}
                  м²
                </li>
                <li className="list-group-item">
                  Цена
                  {' '}
                  {oneHouseItem.price}
                  {' '}
                  ₽ в месяц
                </li>
                <li className="list-group-item">
                  Москва,
                  {' '}
                  {oneHouseItem.adress}
                  ,
                  {' '}
                  {oneHouseItem.floor}
                  -й этаж
                </li>
                {/* <li className="list-group-item">some text</li>
              <li className="list-group-item">some text</li>
              <li className="list-group-item">some text</li> */}
              </ul>
            </div>

          </div>
          <input id='oneHouseId' type="hidden" value={oneHouseItem.cord} />
          <div id='map' className='map'></div>
          {/* <div className="text-one-item">
            <p>
              Предлагается в аренду дом 2 000 м2 на участке площадью 64,27 соток,
              с выполненным ландшафтным дизайном. В центре поселка располагается живописное большое озеро
              с островами и элегантным рестораном на берегу. Помимо центрального парка на территории поселка
              есть еще три рекреационные зоны сад камней и цветов, лабиринт из стриженого кустарника, парк
              с ручьями и фонтанами. Величественные сторожевые башни, фонтаны с готическими скульптурами, гроты,
              тенистые беседки, уютные павильоны и композиции из натурального камня гармонично вписываются в великолепный
              пейзаж. На тротуарах и на проезжей части, замощенной брусчаткой, установлено дизайнерское освещение.
              Протяженный участок прилегающего к поселку леса превращен ландшафтными дизайнерами в великолепный парк.
              Въезд в поселок осуществляется через контрольно-пропускные пункты, оборудованные шлагбаумами и системами
              видеонаблюдения. Безопасность жителей обеспечивается круглосуточно. Территория поселка огорожена,
              по периметру установлена система видеонаблюдения. В темное время суток сотрудники охранной службы
              осуществляют патрулирование территории.
            </p>
          </div> */}

        </div>

      </div>
    </Layout>
  );
};
