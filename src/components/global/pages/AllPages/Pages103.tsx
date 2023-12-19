import React from 'react';
import {FaArrowDownLong, FaArrowLeftLong} from "react-icons/fa6";

const Pages103 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>103 бет</h6></div>
            <h1><span>§ 20.</span> ЖАЛАЛ-АБАД ОБЛУСУ </h1>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Эсинерге түшүргүлө
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Жалал-Абад облусунун аймагындагы өрөөндөрдө кайсы ландшафт эн чон аянтты ээлейт? <br/>
                    2. Жала-Абад облусу Талас облусу менен кайсы капчыгай аркылуу байланышат?
                </h4>
            </div>
            <i className="w-full text-start text-blue-500">
                Аянты - 33,7 миң км2. <br/>
                Калкы - 1146,5 миң киши (2016).  <br/>
                Борбору-Жалал-Абад шаары.
            </i>

            <h4>
                Жалал-Абад облусу Кыргыз Республикасынын түштүк-батыш бөлүгүн ээлейт. Облус 1924-26-жылдары округ, 1928-жылы Ош округуна
                1926-28-жылдары кантон болгон,
                бириктирилген. Ал эми 1939-жылы 21-ноябрда облус катары уюшулган; 1959-жылы 27-январда жоюлуп, Ош облусуна кошулган, 1990-жылы 14-декабрда кайра өз алдынча облус болгон. Түндүгүнөн Талас, Чүй, чыгышынан Нарын, түштүгүнөн Ош облустары, түштүк-батышынан жана батышынан Өзбекстан
                менен чектешет.
            </h4>

            <i>18-схема</i>
            <b className="text-xl">Жалал-Абад облусунун административдик-аймактык бирдиктери</b>
            <div className="flex m-2 flex-col items-center justify-between w-full">

                <h3 className="block text-center w-[250px] m-1"> Жалал-Абад облусу</h3>
                <div className="w-full">
                    <hr/>
                    <div className="flex  items-center justify-between w-full">
                        <FaArrowDownLong/> <FaArrowDownLong/> <FaArrowDownLong/>
                    </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]"> 8 административдик район </h3>

                    <div>
                        <h1 className="block text-center w-[250px]">8 шаар, 4шаарча</h1>
                        <FaArrowDownLong/>
                    </div>

                    <h3 className="block text-center w-[250px]"> 68 айыл өкмөтү</h3>
                </div>
                <div className="w-full items-start justify-between flex">
                    <div className="flex-col flex m-2">
                        <h3 className="block text-center w-[250px] m-1"> Аксы</h3>
                        <h3 className="block text-center w-[250px] m-1">Ала-Бука </h3>
                        <h3 className="block text-center w-[250px] m-1">Базар-Коргон </h3>
                        <h3 className="block text-center w-[250px] m-1">Ноокен </h3>
                        <h3 className="block text-center w-[250px] m-1">Сузак </h3>
                        <h3 className="block text-center w-[250px] m-1">Тогуз-Торо </h3>
                        <h3 className="block text-center w-[250px] m-1">Токтогул </h3>
                        <h3 className="block text-center w-[250px] m-1">Чаткал </h3>
                    </div>
                    <div className=" flex flex-col ml-[70px] ">
                        <h3 className="block text-center w-[250px] m-1"> Жалал-Абад </h3>
                        <h3 className="block text-center w-[250px] m-1"> Кара-Көл, шаарча Кетмен-Төбө </h3>
                        <h3 className="block text-center w-[250px] m-1"> Майлуу-Суу, шаарча Көк-Таш </h3>
                        <h3 className="block text-center w-[250px] m-1"> Кербен </h3>
                        <h3 className="block text-center w-[250px] m-1"> Таш-Көмүр, шаарча Кызыл-Жар, шаарча Шамалды-Сай </h3>
                        <h3 className="block text-center w-[250px] m-1"> Кочкор-Ата </h3>
                        <h3 className="block text-center w-[250px] m-1"> Көк-Жаңгак </h3>
                        <h3 className="block text-center w-[250px] m-1"> Токтогул </h3>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Pages103;