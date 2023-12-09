import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

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

            </div>
        </div>
    );
};

export default Inputs;