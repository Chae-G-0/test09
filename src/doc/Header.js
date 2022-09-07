const MENU = [
    {
        id: 1,
        content: "menu01",
    },
    {
        id: 2,
        content: "menu02",
    },
    {
        id: 3,
        content: "menu03",
    },
];

const Header = () => {
    return (
        <header className="Header">
            <h1>
                <a href="">LOGO</a>
            </h1>
            <nav className="GNB">
                {/* <ul>{MENU.map((it, idx)=>(

                ))}</ul> */}
            </nav>
        </header>
    );
};

export default Header;
