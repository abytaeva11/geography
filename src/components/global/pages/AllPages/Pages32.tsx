import React from 'react';
import img1 from "../../../../assets/img/ges1.jpg"
import img2 from "../../../../assets/img/ges2.jpg"
import img3 from "../../../../assets/img/ges3.jpg"
const Pages32 = () => {
    const product = [
        {id: 1, title: "Кызыл-Кыя көмүр кениндеги жылуулук станциясы", text: "121 кВт "},
        {id: 1, title: "Ош шаарындагы эки ГЭС ", text: "120 кВт"},
        {id: 1, title: "Бишкек дизель электр станциясы ", text: " 16,5 кВт"},
        {id: 1, title: "Каракол дизель электр станциясы", text: "7,5 кВт"},
    ]

    const product2 = [
        {id: 1, title: "Үч-Коргон", text: "1962 ", text2: "180 ", text3: "0,75"},
        {id: 1, title: " Ат-Башы", text: "1971", text2: "40", text3: "0,12 "},
        {id: 1, title: " Токтогул", text: " 1975", text2: "1200 ", text3: " 4,1"},
        {id: 1, title: "Күрп-Сай ", text: "1982", text2: "800 ", text3: "2,6 "},
        {id: 1, title: " Таш-Көмүр", text: " 1987", text2: " 450", text3: "1.5 "},
        {id: 1, title: "Шамалды-Сай", text: "1995", text2: "240 ", text3: "0,91"},

    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>32 бет</h6></div>
            <h4>
                1913-14-жылдары анча чоң эмес 5 электр станциясы (жалпы кубаттуулугу 265 кВт) иштеген:
            </h4>
            <table className="border-black border-2 m-2 w-full">
                <thead>
                <tr className="border-black bg-blue-400">
                    <th className="border-black border-2 p-2 hover:bg-blue-200 hover:text-white">Аталышы</th>
                    <th className="border-black border-2 p-2 hover:bg-blue-200 hover:text-white">Кубаттуулугу</th>
                </tr>
                </thead>
                <tbody>
                {product.map((product) => (
                    <tr key={product.id} className="border-black border-2">
                        <td className="border-black border-2 p-2">{product.title}</td>
                        <td className="border-black border-2 p-2">{product.text}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h4>
                1929-1958-жылдары Аламүдүн ГЭСтеринин каскады курулган.
            </h4>
            <table className="border-black border-2 m-3 w-full">
                <thead>
                <tr className="border-black bg-blue-400">
                    <th className="border-black border-2 p-2 hover:bg-blue-200 hover:text-white">ГЭСтер</th>
                    <th className="border-black border-2 p-2 hover:bg-blue-200 hover:text-white">Иштеп баштаган
                        жылдары
                    </th>
                    <th className="border-black border-2 p-2 hover:bg-blue-200 hover:text-white">Кубаттуулугу (MBT)</th>
                    <th className="border-black border-2 p-2 hover:bg-blue-200 hover:text-white">Иштеп чыгарылган
                        энергиясы (млрд. кВт*с)
                    </th>
                </tr>
                </thead>
                <tbody>
                {product2.map((product) => (
                    <tr key={product.id} className="border-black border-2">
                        <td className="border-black border-2 p-2">{product.title}</td>
                        <td className="border-black border-2 p-2">{product.text}  </td>
                        <td className="border-black border-2 p-2">{product.text2}  </td>
                        <td className="border-black border-2 p-2">{product.text3}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h4>
                Республиканын жалпы гидроэнергетикалык потенциалы 142 млрд кВт·с, техникалык потенциалы 73 млрд кВт·с,
                экон. потенциалы 48 млрд кВт·с. Акыркы эки көрсөткүчү боюнча КМШ өлкөлөрүндө 3-орунду (Орусия менен
                Тажикстандан кийин) ээлейт.
            </h4>

            <div className="flex w-full items-center justify-between">

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} alt="" className="h-[350px]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} alt="" className="h-[350px]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} alt="" className="h-[350px]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>

                    </div>

                </div>

<h4 className="w-[60%]">
    2009-2011-жылдары
    курулган ири энергетикалык объектилер 110 кВ жогорку вольттуу «Айгүлташ- Самат, линиясы жана 110 кв «Самат» подстанциясы, ГЭСинин  «Камбар-Ата-2» курулушу жана биринчи
    гидроагрегатынын
    эсептелинет.
    <i> «Камбар-Ата-2» ГЭСинин курулушу</i>
</h4>

            </div>

        </div>
    );
};

export default Pages32;