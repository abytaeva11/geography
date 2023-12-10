import React from 'react';

const Pages60 = () => {
    const block=[
        {id:1, title:"экспорт", text:"кымбат баалуу металлдар, жеңил өнөр жайынын товарлары , металлдар (темир, алюминий,жез калдыктары), жашылча-жемиш,тери, суусундуктар,сүт азыктары, цемент, шифер",text2:" Kaзакстан, Швейцария, Бириккен Араб Эмираттары, Түркия, Россия"},
        {id:2, title:"импорт", text:"машиналар, жабдыктар, чийки заттар, өнөр жай материалдары",text2:"Россия, Кытай, Казакстан, Түркия "},
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>60 бет</h6></div>

            <i> 9-тиркеме</i>
            <b className="text-xl"> Кыргыз Республикасынын соода экономикалык байланыштары</b>
            <table className="border-black m-3 border-2 w-full">
                <thead>
                <tr className="border-black">
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Соода экономикалык байланыштар </th>
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Өлкөлөр    </th>
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Товарлар   </th>
                </tr>
                </thead>
                <tbody>
                {block.map((product) => (
                    <tr key={product.id} className="border-black border-2">
                        <td className="border-black border-2 p-2 ">{product.title}</td>
                        <td className="border-black border-2 p-2">{product.text}</td>
                        <td className="border-black border-2 p-2">{product.text2}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h4>
                Кыргыз Республикасы Евразия экономикалык биримдигине киргенден кийин тилекке каршы импорт, экспорт кыскарып кеткени белгилүү болду. Ошондой эле азык-түлүк продукциялары да кыскарган. Себеби эл аралык талапка жооп берген лабораториялардын жоктугу. Мунун кесепетинен дыйкандар жана фермерлер жабыркоодо.
                <br/>
                Келечекте Кыргыз Республикасына импорттолгон товарларды республиканын өзүндө өндүрүүнү ишке ашыруу, экспортту көбөйтүү мезгилдин талабы.
            </h4>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Мен муну билем
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Эмне себептен Улуу географиялык ачылыштар доорунан кийин Улуу Жибек жолу өз маанисин жоготкон?
                    <br/>
                    2. Күнүмдүк турмуш-тиричиликте пайдаланылган товарлар кайсы мамлекеттерден импорттолот?
                </h4>

            </div>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүңдү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Кыргыз Республикасы менен экспорт боюнча нек- теш мамлекеттер кайсылар?
                    <br/>
                    2. Биздин республика эмне себептен Кытай, Түркия, Орусия, Казакстан мамлекеттери менен өзгөчө тыгыз байланышта? Анализ жүргүзгүлө.
                    <br/>
                    3. Силер жашаган аймактан кандай товарлар экспорттолот?
                </h4>
            </div>

        </div>
    );
};

export default Pages60;