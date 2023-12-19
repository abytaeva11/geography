import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";
import {LuMoveDownLeft, LuMoveDownRight} from "react-icons/lu";
import {GoArrowDown} from "react-icons/go";

interface Product {
    id: number;
    name: string;
    writing: string;
}

const Inputs = () => {
    const [table, setTable] = useState<Product[]>([

        {id: 1, name: 'Аткаруучу органы', writing: ''},
        {id: 2, name: 'Аткаруучу органы', writing: ''},
        {id: 3, name: 'Аткаруучу органы', writing: ''},
    ])
    const handleTablesChange = (id: number, value: string) => {
        setTable((prevTables) =>
            prevTables.map((el) =>
                el.id === id ? {...el, writing: value} : el
            )
        )
    }


    const [products, setProducts] = useState<Product[]>([
        {id: 1, name: 'Товар 1', writing: ''},
        {id: 2, name: 'Товар 2', writing: ''},
        // Добавьте другие товары по необходимости
    ]);

    const handleWritingChange = (id: number, value: string) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? {...product, writing: value} : product
            )
        );
    };
    return (
        <div>
            <div className="text-area">
                      <textarea className="w-full h-[200px]  text-xl p-2"
                                placeholder="Жазып баштаныз..."></textarea>


                {/*tables*/}

                <table className="border-black border-2 w-full">
                    <thead>
                    <tr className="border-black">
                        <th className="border-black border-2 p-2">Список товаров</th>
                        <th className="border-black border-2 p-2">Место для написания</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-black border-2">
                            <td className="border-black border-2 p-2">{product.name}</td>
                            <td className="border-black border-2 p-2">
                                <input
                                    value={product.writing}
                                    onChange={(e) => handleWritingChange(product.id, e.target.value)}
                                    className="w-full"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>


                <table className="border-black m-3 border-2 w-full">
                    <thead>
                    <tr className="border-black">
                        <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Соода экономикалык байланыштар </th>
                        <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Өлкөлөр    </th>
                        <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Товарлар   </th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr  className="border-black border-2">
                            <td className="border-black border-2 p-2"></td>
                        </tr>

                    </tbody>
                </table>

                {/*-----------------------------------*/}
                <table className="w-full">
                    <tbody>
                    {
                        table.map((el) => (
                            <td>
                                <tr className="border-black border-2 p-2 w-[70%]"> {el.name}</tr>
                                <td className="border-black border-2 w-[70%] text-xl p-2">
                                    <textarea value={el.writing}
                                              onChange={(e) => handleTablesChange(el.id, e.target.value)}
                                              className="w-full"/></td>
                            </td>
                        ))
                    }
                    </tbody>
                </table>


                {/*-----------btn--------------------*/}
                <div className="w-full items-center justify-between flex pt-10">
                    <NavLink to="/notebook1" className="btn pr-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        <FaAngleDoubleLeft/>
                        Артка
                    </NavLink>
                    <NavLink to="/notebook3" className="btn pl-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        Алдыга <FaAngleDoubleRight/>
                    </NavLink>
                </div>


                {/*-------------------------line----------*/}
                <div className="text-area w-[90%] ml-[-10px] p-2">
                    <textarea className=" h-[200px] text-violet text-xl p-2"></textarea>
                </div>
{/*-------------озунду текшер ---------------*/}
                ү        ө   ң
                <div className="pages3-text1">
                    <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                        Өзүңдү текшер
                    </button>
                </div>
                <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                    <h4>
                        1. Калк деп эмнени түшүнөсүнөр? <br/>
                        2. Улут деген эмне?
                    </h4>
                </div>
{/*----------параграф-------*/}
                <h1><span>§ 4.</span> Калктын курамы жана эмгек ресурстары</h1>
{/*-------------shema----------------*/}
                <i> 14-схема</i>
                <b className="text-xl">Талас облусунун административдик-аймактык бирдиктери</b>

                {/*------------блок и текст ---------------*/}
                <div className="animated-shape-both">
                    <h4 className="w-[60%]">
                        Эмгек ресурстары. Экономикалык активдүү калк

                    </h4>

                    <div className="animated-shape ml-2">
                        <h3>
                            Эмгек ресурстары -
                            бул калктын эмгекке жарамдуу бөлүгү.
                        </h3>
                    </div>

                </div>

    {/*----------------blocks     -----------*/}
                <div className="f-[90%] flex items-center justify-center flex-col m-2">

                    <h1 className="block w-[400px]  ">Курулуш материалдар өнөр жаны</h1>
                    <div className="flex items-end text-4xl justify-center"><LuMoveDownLeft/> <LuMoveDownRight/></div>

                    <div className="w-[100%] flex items-center justify-between">
                        <div className="w-[100%] flex items-center justify-center flex-col">
                            <h2 className=" block w-[250px] ">Казып алуучу</h2>
                            <div className=" text-4xl "> <GoArrowDown /></div>
                            <h2 className=" block w-[250px] ">мрамор, гранит, келки-таш, шагыл, кум ж.б.</h2>

                        </div>
                        <div className="w-[100%] flex items-center justify-center flex-col">
                            <h2 className=" block w-[250px] ">Алгач иштетүүчү</h2>
                            <div className=" text-4xl "> <GoArrowDown /></div>
                            <h2 className=" block w-[250px] ">бетон, кыш, курулуш айнеги, даяр үйлөр ж.б.</h2>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Inputs;


// ------------------carusel-------------
// import React, { useState } from 'react';
// import img10 from "../../../../assets/img/ыссык-кул2.jpg";
// import img2 from "../../../../assets/img/ыссыккол-2.jpg";
// import img8 from "../../../../assets/img/ыссык-кул4.jpg";
// import img4 from "../../../../assets/img/ыссык-кул5.jpg";
// import img6 from "../../../../assets/img/ыссык-кул7.jpg";
// import img7 from "../../../../assets/img/ыссык-кул8.jpg";
// import img9 from "../../../../assets/img/ыссык-кул9.jpg";
// import img3 from "../../../../assets/img/ыссык-кул3.jpg";
// import img1 from "../../../../assets/img/ыссык-кул10.jpg";
//
// const Pages89 = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [img1, img2, img3, img4, img6, img7, img8, img9, img10];
//
//     const handleButtonClick = (index:number) => {
//         setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
//     };
//
//     return (
//         <div className="pages1">
//             <div className="page-number"><h6>89 бет</h6></div>
//
//             <div className="carousel w-full">
//                 {images.map((img, index) => (
//                     <div key={index} className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
//                         <img src={img} alt="" className="w-full" />
//                     </div>
//                 ))}
//             </div>
//
//             <div className="flex justify-center w-full  py-2 gap-2">
//                 {images.map((_, index) => (
//                     <button key={index} onClick={() => handleButtonClick(index)} className="btn btn-l bg-blue-200 text-white">
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Pages89;
