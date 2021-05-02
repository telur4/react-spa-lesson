import React from 'react';
import Slide from './Content/Slide';

export default class MainVisual extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* メインビジュアル */}
            <div className="py-4">
                <div className="container">
                    {/* カルーセル外枠 */}
                    <div id="main_visual" className="carousel slide" data-ride="carousel">

                        {/* インジケーター */}
                        <ol className="carousel-indicators">
                            <li data-target="#main_visual" data-slide-to={0} className="active" />
                            <li data-target="#main_visual" data-slide-to={1} />
                            <li data-target="#main_visual" data-slide-to={2} />
                        </ol>
                        {/* /インジケーター */}

                        {/* カルーセル内枠 */}
                        <div className="carousel-inner">
                            <Slide
                                active={true}
                                img_src="./img/slide_01.jpg"
                                img_alt="コーヒー写真"
                                title="Mr. M COFFEEのこだわり"
                                text="店主が世界中のコーヒー豆を厳選し、コーヒー豆の種類に合わせ、心を込めて焙煎、抽出しております。"
                            />
                            <Slide
                                active={false}
                                img_src="./img/slide_02.jpg"
                                img_alt="ランチ写真"
                                title="Mr. M COFFEEのメニュー"
                                text="コーヒーはもちろん、モーニングやワンプレートランチ、季節のスイーツなどもご好評いただいております。"
                            />
                            <Slide
                                active={false}
                                img_src="./img/slide_03.jpg"
                                img_alt="店内写真"
                                title="Mr. M COFFEEの空間"
                                text="座り心地の良いソファと丁度良い高さのテーブル。くつろぎの空間を満喫してください。"
                            />
                        </div>
                        {/* /カルーセル内枠 */}

                        {/* コントローラー */}
                        <a href="#main_visual" className="carousel-control-prev" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">前に戻る</span>
                        </a>
                        <a href="#main_visual" className="carousel-control-next" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">次に進む</span>
                        </a>
                        {/* /コントローラー */}
                    </div>
                    {/* /カルーセル外枠 */}
                </div>
            </div>
            {/* /メインビジュアル */}
            </>
        );
    }
}