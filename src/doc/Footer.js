const DD = [
    { id: 1, tit: "ABOUT", des: "", link: "" },
    { id: 2, tit: "SHOPPING", des: "", link: "" },
    { id: 3, tit: "LEGAL", des: "", link: "" },
    { id: 4, tit: "FOLLOW US", des: "", link: "" },
];
const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <h2>
                    <a href="#!"></a>
                </h2>
                <dd>{DD.map((it, idx)=>{
                    <dl key={idx}>
                        <a href={it.link}>{it.tit}</a>
                        
                    </dl>
                })}</dd>
            </div>
        </footer>
    );
};

export default Footer;
