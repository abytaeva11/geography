import React from 'react';
import {LuMoveDownLeft, LuMoveDownRight} from "react-icons/lu";
import {GoArrowDown} from "react-icons/go";
import komur from "../../../../assets/img/комур2.jpg"
const Pages27 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>27 бет</h6></div>

            <h1>1. Отун-энергетика өнөр жайы </h1>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Эсиңерге түшүргүлө
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Куйуучу заттарга эмнелер кирет?
                    <br/>
                    2. Электрэнергетиканын булактары кайсылар?

                </h4>
            </div>

            <h4>
                Кыргыз Республикасынын чарбасы жергиликтүү жана
                сырттан ташылып келинген отун-энергетикалык ресурстарына
                таянат. Отун-энергетика өнөр жайы отун жана энергияны өндүрүүчү татаал тармак аралык система. Бул
                комплекс эки чон тармактан: отун өндүрүү (көмүр, нефть, газ) жана электрэнер-тетикадан турат.
                <br/>
                Тармак республикадагы өнөр жайдын бардык тармактары
                менен тыгыз байланышта. Ал коммуналдык чарбаларды, айыл
                чарбасын, транспортту энергия менен камсыз кылыш турат.

            </h4>
            <i> 5-схема</i>
            <b className="text-xl">Кыргыз Республикасынын отун-энергетикалык комплекси</b>
            <div className="f-[90%] flex items-center justify-center flex-col">

                <h1 className="block w-[400px]  "> Отун-энергетикалык комплекс</h1>
                <div className="flex items-end text-4xl justify-center"><LuMoveDownLeft/> <LuMoveDownRight/></div>

                <div className="w-[100%] flex items-start justify-between">
                    <div className="w-[100%] flex items-center justify-center flex-col">
                        <h2 className=" block w-[250px] ">Отун өндүрүү</h2>
                        <div className=" text-4xl "><GoArrowDown/></div>
                        <h2 className=" block w-[250px] ">көмүр <br/> нефть <br/> газ</h2>

                    </div>
                    <div className="w-[100%] flex items-center justify-center flex-col">
                        <h2 className=" block w-[330px] ">Электр энергетика </h2>
                        <div className=" text-4xl "><GoArrowDown/></div>
                        <h2 className=" block w-[250px] ">ГЭС <br/> ЖЭБ</h2>

                    </div>
                </div>
                <h4>
                    Республикадагы отун-энергетика ресурстарга көмур, «ак көмүр» деп аталуучу агын суунун күчү,нефть,
                    газ, күндүн энергиясы, шамал, жер алдындаты термалдык суу жана ошондой эле
                    коммерциялык эмес отун (жыгач, тезек, куурай, камыш, саман, топон) кирет.
                </h4>
                <h4>
                    <i> Көмүр өнөр жайы.</i>
                    Республиканын отун-энергетика потенциалынын ичинен көмүр экенинин экономикалык мааниси өтө
                    чоң. Республиканын аймагында азыр 100гө жакын көмүр экени белгилүү
                </h4>

                <div className="w-full items-start justify-between flex">
                    <img src={komur} alt="" className="w-[400px] h-[240px]"/>

                    <h4 className="ml-3">
                        Көмүрдүн геологиялык
                        запасы <mark>31,4 млрд. т.,</mark> балансалык запасы <mark>2,4 млрд. т. </mark> ны  түзөт.
                        Көмүрдүн запасы боюнча
                        Кыргыз Республикасы Борбордук Азияда Казакстандан кийинки экинчи орунда турат.

                    </h4>
                </div>

            </div>

        </div>
    );
};

export default Pages27;