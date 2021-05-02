import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Header extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* ヘッダー */}
            <header className="py-4">
                <div className="container text-center">
                    <h1>
                        <HashLink to="/">
                            <img src="./img/logo.png" alt="カフェ MR. M COFFEE" />
                        </HashLink>
                    </h1>
                </div>
            </header>
            {/* /ヘッダー */}
            </>
        );
    }
}