const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
    return (
        <Layout user={user}>
            <div className="container add-item-container">
                <div className="form__container">
                    <div className="form__flat">
                        <form data-formApart="formApart" className="row g-3 needs-validation item-add-form" noValidate>
                            <div className="col-md-5 input-div">
                                <label htmlFor="validationCustom01" className="form-label">Адрес</label>
                                <input name="adress" type="text" className="form-control" id="validationCustom01" value="" required />
                            </div>
                            <div className="col-md-5 input-div">
                                <label htmlFor="validationCustom02" className="form-label">URL картинки</label>
                                <input name="photo" type="url" className="form-control" id="validationCustom02" value="" required />
                            </div>
                            <div className="col-md-3 input-div">
                                <label htmlFor="validationCustomUsername" className="form-label">Цена: рубли/сутки</label>
                                <div className="input-group has-validation">
                                    <input name="price" type="number" className="form-control small-form-input" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div className="col-md-3 input-div">
                                <label htmlFor="validationCustom03" className="form-label">Количество комнат</label>
                                <input name="type" type="number" className="form-control small-form-input" id="validationCustom03" required />
                            </div>
                            <div className="col-md-3 input-div">
                                <label htmlFor="validationCustom03" className="form-label">Размер в кв.м</label>
                                <input name="size" type="number" className="form-control small-form-input" id="validationCustom03" required />
                            </div>
                            <div className="col-md-3 input-div">
                                <label htmlFor="validationCustom05" className="form-label">Этаж</label>
                                <input name="floor" type="number" className="form-control small-form-input" id="validationCustom05" required />
                            </div>
                            <div className="col-md-3 input-div">
                                <label htmlFor="validationCustom03" className="form-label">координаты</label>
                                <input name="cord" type="text" className="form-control small-form-input" id="validationCustom03" required />
                            </div>
                            <div className="col-12">
                                <button id="apartBtn" className="btn btn-primary" type="submit">Добавить</button>
                            </div>
                        </form>
                    </div>
                </div>
                <script defer src="/js/formApartAttentionScrypt.js" />
            </div>

        </Layout>
    );
};
