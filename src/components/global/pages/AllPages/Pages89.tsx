import React, {useState} from 'react';
import img10 from "../../../../assets/img/ыссык-кул2.jpg";
import img2 from "../../../../assets/img/ыссыккол-2.jpg";
import img8 from "../../../../assets/img/ыссык-кул4.jpg";
import img4 from "../../../../assets/img/ыссык-кул5.jpg";
import img6 from "../../../../assets/img/ыссык-кул7.jpg";
import img7 from "../../../../assets/img/ыссык-кул8.jpg";
import img9 from "../../../../assets/img/ыссык-кул9.jpg";
import img3 from "../../../../assets/img/ыссык-кул3.jpg";
import img1 from "../../../../assets/img/ыссык-кул10.jpg";

const Pages89 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4, img6, img7, img8, img9, img10];

    const handleButtonClick = (index: number) => {
        setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
    };

    return (
        <div className="pages1">
            <div className="page-number"><h6>89 бет</h6></div>

            <div className="carousel w-full">
                {images.map((img, index) => (
                    <div key={index}
                         className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
                        <img src={img} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
            <i> Ысык-Көл . Рекреациялык зонасы</i>
            <div className="flex justify-center w-full  py-2 gap-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                            className="btn btn-l bg-blue-200 text-white">
                        {index + 1}
                    </button>
                ))}
            </div>
            <h4>
                Ысык-Көл облусунун негизги өнөр-жай комплексин алтын, көмүр, тамак-аш продукцияларын, курулуш
                материалдарын өндүрүү жана текстиль өндүрүшү түзөт.
                <br/>
                «Кум-Төр» алтын кени 1996-жылдан баштап казып алуучу Алтын кени облустук Жети-Өгүз районунун сыртында
                жайгашып, деңиз деңгээлинен 3500-4150 м бийиктикте орун алган. Бул алтын кенин «Кум-Төр оперейтинг
                компании» биргелешкен ишканасы казып, ылгайт. Облуста АК
                «Ак-Булак», АК «Кирпич ишканасы», ЖЧК «Кристалл-Алко», ЖЧК «Ысык-Көл Текстиль Миллениум», АК
                «Чыгышэлектро», ЖАК «Сүт-Булак», Каракол эркин экономикалык аймагында тигүү цехи жана башка чакан цехтер
                иштейт.
                <br/>
                Ысык-Көл облусунун айыл-чарбасы экономикасынын маанилүү тармагы болуп саналат. Айыл чарбасы негизинен
                дан эгиндерин, картошканы, жашылчаны, мөмө-жемиштерди өндурүүгө адистешкен. Айыл чарбасында өндүрүлгөн
                продукциялар республиканын башка аймактарына жана коңшу өлкөлөргө экспорттолот. Аймактын айыл-чарбасынын
                негизин жеке жер ээлери жана фермердик чарбалар түзөт.
                <br/>
                Транспорту. Облуста автоунаа, темир аба жана суу жолдору бар. Негизги автоунаа жолу Ысык-Көлдүн жээгин
                айланта курулган. Жалпы узундугу 450 кмди түзгөн Балыкчы-Чолпон-Ата-Түп-Каракол-Кызыл-Суу-Бөкөнбаев-Балыкчы автомагистралы өтөт. Бул жол аркылуу облустун
                дээрлик бардык калктуу пункттары байланышып, негизги жүктөрү жана жүргүнчүлөрү ташылат. Жүк жана
                жүргүнчүлөрдү ташууда автоунаа

            </h4>

        </div>
    );
};

export default Pages89;
