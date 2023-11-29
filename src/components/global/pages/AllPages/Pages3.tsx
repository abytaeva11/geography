import React from 'react';
import card from "../../../../assets/img/card-page3.jpg";

const Pages3 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>3 бет</h6></div>
            <h2> 1-БӨЛҮМ </h2>
            <hr/>

            <h1> КЫРГЫЗ РЕСПУБЛИКАСЫНЫН
                ДҮЙНӨДӨГҮ АЛГАН ОРДУ</h1>
            <h1><span>§ 1.</span> Кыргыз Республикасы дүйнөнүн саясий картасында</h1>
            <div className="pages3-text1">
                  <button type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                   Эсинерге түшүргүлө
                  </button>
            </div>
            <div className="pages3-text2 pages3-text2 text-white from-cyan-950 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">
                <h4> Кыргыз Республикасынын физикалык-географиялык абалы кандай?</h4>

            <i> Кыргыз Республикасынын жалпы аянты 198,5 млн км². <br/>
                Калкынын жалпы саны 6,02 млн адам (2016). <br/>
                Борбору - Бишкек шаары.</i> </div>


            <h4> Кыргыз Республикасы Европа менен Азияны байланыш-
                тырган байыркы Улуу Жибек жолунда жайгашкан. Ал дүйнөлүк маданияттын, диндердин кесилишкен жеринде, ири
                мамлекеттердин чордонунан орун алган. <br/>
                Тундук жана тундук-чыгышынан Казакстан, батышынан
                Өзбекстан, түштүк-батышынан Тажикстан жана туштук-чыгышынан Кытай Элдик Республикасы менен
                чектешет. <br/>
                Кыргызстандын аймагында Өзбекстандын Шахимардан,
                Cox, Чонгара-Галча, Таш-Тепа, Таджикстандын Ворух, Куру-
                Сай <i>анклавтары </i> жайгашкан. Ал эми Өзбекстандын территориясында биздин <i>эксклав</i> бар Барак
                айылы. <br/>
            </h4>
            <h4> Кыргыз Республикасы
                эгемендүүлүгүн алгандан кийин дүйнөнүн 140тан
                ашуун мамлекеттерине таанылып, 110дон ашык
                мамлекеттери
                менен дипломатиялык
                байланыш жургузуп келет.</h4>
            <div className="page3-card">
<div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50574.217457732324!2d69.33856968343704!3d37.39269079066611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38c90b92dc05e79f%3A0x85259d8bfa2e3986!2z0JPRgNCw0L3QuNGG0LAsINCi0LDQtNC20LjQutC40YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1696935698549!5m2!1sru!2skg"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
                <img src={card} alt=""/>


            </div>

        </div>
    );
};

export default Pages3;