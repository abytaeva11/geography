import React from 'react';
import "./header.scss"
import img1 from "../../assets/img/cart.png"
import {MapKg} from "src/map/Map";
const Header = () => {
    return (
        <div className="header">
            <h1>Кыргыз Республикасынын экономикалык жана социалдык географиясы </h1>
            <div className="header-img">
                <img src={img1} alt=""/>
               {/*<MapKg/>*/}
            </div>
        </div>
    );
};

export default Header;