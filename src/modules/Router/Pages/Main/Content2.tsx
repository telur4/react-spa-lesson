import React from 'react';
import Card from './Content/Card';
import Modal from './Content/Modal';
import { HashLink } from 'react-router-hash-link';

export default class Content2 extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* コンテンツ02 */}
            <div className="py-4 bg-light">
                <section id="about">
                    <div className="container">
                        {/* 上段 */}
                        <div className="row mb-4">
                            <div className="col-md-8 mb-3">
                                <h3 className="mb-3">Mr. M COFFEEについて</h3>
                                <p>Mr. M COFFEE（ミスターエムコーヒー）は、店主が焙煎したこだわりのコーヒーを最高の空間とおもてなしで提供する自家焙煎のカフェです。店主が世界中のコーヒー豆を厳選し、コーヒー豆の種類にあわせ、心を込めて焙煎、抽出しております。また、女性にちょうど良いボリュームのワンプレートランチ、季節のスイーツなどもご好評いただいております。</p>
                                <p>最高に美味しい一杯のコーヒーを、最高に心地よい空間で。おいしいコーヒーを飲みながら、ゆったりとした素敵な時間を過ごしに、ぜひMr. M COFFEEにお越しください。</p>
                                <HashLink to="#menu" className="btn btn-info">メニューを見る</HashLink>
                                <HashLink to="#shop" className="btn btn-info">店舗情報を見る</HashLink>
                            </div>
                            <div className="col-md-4">
                                <img src="./img/about01.jpg" alt="店主が焙煎したこだわりのコーヒー" className="img-fluid" />
                            </div>
                        </div>
                        {/* /上段 */}

                        {/* 下段 */}
                        <div className="row">
                            <Card img_src="./img/about02-thumb.jpg" card_title="くつろぎの空間" data_target="#modal01" />

                            <Card img_src="./img/about03-thumb.jpg" card_title="雑貨コーナー" data_target="#modal02" />

                            <Card img_src="./img/about04-thumb.jpg" card_title="キッズドリンク" data_target="#modal03" />
                        </div>
                        {/* /下段 */}

                        {/* モーダル */}
                        <Modal
                            id="modal01"
                            title="くつろぎの空間"
                            img_src="./img/about02.jpg"
                            text="店主がこだわった家具たちです。座り心地の良いソファと丁度良い高さのテーブル。くつろぎの空間を満喫してください。"
                        />
                        <Modal
                            id="modal02"
                            title="雑貨コーナー"
                            img_src="./img/about03.jpg"
                            text="店内には作家さんの手作り雑貨を展示、販売しております。委託販売をご希望の作家さんはお問い合わせフォームよりお問い合わせください。"
                        />
                        <Modal
                            id="modal03"
                            title="キッズドリンク"
                            img_src="./img/about04.jpg"
                            text="オレンジやアップル、好きなジュースを選んで自分でグラスに注ぐ、子供たちに大人気のキッズドリンクコーナーです。"
                        />
                        {/* /モーダル */}
                    </div>
                </section>
            </div>
            {/* /コンテンツ02 */}
            </>
        );
    }
}