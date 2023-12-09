import React from 'react';
import {LuMoveDownLeft, LuMoveDownRight, LuMoveUpLeft, LuMoveUpRight} from "react-icons/lu";
import {GoArrowDown, GoArrowUp} from "react-icons/go";

const Pages25 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>25бет</h6></div>
            <h4>
                Өзгөчө өнөр жай тармагынын өнүгүшү  мамлекеттин экономикасынын өнүгүү деңгелин  көрсөтөт.
            </h4>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1917-жылдагы Октябрь революциясына чейин Кыргыз Республикасынын чарбачылытынын негизин кайсы тармак
                    түзгөн ?
                </h4>
            </div>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүндү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Силер жашаган жердин жаратылыш ресурстарын
                    атагыла. Алар чарбада кандай пайдаланылат?
                    <br/>
                    2. Өзүңөр жашаган аймакта чарбанын кайсы тармактары өнүккөн?
                </h4>
            </div>

            <h1><span>§ 8.</span>Өнөр жайы</h1>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Эсиңерге түшүргүлө
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Өнөр жай деп эмнени түшүнөсүңөр?
                    <br/>
                    2. Кыргыз Республикасынын өнөр жай тармагы кандай сырьёлорду пайдаланышат?
                </h4>
            </div>
<h4>
    Өнөр жайдын өнүгүшүнө жаңы шаарлардын, транспорт жолдорунун түзүлүшүнө алып келет, айыл чарбасынын, курулуштун, сооданын деңгээлин өзгөртөт, аймактын жаратылышына
    таасирин тийгизет. <br/>
    Республиканын өнөр жайы жалпысынан өндүрүүчү жана
    кайра иштетип чыгаруучу өнөр жай тармактарына бөлүнөт.
</h4>
            <i>4-схема</i>
<b className="text-xl m-2"> Өнөр-жайдын тармактары</b>
            <div className="f-[90%] flex items-center justify-center flex-col">

                <h1 className="block w-[400px]  "> Өнөр жай</h1>
                <div className="flex items-end text-4xl justify-center"><LuMoveDownLeft/> <LuMoveDownRight/></div>

                <div className="w-[100%] flex items-center justify-between">
                    <div className="w-[100%] flex items-center justify-center flex-col">
                        <h2 className=" block w-[250px] ">өндүрүүчү өнөр жай</h2>
                        <div className=" text-4xl "> <GoArrowDown /></div>
                        <h2 className=" block w-[250px] ">көмүр казуу, нефть, газ, алтын, цинк, коргошун, сурьма, сымал өндүрүү ж. б.</h2>

                    </div>
                    <div className="w-[100%] flex items-center justify-center flex-col">
                        <h2 className=" block w-[330px] ">Кайра иштетип чыгаруучу өнөр
                            жай </h2>
                        <div className=" text-4xl "> <GoArrowDown /></div>
                        <h2 className=" block w-[250px] ">кездеме токуу, кийим тигүү,
                            машина куруу, жыгач иштетүү
                            кирет  </h2>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Pages25;