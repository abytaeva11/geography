import React from 'react';
import maschina2 from "src/assets/img/mash2.jpg";
import maschina6 from "src/assets/img/mash6.jpg";
import { LuMoveDownLeft, LuMoveDownRight } from "react-icons/lu";
import { GoArrowDown } from "react-icons/go";
const Pages53 = () => {
    return (
      <div className="pages1">
        <div className="page-number"><h6>53 бет</h6></div>
        <div className='flex items-center justify-start gap-10 m-4'>
           <div className=' flex items-center justify-start flex-col'>
          <img src={maschina2} alt="" className='w-[450px]' />
            <i>Жүргүнчү ташуучу унаа</i>
        </div>
        <div className=' flex items-center justify-start flex-col'>
          <img src={maschina6} alt="" className='w-[450px]' />
            <i>Оор жүк ташуучу унаа.</i>
        </div>
        </div>
        <h4 >Кыргыз Республикасынын аймагы тоолуу болгондуктан жүк жана жүргүнчүлөрдү ташууда автоуна транспортунун
          мааниси өтө зор.
          Ал жүктөрдү которуштуруп жүктөбөстөн эле түздөн-түз керектөөчүлөргө жеткире алат. Автоунаа транспорту өнөр жай менен айыл чарба ишканаларын магистралдык транспорт
          63 менен байланыштырат. Шаарлардагы жана шаар айланарындагы негизги жүктөрдү ташыйт. Республикага алгач автоунаа 1912-жылы келген, ал эми автоунаа транспорт тармагы 1920-жылы калыптанган. 1930-жылдан баштап автоуна
          транспорту өнүгүү жолуна түшкөн, жолдордун сапатына көңүл бурула баштаган. 1940-жылдан башталып, согуш учурда токтоп калган маанилүү жол Бишкек Кара-Балта Сосновка Суусамыр Ош жолу 1965-жылы пайдаланууга берилген Ал республиканын түндүгү менен түштүгүн байланыштыры Суусамыр жана Талас өрөөндөрүнө жол ачкан. 1967-жылы В Каракол Балыкчы айланма (Ысык-Көлдү айланта)жолу бүткөрүлгөн.
          1991-жылдан кийинки структуралык өзгөрүүлөрдүн на тыйжасында автоунаа транспорт системасы жапырт ме тештирилип, автотранспорт ишканаларынын 80% м акционердик  коомдорго айланган.</h4>

        <div className="f-[90%] flex items-center justify-center flex-col m-4">

          <h1 className=" mt-8">Автоунаа жолдорунун мааниси боюнча бөлүнүшү:</h1>

          <div className="w-[100%] flex items-start justify-between">
            <div className="w-[100%] flex items-center justify-center flex-col">
              <h2 className=" block w-[250px] mt-28 m-10 ">Автоунаа жолдору (18633,0 км.)</h2>
            </div>
            <div className="w-[100%] flex items-center justify-center flex-col">
              <h2 className=" block w-[350px] m-4">Эл аралык маанидеги <br/>(4142.1 км.) </h2>
              <h2 className=" block w-[350px]  m-4 ">Республикалык маанидеги <br/>(5561,9 км.)</h2>
              <h2 className=" block w-[350px]  m-4 ">Жергиликтүү мааниде <br/>(8929,0 км)</h2> 

            </div>
          </div>




        </div>


        </div>
    );
};

export default Pages53;