import React from 'react';
import img1 from "../../../../assets/img/талас1.jpg"
import img2 from "../../../../assets/img/талас2.jpg"
import img3 from "../../../../assets/img/талас3.jpg"
import img4 from "../../../../assets/img/талас4.jpg"
import img6 from "../../../../assets/img/талас6.jpg"
import img7 from "../../../../assets/img/талас7.jpg"
const Pages81 = () => {
    const image=[
        {id:1,img:img1 },
        {id:2,img:img2 },
        {id:3,img:img3 },
        {id:4,img:img4 },
        {id:6,img:img6 },
        {id:7,img:img7 },
    ]
    return (
        <div className="pages1">
            <div className="page-number"><h6>81 бет</h6></div>
            <h1> Талас облусунун администрациялык - экономикалык картасы</h1>

<div>

    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209534.65608441344!2d72.07016074728925!3d42.52526638770606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a15c82094a401b%3A0xef5a29b84864c140!2z0KLQsNC70LDRgQ!5e0!3m2!1sru!2skg!4v1702266438832!5m2!1sru!2skg"
        width="900" height="450"  loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

</div>

            <div className="carousel w-full">
                {image.map((el) => (
                    <div key={el.id} id={`slide${el.id}`} className="carousel-item relative w-[100%] h-[480px]">
                        <img src={el.img} alt="" className="w-full m-3" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1  top-1/2">
                            <a href={`#slide${el.id - 1}`} className="btn btn-circle bg-gray-700">
                                ❮
                            </a>
                            <a href={`#slide${el.id + 1}`} className="btn btn-circle bg-gray-700">
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <i> Талас облусу</i>
        </div>
    );
};

export default Pages81;