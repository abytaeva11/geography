import React from 'react';
import {LuMoveDownLeft, LuMoveDownRight, LuMoveUpLeft, LuMoveUpRight} from "react-icons/lu";
import {GoArrowDown, GoArrowUp} from "react-icons/go";

const Pages20 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>20бет</h6></div>
            <b className="text-xl"> Миграциянын бөлүнүшү </b>
            <i> 2-схема</i>
            <div className="f-[90%] flex items-center justify-center flex-col">

                <div className="w-[80%] flex items-center justify-between">
                    <h2 className="block w-[320px]"> Пландуу</h2>
                    <h2 className="block w-[320px]"> Өз күчү менен</h2>
                </div>
                <div className="flex items-end text-4xl justify-center"> <LuMoveUpLeft /> <LuMoveUpRight/></div>
                <h2 className="block w-[400px]  "> Миграциянын формасы </h2>
                <div className="flex items-end text-4xl justify-center"> <GoArrowUp /></div>
                <h1 className="block w-[400px]  "> МИГРАЦИЯ</h1>
                <div className="flex items-end text-4xl justify-center"><LuMoveDownLeft/> <GoArrowDown /><LuMoveDownRight/></div>

                <div className="w-[100%] flex items-center justify-between">
                    <div className="w-[100%] flex items-center justify-center flex-col">
                        <h2 className=" block w-[250px] ">Миграциянын   түрлөрү </h2>
                        <div className=" text-4xl "> <GoArrowDown /></div>
                        <h2 className=" block w-[200px] m-1 "> кайрылбас </h2>
                        <h2 className=" block w-[200px] m-1"> убактылуу </h2>
                        <h2 className=" block w-[200px] m-1"> сезлндуу </h2>

                    </div>
<div className="w-[100%] flex items-center justify-center flex-col">
    <h2 className="block w-[250px]  ">Миграциялык агымдын багыты </h2>
    <div className=" text-4xl "> <GoArrowDown /></div>
    <h2 className=" block w-[200px] m-1 "> тышкы </h2>
    <h2 className=" block w-[200px] m-1"> ички </h2>
</div>

<div className="w-[100%] flex items-center justify-center flex-col">
    <h2 className="block w-[250px]  ">Миграциянын себептери </h2>
    <div className=" text-4xl "> <GoArrowDown /></div>
    <h2 className=" block w-[200px] m-1 "> экономикалык </h2>
    <h2 className=" block w-[200px] m-1 "> социалдык </h2>
    <h2 className=" block w-[200px] m-1 "> саясий </h2>
</div>

                </div>

            </div>

            <h4>
                Миграциянын пландуу формасына адистерди диплому боюнча кызматка жиберүү , аскер кызматына чакыруулар кирет .
                <br/>
                Бир өлкөнүн  ичиндеги көчүүлөр «ички миграцияга» кирет. Облус аралык, район ичиндеги, багыты боюнча «кыштак
                - шаар», «шаар - кыштак», «шаар-шаар», «кыштак - кыштак» деген түрлөрү бар.
                <br/>
                Ички миграция негизинен мурунку мезгилдердегидей эле
                Бишкек шаары жана Чуй облусуна багытталган. Ал эми башка региондордун калкынын саны ошонун эсебинен азаюуда. Өзгөчө
                Бишкек шаарына калктын көп көчүп келүүсү экономикалык
                жана социалдык көйгөйлөрдү жаратууда.
                <br/>

            </h4>

            <div className="animated-shape-both">
                <h4 className="w-[60%] ">
                    Миграциянын экономикалык жана социалдык себептери Кыргыз Республикасындагы экономикалык кризиске байланыштуу. Ошонун натыйжасында шаарларда жумушчулар жумушсуз калууда.
                    Жумушсуздук жылдан жылга
                    өсүүдө. Ушунун эсебинен эмгек мигранттары жумуш издеп чет өлкөлөргө кетүүдө. Эмгек мигранттары негизинен Казакстан жана Россия Федерациясына кетишүүдө. Мисалы,
                    2011-2016-жылдары Кыргыз Республикасынан чыгып кеткен
                    89,8 мин мигранттардын 35% кыргыз улутундагылар болгон.

                </h4>
            <div className="animated-shape w-full">
                <h3>
                    Мамлекеттик чек
                    арадан чыгып кеткендер
                    же башка мамлекеттен келгендер <mark>«тышкы миграция»</mark> деп аталат.
                    Эгер өз өлкөсүнөн чет өлкөгө кетсе
                    <mark>«эмиграция»</mark>, тескерисинче чет өлкөдөн келсе <mark>«иммиграция»</mark> деп аталат.
                </h3>
            </div>
            </div>
        </div>
    );
};

export default Pages20;