import "./global.css"
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";

const App = () => {
    return (
        <div className="main">
            <Sidebar/>
            <div>
                <Header/>
                <Content/>
            </div>

        </div>

    );
};

export default App;
