import React from 'react';
import "./header.scss"
import img1 from "../../assets/img/cart.png"
const Header = () => {
    return (
        <div className="header">
            <h4> Д.ЧОНТОЕВ , М.МУЗУРАЛИЕВА , М.ТОКТОГУЛОВ , Д.СОЛПУЕВА , О.ТОМПОБАЕВ , Н.ЖУМАЛИЕВ  </h4>
            <h1>Кыргыз Республикасынын экономикалык жана социалдык географиясы </h1>
            <div className="header-img">
                <img src={img1} alt=""/>
            </div>
        </div>
    );
};

export default Header;