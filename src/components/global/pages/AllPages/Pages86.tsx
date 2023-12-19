import React from 'react';
import {FaArrowDownLong, FaArrowLeftLong} from "react-icons/fa6";

const Pages86 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>86 бет</h6></div>
            <h1><span>§ 17.</span> Ысык-Көл облусу</h1>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Эсиңерге түшүргүлө
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Ысык-Көл облусу Чүй облусу менен кайсы капчыгай менен байланышат?
                    <br/>
                    2. Облустун аймагынын жаратылыш шарттарына көлдүн таасири кандай?
                </h4>
            </div>
            <i className="text-blue-500 text-start w-full">
                Аянты - 43,1 миң км2. <br/>
                Калкы - 470,1 миң киши (2016). <br/>
                Борбору - Каракол шаары.
            </i>
            <h4>
                Облус Кыргыз Республикасынын чыгыш бөлүгүндө жайгашкан. Түндүгүнөн жана түндүк-чыгышынан Казакстан,
                чыгышынан жана түштүк-чыгышынан Кытай, батышынан түштүк-батышынан Нарын, түндүк-батышынан Чүй облустары
                менен чектешет. <br/>
                Облус 1939-жылы 21-ноябрда түзүлгөн. 1959-жылы 27- январда жоюлуп, кайра 1970-жылы 11-декабрда уюшулган.
                1988. жылы 5-октябрда Нарын облусу менен биригип, 1990-жылы 14-декабрда алар кайра бөлүнгөн.
            </h4>
            <i> 15-схема</i>
            <b className="text-xl">Ысык-Көл облусунун административдик-аймактык бирдиктери</b>
            <div className="flex m-2 flex-col items-center justify-between w-full">

                <h3 className="block text-center w-[250px] m-1"> Ысык-Көл облусу</h3>
                <div className="w-full">
                    <hr/>
                    <div className="flex  items-center justify-between w-full">
                        <FaArrowDownLong/> <FaArrowDownLong/> <FaArrowDownLong/>
                    </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]"> 5 администра- тивдик район </h3>

                    <div>
                        <h1 className="block text-center w-[250px]">3 шаар,2 шаарча</h1>
                        <FaArrowDownLong/>
                    </div>

                    <h3 className="block text-center w-[250px]"> 61 айыл өкмөтү</h3>
                </div>
                <div className="w-full items-start justify-start flex">
                    <div className="flex-col flex m-2">
                        <h3 className="block text-center w-[250px] m-1">Ак-Суу </h3>
                        <h3 className="block text-center w-[250px] m-1">Жети-Өгүз </h3>
                        <h3 className="block text-center w-[250px] m-1">Тоң </h3>
                        <h3 className="block text-center w-[250px] m-1">Түп </h3>
                        <h3 className="block text-center w-[250px] m-1">Ысык-Көл </h3>
                    </div>
                    <div className="flex-col flex pr-[270px] ">
                        <h3 className="block text-center w-[250px] m-1">Балыкчы,Орто-Токой шаарсы </h3>
                        <h3 className="block text-center w-[250px] m-1">Каракол,Пристань-Пржевальск шаарча</h3>
                        <h3 className="block text-center w-[250px] m-1"> Чолпон-Ата </h3>
                    </div>
                </div>


            </div>
            <h4>
                <b>Табияты</b>. Облустун аймагы Ысык-Көл ойдуңу
                Ысык-Кол сыртынан турат. Рельефи жалпысынан телека
                Ысык-Көл өрөөнү түндүгүнөн Күнгөй, түштүгүние Тескей Алай Тоолору менен курчалган. Алар өрөөндүн чыгышы
                менен батышында бири-бирине жакындашып, тоо аралык туюк мейкиндикти пайда кылат. Ысык-Көл батышындагы
                Боом капчыгайы аркылуу Чүй өрөөнү менен туташат.
            </h4>
        </div>
    );
};

export default Pages86;