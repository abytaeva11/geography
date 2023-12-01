import React from 'react';
import flag from "src/assets/img/Flag_of_Kyrgyzstan.svg.png";
import gerb from "src/assets/img/GerbKyrgyzstan2016.png";

const Pages4 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>4 бет</h6></div>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүндү текшер
                </button>
            </div>
            <div className="pages3-text2 text-white from-cyan-950 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <h4>1. Кыргыз Республикасынын дуйнонун саясий картасында алган ордун аныкта?<br/>
                    2. Кыргыз элчиликтери кайсы мамлекеттерде ачылган? </h4>
            </div>
            <h1><span>§ 2.</span> Мамлекеттик түзүлүшү. Кыргыз Республикасынын
                административдик-аймактык бөлүнүшү</h1>
            <div className="pages3-text1">
                <button type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Эсинерге түшүргүлө
                </button>
            </div>
            <div
                className="pages3-text2 pages3-text2 text-white from-cyan-950 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <h4>1. Мамлекет деп эмнени түшүнөсүнөр? <br/>
                    2. Кыргыз Республикасы канча облуска бөлүнөт?</h4>
            </div>
            <div className="pages5-img">
                <div className="pages5-images">
                    <img className="img1" src={flag} alt=""/>
                    <img className="img2" src={gerb} alt=""/>
                </div>
                <div className="animated-shape">
                    <h3>
                        Кыргыз Республикасы эгемендүү, укуктук, мамлекеттик башкарууга ДИН аралашпаган,
                        унитардык, демократиялык
                        өлкө
                        катары Конституцияда
                        белгиленген.
                        Эгемендүүлүкдү алгандан
                        кийин (1991-ж.) Президент
                        шайланган, Жаны Консти-
                        туция, Мамлекеттик Туу,
                        Гимн, Герб, Улуттук валюта кабыл алынган.
                    </h3>
                </div>

            </div>
            <h4>
                Кыргыз Республикасы демократиялык мамлекет катары
                өзүнүн аймагында толук бийликке ээ, ички жана тышкы саясатты өз алдынча жүргүзөт. Биринчи Конституция 1993-жылы
                5-майда кабыл алынган, кийин 2010-2016-жылдары (2 жолу)
                өзгөртүүлөр, толуктоолор киргизилип, парламенттик республика деп жарыяланган.
                Өлкөдө мамлекеттик бийликти Президент, Жогорку Кенеш, Кыргыз Республикасынын
                Өкмөтү, Конституциялык,
                Жогорку, жергиликтүү соттор
                жүргүзөт. Ошондой эле жергиликтуу администрациялар Конституцияда белгиленген бийлик
                укуктарынын чегинде иштешет. Эл өз бийлигин шайлоо, рефе-
                рендум, элдик курултай жана жыйындар аркылуу мыйзамдын
                негизинде жүргүзөт.
            </h4>


        </div>
    );
};

export default Pages4;