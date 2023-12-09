import React from 'react';
import img1 from "../../../../assets/img/дыйкан-1.jpg";
import img2 from "../../../../assets/img/дыйкан-3.jpg";
import img3 from "../../../../assets/img/дыйкан-4.jpg";
import img4 from "../../../../assets/img/дыйкан-5.jpg";
import img5 from "../../../../assets/img/дыйкан-6.jpg";
import img6 from "../../../../assets/img/img6.jpg";

const Pages23 = () => {
    const img = [
        { id: 1, img: img6 },
        { id: 2, img: img3 },
        { id: 3, img: img1 },
        { id: 4, img: img2 },
        { id: 5, img: img4 },
        { id: 6, img: img5 },
    ];

    return (
        <div className="pages1">
            <div className="page-number">
                <h6>23бет</h6>
            </div>

            <h4>
                Кыргыз Республикасынын чарбасынын өнүгүшүнүн,
                өндүргүч күчтөрүн жайгаштыруунун басып өткөн жолу, өзгөчөлүктөрү бар. Улуу Октябрь революциясына чейин айыл
                чарбасынын үлүшү жогору болгон. Бул мезгилде Кыргыз Республикасында айыл чарба өндүрүшүнүн негизин мал чарбасы
                түзүп, мал жыл бою жайыттарда багылган. Аба ырайынын шартына байланыштуу, майда дыйкан чарбалары өндүрүмсүз келгендиктен дыйканчылык өтө төмөнкү деңгээлде болгон.
                <br />
                СССР мезгилинин алгачкы жылдары республиканын эл чарба тармактарынын курамында айыл чарбасынын үлүшү негизги
                орунду ээлеген. Мамлекет агрардык өлкө болгондуктан калктын
                басымдуу бөлүгү айыл чарба тармактарында эмгектенген.
            </h4>
            <div className="carousel w-full">
                {img.map((el, index) => (
                    <div key={el.id} id={`slide${index + 1}`} className="carousel-item relative w-[100%] h-[480px]">
                        <img src={el.img} alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1  top-1/2">
                            <a href={`#slide${index}`} className="btn btn-circle bg-gray-700">
                                ❮
                            </a>
                            <a href={`#slide${index + 2}`} className="btn btn-circle bg-gray-700">
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <i>Соко сүйрөгөн дыйкан ж.б</i>

            <h4>
                Жаныдан түзүлө баштаган өнөр жайы - көмүр казып алуу,
                жөнөкөй майда ишканалар, кол онорчулук бир беткей өнүккөн.
                Алардын жарымы айыл чарба сырьёсун белендөө жана кен-байлыктарды казып алуу менен чектелген.
            </h4>

            <div className="w-full flex items-center justify-between">
                <h4 className="w-[70%] ">
                    Өнөр жай тармагы өзгөчө Улуу Ата Мекендик согуш
                    жылдарынан кийин өнүгө баштаган .Ошентип совет бийлигинин жылдарында
                    коомдук өндүрүштү   пландуу уюштуруу иши жанданган. Кыргыз Рес-
                    публикасында тустуу металлургия менен энергетика, коп тар-мактуу машина курууну, женил жана тамак-аш онор жайы онугуп баштаган. Кыргыз Республикасынын чарба тармактары-
                    нын тузумунде онор жай ондурушунун башкы орунга чыгышы
                    1960-жылдарга туура келген.
                </h4>
                <div className="animated-shape ">
                    <h3>
                        Эгерде ишканалардын көпчүлүгү бир түрдөгү гана продукцияны өндүрүүгө  багытталса ал
                        адистешуу деп аталат.
                    </h3>
                </div>

            </div>


        </div>
    );
};

export default Pages23;
