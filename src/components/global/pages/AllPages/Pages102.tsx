import React, {useState} from 'react';

import img1 from "../../../../assets/img/сулайман-тоо1.jpg"
import img2 from "../../../../assets/img/сулайман-тоо2.jpg"
import img3 from "../../../../assets/img/сулайман-тоо3.jpg"
import img4 from "../../../../assets/img/сулайман-тоо4.jpg"
import img5 from "../../../../assets/img/сулайман-тоо5.jpg"
import img6 from "../../../../assets/img/сулайман-тоо6.jpg"
import img7 from "../../../../assets/img/сулайман-тоо7.jpg"
import img8 from "../../../../assets/img/сулайман-тоо8.jpg"

const Pages102 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4, img6, img7, img8, img5]

    const handleButtonClick = (index: number) => {
        setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
    };
    return (
        <div className="pages1">
            <div className="page-number"><h6>102 бет</h6></div>
            <h4>
                тоосунда 4 туристтик маршрут
                иштейт. Чон-Алай кырка тоосунун эң бийик - Ленин атын.
                Чокусунун этегинде Ачык-Таш альплагери орун алган.
            </h4>
            <div className="carousel w-full">
                {images.map((img, index) => (
                    <div key={index}
                         className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
                        <img src={img} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
            <i> Сулайман-Тоо</i>
            <div className="flex justify-center w-full  py-2 gap-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                            className="btn btn-l bg-blue-200 text-white">
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Облустун аймагында эң көп кездешүүчү табигый кырсыктар кайсылар? <br/>
                    2. Эмне себептен облуста дыйканчылык жакшы өнүккөн? <br/>
                    3. Облустун аймагынан өткөн негизги эл аралык маанидеги автомагистралдарды атагыла.
                </h4>
            </div>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүңдү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Облустагы улуттар аралык көйгөйлөргө мүнөздөмө бергиле. <br/>
                    2. Ош облусунун транспорттук комплексине мүнөздөмө берип, алардын мааниси жөнүндө айтып бергиле. <br/>
                    3. Ош жана Чүй облустарынын айыл чарбасындагы окшоштуктары жана айырмачылыктары кайсылар?
                </h4>
            </div>



        </div>
    );
};

export default Pages102;