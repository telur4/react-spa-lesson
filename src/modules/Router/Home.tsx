import React from 'react';
import Header from './Pages/Header';
import Nav from './Pages/Nav';
import HomeMain from './Pages/HomeMain';
import Footer from './Pages/Footer';

export default class Home extends React.Component {
    render(): Element | any {
        return (
            <>
            <Header />
            <Nav />
            <HomeMain />
            <Footer />
            </>
        );
    }
}