import React, {useState} from 'react';
import img1 from "../../../../assets/img/саймалуу-таш1.jpg"
import img2 from "../../../../assets/img/саймалуу-таш2.jpg"
import img3 from "../../../../assets/img/саймалуу-таш3.jpg"
import img4 from "../../../../assets/img/саймалуу-таш4.jpg"
import img5 from "../../../../assets/img/саймалуу-таш5.jpg"
import img6 from "../../../../assets/img/саймалуу-таш6.jpg"
import img7 from "../../../../assets/img/саймалуу-таш7.jpg"
import img8 from "../../../../assets/img/саймалуу-таш8.jpg"

const Pages110 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img5, img6]

    const handleButtonClick = (index: number) => {
        setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
    };

    return (
        <div className="pages1">
            <div className="page-number"><h6>110 бет</h6></div>
            <div className="carousel w-full">
                {images.map((img, index) => (
                    <div key={index}
                         className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
                        <img src={img} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
            <i> Саймалуу-Таш.</i>
            <div className="flex justify-center w-full  py-2 gap-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                            className="btn btn-l bg-blue-200 text-white">
                        {index + 1}
                    </button>
                ))}
            </div>
            <h4>
                Облустун жеринде Таш доорунда адам жашаган Кара-Суу туругу, Саймалуу-Таш (б. з. ч. 2 к.-б. з. 8-к.) жана
                Чаар-Таштагы таш бетине чегилген сүрөт-эстеликтер бар. Торкен көрүстөнүнүн (I-V-к.) калдыктары,
                X-XII-к-дардагы Күлбөс-Хан, Фазил-Шахтын (ХІІ-к.), Арстанбабанын (XVI-к.) мүрзөлөрү, Чанчар-Хан жана
                Тогуз-Торо шаар-чептеринин чалдыбарлары, Ыдырыс Пайгамбардын күмбөзү (XIX-к-дын башы) жана акыркы
                жылдарда калыбына келтирилип, кайра курулган Курманбек баатырдын күмбөзү бар.
            </h4>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Облустун эң жапыз жана эн бийик жерлерин, алардын абсолюттук бийиктиктерин атагыла. <br/>
                    2. Облуста кандай тарыхый архитектуралык эстеликтер бар? <br/>
                    3. Улуу Жибек жолунун Жалал-Абад облусунун аймагына тийгизген таасири кандай?
                </h4>
            </div>
        </div>
    );
};

export default Pages110;