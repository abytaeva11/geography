import React from 'react';
import maschina from "src/assets/img/mash1.jpg";
import maschina2 from "src/assets/img/mash2.jpg";
import maschina3 from "src/assets/img/mash3.jpg";
import maschina4 from "src/assets/img/mash4.jpg";
import maschina5 from "src/assets/img/mash5.jpg";
import maschina6 from "src/assets/img/mash6.jpg";




const Pages52 = () => {
    return (
      <div className="pages1">
        <div className="page-number"><h6>52 бет</h6></div> 
        <h4>Кыргыз Республикасынын негизги тармактарынын бир транспорт болуп саналат. Транспортуна эл чарбасынын өнүгүшүн мүмкүн эмес. Жаңы аймактарды өздөштүрүүдөн мурда порт жолдору өткөрүлөт.</h4>
        <div className="animated-shape-both gap-10">
          <h4 className="w-[80%]">
            Азыркы кездеги шаарда транспортсуз тиричилик өтпөйт. Транспорт эл чарбасын тейлөө менен бирге электр энергиясын, отунду, металлды жыгачты кеп керектейт. 
            Транспорттук өнүгүшүнө жаратылыш шарты, жер бетинин түзүлүш шарты таасирин тийгизет. Транспорт республика чарбасынын адистешүүгө жана комплекстүү өнүгүшүнө туртку берет.

          </h4>

          <div className="animated-shape ml-2">
            <h3>
            Транспорттун бардык түрлөрүнүн өз бирдиктүүлүгү транспорттук система деп аталат.
            </h3>
          </div>

        </div>
        <h4>Кыргыз Республикасында транспорттун (деция транспортунун башка) бардык түрү бар.</h4>
        <div className='flex items-center justify-start gap-10 m-12 '>
          <div className=' flex items-center justify-start flex-col'>
             <img src={maschina} alt="" className='w-[250px]' />
            <i>Тралейбусс</i>
          </div>
          <div className=' flex items-center justify-start flex-col'>
            <img src={maschina2} alt="" className='w-[250px]' />
            <i>Автобусс</i>
          </div>
          <div className=' flex items-center justify-start flex-col'>
            <img src={maschina3} alt="" className='w-[250px]' />
            <i>Суу</i>
          </div>
      </div>
        <div className='flex items-center justify-start gap-10'>
          <div className=' flex items-center justify-start flex-col'>
            <img src={maschina4} alt="" className='w-[250px]' />
            <i>Учак</i>
          </div>
          <div className=' flex items-center justify-start flex-col'>
            <img src={maschina5} alt="" className='w-[250px]' />
            <i>Темир жол</i>
          </div>
          <div className=' flex items-center justify-start flex-col'>
            <img src={maschina6} alt="" className='w-[250px]' />
            <i>Автоунаа</i>
          </div>
        </div>
        <h4 className='m-10'>Транспорттун негизги милдети жүргүнчүлөрдүн жана жүктөрдү жакынкы жана алыскы аралыктарга ташуу. Транспорттун өнүгүшүнө чарбачылык, курулуш, сооданын, калктуу пункттардын жайгашуусу, өндүрүштү комплекстүү өндүрүү жана жаратылыш шарттары таасирин тийгизет.</h4>


        </div>
    );
};

export default Pages52;