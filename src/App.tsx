import "./index.scss"
import Header from "./components/header/Header";
import Global from "./components/global/Global";
import AnimatedShape from "./components/proverka/Proverca";
import {MapKg} from "src/map/Map";
import Chart from "src/ui/Circle-Global";
import Example from "src/ui/Circle-Global";
import Examples from "src/ui/Circle-Global";
import CircleGlobal from "src/ui/Circle-Global";
import {PureComponent} from "react";
import Analysis from "src/ui/analysis";

function App() {
    return (
        <div className="App">
            {/*<MapKg/>*/}
            <Header/>
            <Global/>
            {/*<AnimatedShape/>*/}
        </div>
    );
}

export default App;
