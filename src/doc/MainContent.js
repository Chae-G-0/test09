const CONTENT = [
    { id: 1, title: "STORE", dec: "", link: "/" },
    { id: 2, title: "WOMEN", dec: "", link: "/" },
    { id: 3, title: "MEN", dec: "", link: "/" },
];

const MainContent = () => {
    return (
        <section className="MainContent sc">
            <h2>나만의 커스텀 스케이트 슈즈를 만들어보세요</h2>
            <p>클래식 스타일에 내구성과 쿠셔닝을 강화했습니다 업그레이드 된 퍼포먼스를 경험해보세요</p>
            <div className="inner">
                {CONTENT.map((content) => {
                    return (
                        <figure key={content.id}>
                            <div className="box">
                                <img src={process.env.PUBLIC_URL + "/img/maincontent0" + content.id + ".jpg"} alt="" />
                            </div>
                            <div className="tit">
                                <a href={content.link}>{content.title}</a>
                            </div>
                            <a href={content.link} className="cbtn">
                                MORE
                            </a>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

export default MainContent;
