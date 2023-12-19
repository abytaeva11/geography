import React, {useState} from 'react';
import img1 from "../../../../assets/img/лампа1.jpg"
import img2 from "../../../../assets/img/лампа2.jpg"
import img3 from "../../../../assets/img/лампа3.jpg"
import img4 from "../../../../assets/img/лампа4.jpg"
import img5 from "../../../../assets/img/лампа5.jpg"
import img6 from "../../../../assets/img/лампа6.jpg"

const Pages108 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img5,img6]

    const handleButtonClick = (index: number) => {
        setCurrentIndex((prevIndex) => (index >= 0 && index < images.length ? index : prevIndex));
    };
    return (
        <div className="pages1">
            <div className="page-number"><h6>108 бет</h6></div>

            <h4>
                ишканасы жана башкалар. Негизги продукциялары: электр лампалары, электр тогун өткөрбөөчү (изоляциялоочу)
                материалдар (тасмалар) жана түтүкчөлөр, электр жылыткычтар, насостор,автоунаа тетиктери. <br/>
                Облустагы ички дүң продукциясынын көпчүлүк бөлүгү айыл чарбасына туура келет. Айыл чарбадан өндүрүлгөн
                продукциянын көбүн дыйканчылык өндүрүп, ал пахта, тамеки жана жашылча өстүрүүгө адистешкен. Кийинки
                жылдарда облустун жеринде кант кызылчасы жана май өсүмдүктөрү өстүрүлө баштады.
            </h4>
            <div className="carousel w-full">
                {images.map((img, index) => (
                    <div key={index}
                         className={`carousel-item w-full h-[500px] ${currentIndex === index ? 'visible' : 'hidden'}`}>
                        <img src={img} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
            <i> Майлуу-Суу лампа заводу.</i>
            <div className="flex justify-center w-full  py-2 gap-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}
                            className="btn btn-l bg-blue-200 text-white">
                        {index + 1}
                    </button>
                ))}
            </div>

            <iframe width="900" height="225" src="https://www.youtube.com/embed/W2UKufDNhlk?si=nximSficNW6JXBZ9"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

export default Pages108;