const MENU = [
    {
        id: 1,
        menu: "NEW",
        link: "/",
    },
    {
        id: 2,
        menu: "OLDSKOOL",
        link: "/",
    },
    {
        id: 3,
        menu: "AUTHENTIC",
        link: "/",
    },
    {
        id: 4,
        menu: "SLIP-ON",
        link: "/",
    },
    {
        id: 5,
        menu: "ERA",
        link: "/",
    },
    {
        id: 6,
        menu: "CLASSIC",
        link: "/",
    },
];

const Header = () => {
    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <a href=""></a>
                </h1>
                <nav className="Gnb">
                    <ul>
                        {MENU.map((it, idx) => (
                            <li key={idx}>
                                <a href={it.link}>{it.menu}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
