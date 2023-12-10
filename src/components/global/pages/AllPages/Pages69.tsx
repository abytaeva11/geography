import React from 'react';
import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";
import {FaArrowDownLong} from "react-icons/fa6";
import bishkek from "../../../../assets/img/бишкек.jpg"

const Pages69 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>69 бет</h6></div>
            <i>12-схема</i>
            <b className="text-xl">Бишкек шаарынын административдик-аймактык бирдиктери</b>
            <div className="w-full items-start justify-center flex   flex-col">
                <div className="flex items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]">Чоң-Арык шаарчасы </h3>
                    <FaLongArrowAltLeft/>
                    <div>
                        <h1 className="block text-center w-[250px]"> Бишкек</h1>
                        <FaArrowDownLong/>

                    </div>
                    <FaLongArrowAltRight/>

                    <h3 className="block text-center w-[250px]"> Орто-Сай айылы</h3>
                </div>
                <div className="w-full m-3 items-center justify-center flex">
                    <h2 className="block text-center w-[250px]">райондору </h2>
                </div>
                <div className="flex items-center justify-between w-full">
                    <h3 className="block text-center w-[200px]">Ленин</h3>
                    <h3 className="block text-center w-[200px]"> Биринчи Май</h3>
                    <h3 className="block text-center w-[200px]">Октябрь</h3>
                    <h3 className="block text-center w-[200px]">Свердлов</h3>

                </div>

            </div>
            <h4 className="m-3">
                <b>Табияты</b>. Бишкек Чуй өрөөнүнүн борбордук бөлүгүндө ,Кыргыз Ала-Тоосунун түндүк этегинде, деңиз
                денгээлинен
                750-900 м бийиктикте орун алган. Аламүдүн жана Ала-Арча
                сууларынын шилендиси пайда кылган жантайыңкы түздүктө жайгашкан.
            </h4>
            <img src={bishkek} alt="" className="w-full h-[420px]"/>
            <h4>
                Сейсмикалык райондоштуруунун маалыматы боюнча шар аймагы 9 баллдуу зонада жайгашкан.
                Бишкек шаарынын климаты континенттик климатты тибине кирет. Шаар деңиз менен океандан алыс жайгашкав
                -чачын аз болот. Жылдык жаан-чачындын орточо
                олчому 442 мм. <br/>
                Бишкек шаарынын негизги суу артериялары мурда Ала- Арча жана Аламүдүн суулары болгон. Ал Бишкектин айма
                гында тармактанган нуктар менен түштүктөн түндүктү карай аккан. Шаар курулушунун кеңири кулач жайышына
                байланыштуу алардын көптөгөн салаалары эки гана кукка бириктирилген. Суу агымын жөнгө салуу үчүн
                Бишкектин түштүгүнүн тарабындагы тоо этектеринде курулган суу сактагычтар жана коптогон сугат каналдары
                аркылуу шаар айланасындагы чарбалардын жерлерин жана шаар аймагын сугарууга пайдаланылат.
            </h4>
        </div>
    );
};

export default Pages69;