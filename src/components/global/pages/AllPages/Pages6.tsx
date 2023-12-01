import React from 'react';
import deputat from "../../../../assets/img/Жогорку Кенештин отуруму.jpg"

const Pages6 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>6 бет</h6></div>
            <img className="home-img" src={deputat} alt=""/>
            <h2 className="pb-3"> Жогорку Кенештин отуруму</h2>
            <i>2-тиркеме</i>
            <h1>Жогорку бийликтин талапкерлигине коюлуучу талаптар</h1>
<div>


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-[900px] text-sm text-left   ">
            <thead className=" w=[450px] text-gray-700 uppercase ">
            <tr>
                <th scope="col" className="w-[50%] dark:text-gray-400 px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Президенттикке:
                </th>
                <th scope="col" className=" w-[50%] px-6 py-3 ">
                    Жогорку Кеңештин депутаттыгына:
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className=" w-[450px]border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    • Мамлекеттик тилди билген;
                </th>
                <td className="px-6 py-4 dark:text-black text-xl">
                    • 21 жаштан жогору;                </td>
            </tr>
            <tr className=" w-[450px]border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    • 35тен 70 жашка чейинки;
                </th>
                <td className="px-6 py-4 dark:text-black text-xl">
                    • 5 жылдан кем эмес республикада туруктуу жашаган.             </td>
            </tr>
            <tr className=" w-[450px]border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    •  Кыргыз Республикасында 15 жылдан <br/> кем эмес туруктуу жашаган Кыргыз Республикасынын жараны
                </th>
                <td className="px-6 py-4 dark:text-black text-xl">
                    • 5 жылдык мөөнөткө шайланат              </td>
            </tr>
            <tr className=" w-[450px]border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    • 6 жылдык мөөнөткө шайланат
                    (Конституциянын 61-62-беренеси;)
                </th>
                <td className="px-6 py-4 dark:text-black text-xl">
                    ((Конституциянын 70-береси;              </td>
            </tr>
            </tbody>
        </table>
    </div>


</div>
        </div>
    );
};

export default Pages6;