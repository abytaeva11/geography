import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

interface Product {
    id: number;
    name: string;
    writing: string;
}
interface WriteItem {
    id: number;
    text: string;
}
const Notebook4 = () => {
    const [placeholderText, setPlaceholderText] = useState<{ [key: number]: string }>({});

    const handleInputChange = (id: number, value: string) => {
        setPlaceholderText((prev) => ({ ...prev, [id]: value }));
    };
        const [products4, setProducts4] = useState<Product[]>([
            { id: 1, name: 'Жашы', writing: '' },
            { id: 2, name: 'Билими', writing: '' },
            { id: 3, name: 'Жарандыгы', writing: '' },
            { id: 4, name: 'Тили', writing: '' },
            { id: 5, name: 'Канча жылга шайланат?', writing: '' },

        ]);

        const victorina=[
            {id:1,text1:" А) Облус",text2:"Б) Район",text3:"B) Шаар",text4:"Г) Шаарча",text5:"Д) Кыштак",text6:"Е) Айыл аймагы"},
            {id:2,text1:"1) 9",text2:"2) 453",text3:"3) 1900",text4:"4) 7",text5:"5) 12",text6:"6) 31",text7:"7) 40"},
        ]

        const handleWritingChange4 = (id: number, value: string) => {
            setProducts4((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === id ? { ...product, writing: value } : product
                )
            );
        };

    const write: WriteItem[] = [
            {id:1 ,text:"1. Төрөлгөндөрдүн саны өлгөндөрдүн санынан көп болсо "},
            {id:2 ,text:"2. Көчүп келгендердин эсебинен калктын санынын көбөйүшү"},
            {id:3 ,text:" 3. Калктын эмгекке жарамдуу бөлүгү"},
            {id:4 ,text:"4. Белгилуу бир аймактын калкынын жыш же сейрек жайгашуусун көрсөткөн бирдик"},
            {id:5 ,text:"5. Калктын белгилүү бир аймакка топтолуп отурукташуусу."},
            {id:6 ,text:" 6. Калктын көчүп келүү же көчүп кетүү, конуш жаңыртуусу"},
            {id:7 ,text:" 7. Мамлекеттик чек арадан чыгып кеткендер же башка мамлекеттен келгендер"},
            {id:8 ,text:" 8. Эгер калк өз өлкөсүнөн чет өлкөгө кетсе"},
            {id:9 ,text:"9. Эгер калк чет олкедон келсе "},

        ]


    return (
        <div className="notebook">
            <div className="notebook-inside ">
<h4> 4-татшырма. Кандай адамдар жогорку кызматка шайлана алышат?</h4>
                <table className="border-black border-2 w-full">
                    <thead>
                    <tr className="border-black">
                        <th className="border-black border-2 p-2">Критерийлер</th>
                        <th className="border-black border-2 p-2">президент</th>
                        <th className="border-black border-2 p-2 w-[35%]">депутат</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products4.map((el) => (
                        <tr key={el.id} className="border-black border-2">
                            <td className="border-black border-2 p-2">{el.name}</td>
                            <td className="border-black border-2 p-2">
                                <input
                                    value={el.writing}
                                    onChange={(e) => handleWritingChange4(el.id, e.target.value)}
                                    className="w-full"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
<h4> 5-тапшырма. Туура жоопторду дал келтиргиле.</h4>

                <div className="flex w-full mb-4">
                    {victorina.map((el) => (
                        <div key={el.id} className="flex w-3/5 flex-col text-2xl items-center justify-center mx-2">
                            <p className="mb-2">{el.text1}</p>
                            <p className="mb-2">{el.text2}</p>
                            <p className="mb-2">{el.text3}</p>
                            <p className="mb-2">{el.text4}</p>
                            <p className="mb-2">{el.text5}</p>
                            <p>{el.text6}</p>
                        </div>

                    ))}
                    <div>
                        <table className="border-black border-2 w-[100%] ">
                            <thead>
                            <tr>
                                <td className="border-black border-2 p-2"> A </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-black border-2 p-2"> Б </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-black border-2 p-2"> В </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-black border-2 p-2"> Г </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-black border-2 p-2"> A </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-black border-2 p-2"> Д </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-black border-2 p-2"> Е </td>
                                <td className="border-black border-2 p-2">
                                    <input className="w-full" />
                                </td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>

<h1> IlБөлүм. КЫРГЫЗ РЕСПУБЛИКАСЫНЫН КАЛКЫНЫН ГЕОГРАФИЯСЫ</h1>
                <h4> 1-тапшырма. Географиялык диктант.</h4>


                {write.map((el) => (
                    <div key={el.id}>
                        <p className="text-xl text-black">{el.text}</p>
                        <div className="w-full flex">
                            <input
                                className="border-b border-black text-violet text-xl border-solid w-[80%]"
                                type="text"
                                value={placeholderText[el.id] || ''}
                                onChange={(e) => handleInputChange(el.id, e.target.value)}
                            />
                            <p className="ml-2 w-[20%]"> деп аталат.</p>
                        </div>
                    </div>
                ))}
                <p className="text-xl text-black">
                    10. Калктын жайгашуусуна кандай ыңгайлуу шарттар керек?
                    <div className="text-area w-[90%] ml-[-10px] p-2">
                      <textarea className=" h-[200px] text-violet text-xl p-2"></textarea>
                    </div>
                </p>

                <div className="w-full items-center justify-between flex pt-10">
                    <NavLink to="/notebook3" className="btn pr-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        <FaAngleDoubleLeft/>
                        Артка
                    </NavLink>
                    <NavLink to="/notebook5" className="btn pl-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                        Алдыга <FaAngleDoubleRight/>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Notebook4;