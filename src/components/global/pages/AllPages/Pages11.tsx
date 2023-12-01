import React from 'react';
import Analysis from "src/ui/analysis";
import Analysis16 from "src/ui/Progress.tsx/Analysis/Analysis16";
import {MapKg} from "src/map/Map";

const Pages11 = () => {
    return (
        <div className="pages1">
            <div className="page-number"><h6>10бет</h6></div>
            <i>2 диаграмма</i>
            <h1>Кыргыз Республикасынын калкынын жылдар боюнча
                табигый өсүшү</h1>
            <Analysis16/>
            <h4>
                1950-2000-жылдар ичинде республика боюнча калктын
                өсүшү 2,37 эсе болсо, ал Ош, Жалал-Абад облустарында 3 эсe
                жакын, ал эми Чуй, Ысык-Кол, Талас облустарында 3 эсеге көбөйгөн. Бул жылдары республикадан кочуп
                кеткендердин саны
                да өскөн. <br/>
                2016-жылы Кыргыз Республикасында төрөлгөндөрдүн саны
                27.4тү түздү. Республика ичиндеги аймактар боюнча да төрөлгөндөрдүн саны ар турдүү (2-карта-схеманы
                карагыла).
            </h4>
            <i>2-карта-схема</i>
            <h1>2016-жылдагы аймактар боюнча төрөлгөндөрдүн саны
                (%. промилль менен)</h1>
            <MapKg/>
        </div>
    );
};

export default Pages11;