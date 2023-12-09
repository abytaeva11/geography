import React from 'react';
import national from "../../../../assets/img/natinal.jpg"

const Pages14 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>14бет</h6></div>
            <i>6-тиркеме</i>
            <b>Кыргыз Республикасынын калкынын 2016-жылкы маалымат
                боюнча курактык курамы</b>
            <h1 className="w-[90%] my-3 h-[35px] border-black bottom-1.5 border-solid bg-gray-500 text-center">
                Адам баласынын өмүрүндө үч мезгили болот:
            </h1>
            <div className="w-[100%] flex items-center justify-between">
                <h1 className="w-[30%] my-3 h-[170px]  border-black bottom-1.5 border-solid bg-gray-500 text-center">
                    Эмгек курагына
                    чейинкилер (0-15
                    жаш)
                    33,6 %
                </h1>
                <h1 className="w-[30%] my-3 h-[170px]  border-black bottom-1.5 border-solid bg-gray-500 text-center">
                    Эмгек курагындагылар (аялдар 16-
                    57, эркектер 16-62)
                    59,1 %
                </h1>
                <h1 className="w-[30%] text-center my-3 h-[170px]  border-black bottom-1.5 border-solid bg-gray-500 text-center">
                    Эмгек курагынан
                    өткөндөр (аялдар
                    58, эркектер 63
                    жаштан жогору)
                    7,3 %
                </h1>

            </div>

            <h4>
                Улуттук курамы. Кыргыз Республикасынын калкы көп
                улуттуу. Өлкөдө 100дөн ашык улут жана эл өкүлдөрү жашайт.
                Республикада коңшу өлкөлөрдүн гана эмес, эң алыскы дүйнө
                бөлүктөрүнүн улуттарынын өкүлдөрү да жашашат.
            </h4>
            <img src={national} alt="" className="w-[90%] h-[90%] my-3"/>
            <h4> Кыргыз Республикадагы улуттар</h4>
            <h4>
                Улуттар аралык ынтымакты бекемдөө, тен укуктуулукту сактоо мамлекетибиздин элдеринин биримдигин бекитет."Кыргызстан
                жалпыбыздын үйүбүз" деген девиз менен жүргүзүлгөн. Бул багытта көптөгөн иш-чаралар өткөрүлүп турат.
            </h4>
        </div>
    );
};

export default Pages14;