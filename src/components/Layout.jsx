import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/create">Создать пост</a>
                    </li>
                </ul>
            </nav>

            <hr />

            {children}

            <footer>
                <p>Это подвал</p>
            </footer>
        </div>
    );
};

export default Layout;