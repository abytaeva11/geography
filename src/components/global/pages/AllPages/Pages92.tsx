import React from 'react';
import {FaArrowDownLong} from "react-icons/fa6";

const Pages92 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>92 бет</h6></div>

            <h1> Нарын облусунун администрациялык - экономикалык картасы</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95731.9506150909!2d75.89874279156885!3d41.425691874330305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38906bac89c2f9cb%3A0xb400cbc7951a0aa4!2z0J3QsNGA0YvQvQ!5e0!3m2!1sru!2skg!4v1702282556779!5m2!1sru!2skg"
                width="900" height="500"  loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            <i> 16-схема</i>
            <b className="text-xl">Нарын облусунун административдик-аймактык бирдиктери</b>
            <div className="flex m-2 flex-col items-center justify-between w-full">

                <h3 className="block text-center w-[250px] m-1"> Нарын облусу</h3>
                <div className="w-full">
                    <hr/>
                    <div className="flex  items-center justify-between w-full">
                        <FaArrowDownLong/> <FaArrowDownLong/> <FaArrowDownLong/>
                    </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                    <h3 className="block text-center w-[250px]"> 5 администра- тивдик район </h3>

                    <div>
                        <h1 className="block text-center w-[250px]">1 шаар</h1>
                        <FaArrowDownLong/>
                    </div>

                    <h3 className="block text-center w-[250px]"> 63 айыл өкмөтү</h3>
                </div>
                <div className="w-full items-start justify-start flex">
                    <div className="flex-col flex m-2">
                        <h3 className="block text-center w-[250px] m-1">Ак-Талаа </h3>
                        <h3 className="block text-center w-[250px] m-1">Ак-Башы </h3>
                        <h3 className="block text-center w-[250px] m-1">Жумгал </h3>
                        <h3 className="block text-center w-[250px] m-1">Кочкор </h3>
                        <h3 className="block text-center w-[250px] m-1">Нарын </h3>
                    </div>
                    <div className="flex-col flex pr-[270px] ">
                        <h3 className="block text-center w-[250px] m-1"> Нарын </h3>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Pages92;