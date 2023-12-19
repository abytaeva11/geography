import React from 'react';

const Pages79 = () => {
    const block = [
        {id: 1, number: 1, text: "Мектепке чейинки уюмдар ", text2: 137,},
        {id: 2, number: 2, text: "Жалпы билим берүү уюмдары  ", text2: 145,},
        {id: 3, number: 3, text: "Атайын муктаждыгы бар балдар үчүн ", text2: 6,},
        {id: 4, number: 4, text: "Башталгыч кесиптик билим берүү уюмдары ", text2: 17,},
        {id: 5, number: 5, text: "Орто кесиптик билим берүү уюмдары ", text2: 54,},
        {id: 6, number: 6, text: "Жогорку окуу жайлары", text2: 37,},
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>79 бет</h6></div>
            <i>11-тиркеме</i>
            <b className="text-xl"> Чүй облусунун билим берүүмекемелеринин саны (2017-ж.) </b>
            <table className="border-black m-3 border-2 w-full">
                <thead>
                <tr className="border-black">
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 "> №</th>
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Билим берүү
                        мекемелери
                    </th>
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">саны</th>
                </tr>
                </thead>
                <tbody>
                {
                    block.map(el => (
                        <tr key={el.id} className="border-black border-2">
                            <td className="border-black border-2 p-2"> {el.number}</td>
                            <td className="border-black border-2 text-start p-2"> {el.text}</td>
                            <td className="border-black border-2 p-2"> {el.text2}</td>
                        </tr>
                    ))
                }


                </tbody>
            </table>
            <h4>
                Маданий мекемелеринен облуста 211 китепкана, 178 клуб, 6 музей жана 8 кинотеатр иштейт.
                Облустун экономикалык-географиялык абалы ыңгайлуу абалды ээлегендиктен Чүй облусу өнүгүшү боюнча башка
                облус тарга үлгү боло алат.
            </h4>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Чүй облусунун эң жапыз жана эң бийик жерлерин, алардын абсолюттук бийиктиктерин атагыла.
                    <br/>
                    2. Облуста кандай тарыхый архитектуралык эстелик- тер бар?
                    <br/>
                    3. Улуу Жибек жолунун Чүй облусунун аймагына тийгизген таасири кандай?
                </h4>
            </div>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүңдү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Чүй облусунун өнөр жайынын өнүгүшүн кайсы жаратылыш ресурстары аныктайт?
                    <br/>
                    2. Облустун калкынын жана эмгек ресурстарыны өзгөчөлүгү эмнеде?
                    <br/>
                    3. Облустун аймагындагы негизги транспорттук магист ралдарды картадан көрсөтүп, контур картага
                    белгилегиле.
                </h4>
            </div>
        </div>
    );
};

export default Pages79;