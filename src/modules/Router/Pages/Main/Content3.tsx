import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Panel from './Content/Panel';

export default class Content3 extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* コンテンツ03 */}
            <div className="py-4">
                <section id="menu">
                    <div className="container">
                        <h3 className="mb-3">Menu</h3>
                        <p>カフェ Mr. M COFFEEのメニューです。掲載していない季節限定メニューはMr. M COFFEEの<HashLink to="/">ブログ</HashLink>にて紹介しています。</p>
                        {/* タブ型ナビゲーション */}
                        <div className="nav nav-tabs" id="tab-menus" role="tablist">
                            {/* タブ01 */}
                            <a href="#panel-menu01" className="nav-item nav-link active" id="tab-menu01" data-toggle="tab" role="tab" aria-controls="panel-menu01" aria-selected="true">コーヒー</a>
                            {/* タブ02 */}
                            <a href="#panel-menu02" className="nav-item nav-link" id="tab-menu02" data-toggle="tab" role="tab" aria-controls="panel-menu01" aria-selected="true">モーニング</a>
                            {/* タブ03 */}
                            <a href="#panel-menu03" className="nav-item nav-link" id="tab-menu03" data-toggle="tab" role="tab" aria-controls="panel-menu01" aria-selected="true">ランチ</a>
                            {/* タブ04 */}
                            <a href="#panel-menu04" className="nav-item nav-link" id="tab-menu04" data-toggle="tab" role="tab" aria-controls="panel-menu01" aria-selected="true">ケーキ</a>
                        </div>
                        {/* /タブ型ナビゲーション */}

                        {/* タブパネル */}
                        <div className="tab-content" id="panel-menus">
                            <Panel
                                id="menu01"
                                title="COFFEE"
                                active={true}
                                content={[
                                    ["M ブレンド", 390],
                                    ["アイスコーヒー", 430],
                                    ["ブラジルシングル", 430],
                                    ["エスプレッソ", 300],
                                    ["カプチーノ", 430],
                                ]}
                                img_src="./img/coffee.jpg"
                                img_alt="コーヒー"
                            />
                            <Panel
                                id="menu02"
                                title="MORNNING"
                                active={false}
                                content={[
                                    ["トーストセット", 450],
                                    ["トーストゆで卵セット", 500],
                                    ["フレンチトーストセット", 600],
                                    ["野菜たっぷりスープセット", 650],
                                ]}
                                img_src="./img/morning.jpg"
                                img_alt="モーニング"
                            />
                            <Panel
                                id="menu03"
                                title="LUNCH"
                                active={false}
                                content={[
                                    ["ワンプレートランチ", 1000],
                                    ["Mixサンド", 650],
                                    ["ハンバーグサンド", 750],
                                    ["野菜たっぷりスープ", 650],
                                ]}
                                img_src="./img/lunch.jpg"
                                img_alt="ランチ"
                            />
                            <Panel
                                id="menu04"
                                title="CAKE"
                                active={false}
                                content={[
                                    ["シフォンケーキ", 400],
                                    ["チーズケーキ", 350],
                                    ["本日のケーキ", 400],
                                    [">季節のパウンドケーキ", 400],
                                ]}
                                img_src="./img/cake.jpg"
                                img_alt="ケーキ"
                            />
                        </div>
                        {/* /タブパネル */}
                    </div>
                </section>
            </div>
            {/* /コンテンツ03 */}
            </>
        );
    }
}