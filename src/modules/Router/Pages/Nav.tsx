import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Nav extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* ナビゲーションバー */}
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                {/* サブコンポーネント */}
                <div className="container">
                    {/* ブランド */}
                    <HashLink to="/#" className="navbar-brand">Mr. M COFFEE</HashLink>
                    {/* 切り替えボタン */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* ナビゲーション */}
                    <div className="collapse navbar-collapse" id="navbar-content">
                        {/* ナビゲーションメニュー */}
                        {/* 左側メニュー：トップページの各コンテンツへのリンク */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <HashLink to="/#" className="nav-link">Top <span className="sr-only">(current)</span></HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#about" className="nav-link">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#menu" className="nav-link">Menu</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to="/#coupon" className="nav-link">Coupon</HashLink>
                            </li>
                            {/* ドロップダウン */}
                            <li className="nav-item dropdown">
                                <HashLink
                                    to="/"
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Information
                                </HashLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <HashLink to="/#shop" className="dropdown-item">Shop</HashLink>
                                    <HashLink to="/#access" className="dropdown-item">Access</HashLink>
                                </div>
                            </li>
                        </ul>
                        {/* 右側メニュー：Contactページへのリンク */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <HashLink to="/contact#" className="nav-link btn btn-info">Contact</HashLink>
                            </li>
                        </ul>
                        {/* /ナビゲーションメニュー */}
                    </div>
                    {/* /ナビゲーション */}
                </div>
                {/* /サブコンポーネント */}
            </nav>
            {/* /ナビゲーションバー */}
            </>
        );
    }
}