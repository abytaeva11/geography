import React from 'react';
import bus1 from "../../../../assets/img/батыш вокзал.jpg"
//@ts-ignore
import bus2 from "../../../../assets/img/чыгыш вокзал.webp"

const Pages73 = () => {
    const block=[
        {id:1, number:1,text:"Мектепке чейинки уюмдар ",text2:137 ,},
        {id:2, number:2,text:"Жалпы билим берүү уюмдары  ",text2:145 ,},
        {id:3, number:3,text:"Атайын муктаждыгы бар балдар үчүн ",text2:6 ,},
        {id:4, number:4,text:"Башталгыч кесиптик билим берүү уюмдары ",text2:17 ,},
        {id:5, number:5,text:"Орто кесиптик билим берүү уюмдары ",text2:54 ,},
        {id:6, number:6,text:"Жогорку окуу жайлары",text2:37 ,},
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>73 бет</h6></div>

            <div className="w-full items-center justify-between flex my-6">

                <div className="w-[45%] h-[200px] flex flex-col items-center justify-center">
                    <img src={bus1} alt=" "/>
                    <h4> Батыш автобекети</h4>
                </div>
                <div className="w-[45%] h-[200px] flex flex-col items-center justify-center">
                    <img src={bus2} alt=""/>
                    <h4>Чыгыш автобекети</h4>
                </div>

            </div>

            <i>10-тиркеме</i>
            <b className="text-xl"> Бишкек шаарындагы билим берүү мекемелеринин саны (2017-ж.)*</b>


            <h4>
                Калкты соода жана тиричилик жактан тейлөөчү тармак тардын өнүгүү деңгээли жогору. Бишкекте ири соода
                борборлору жана тармактары, базарлар, мейманканалар орун алган. Аларга : «Айчүрөк», «Чынар», «Вефа»,
                «Караван», «Бишкек Парк». «Азия Молл», «Ала-Арча» ж.б. соода борборлору, «Народный ». «Ош базары»,
                «Аламүдүн», «Орто-Сай», «Кудайберген «Фрунзе», «Глобус», «Боорсок» ж. б. соода тармактары, «Дор-дой»,«Ош
                базары» , «Аламүдүн», «Орто-Сай»,«Кудайберген»
                ж.б. ири базарлары бар. Шаарга келген меймандарды тейлөөчү «Хаятт Ридженси», «Жаннат Ридженси», «Орион»,
                «Достук»,
                «Ая-Кеме», «Плаза» ж.б. мейманканалар жайгашк
                <br/>
                Бишкек шаарында Эркин экономикалык аймак (ЭЭА) 1995-жылы түзүлгөн.
                <br/>
                <b> Социалдык абалы.</b> Бишкек шаары республиканын борбору жана өнөр жайы жакшы өнүккөн шаар
                болгондуктан социалдык абалы жогору деңгээлде өнүккөн. Президенттин администрациясы , Өкмент, Жогорку
                Кеңеш, Республикалык сот жана прокуратура, ошондой эле басма каражаттары Бишкек шаарында орун алган.
                <br/>
                Республиканын илим изилдөө, жогорку окуу жай, маданият жана саламаттыкты сактоо мекемелеринин көбү
                Бишкек шаарында жайгашкан.
            </h4>

            <i>10-тиркеме</i>
            <b className="text-xl"> Бишкек шаарындагы билим берүүмекемелеринин саны </b>
            <table className="border-black m-3 border-2 w-full">
                <thead>
                <tr className="border-black">
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 "> № </th>
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">Билим берүү мекемелери  </th>
                    <th className="border-black border-2 p-2 bg-blue-400  text-white hover:bg-gray-700 ">саны   </th>
                </tr>
                </thead>
                <tbody>
                {
                    block.map(el=>(
                        <tr  key={el.id} className="border-black border-2">
                            <td className="border-black border-2 p-2"> {el.number}</td>
                            <td className="border-black border-2 text-start p-2"> {el.text}</td>
                            <td className="border-black border-2 p-2"> {el.text2}</td>
                        </tr>
                    ))
                }



                </tbody>
            </table>

        </div>
    );
};

export default Pages73;