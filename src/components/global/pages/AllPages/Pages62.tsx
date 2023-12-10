import React from 'react';
import {LuMoveDownLeft, LuMoveDownRight} from "react-icons/lu";
import {GoArrowDown} from "react-icons/go";
import baby from "../../../../assets/img/садик.jpg"
import school from "../../../../assets/img/школа.jpg"
import knu from "../../../../assets/img/кну.jpg"
const Pages62 = () => {
    return (
        <div className="pages1">
        <div className="page-number"><h6>62 бет</h6></div>

            <div>
                <h3 className="block m-2">  Тейлөө чөйрөсүнүн курамы</h3>
          <div className="block rounded-xl  text-center items-center justify-center flex ">
              <h4 className="p-1">
                  турак-жай коммуналдык тейлөө; <br/>
                  чекене соода <br/>
                  коомдук тамактануу, турмуш-тиричилик жактан тейлөдө <br/>
                  балдарга жана өспүрүмдөргө жалпы билим берүү жана аларды тарбиялоо <br/>
                  саламаттыкты сактоо; <br/>
                  балдарды, пенсионерлерди жана майыптарды социалды тейлөө
                  рекреациялык тейлөө; <br/>
                  жүргүнчү транспорту; <br/>
                  калк үчүн байланыш кызматы; <br/>
                  кредиттик тейлөө жана камсыздандыруу (страхование); <br/>
                  мүлктү жана атуулдардын коопсуздугун коргоо                </h4>
          </div>
            </div>
            <div className="f-[90%] flex items-center justify-center flex-col m-2">

                <h1 className="block w-[400px]  "> Инфраструктура</h1>
                <div className="flex items-end text-2xl justify-center"><LuMoveDownLeft/> <LuMoveDownRight/></div>

                <div className="w-[100%] flex items-center justify-between">
                    <div className="w-[100%] flex items-start justify-start flex-col">
                        <h2 className=" block w-[250px] "> өндүрүштүк инфраструктура</h2>
                        <div className=" text-2xl "> <GoArrowDown /></div>
                        <h2 className=" block w-[250px] ">өндүрүштүк инфраструктура
                            транспорт, байланыш,
                            электр жана суу менен камсыз кылуу</h2>

                    </div>
                    <div className="w-[100%] flex items-center justify-center flex-col">
                        <h2 className=" block w-[250px] "> социалдык инфраструктура</h2>
                        <div className=" text-2xl "> <GoArrowDown /></div>
                        <h2 className=" block w-[350px] ">саламаттыкты сактоо, билим берүү, маданият, турмуш-тиричилик жактан тейлөө мекемелери</h2>

                    </div>
                </div>

            </div>
<h1> Билим берүүнүн негизги багыттары:</h1>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-[100%]  h-[300px]">
                    <img src={baby} alt=""/>
                    <h4 className="ml-20">Мектепке чейинки билим берүү: бала-бакча, атайын окуу ийримдери </h4>
                </div>
                <div id="item2" className="carousel-item  w-[100%] h-[300px]">
                    <img src={school} alt=""/>
                    <h4 className="ml-20"> Жалпы билим берүү: орто мектептер, гимназиялар, лицейлер, колледждер.</h4>
                </div>
                <div id="item3" className="carousel-item  w-[100%] h-[300px]">
                    <img src={knu} alt=""/>
                    <h4 className="ml-20">Жогорку билим берүү: институттар, университеттер, академиялар.</h4>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

        </div>
    );
};

export default Pages62;