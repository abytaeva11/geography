import React from 'react';
import milk from "../../../../assets/img/milk.jpg"

const Pages43 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>43 бет</h6></div>
            <h4>
                Азыркы кезде республикада «Бишкек эт-консерва комбинаты акционердик коому, «Тоштүк» (Каракол эт комбинаты), «Келечек» (Ош эт комбинаты) акционердик коому, «Кайынды, Кайынды эт комбинаты) акционердик коому ж.б. иштеп жатышат. Бул ишканаларда көптөгөн эт продукцияларынын түрлөрү даярдалат. Мисалы, колбаса, котлет, чучбаранын ар кандай түрлөрү.
            </h4>
            <div className="w-full items-start justify-start flex">
                <h4 className="w-[20%]">
                    Сүт өнөр жайы
                    негизинен
                    айыл-кыштактарда
                    жайгашкан. Себеби сүт ишканаларынын
                    сырьелук базасынын
                    радиусу 50 км аш паш керек.

                </h4>
                <img src={milk} alt="" className="w-[70%] h-[250px]"/>
            </div>
            <h4>
                Республикада иштеп жаткан сут комбинаттарынын ирилери: <br/>
                • Бишкектеги «Бишкек сүт», «Эльвест» акционердик коомдору <br/>
                •   Беловодскийдеги «Аксүт» акционердик компаниясы <br/>
                •   Токмок сүт заводу, «Сүт-Булак» сыр жасоочу Кыргызстан - Швейцария ачык типтеги акционердик коому
                <br/>
                • Кара-Балтадагы «Эридан сүт» <br/>
                • Жети-Өгүздөгү «Ак-Жалга» <br/>
                Мындан сырткары дыйкан (фермер) чарбаларында да чакан сүт өндүрүштөрү бар. <br/>
                Молдованын Триасполь шаарында өткөрүлгөн эл аралык
                конкурста «Манас-1000» маркасындагы кыргыз коньягы алтын медалга ээ болгон.

            </h4>
            <table className="border-black border-2 w-full">
                <thead>
                <tr className="border-black">
                    <th className="border-black border-2 p-2">Список товаров</th>
                    <th className="border-black border-2 p-2">Место для написания</th>
                </tr>
                </thead>
                <tbody>

                    <tr  className="border-black border-2">
                        <td className="border-black border-2 p-2"> </td>
                        <td className="border-black border-2 p-2">

                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Pages43;