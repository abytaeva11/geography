import React from 'react';
import {LuMoveRight} from "react-icons/lu";

const Pages18 = () => {
    const block=[
        {id:1,title:"Эң ири", text:" Бишкек "},
        {id:2,title:"Чоң", text:"Ош, Жалал-Абад "},
        {id:3,title:"Орто", text:" Каракол, Токмок, Нарын, Кербен, Талас,\n" +
                "Өзгөн, Кара-Балта, Балыкчы, Кант, Кы-\n" +
                "зыл-Кыя, Таш-Көмүр, Кара-Суу, Исфана,\n" +
                "Кара-Көл, Майлуу-Суу, Баткен, Сүлүктү "},
        {id:4,title:"Чакан", text:"Чолпон-Ата, Айдаркен, Кадамжай, Коч-\n" +
                "кор-Ата, Көк-Жаңгак, Токтогул, Кемин,\n" +
                "Орловка, Кайынды, Шопоков, Ноокат. "},
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>18бет</h6></div>
<h4>
    Советтер Союзунун убагында Кыргыз Республикасында
    шаардык калк тез өскөн. Айылдык калктын көпчүлүгү шаар
    жерлерине келип отурукташкан. Себеби шаарларда өнөр жай
    тармактары, ишканалары пайда болуп калкты жумуш менен
    камсыз кылган. Калктын өсүүсү жана экономиканын өнүгүшү
    менен жаны шаарлар жана шаарчалар пайда болгон. Мисалы,
    ХХ-кылымдын башында Кыргыз Республикасынын аймагында
    алты гана шаар болгон. <br/>
    Шаарлар чоңдугу, аткарган милдеттери боюнча бири-биринен айырмаланышат. <br/>
    Республикада эң ири (калкы 500 миңден ашык), чоң (100
    миңден 500 миңге чейин), орто (20 миңден 100миңге чейин)
    жана майда (20 миңге чейин) шаарлар бар (1-схеманы кара).
</h4>
            <i>1-схема</i>
            <b className="text-xl"> Калкынын саны боюнча шаарлардын бөлүнүшү.</b>
            <div className="my-6">
                <h4 className="rotate-90 transform origin-top-left inline-block items-center justify-center text-white mb-[-45px]  flex bg-blue-400 w-[305px] text-center ">Калкынын саны боюнча</h4>
                <div>
                    {
                        block.map(el=>(
                            <div key={el.id} className="flex items-center justify-center py-3">
                                <h3 className="block w-[120px]    ">{el.title}</h3>
                                <h2 className="text-3xl"><LuMoveRight /></h2>
                                <h3 className="block w-[420px]">
                                    {el.text}
                                </h3>

                            </div>
                        ))
                    }
                </div>
            </div>

<h4>
    Аткарган функциялары боюнча калктуу пункттар төмөнкүдөй бөлүнөт. <br/>
    1. <i>полифункциялуу</i> (бир нече функцияны аткарган) <br/>
    2. <i>монофункциялуу</i> (бир эле функцияны аткарган) <br/>
    Мисалы, полифункциялуу шаарга
    Бишкек кирет. <br/>
    Ал саясий, маданий, өнөр жай, транспорт жана соода
    борбору болуп саналат. Ал эми монофункциялуу шаарларга
    курорттук борбор, Таш-Көмүр - көмүр казуу
    Чолпон-Ата
    өнөр жайынын борбору. <br/>
    Аларга: Кетмен-Төбө, Көк-Таш, Шамалды-Сай, Кызыл-Жар
    (Жалал-Абад обл.), Пристань-Пржавльск, Орто-Токой (Ысык.
    Көл обл.), Борду (Чуй обл.), Чон-Арык (Бишкек ш.). <br/>
    Аянтынын чондугу боюнча Кыргыз Республикасынын
    айыл-кыштактары: ири, орто жана чакан болуп бөлүнөт.
</h4>


        </div>
    );
};

export default Pages18;