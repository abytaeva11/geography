import React from 'react';
import {NavLink} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const Notebook6 = () => {
    const block=[
        {id:1,text:"Орустар"},
        {id:1,text:" Өзбектер"},
        {id:1,text:"Тажиктер "},
        {id:1,text:" Дунгандар"},
        {id:1,text:"Уйгурлар "},
        {id:1,text:"Калмактар "},
        {id:1,text:" Корейлер"},
        {id:1,text:"Немистер "},
        {id:1,text:"Казактар"},
    ]
    return (
        <div className="notebook">
            <div className="notebook-inside items-center justify-center  flex flex-col ">

                <h4> 5-тапшырма. Кыргыз Республикасында жашаган улуттар негизинен
                    таралган аймактарды жазгыла.</h4>
                <table className="border-black border-2 w-full">
                    <thead>
                    <tr className="border-black">
                        <th className="border-black border-2 p-2">Улуттарв</th>
                        <th className="border-black border-2 p-2">Жашаган аймактар</th>
                    </tr>
                    </thead>
                    <tbody>
                    {block.map((el) => (
                        <tr key={el.id} className="border-black border-2">
                            <td className="border-black border-2 p-2">{el.text}</td>
                            <td className="border-black border-2 p-2">
                                <input className="w-full"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
<h4> 6-тапшырма. Калктын орточо жыштыгы жогору жана төмөн
    өрөөндөрдү жазып чыккыла.</h4>

                <div className="w-[100%] my-6  ">
                    <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                        <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                    </div>
                   <div className="w-[70%] flex items-center justify-between">
                       <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                           <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                       </div>
                       <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                           <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                       </div>
                   </div>
                    <div className="w-[90%] flex items-center justify-between">
                        <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                        </div>
                        <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[220px] w-[220px] bg-blue-500">
                            <p className="    text-white text-center text-2xl" > Калктын жыштыгы төмөн</p>
                        </div>
                        <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                        </div>
                    </div>
                   <div className="w-[90%] flex items-center justify-between">
                       <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                           <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                       </div>
                       <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                           <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                       </div>
                   </div>
                    <div className="w-[50%] flex items-center justify-between">
                        <div className="rounded-full flex   items-center justify-center  bg-blue-200 h-[120px] w-[200px] bg-blue-500">
                            <input type="text" placeholder="жазуу" className="mb-2 w-full h-1/2 border-none bg-transparent text-white text-center text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="w-full items-center justify-between flex pt-10">
                    <NavLink to="/notebook5" className="btn pr-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        <FaAngleDoubleLeft/>
                        Артка
                    </NavLink>
                    <NavLink to="/notebook7" className="btn pl-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        Алдыга <FaAngleDoubleRight/>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Notebook6;