import React from 'react';
import Header from './Pages/Header';
import Nav from './Pages/Nav';
import Breadcrumb from './Pages/Breadcrumb';
import ContactMain from './Pages/ContactMain';
import Footer from './Pages/Footer';

export default class Contact extends React.Component {
    render(): Element | any {
        return (
            <>
            <Header />
            <Nav />
            <Breadcrumb />
            <ContactMain />
            <Footer />
            </>
        );
    }
}