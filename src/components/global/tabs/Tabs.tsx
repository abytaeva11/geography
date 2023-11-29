import React from 'react';
// import "../tabs/tabs.css"
import {NavLink} from "react-router-dom";

const Tabs = () => {
    return (
        <div className="tabs">
           <NavLink to="/home-page">
               <button type="button"
                       className="text-white w-10/12 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Главная страница
               </button>

           </NavLink>
           <NavLink to="/test">

               <button type="button"
                       className="text-white w-10/12 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                   Тестер
               </button>
           </NavLink>
          <NavLink to="/sleep-work">
              <button type="button"
                      className="text-white w-10/12 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Иш дептер
              </button>
          </NavLink>
        </div>
    );
};

export default Tabs;