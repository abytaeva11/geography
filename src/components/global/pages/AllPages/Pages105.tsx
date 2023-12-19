import React, {useState} from 'react';
import img3 from "../../../../assets/img/сары-челек1.jpg"
import img2 from "../../../../assets/img/сары-челек2.jpg"
import img1 from "../../../../assets/img/сары-челек3.jpg"
import img5 from "../../../../assets/img/сары-челек5.jpg"


const Pages105 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img5]

    const handleButtonClick = (index: number) => {
        setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
    };
    return (
        <div className="pages1">
            <div className="page-number"><h6>105 бет</h6></div>
            <div className="carousel w-full">
                {images.map((img, index) => (
                    <div key={index}
                         className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
                        <img src={img} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
            <i> Сары-Челек көлү</i>
            <div className="flex justify-center w-full  py-2 gap-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                            className="btn btn-l bg-blue-200 text-white">
                        {index + 1}
                    </button>
                ))}
            </div>
            <h4>
                Климаты жалпы Фергана өрөөнүнө мүнөздүү болгон факторлордун негизинде түзүлөт. Бирок, тоолордун
                орографиялык түзүлүшүнүн өзгөчөлүгү арктикалык суук жана континенттик аба массаларынын таасирин кыйла
                жумшартат. Жай мезгилинде бийик кырка тоолор Орто жана Борбордук Азия чөлдөрүнүн аптабын кыйла
                серүүндөтөт. Атмосфералык жаан-чачын бийиктик зоналуулук боюнча өзгөрөт жана ал ным алып ке- лүүчү аба
                агымдарына карата жайгашуу экспозициясына байланыштуу.
                <br/>
                Облустун аймагы, айрыкча Фергана тоо тизмегинин капталдары агын суу тармагынын жыштыгы жана алардын
                суусунун молдуулугу менен айырмаланат. Ири дарыялары: Нарын, Чаткал, Кара-Дарыя. Сууларынын режими
                турук- суз: алар тоолордогу кар, мөңгүлөрдүн эришинен жазында, негизинен жайында суусу кирет. Облустун
                дарыялары суу энергиясына өтө бай. Нарын дарыясына ГЭС каскады суу сактагычтары менен курулган. Дарыя
                суулары дээрлик сугатка пайдаланылат.Облустун топурак-өсүмдүктөрү өтө ар түрдүү жана алардын таралышына
                бийиктик алкактуулук мүнөздүү. Аймактын эң жапыз бөлүгүн чөл жана жарым чөл зонасы ээлейт. Бул 30- да
                шыбак-эфемердүү чөл жана жарым чөл өсүмдүктөрү өсүп, ачык боз жана кадимки боз топурактары өөрчүйт.
                Өсүмдүктөрдөн пияз, түктүү арпа, түктүү буудайык, кызылот, ошондой эле шыбак, сарындыз өсөт.
                <br/>

            </h4>

        </div>
    );
};

export default Pages105;