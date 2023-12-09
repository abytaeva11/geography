import React from 'react';
import img6 from "src/assets/img/кумтор-2.jpg";
import img3 from "src/assets/img/кумтор-1.jpg";
import img1 from "src/assets/img/кумтор-3.jpg";

const Pages36 = () => {

    return (
        <div className="pages1">
            <div className="page-number"><h6>36 бет</h6></div>
            <h4>
                Согуштан кийинки мезгилде сымап, сурьма, коргошун,
                цинк, күмүш өндүрүшү (Актүз, Сумсар, Кан, Канигут) колго алынган. Уран өндүрүшү (Мин-Куш, Кажы-Сай, Шакафтар, Майлы-Суу кендери) уюшулган. 1950-жылдардын аягында полиметалл казыла баштаган.
                <br/>
                Ал эми СССР тараганга чейин Кыргыз Республикасы сурьма, сымап, сейрек жер элементтери менен уранды негизги өндүрүүчү болуп эсептелген. Рыноктук мамилелерге өтүүгө байланыштуу кең казып алууга каражаттын тартыштыгынан улам
                анын айрым ишканалардын иши токтотулган.
                <br/>
                Республиканын экономикасынын өнүгүшүндөтүстүү металлургия өнөр жайы өзгөчө мааниге ээ. Алтын өндүрүүдөгү
                айрым жетишкендиктерге карабастан түстүү металлургия өнөр
                жайынын абалы оор бойдон калууда.
                <br/>
                Эл аралык валюталык металл - <i>алтындын</i> ролу эң зор
                экендиги байыркы мезгилден бери белгилүү.
            </h4>
<h1> Кыргыз Республикасындагы түстүү металлургиясы </h1>

            <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <iframe width="1100" height="450" src="https://www.youtube.com/embed/NtxZxDqlYAM?si=O6IxQOd-RQCl2XVG"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-[450px]">
                        <img src={img1} alt=""/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-[450px]">
                        <img src={img3} alt=""/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-[450px]">
                        <img src={img6} alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        </div>
                    </div>
                </div>
            <i>Кум-төр</i>
            <h4>
                Кыргыз Республикасында 1986-жылы Макмал алтын комбинаты иштеп баштаган. 1996-жылы республикадагы эң кубаттуу «Кумтөр Голд Оперейтинг Компания» биргелешкен ишканасы ишке киришкен. Кумтөрдү Канаданын мамлекеттик менчик
                «Комеко» корпорациясы менен биргелешип иштетүүдө. <br/>
                Республикадагы эң ири алтын кени - Кум-Төр дениз деңгээлинен 3500-4000 м бийиктикте жайгашкан. Дүйнө жүзү
                боюнча алтын чыккан кендердин ичинен 7-орунду ээлейт. Дүйнөлүк практикада 1 тонна тоо тектен 4 грамм алтын алынса, ал келечектүү деп эсептелинет.Ал эми
                Кум-Төрдөн 1 тонна тоо
                тегинен 12 грамм алтын алууга болот.
            </h4>
            </div>
    );
};

export default Pages36;