const BEST = [
    { id: 1, tit: "OLD SKOOL 올드스쿨", price: "79,000 원", link: "#!" },
    { id: 2, tit: "코어클래식 ERA 에라", price: "69,000 원", link: "#!" },
    { id: 3, tit: "센트리 OLD SKOOL 올드스쿨", price: "99,000 원", link: "#!" },
    { id: 4, tit: "스케이트 Era 에라", price: "79,000 원", link: "#!" },
];

const MainBest = () => {
    return (
        <section className="MainBest sc">
            <h2>BEST SELLER</h2>
            <div className="inner">
                {BEST.map((best) => {
                    return (
                        <figure key={best.id}>
                            <a href={best.link}>
                                <img src={process.env.PUBLIC_URL + "/img/best0" + best.id + ".jpg"} alt="" />
                            </a>
                            <div className="tit">
                                <h3>
                                    <a href={best.link}>{best.tit}</a>
                                </h3>
                                <p>
                                    <a href={best.link}>{best.price}</a>
                                </p>
                            </div>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

export default MainBest;
