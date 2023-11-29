import "./index.scss"
import Header from "./components/header/Header";
import Global from "./components/global/Global";
import AnimatedShape from "./components/proverka/Proverca";
import {MapKg} from "src/map/Map";

function App() {
    return (
        <div className="App">
            {/*<MapKg/>*/}
            <Header/>
            <Global/>
            <AnimatedShape/>
        </div>
    );
}

export default App;
