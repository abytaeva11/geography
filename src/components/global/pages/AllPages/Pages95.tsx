import React, {useState} from 'react';
import img5 from "../../../../assets/img/нарын1.jpg"
import img3 from "../../../../assets/img/нарын2.jpg"
import img4 from "../../../../assets/img/нарын4.jpg"
import img2 from "../../../../assets/img/нарын-5.jpg"
// @ts-ignore
import img1 from "../../../../assets/img/нарын6.webp"

const Pages95 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img4, img3, img5];

    const handleButtonClick = (index: number) => {
        setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
    };

    return (
        <div className="pages1">
            <div className="page-number"><h6>95 бет</h6></div>
            <h4>
                Облустун жери бийик тоолуу аймак болгондуктан, ага ылайык чарба тармагы
                мал, аны ичинен кой, жылкы жана асыроого адистешкен. Дыйканчылык болсо акыркы жылдар- негизинен мал
                чарбасын тоют менен камсыздандырууга Ылайыкташтырылып, арпа жана тоют өсүмдүктөрүн остуруп кел Базар
                экономикасынын шартына ылайык ар бир аймак турдуу -түлүктөр менен өзүн өзү камсыздоого мажбур болуш
                баштады. <br/>
                <b>Социалдык абалы.</b> Облуста 2016-жылы 122 мектепке чейинки 139 жалпы, 7 башталгыч кесиптик, 4 орто
                кесиптик 2 жогорку кесиптик билим берүү уюмдары иштеген. Аларда 75,9 миңдей бала окуп тарбияланган.
            </h4>
            <div className="carousel w-full">
                {images.map((img, index) => (
                    <div key={index}
                         className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
                        <img src={img} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
            <i> Нарын .Борбордук Азия университети </i>
            <div className="flex justify-center w-full  py-2 gap-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                            className="btn btn-l bg-blue-200 text-white">
                        {index + 1}
                    </button>
                ))}
            </div>
            <h4>
                Маданий мекемелеринен облуста 127 китепкана , 96 клуб ,2 театр ,6 музей жана 6 кинотеатр иштейт .
            </h4>
            <h4>
                Облуста улуттук госпиталь, 2 чоң кишилердин шаардык ооруканасы, 5 райондук борбордук, 18 участкалык
                оорукана, 2 диспансер, стоматологиялык поликлиника, 69 ФАП, 8 санитар дык-эпидемиологиялык станция
                (СЭМ), 59 үй-бүлөлүк дарыгерлер тобу. Кочкор районунда «Чон-Туп» спелеосанаторийи иштейт. <br/>
                1991-жылдан Нарын радиосу 1-программада жумасына 4 жолу эфирге чыгат. Облустун «Нарын-ТВ» телестудиясы
                1998-жылдын 1-февралынан баштап иштейт. Жумасына 1 жолу жекшемби күнү 4-5 саат көрсөтүүлөрдү уюштурат.
                1996-жыл- «Аян» эркин телестудиясы көрсөтөт. Облустук «Тенир-Тоо» (1938-жылдан), 5 райондук жана эркин
                гезит чыгат. <br/>

            </h4>
        </div>
    );
};

export default Pages95;