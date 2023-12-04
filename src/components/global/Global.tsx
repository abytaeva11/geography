import React from 'react';
import "./Global.scss"
import Tabs from "./tabs/Tabs";
import Pages from "./pages/Pages";
import {Route, Routes} from "react-router-dom";
import Test from "./TestPages/Test/Test";
import TestPages1 from "./TestPages/TestPages1";
import TestPages2 from "./TestPages/TestPages2";
import TestPages3 from "./TestPages/TestPages3";
import TestPages4 from "./TestPages/TestPages4";
import TestPages5 from "./TestPages/TestPages5";
import TestPages6 from "./TestPages/TestPages6";
import TestPages7 from "./TestPages/TestPages7";
import TestPages8 from "./TestPages/TestPages8";
import TestPages9 from "./TestPages/TestPages9";
import TestPages10 from "./TestPages/TestPages10";
import TestPages11 from "./TestPages/TestPages11";
import TestPages12 from "./TestPages/TestPages12";
import TestPages13 from "./TestPages/TestPages13";
import TestPages15 from "./TestPages/TestPages15";
import TestPages14 from "./TestPages/TestPages14";
import TestPages16 from "./TestPages/TestPages16";
import TestPages17 from "./TestPages/TestPages17";
import TestPages18 from "./TestPages/TestPages18";
import TestPages19 from "./TestPages/TestPages19";
import TestPages20 from "./TestPages/TestPages20";
import TestPages21 from "./TestPages/TestPages21";
import TestPages22 from "./TestPages/TestPages22";
import TestPages23 from "./TestPages/TestPages23";
import TestPages24 from "./TestPages/TestPages24";
import TestPages25 from "./TestPages/TestPages25";
import Notebook from "src/components/global/notebook/Notebook";
import Notebook1 from "src/components/global/notebook/pages/Notebook1";
import Notebook2 from "src/components/global/notebook/pages/Notebook2";
import Notebook3 from "src/components/global/notebook/pages/Notebook3";
import Notebook4 from "src/components/global/notebook/pages/Notebook4";
import Notebook5 from "src/components/global/notebook/pages/Notebook5";
import Notebook6 from "src/components/global/notebook/pages/Notebook6";
import Notebook7 from "src/components/global/notebook/pages/Notebook7";
import Notebook8 from "src/components/global/notebook/pages/Notebook8";
import Notebook9 from "src/components/global/notebook/pages/Notebook9";
import Notebook10 from "src/components/global/notebook/pages/Notebook10";

const Global = () => {
    return (
        <div className="container">
            <div className="global">
                <div className="tabs-global">
                    <Tabs/>
                </div>
                <div className="pages-global">
                    <Routes>
                        <Route path="/" element={<Pages/>}/>
                        <Route path="/test" element={<Test/>}/>
                        <Route path="/sleep-work" element={<Pages/>}/>

                        <Route path="/test-pages1" element={<TestPages1/>}/>
                        <Route path="/test-pages2" element={<TestPages2/>}/>
                        <Route path="/test-pages3" element={<TestPages3/>}/>
                        <Route path="/test-pages4" element={<TestPages4/>}/>
                        <Route path="/test-pages5" element={<TestPages5/>}/>
                        <Route path="/test-pages6" element={<TestPages6/>}/>
                        <Route path="/test-pages7" element={<TestPages7/>}/>
                        <Route path="/test-pages8" element={<TestPages8/>}/>
                        <Route path="/test-pages9" element={<TestPages9/>}/>
                        <Route path="/test-pages10" element={<TestPages10/>}/>
                        <Route path="/test-pages11" element={<TestPages11/>}/>
                        <Route path="/test-pages12" element={<TestPages12/>}/>
                        <Route path="/test-pages13" element={<TestPages13/>}/>
                        <Route path="/test-pages14" element={<TestPages14/>}/>
                        <Route path="/test-pages15" element={<TestPages15/>}/>
                        <Route path="/test-pages16" element={<TestPages16/>}/>
                        <Route path="/test-pages17" element={<TestPages17/>}/>
                        <Route path="/test-pages18" element={<TestPages18/>}/>
                        <Route path="/test-pages19" element={<TestPages19/>}/>
                        <Route path="/test-pages20" element={<TestPages20/>}/>
                        <Route path="/test-pages21" element={<TestPages21/>}/>
                        <Route path="/test-pages22" element={<TestPages22/>}/>
                        <Route path="/test-pages23" element={<TestPages23/>}/>
                        <Route path="/test-pages24" element={<TestPages24/>}/>
                        <Route path="/test-pages25" element={<TestPages25/>}/>

                        <Route path="/notebook" element={<Notebook/>}/>
                        <Route path="/notebook2" element={<Notebook2/>}/>
                        <Route path="/notebook3" element={<Notebook3/>}/>
                        <Route path="/notebook4" element={<Notebook4/>}/>
                        <Route path="/notebook5" element={<Notebook5/>}/>
                        <Route path="/notebook6" element={<Notebook6/>}/>
                        <Route path="/notebook7" element={<Notebook7/>}/>
                        <Route path="/notebook8" element={<Notebook8/>}/>
                        <Route path="/notebook9" element={<Notebook9/>}/>
                        <Route path="/notebook10" element={<Notebook10/>}/>


                    </Routes>
                </div>
            </div>
        </div>

    );
};

export default Global;