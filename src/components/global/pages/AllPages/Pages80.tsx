import React from 'react';
import {FaArrowDownLong, FaArrowLeftLong} from "react-icons/fa6";

const Pages80 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>80 бет</h6></div>

            <h1><span>§ 16.</span>ТАЛАС ОБЛУСУ</h1>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Эсиңерге түшүргүлө
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Талас өрөөнү жаратылыш шарттары боюнча кайсы өрөөнгө окшош?
                    <br/>
                    2. Талас өрөөнүнүн аймагында корголуучу аймакты атагылa.
                </h4>
            </div>
            <i className="text-blue-200 w-full text-start">
                Аянты - 11,4 миң км2. <br/>
                Калкы - 251,3 миң киши (2016). <br/>
                Борбору - Талас шаары.
            </i>
            <h4>
                Бардык облустардан аянты жагынан кичине болгон Талас облусу Кыргыз Республикасынын түндүк-батышында
                жайгашкан. Облус негизинен Талас өрөөнүн, Кыргыз жана Талас Ала- Тоосунун капталдарын ээлейт. Түндүк
                жана батышынан Казакстан, түштүк-батышынан бир аз жери Өзбекстан, түштүгүнөн Жалал-Абад, чыгышынан Чүй
                облустары менен чектешет.
            </h4>
            <i> 14-схема</i>
            <b className="text-xl">Талас облусунун административдик-аймактык бирдиктери</b>

            <div className="flex m-2 flex-col items-center justify-between w-full">

                <h3 className="block text-center w-[250px] m-1"> Талас облусу</h3>
                <div className="w-full">
                    <hr/>
                    <div className="flex  items-center justify-between w-full">
                        <FaArrowDownLong/> <FaArrowDownLong/> <FaArrowDownLong/>
                    </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]"> 4 административдик район </h3>

                    <div>
                        <h1 className="block text-center w-[250px]">1 шаар</h1>
                        <FaArrowDownLong/>
                    </div>

                    <h3 className="block text-center w-[250px]"> 37 айыл өкмөтү</h3>
                </div>
                <div className="w-full items-start justify-start flex">
                    <div className="flex-col flex m-2">
                        <h3 className="block text-center w-[250px] m-1">Бакай-Ата</h3>
                        <h3 className="block text-center w-[250px] m-1"> Кара-Буура</h3>
                        <h3 className="block text-center w-[250px] m-1"> Манас </h3>
                        <h3 className="block text-center w-[250px] m-1"> Талас</h3>
                    </div>
                    <div className="flex pt-[135px] pr-[270px] w-[550px]  justify-between items-center ">
                       <h1><FaArrowLeftLong/> </h1> <h3 className="block text-center  w-[250px] m-1"> Талас </h3>
                    </div>
                </div>


            </div>

            <h4>
                Талас облусу 1944-жылы 22-июнда уюшулган. 1956 1962-жылдары Фрунзе облусунун курамында болгон. 1962
                1979-жылдары жана 1988 - 1990-жылдары республикага түз баш ийдирилген. 1980 1988-жылы Талас облусунун
                курамына азыркы Жалал-Абад облусунун Токтогул жана Чаткал райондору да кирген. Облустун азыркы
                административдик түзүлүшү 1990-жылы 14-декабрда уюшулган.
                <br/>
                Табияты. Облус Талас өрөөнүндө орун алган. Облустун бийкиги деңиз деңгээлинен 700 мден 4482 мге (Манас
                чокусу) чейин.
            </h4>

        </div>
    );
};

export default Pages80;