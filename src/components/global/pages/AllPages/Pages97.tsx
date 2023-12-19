import React from 'react';
import {FaArrowDownLong, FaArrowLeftLong} from "react-icons/fa6";

const Pages97 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>97 бет</h6></div>
            <h1><span>§ 19.</span> ОШ ОБЛУСУ</h1>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Эсиңерге түшүргүлө
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Облустун аймагындагы байыркы шаарларды атагыла. <br/>
                    2. Субтропикалык кандай өсүмдүктөр өстүрүлөт?
                </h4>
            </div>
            <i className="w-full text-start text-blue-500">
                Аянты - 29,0 миң км2. <br/>
                Калкы -1535,4 миң киши (2016). <br/>
                Борбору - Ош шаары.
            </i>
            <h4>
                Ош облусу Кыргыз Республикасынын түштүгүндө жайгашкан. Түндүгүнөн Жалал-Абад облусу, түндүк-батышынан
                Өзбекстан, батышынан Баткен облусу, түштүгүнөн Тажикстан, тундук-чыгышынан жана чыгышынан Нарын облусу,
                түштүгү Кытай менен чектешет. Ош облусу 1939-жылы 21-ноябрда уюшулган. 1959-жылы 27-январда Жалал-Абад
                облусу менен биригип, 1990-жылы 14-декабрда кайра эки облуска Ош жана Жалал-Абад облустарына ажыраган.
                1999-жылы Ош облусунун курамынан Баткен облусу бөлүнгөн.
            </h4>
            <i>17-схема</i>
            <b className="text-xl">Ош облусунун административдик-аймактык бирдиктери</b>
            <div className="flex m-2 flex-col items-center justify-between w-full">

                <h3 className="block text-center w-[250px] m-1"> Ош облусу</h3>
                <div className="w-full">
                    <hr/>
                    <div className="flex  items-center justify-between w-full">
                        <FaArrowDownLong/> <FaArrowDownLong/> <FaArrowDownLong/>
                    </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]"> 7 административдик район </h3>

                    <div>
                        <h1 className="block text-center w-[250px]">4 шаар</h1>
                        <FaArrowDownLong/>
                    </div>

                    <h3 className="block text-center w-[250px]"> 88 айыл өкмөтү</h3>
                </div>
                <div className="w-full items-start justify-between flex">
                    <div className="flex-col flex m-2">
                        <h3 className="block text-center w-[250px] m-1"> Алай </h3>
                        <h3 className="block text-center w-[250px] m-1">Араван </h3>
                        <h3 className="block text-center w-[250px] m-1">Кара-Кулжа </h3>
                        <h3 className="block text-center w-[250px] m-1">Кара-Суу </h3>
                        <h3 className="block text-center w-[250px] m-1">Ноокат </h3>
                        <h3 className="block text-center w-[250px] m-1">Өзгөн </h3>
                        <h3 className="block text-center w-[250px] m-1">Чоң-Алай </h3>
                    </div>
                    <div className="flex-col flex ml-[70px] ">
                        <h3 className="block text-center w-[250px] m-1"> Ош </h3>
                        <div className="pt-[100px]">
                            <div className="flex items-center justify-start   w-[270px]">
                                <h1><FaArrowLeftLong/> </h1>       <h3 className="block text-center w-[250px] m-1"> Кара-Суу  </h3>
                            </div>
                            <div className="flex items-center justify-start   w-[270px]">
                                <h1><FaArrowLeftLong/> </h1>       <h3 className="block text-center w-[250px] m-1"> Ноокат </h3>
                            </div>
                            <div className="flex items-center justify-start   w-[270px]">
                                <h1><FaArrowLeftLong/> </h1>       <h3 className="block text-center w-[250px] m-1"> Өзгөн </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col flex ml-[75px]  ">
                        <h3 className="block text-center w-[250px] m-1"> 477 кыштак </h3>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Pages97;