import React from 'react';
import {FaArrowDownLong, FaArrowLeftLong} from "react-icons/fa6";
import tokmok from "../../../../assets/img/токмок.jpg"
const Pages76 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>76 бет</h6></div>
            <i> 13-схема </i>
            <b className="text-xl"> Чүй облусунун административдик-аймактык бирдиктери </b>


            <div className="flex flex-col items-center justify-between w-full">

                <h3 className="block text-center w-[250px] m-1"> Чүй облусу</h3>
                <div className="w-full">
                    <hr/>
                    <div className="flex  items-center justify-between w-full">
                        <FaArrowDownLong/> <FaArrowDownLong/> <FaArrowDownLong/>
                    </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]">8 административдик район </h3>

                    <div>
                        <h1 className="block text-center w-[250px]"> 7 шаар. 1 шаарча</h1>
                        <FaArrowDownLong/>
                    </div>

                    <h3 className="block text-center w-[250px]"> 105 айыл өкмөтү</h3>
                </div>

                <div className=" flex  items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-between w-full">
                        <h3 className="block text-center w-[250px] m-1">Аламүдүн</h3>
                        <h3 className="block text-center w-[250px] m-1"> Жайыл</h3>
                        <h3 className="block text-center w-[250px] m-1"> Кемин </h3>
                        <h3 className="block text-center w-[250px] m-1"> Москва</h3>
                        <h3 className="block text-center w-[250px] m-1"> Панфилов</h3>
                        <h3 className="block text-center w-[250px] m-1"> Сокулук</h3>
                        <h3 className="block text-center w-[250px] m-1"> Чүй </h3>
                        <h3 className="block text-center w-[250px] m-1"> Ысык-Ата</h3>

                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="mt-[40px] h-auto">
                            <div className="flex items-center justify-center ">
                                <h1><FaArrowLeftLong/></h1>
                                <h3 className="block text-center w-[250px] m-1"> Кара-Балта</h3>
                            </div>
                            <div className="flex items-center justify-center ">
                                <h1><FaArrowLeftLong/></h1>
                                <h3 className="block text-center w-[250px] m-1">Кемин, Орловка, Борду шаарчасы</h3>
                            </div>
                        </div>
                        <div className="mt-[30px] h-auto">
                            <div className="flex items-center justify-center ">
                                <h1><FaArrowLeftLong/></h1>
                                <h3 className="block text-center w-[250px] m-1"> Кайындыу</h3>
                            </div>
                            <div className="flex items-center justify-center ">
                                <h1><FaArrowLeftLong/></h1>
                                <h3 className="block text-center w-[250px] m-1"> Шопоков</h3>
                            </div>
                            <div className="flex items-center justify-center ">
                                <h1><FaArrowLeftLong/></h1>
                                <h3 className="block text-center w-[250px] m-1">Токмок</h3>
                            </div>
                            <div className="flex items-center justify-center ">
                                <h1><FaArrowLeftLong/></h1>
                                <h3 className="block text-center w-[250px] m-1"> Кант</h3>
                            </div>

                        </div>

                    </div>
                    <div>
                        <h3 className="block text-center  w-[250px] m-1"> 328 кыштак</h3>

                    </div>
                </div>


            </div>
            <h4>
                Облус 1930-жылы уюшулуп 1959-жылга чейин Фрунзе облусу деп аталган. 1959-1990-жылдары республикага тике
                ийген райондор болуп, 1990-жылдын 14-декабрынан Чүй облусу
                деп аталып келе жатат.
            </h4>
            <img src={tokmok} alt="" className="w-[90%] h-[400px] m-3"/>
            <i> Токмок-Чүй облусунун борбору</i>


        </div>
    );
};

export default Pages76;