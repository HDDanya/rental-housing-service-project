const React = require('react');
const Layout = require('./Layout');

module.exports = function UpdateHouse({ user, task }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="form__container">
          <div className="form__flat">
            <form data-updateHouse="updHouse" className="row g-3 needs-validation" noValidate>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">Адрес</label>
                <input name="adress" type="text" className="form-control" id="validationCustom01" value={`${task.adress}`} required />

              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">Фото(url)</label>
                <input name="photo" type="text" className="form-control" id="validationCustom02" value={`${task.photo}`} required />

              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustomUsername" className="form-label">Цена: рубли/сутки</label>
                <div className="input-group has-validation">
                  <input name="price" type="number" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={`${task.price}`} required />

                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom03" className="form-label">Размер в кв.м</label>
                <input name="size" type="number" className="form-control" id="validationCustom03" value={`${task.size}`} required />
                <input name="id" type="hidden" value={`${task.id}`} />

              </div>
                            <div className="col-md-3">
                                <label for="validationCustom03" className="form-label">Координаты</label>
                                <input name='cord' type="number" className="form-control" id="validationCustom03" value={`${task.cord}`} required />
                                <div className="invalid-feedback">
                                    Please provide a valid number.
                                </div>
                            </div>
              <div className="col-12">
                <button id="updHouse" className="btn btn-primary formEditBtn" type="submit">Редактировать</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script defer src="/js/taskUpdateScrypt.js" />
    </Layout>
  );
};
