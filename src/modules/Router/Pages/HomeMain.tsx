import React from 'react';
import MainVisual from './Main/MainVisual';
import Content1 from './Main/Content1';
import Content2 from './Main/Content2';
import Content3 from './Main/Content3';
import Content4 from './Main/Content4';
import Content5 from './Main/Content5';

export default class HomeMain extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* メイン */}
            <main>
                <MainVisual />
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Content5 />
            </main>
            {/* /メイン */}
            </>
        );
    }
}