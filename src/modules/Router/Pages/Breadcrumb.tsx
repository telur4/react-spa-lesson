import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Breadcrumb extends React.Component {
    render(): Element | any {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <HashLink to="/">Top</HashLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
            </>
        );
    }
}