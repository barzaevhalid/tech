import help from "../../assets/help.svg";
import calendar from "../../assets/calendar.svg";
import arrow from "../../assets/chevron-up.svg";
import {useState} from "react";

import "./header.css"

const Header = () => {
    const [isActive, setIsActive] = useState(false);
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
                    <div className="legal_person">
                        <div className="arrow"><img src={arrow} alt=""/></div>
                        <div>Юрлица</div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
