import React from 'react';
import komur from "src/assets/img/мунай.jpg";
import djunda from "src/assets/img/джунда.jpg";


const Pages30 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>30 бет</h6></div>
            <div className="w-full items-start justify-between flex">
                <img src={komur} alt="" className="w-[400px] h-[240px]"/>

                <h4 className="ml-3">
                    <mark>Мунай</mark> - бул жүз миллиондогон жылдар мурун жашаган
                    организмдердин
                    чирүүсүнөн пайда болгон көмүр
                    суутектин татаал аралашмасы.
                </h4>
            </div>
            <h4>
                Мунай өндүрүүгө жумшалган чыгымдар орточо алганда
                көмүргө жумшалгандан 4 эсе төмөн. Республикада мунайдын
                12 кени бар. Мунай кендери Баткен жана Жалал-Абад облустарында жайгашкан.
                <br/>
                Жалал-Абад шаарына жакын жерде чет өлкөлүктөр менен биргелешкен, кубаттуулугу 0,5 млн т мунай иштетүүчү завод
                курулган.
            </h4>
            <img src={djunda} alt="" className="w-[90%] h-[360px]"/>
            <i> «Джунда» мунай иштетүү заводу</i>

            <div>
                <iframe width="860" height="315" src="https://www.youtube.com/embed/FNcdYVxrbxA?si=cel-KQBUX7erN8y7"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>

        </div>
    );
};

export default Pages30;