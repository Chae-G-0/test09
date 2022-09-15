import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "CLASSIC" },
    { id: 2, content: "ERA" },
    { id: 3, content: "OLDSKOOL" },
    { id: 4, content: "SLIP-ON" },
    { id: 5, content: "AUTHENTIC" },
];

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0);
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        afterChange: (index) => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <section className="MainVisual">
            <Slider {...setting} ref={mainSlide}>
                {SLIDE.map((slide, idx) => {
                    return (
                        <figure key={slide.id} className={"itm0" + slide.id + (idx === IDX ? " on" : "")}>
                            <div className="inner">
                                <h2>{slide.content}</h2>
                            </div>
                        </figure>
                    );
                })}
            </Slider>
            <div className="arrows">
                
            </div>
            <ul className="slideTab">
                {SLIDE.map((dots, idx) => {
                    return (
                        <li key={dots.id} className={idx === IDX ? " on" : ""} onClick={() => mainSlide.current.slickGoTo(idx)}>
                            <img src={process.env.PUBLIC_URL + "/img/main0" + dots.id + ".png"} alt="" />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default MainVisual;
