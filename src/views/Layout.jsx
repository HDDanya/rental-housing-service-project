const React = require('react');

module.exports = function Layout({ children, user }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/img/favicon.png" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/css/index.css" />
                <link rel="stylesheet" href="/styles/main.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <title>ADBoard</title>
            </head>

            <body>
                {user ? (
                    <header className="header">
                        <div className="container-header">
                            <nav className="navbar navbar-expand-lg bg-light nav-big">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="/"><img src="/img/logo.png" alt="logo" /></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 exit-ul">
                                            <li className="nav-item">
                                                <a className="nav-link active apart" aria-current="page" href="/apart">Квартира</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link floor" href="/flat">Комната</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link house" href="/house">Дом</a>
                                            </li>
                                            <img className="img-heart" src="/img/heart.png" alt="heart" />
                                            <li className="nav-item">
                                                <a className="nav-link favourite" href="#">Избранное</a>
                                            </li>
                                            {user.email === 'admin@gmail.com' ? (
                                                <>
                                                    <img className="img-login" src="/img/add.png" alt="login" />
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Создать
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="/form/apartment">Квартира</a></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><a className="dropdown-item" href="/form/flat">Комната</a></li>
                                                            <li><hr className="dropdown-divider" /></li>
                                                            <li><a className="dropdown-item" href="/form/house">Дом</a></li>
                                                        </ul>
                                                    </li>

                                                </>
                                            ) : ('')}
                                            <img className="img-exit" src="/img/exit.png" alt="exit" />
                                            <li className="nav-item">
                                                <a className="nav-link exit" href="/logout">Выход</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                ) : (
                    <header className="header">
                        <div className="container-header">
                            <nav className="navbar navbar-expand-lg bg-light nav-big">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="/"><img src="/img/logo.png" alt="logo" /></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active apart" aria-current="page" href="/apart">Квартира</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link floor" href="/flat">Комната</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link house" href="/house">Дом</a>
                                            </li>
                                            <img className="img-heart" src="/img/heart.png" alt="heart" />
                                            <li className="nav-item">
                                                <a className="nav-link favourite" href="#">Избранное</a>
                                            </li>
                                            <img className="img-login" src="/img/login.png" alt="login" />
                                            <li className="nav-item">
                                                <a className="nav-link register" href="/register">Регистрация</a>
                                            </li>
                                            <img className="img-exit" src="/img/exit.png" alt="exit" />
                                            <li className="nav-item">
                                                <a className="nav-link exit" href="/login">Вход</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                )}
                <div className="filter-back">
                    <div className="selectors">
                        <select className="form-select">
                            <option selected>Квартира</option>
                            <option value="1">Комната</option>
                            <option value="2">Дом</option>
                        </select>

                        <select className="form-select">
                            <option selected>Новостройка</option>
                            <option value="1">Вторичка</option>
                        </select>

                        <select className="form-select">
                            <option selected>1 комната</option>
                            <option value="1">2 комнаты</option>
                            <option value="1">3 комнаты</option>
                            <option value="1">3+ комнаты</option>
                        </select>

                        <button className="show-btn" type="submit">Показать</button>

                    </div>
                </div>
                {/* <div id='map' className='map'></div> */}
                <script src="https://api-maps.yandex.ru/2.1/?apikey=19893664-926c-467a-899d-17434ee36ce2&lang=ru_RU" /> 
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                    crossOrigin="anonymous"
                />
                <script defer src="/js/mapScrypt.js" />
                {children}
            </body>
            <footer>
                <div className="footer-container">
                    <div className="left-block">
                        <a className="footer-logo" href="/"><img src="/img/logo.png" alt="logo" /></a>
                        <span>УДОБНЫЙ ПОИСК</span>
                        <span>АРЕНДНОЙ НЕДВИЖИМОСТИ</span>
                        <span>© Bears-2022</span>
                    </div>

                    <div className="center-block">
                        <a className="center-block-a" href="/apart">Квартиры</a>
                        <a className="center-block-a" href="/flat">Комнаты</a>
                        <a className="center-block-a" href="/house">Дома</a>
                    </div>

                    <div className="right-block">
                        <a className="right-block-a" href="/docs/policy.html">Политика конфиденциальности</a>
                        <a className="right-block-a" href="/docs/agreement.html">Пользовательское соглашение</a>

                        <div className="icons-foo">
                            <a href="https://t.me/elbrusbootcamp1"><img className="links-telegram" src="/img/telegram.png" alt="telegarm" /></a>
                            <a href="mailto:name@email.com"><img className="links-email" src="/img/email.png" alt="telegarm" /></a>
                            <a className="right-block-a contact" href="/contact">Контакты</a>
                        </div>
                    </div>
                </div>
            </footer>

        </html>

    );
};
