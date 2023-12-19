import React from 'react';

const Pages85 = () => {
    const block = [
        {id: 1, number: 1, text: "Мектепке чейинки уюмдар ", text2: 57,},
        {id: 2, number: 2, text: "Жалпы билим берүү уюмдары  ", text2: 116,},
        {id: 3, number: 3, text: "Атайын муктаждыгы бар балдар үчүн ", text2: 1,},
        {id: 4, number: 4, text: "Башталгыч кесиптик билим берүү уюмдары ", text2: 6,},
        {id: 5, number: 5, text: "Орто кесиптик билим берүү уюмдары ", text2: 5,},
        {id: 6, number: 6, text: "Жогорку окуу жайлары", text2: 1,},
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>85 бет</h6></div>
            <i>12-тиркеме</i>
            <b className="text-xl"> Талас облусунун билим берүүмекемелеринин саны (2017-ж.) </b>

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
                Облустун өзүнүн теле жана радио берүүлөрү, гезиттери бар. Рекреациялык ресурстардан облустун аймагында
                коло дооруна тиешелүү Таш-Дөбө, Кызыл-Сай, Беш-Таш, Желе-Дөбө, Таш-Арык көрүстөндөрү, Кең-Кол байыркы
                көрүстөнү (б. з. ч. 3-2-к.) сакталып калган. Ошондой эле Нушжан шаар чалдыба ры (Үч-Булак бекетинин
                жанында), эпиграфикалык эстеликтер- ден Талас байыркы жазуу эстеликтери (таштын бетине байыркы турк
                жазуусу чегилген; Айыртамой өндүрү), архитектуралык эстеликтерден «Манас ордосу» комплекси (Манастын
                күмбөзү, «Манас» музей коругу, «Манас» музейи, мечит ж. б.), байыркы археологиялык жана архитектуралык
                эстеликтер бар.
            </h4>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Талас облусунда жайгашкан кен байлыктарды атагыла . <br/>
                    2. Облустун аймагындагы Талас дарыясында кайсы суу сактагыч курулган? <br/>
                    3. Облустагы эң бийик Манас чокусунун аймагынан кайсы мамлекеттердин чек аралары кесилишет? <br/>
                </h4>
            </div>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүңдү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Талас облусунун экономикасынын өнүгүшүндө кандай көйгөйлөр бар? <br/>
                    2. Талас жана Чүй облустарынын айыл чарбасындагы окшоштуктары жана айырмачылыктары кайсылар?  <br/>
                    3. Облустагы негизги транспорттук магистралдарды
                    санагыла.
                </h4>
            </div>
        </div>
    );
};

export default Pages85;