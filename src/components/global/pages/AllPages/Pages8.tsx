import React from 'react';

const Pages8 = () => {

    const data=[
        {
            title:" Кыргыз Республикасы",
            number1: 199.9 ,
            number2: 6019.5,
            number3: "40 (Бишкектен сырткары)" ,
            number4: 31 ,
            number5: 9 ,
            number6: 453 ,
        },

        {
            title:"Бишке",
            number1:0.127,
            number2: 958.5,
            number3: 4,
            number4:  1,
            number5:  1,
            number6: "" ,
        },
        {
            title:"Чүй облусу",
            number1:20.2 ,
            number2: 958.5,
            number3: 8,
            number4: 7,
            number5:1,
            number6:105,
        },
        {
            title:"Талас облусу ",
            number1: 11.4 ,
            number2: 251.3,
            number3: 4,
            number4: 1 ,
            number5: "" ,
            number6: 37 ,
        },
        {
            title:"Ысык-Көл облусу",
            number1:43.1,
            number2:470.1 ,
            number3: 5,
            number4: 3 ,
            number5: 2 ,
            number6: 61 ,
        },
        {
            title:"Нарын облусу ",
            number1:45.2,
            number2: 277.6,
            number3: 5,
            number4: 1 ,
            number5: "" ,
            number6:  63,
        },
        {
            title:"Ош облусу ",
            number1:29.0  ,
            number2:1535.4,
            number3:7 ,
            number4: 4 ,
            number5:  "",
            number6: 88,
        },
        {
            title:" Жалал-Абад облусу",
            number1: 33.7,
            number2: 1146.5,
            number3: 8,
            number4:  8,
            number5:  4,
            number6:  68,
        },
        {
            title:"Баткен облусу",
            number1:17.0 ,
            number2: 492.6,
            number3: 3,
            number4:  6,
            number5: 1,
            number6:  31,
        },

    ]

    return (
        <div className="pages1">
            <div className="page-number"><h6>8бет</h6></div>
<h1> Кыргыз Республикасынын административдик - аймактык бөлүнүшү (2016-ж.)</h1>


                    <div className="relative overflow-x-auto w-[1000px]">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                            <tr>
                                <th scope="col" className="px-6 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Аянты миң км²
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Калкынын сан миң киши
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Райондор
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Шаарлар
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Шаарчалар
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Айыл аймактары
                                </th>

                            </tr>
                            </thead>
                            {
                                data.map(el=>(
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {el.title}
                                </th>
                                <td className="px-6 py-4">
                                    {el.number1}
                                </td>
                                <td className="px-6 py-4">
                                    {el.number2}
                                </td>
                                <td className="px-6 py-4">
                                    {el.number3}
                                </td>
                                <td className="px-6 py-4">
                                    {el.number4}
                                </td>
                                <td className="px-6 py-4">
                                    {el.number5}
                                </td>
                                <td className="px-6 py-4">
                                    {el.number6}
                                </td>
                            </tr>
                            </tbody>
                            ))
                            }
                        </table>
                    </div>

            <h2 className="pt-10 text-2xl"> 2-БӨЛҮМ </h2>
                <hr/>

                <h1> КЫРГЫЗ РЕСПУБЛИКАСЫНЫН КАЛКЫНЫН
                    ГЕОГРАФИЯСЫ</h1>
                <h1><span>§ 3.</span>  Калкы. Демографиялык процесстер</h1>

            <h4>
               <i> Калктын саны </i>- маанилуу сандык көрсөткүч. Ал аркылуу кандай гана аймакта (шаар, район, өлкө, ири аймак же бут
                дуйно) жашабасын калкка мунөздөмө берүүгө болот. Мындай
                корсоткучтун башкы булагы - эл каттоо. Эл каттоо байыртадан
                эле Месопотамияда, Египетте, Индияда жана Кытайда жүргүзүлүп келген.
            </h4>
            <div className="pages3-text1">
                <button type="button" className="pages3-text2  px-5 py-2.5 text-center   ">
                    Өзүндү текшер
                </button>
            </div>
            <div className="pages3-text2  text-white text-sm px-5 py-2.5 text-start mr-2 mb-2">
                <h4>
                    1. Калк деп эмнени түшүнөсүнөр? <br/>
                    2. Улут деген эмне?
                </h4>
            </div>


        </div>
    );
};

export default Pages8;