import search from "../../assets/search.svg";
import house from "../../assets/house.svg";
import rating from "../../assets/raiting.svg";
import deal from "../../assets/deal.svg";
import arrowDown from "../../assets/chevron-down.svg";
import check from "../../assets/check-square.svg";
import flag from "../../assets/flag.svg";
import file from "../../assets/file-text.svg";
import book from "../../assets/book-open.svg";
import setting from "../../assets/settings.svg";
import user from "../../assets/user.svg";
import logout from "../../assets/logout.svg";
import logo from "../../assets/logo.svg"

import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="search-container">
                <img className="search-img" src={search} alt=""/>
                <input type="text" placeholder="Поиск" className="search-input"/>
            </div>
            <nav className="menu">
                <ul>
                    <li>
                        <div className="menu-item">
                            <img src={house} alt=""/>
                            <div>Показатели</div>
                        </div>
                    </li>
                    <li>
                        <div className="menu-item">
                            <img src={rating} alt=""/>
                            <div>Операции</div>
                        </div>
                    </li>
                    <li>
                        <div className="menu-item">
                            <img src={deal} alt=""/>
                            <div>Сделки</div>
                            <img className="sidebar-arrow" src={arrowDown} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div className="menu-item">
                            <img src={check} alt=""/>
                            <div>План</div>
                            <img className="sidebar-arrow" src={arrowDown} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div className="menu-item">
                            <img src={flag} alt=""/>
                            <div>Проекты</div>
                        </div>
                    </li>
                    <li className="active">
                        <img className="arrow-up sidebar-arrow" src={arrowDown} alt=""/>
                        <div className="menu-item">
                            <img src={file} alt=""/>
                            <div>Отчеты</div>
                        </div>
                    </li>
                    <li>
                        <ul className="submenu">
                            <li className="submenu-item">Движение денег (ДДС)</li>
                            <li className="submenu-item">Прибыли и убытки (ОПУ)</li>
                        </ul>
                    </li>
                    <li>
                        <div className="menu-item">
                            <img src={book} alt=""/>Мои данные
                            <img className="sidebar-arrow" src={arrowDown} alt=""/>
                        </div>
                    </li>
                    <li className="active">
                        Балансовый отчет
                    </li>
                </ul>
            </nav>
            <div className="settings">
                <img src={setting} alt=""/> Настройки
            </div>
            <div className="balance">
                <div>На счетах</div>
                <div className="money">На счетах 491 300.00 ₽</div>
                <div className="break"><a href="#">Разрыв с 28.08.23 по 09.09.23</a></div>
            </div>
            <div className="user-info">
                <div className="user-avatar">
                    <img src={user} alt=""/>
                </div>
                <div className="user-details">
                    <div>Даниил Шабак</div>
                    <div>shab@dioc.ru</div>
                </div>
                <div className="user-action">
                    <img src={logout} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
