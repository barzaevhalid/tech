import help from "./assets/help.svg"
import arrow from "./assets/chevron-up.svg"
import calendar from "./assets/calendar.svg"
import "./App.css"

const App = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="title_wrapper">
                            <h2 className="title">Балансовый отчет</h2>
                            <div className="help">
                                <img src={help} alt="?"/>
                            </div>
                            <div className="rub">RUB</div>
                        </div>
                        <div className="date-wrapper">
                            <div><img src={calendar} alt=""/></div>
                            <div>01.10.2023</div>
                        </div>
                        <div className="legal_person">
                            <div className="arrow"><img src={arrow} alt=""/></div>
                            <div>Юрлица</div>
                        </div>

                    </div>
                </div>
            </header>
            <div className="container">
                <div className="content">
                    <div className="asset-tracker">
                        <div className="asset-tracker-header">
                            <h1 className="asset-tracker-title">Активы</h1>
                            <div className="total-amount">2 872 100</div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                        <div className="categories">
                            <div className="category">
                                <div className="category-header">
                                    <div className="category-title-wrapper">
                                        <div className="arrow"><img src={arrow} alt=""/></div>
                                        <div className="category-title">Оборотные активы</div>
                                    </div>
                                    <div className="count-subcategories">0</div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title">Дебиторская задолженность</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Денежная</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Неденежная</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title">Денежные средства</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Наличные счета</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Безналичные счета</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Карты физлиц</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">

                                        <div>Электронные счета</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div>Запасы</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title">Другие оборотные</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Залоговые платежи</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Выданные займы (до 1 года)</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div>Переводы в пути</div>
                                        <div>0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <div className="category-header">
                                    <div className="category-title-wrapper">
                                        <div className="arrow"><img src={arrow} alt=""/></div>
                                        <div className="category-title">Внеоборотные активы</div>
                                    </div>
                                    <div className="count-subcategories">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider">=</div>
                    <div className="capital-tracker">
                        <div className="asset-tracker-header">
                            <h1 className="asset-tracker-title">Обязательства и капитал</h1>
                            <div className="capital-amounts">
                                <div className="total-amount-red">2 872 100</div>
                                <div className="total-amount-green">687 100</div>
                            </div>
                            <div className="capital-progress">
                                <div className="progress-red"></div>
                                <div className="progress-green"></div>
                            </div>
                        </div>
                        <div className="categories">
                            <div className="category">
                                <div className="category-header">
                                    <div className="category-title-wrapper">
                                        <div className="arrow"><img src={arrow} alt=""/></div>
                                        <div className="category-title">Краткосрочные обязательства</div>
                                    </div>
                                    <div className="count-subcategories">0</div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title"> Кредиторская задолженность</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Денежная</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Неденежная</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title">Другие краткосрочные</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Платежи третьим лицам</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Полученные займы (до 1 года)</div>
                                        <div>0</div>
                                    </div>
                                </div>

                            </div>
                            <div className="category">
                                <div className="category-header">
                                    <div className="category-title-wrapper">
                                        <div className="arrow"><img src={arrow} alt=""/></div>
                                        <div className="category-title">Долгосрочные обязательства</div>
                                    </div>
                                    <div className="count-subcategories">0</div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div>Кредиты</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title">Другие долгосрочные</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Полученные займы (от 1 года)</div>
                                        <div>0</div>
                                    </div>

                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner total">
                                        <div>Итого обязательств</div>
                                        <div>0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <div className="category-header">
                                    <div className="category-title-wrapper">
                                        <div className="arrow"><img src={arrow} alt=""/></div>
                                        <div className="category-title">Капитал</div>
                                    </div>
                                    <div className="count-subcategories">0</div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div>Вложения учредителей</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div className="category-title-wrapper">
                                            <div className="arrow"><img src={arrow} alt=""/></div>
                                            <div className="category-title">Нераспределенная прибыль</div>
                                        </div>
                                        <div className="count-subcategories">0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Текущий год</div>
                                        <div>0</div>
                                    </div>
                                    <div className="subcategory-item">
                                        <div>Прошлый период</div>
                                        <div>0</div>
                                    </div>


                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner">
                                        <div>Другие статьи капитала</div>
                                        <div>0</div>
                                    </div>
                                </div>
                                <div className="subcategory">
                                    <div className="subcategory-inner liabilities">
                                        <div>Обязательства + Капитал</div>
                                        <div>0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
