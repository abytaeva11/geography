import React from 'react';

const Pages96 = () => {
    const block = [
        {id: 1, number: 1, text: "Мектепке чейинки уюмдар ", text2: 80,},
        {id: 2, number: 2, text: "Жалпы билим берүү уюмдары  ", text2: 198,},
        {id: 4, number: 3, text: "Башталгыч кесиптик билим берүү уюмдары ", text2: 8,},
        {id: 5, number: 4, text: "Орто кесиптик билим берүү уюмдары ", text2: 12,},
        {id: 6, number: 5, text: "Жогорку окуу жайлары", text2: 1,},
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>96 бет</h6></div>
            <h4>
                Облустун аймагында Кошой-Коргон шаар чалдыбары (7- 8-к.). Кербен сарайы (10-15-к.) жана Шырдакбектин
                чебин (10-12-к.) урандылары, Тайлак баатырдын күмбөзү (19-к.), таш доорундагы тургун жай (Он-Арча),
                Таш-Рабат жана башка рыхый эстеликтер бар.
            </h4>
            <i>14-тиркеме</i>
            <b className="text-xl">Нарын облусунун билим берүү мекемелеринин саны (2017-ж.)*</b>

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
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Облустун аймагындагы атактуу жайлоолорду атагыла. <br/>
                    2. Нарын облусунда кайсы жаратылыш ресурстары чарбасында пайдаланылып жатат? <br/>
                    3. Облустагы калктар отурукташкан негизи өрөөндөрдү санагыла.
                </h4>
            </div>

            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүңдү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Облустун айыл чарбасынын адистештирилиши кандай, бийик тоолуу жайыттардын ага тийгизген таасирин
                    түшүндүргүлө. <br/>
                    2. Калкынын жана эмгек ресурстарынын өзгөчөлүгү
                    эмнеде? <br/>
                    3. Нарын облусу менен Ысык-Көл облустарынын жаратылыш ресурстарын салыштыргыла.
                </h4>
            </div>
        </div>
    );
};

export default Pages96;