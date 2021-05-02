import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Footer extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* フッター */}
            <footer className="py-4 bg-dark text-light">
                <div className="container text-center">
                    {/* ナビゲーション */}
                    <ul className="nav justify-content-center mb-3">
                        <li className="nav-item">
                            <HashLink to="/#" className="nav-link">Top</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink to="/#news" className="nav-link">News</HashLink>
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
                        <li className="nav-item">
                            <HashLink to="/#shop" className="nav-link">Information</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink to="/contact#" className="nav-link">Contact</HashLink>
                        </li>
                    </ul>
                    {/* /ナビゲーション */}
                    <button type="button" className="back-to-top">
                        <span className="label">ページの先頭へ戻る</span>
                    </button>
                    <p>
                        <small>Copyright ©2020 Mr. M COFFEE, All Rights Reserved.</small>
                    </p>
                </div>
            </footer>
            {/* /フッター */}
            </>
        );
    }
}