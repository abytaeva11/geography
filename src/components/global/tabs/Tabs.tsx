import React from 'react';
import "../tabs/tabs.css"
import {NavLink} from "react-router-dom";

const Tabs = () => {
    return (
        <div className="tabs">
            {/*<div className=" join-vertical flex items-center justify-center ">*/}
            {/*    <input type="radio" name="theme-buttons" className="btn theme-controller " aria-label="Default" value="default"/>*/}
            {/*    <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Valentine" value="valentine"/>*/}
            {/*</div>*/}
           <NavLink to="/" className="animated-shape-both  ">
               <select className="select select-accent  w-[200px] ">
                   <option disabled selected>Главная страница</option>
                   <option>Главная страница</option>
                   <option>мазмуну</option>
               </select>
           </NavLink>

           <NavLink to="/test" className="animated-shape-both  ">
               <select className="select select-accent w-[200px] max-w-xs">
                   <option disabled selected>Тестер</option>
                   <option> Тестер</option>
                   <option>мазмуну</option>
               </select>
           </NavLink>

          <NavLink to="/notebook" className="animated-shape-both  ">

              <select className="select select-accent w-[200px] max-w-xs">
                  <option disabled selected> Иш дептер</option>
                  <option>  Иш дептер</option>
                  <option>мазмуну</option>
              </select>
          </NavLink>
        </div>
    );
};

export default Tabs;