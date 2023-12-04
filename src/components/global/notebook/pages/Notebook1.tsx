import React, {useState, useEffect} from 'react';
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
import {NavLink, Outlet} from "react-router-dom";

const Notebook1: React.FC = () => {
    const data2: data2 = [
        {
            text1: "1.1991 31-август",
        },
        {
            text1: "1.1992 3-март",
        },
        {
            text1: "1.1992 18-декабрь",
        },
        {
            text1: "1.1993-жыл 5-май",
        },
        {
            text1: "1.1994 14-январь",
        },
    ]

    type data2 = [{ text1: string },
        {
            text1: string
        },
        {
            text1: string
        },
        {
            text1: string
        },
        {
            text1: string
        },
    ]

    const initialState = Array.from({length: 6}, () => '');
    const [textValues, setTextValues] = useState<string[]>(initialState);

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('textValues') || '[]');
        if (storedValues.length === 6) {
            setTextValues(storedValues);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('textValues', JSON.stringify(textValues));
    }, [textValues]);

    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValues = [...textValues];
        newValues[index] = e.target.value;
        setTextValues(newValues);
    };

    return (
        <div className="notebook1">
            <h1> 1Бөлүм. КЫРГЫЗ РЕСПУБЛИКАСЬНЫН ДҮЙНӨДӨ ЭЭЛЕГЕН ОРДУ</h1>
            <h4> 1.1. Кыргыз Республикасы дүйнөнүн саясий картасында</h4>
            <div className="example1-block">
                <h2>1-таптырма. Кыргыз Республикасы мамлекеттик түзүлүшү, башкаруу
                    формасы боюнча кандай өлкө экендигин схемага толтургула.</h2>
                <div className="text-svg">
                    <h2>Кыргыз Республикасы</h2>
                </div>
                {Array.from({length: 6}, (_, index) => (
                    <div key={index} className="text-svg">
          <textarea
              className="textarea textarea-bordered"
              placeholder="жазуу"
              value={textValues[index]}
              onChange={handleChange(index)}
          ></textarea>
                    </div>
                ))}
                <div className="block-kv">
                    <h3>өлкө</h3>
                </div>


            </div>
            <div className="example1-block2">
                <h2>2-тапшырма. Негизги даталарды чечмелегиле.</h2>
                {
                    data2.map(el => (
                        <div className="example1-block2-both">
                            <h3>{el.text1}</h3>
                            <input type="text"/>
                        </div>
                    ))
                }
            </div>
            <div className="examples1-block3">
                <h2>
                    З-тапшырма. Кыргыз Республикасынын географиялык абалына мүнөздөмө бергиле.
                </h2>
                <div className="examples1-inputs">
                    <div className="examples1-input1">
                        <div className="examples1-input1-inside ">
                            <h3>Жайгашкан материк</h3>
                            <input type="text" placeholder="жазуу"/>
                            <hr/>
                        </div>
                        <div className="examples1-input1-inside ">
                            <h3>Жайгашкан материк</h3>
                            <input type="text" placeholder="жазуу"/>
                            <hr/>
                        </div>
                    </div>
                    <div className=" w-full items-center justify-center flex flex-col ">
                        <div
                            className="examples1-input1-inside  items-center justify-center flex w-[55%] h-[40px] mt-3  bg-gray-500 border-[2px border-solid black]">
                            <h1 className=""> Кыргыз Республикасы </h1>
                        </div>
                        <div
                            className="examples1-input1-inside  items-center justify-center flex w-[55%] h-[40px] mt-3  bg-gray-500 border-[2px border-solid black]">
                            <h1 className="">Чектешкен мамлекеттер</h1>
                        </div>
                    </div>
                    <div className="examples1-input1 my-5">
                        <div className="examples1-input1-inside ">
                            <h3>Түндүк,түндүк
                                чыгышынан</h3>
                            <input type="text" placeholder="жазуу"/>
                            <hr/>
                        </div>
                        <div className="examples1-input1-inside ">
                            <h3>Түштүк, түштүк
                                чыгышынан</h3>
                            <input type="text" placeholder="жазуу"/>
                            <hr/>
                        </div>
                        <div className="examples1-input1-inside ">
                            <h3>Түштүк, түштүк
                                батышынан</h3>
                            <input type="text" placeholder="жазуу"/>
                            <hr/>
                        </div>
                        <div className="examples1-input1-inside ">
                            <h3> Батышынан</h3>
                            <input type="text" placeholder="жазуу"/>
                            <hr/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full items-center justify-between flex">
                <NavLink to="" className="btn pr-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                    <FaAngleDoubleLeft/>
                    Артка
                </NavLink>
                <NavLink to="/notebook2" className="btn pl-[90px] w-[20%] bg-blue-300 hover:bg-gray-800 text-white">
                    Алдыга <FaAngleDoubleRight/>
                </NavLink>
            </div>

        </div>
    );
};

export default Notebook1;
