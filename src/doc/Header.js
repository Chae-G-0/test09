const MENU = [
    {
        id: 1,
        content: "menu01",
        link: "/1",
        submenu: [
            {
                content: "smenu01",
                link: '/1'
            },
            {
                content: "smenu01",
                link: '/1'
            },
            {
                content: "smenu01",
                link: '/1'
            },
        ]
    },
    {
        id: 2,
        content: "menu02",
        link: "/2",
        submenu: [
            {
                content: "smenu02",
                link: '/1'
            },
            {
                content: "smenu02",
                link: '/1'
            },
            {
                content: "smenu02",
                link: '/1'
            },
        ]
    },
    {
        id: 3,
        content: "menu03",
        link: "/3",
        submenu: [
            {
                content: "smenu03",
                link: '/1'
            },
            {
                content: "smenu03",
                link: '/1'
            },
            {
                content: "smenu03",
                link: '/1'
            },
        ]
    },

];

const Header = () => {
    return (
        <header className="Header">
            <h1>
                <a href="">LOGO</a>
            </h1>
            <nav className="GNB">
                <ul>{MENU.map((it, idx)=>(
                    <li>

                    </li>
                ))}</ul>
            </nav>
        </header>
    );
};

export default Header;
