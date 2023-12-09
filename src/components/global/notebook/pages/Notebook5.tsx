import React from 'react';
import {NavLink} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const Notebook5 = () => {
    const list = [
        {id: 1, text: "1-орунда"},
        {id: 2, text: "2-орунда"},
        {id: 3, text: "3-орунда"},
        {id: 4, text: "4-орунда"},
        {id: 5, text: "5-орунда"},
        {id: 6, text: "6-орунда"},
    ]

    const block = [
        {id: 1, text: "Эмгек курагына чейинкилер"},
        {id: 2, text: "Эмгек курагындагылар аялдар"},
        {id: 3, text: "Эмгек курагындагылар эркектер"},
        {id: 4, text: "Эмгек курагынан өткөндөр"},
    ]
    return (
        <div className="notebook">
            <div className="notebook-inside items-center justify-center  flex flex-col ">
                <h4> 2-тапшырма. Кыргыз Республикасынын статистика комитетинин маалыматы боюнча өлгөндөрдүн негизги
                    себебин жазып чыккыла.</h4>

                <table className="w-full m-3">
                    <thead>
                    <tr>
                        <th className="border-black border-2 p-2">Ээлеген оруну</th>
                        <th className="border-black border-2 p-2">Өлгөндөрдүн негизги себеби</th>
                    </tr>
                    </thead>
                    {
                        list.map(el => (
                            <tr key={el.id} className="border-black border-2">
                                <td className="border-black border-2 p-2 w-[20%]">{el.text}</td>
                                <td className="border-black border-2 p-2 w-[60%]">
                                    <input
                                        className="w-full"
                                    />
                                </td>
                            </tr>
                        ))
                    }


                </table>

                <h4>3-тапшырма. Анализ жүргүзгүлө.</h4>
                <table className="w-full m-3">
                    <thead>
                    <tr>
                        <th className="border-black border-2 p-2">Көп балалуу үй-бүлүлөлөр</th>
                        <th className="border-black border-2 p-2">Аз балалуу үй-бүлүлөлөр</th>
                    </tr>
                    </thead>

                    <tr className="border-black border-2 w-full">
                        <th className="border-black border-2 p-2 w-[50%]">
                            <tr> Оң жактары:</tr>
                            <tr>
                                <div className="text-area w-[220%] ">
                                    <textarea className=" border-none h-[200px] text-violet text-xl"></textarea>
                                </div>
                            </tr>
                        </th>
                        <th className="border-black border-2 p-2 w-[50%]">
                            <tr> Оң жактары:</tr>
                            <tr>
                                <div className="text-area w-[220%] ">
                                    <textarea className=" border-none h-[200px] text-violet text-xl"></textarea>
                                </div>
                            </tr>
                        </th>
                    </tr>
                    <tr className="border-black border-2 w-full top-0 m-0 h-400">
                        <th className="border-black border-2 p-2 w-[50%] h-[250px]">
                            <tr> Терс жактары:</tr>
                            <tr className="h-[400px]">
                                <div className="text-area w-[220%] ">
                                    <textarea className="border-none h-auto text-violet text-xl"></textarea>
                                </div>
                            </tr>
                        </th>
                        <th className="border-black border-2 p-2 w-[50%]">
                            <tr> Терс жактары:</tr>
                            <tr className="h-[400px]">
                                <div className="text-area w-[220%]">
                                    <textarea className="h-400 text-violet text-xl border border-gray-300"></textarea>
                                </div>


                            </tr>
                        </th>
                    </tr>


                </table>
                <h4> 4-тапшырма. Калктын курактык курамына кайсы жаштагылар кирерин жазып чыккыла.</h4>
                <p className="w-[400px] my-6 text-xl items-center justify-center flex text-center h-20 border-black border-2 border-solid"> Адам баласнын өмүрүндө үч
                    мезгили болот:</p>
                <div className="flex w-full">
                    {
                        block.map(el => (
                            <div key={el.id}
                                 className="w-[280px] text-center h-20 border-black border-2 border-solid  ">
                                <h3>{el.text}</h3>
                                <input type="text" className="w-[90%] ml-1" placeholder="жазуу"/>
                                <hr className="bg-black text-center ml-3 text-black h-0.5 w-[90%]"/>
                            </div>

                        ))
                    }

                </div>

                <div className="w-full items-center justify-between flex pt-10">
                    <NavLink to="/notebook4" className="btn pr-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        <FaAngleDoubleLeft/>
                        Артка
                    </NavLink>
                    <NavLink to="/notebook6" className="btn pl-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        Алдыга <FaAngleDoubleRight/>
                    </NavLink>
                </div>

            </div>

        </div>
    );
};

export default Notebook5;