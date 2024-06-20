import help from "../../assets/help.svg";
import calendar from "../../assets/calendar.svg";
import check from "../../assets/check.svg"
import arrow from "../../assets/chevron-up.svg"
import search from "../../assets/search-options.svg"
import "./header.css"

import {useState} from "react";


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState("Юрлица")
   
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="title_wrapper">
                        <h2 className="title">Балансовый отчет</h2>
                        <div className="help">
                            <img src={help} alt="?"/>
                            <div className="bubble">
                                This is a speech bubble!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores deleniti
                                dignissimos distinctio doloremque enim esse, porro provident quae, quasi quia,
                                reprehenderit sint? Aliquid, dolor exercitationem labore molestiae quidem quos?
                            </div>

                        </div>
                        <div className="rub">RUB</div>
                    </div>
                    <div className="date-wrapper">
                        <div><img src={calendar} alt=""/></div>
                        <div>01.10.2023</div>
                    </div>
                    <div className="select-container">
                        <div className="select-input-wrapper" onClick={() => setIsActive(!isActive)}>
                            <img className={`header-arrow ${isActive ? "down" : ""}`} src={arrow} alt=""/>
                            <input className="select-input" type="text" value={inputValue} readOnly={true}/>
                        </div>

                        <div className={`options ${isActive ? "active" : ""}`}>
                            <div className="options-input-wrapper">
                                <img className="options-search" src={search} alt=""/>
                                <input className="options-input" type="text" placeholder="Поиск по списку"/>
                            </div>
                            <ul className="options-inner">
                                <li className="option">
                                    <div className="option-title">Юрлица и счета</div>
                                </li>
                                <li className="option">
                                    <div className="option-title">
                                        <span>ИП Иванов</span>
                                        <img src={check} alt=""/>
                                    </div>
                                    <div className="sub-option-wrapper">
                                        <div className="sub-option">Сбербанк</div>
                                        <img src={check} alt=""/>
                                    </div>
                                </li>
                                <li className="option">
                                    <div className="option-title">
                                        <span>ООО Ромашка</span>
                                        <img src={check} alt=""/>
                                    </div>
                                    <div className='sub-option-wrapper'>
                                        <div className="sub-option">Тинькофф</div>
                                        <img src={check} alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
